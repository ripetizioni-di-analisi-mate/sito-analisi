---
titolo: Compounding, annuities and amortization
sommario: How a capital grows under simple, compound and continuous compounding, how amounts are brought to the same date with present value and equivalent rates, how annuities and amortization schedules are valued, and how an investment is assessed with NPV and IRR.
---

## Simple interest and compound interest

:::definizione{#capitale-montante titolo="Principal, interest and accumulated value"}
Whoever lends a **principal** $C$ today receives after a time $t$, measured in years, a larger sum, the **accumulated value** $M$. The difference $I = M - C$ is the **interest**, that is, the compensation for giving up the use of the money. The **annual interest rate** $i$ is the interest earned in one year by a principal of $1$ euro, and it is written as a decimal number or as a percentage; for example $i = 0.05$ is the same as $i = 5\%$. The **accumulation factor** is the ratio $\dfrac{M}{C}$, that is, the value after the time $t$ of $1$ euro invested today; the law that expresses it as a function of $t$ is called the **compounding regime**. The two regimes used in practice differ in how they treat the interest already earned.
:::

:::definizione{#interesse-semplice titolo="Simple interest"}
Under **simple interest** the interest is proportional to the principal and to the time, $I = C\,i\,t$, so the accumulated value is
$$
M = C\,(1 + i\,t), \qquad t \geq 0 .
$$
The interest earned does not itself earn interest, therefore every year the principal receives the same interest $C\,i$ and the accumulated value is a linear function of time, with slope $C\,i$. It is used for transactions lasting less than a year. A principal of $2000$ euros at $4\%$ for $3$ years earns interest of $2000 \cdot 0.04 \cdot 3 = 240$ euros, so the accumulated value is $2240$ euros; for $9$ months one sets $t = \dfrac{9}{12} = \dfrac{3}{4}$, and the interest is $60$ euros.
:::

:::definizione{#interesse-composto titolo="Compound interest"}
Under **compound interest** the interest earned at the end of each year is added to the principal and earns interest in the following years. At the end of each year the accumulated value is therefore multiplied by $1 + i$, and after $n$ years it equals $C\,(1 + i)^{n}$, that is, the term of a geometric progression with common ratio $1 + i$. The formula extends to every time $t \geq 0$:
$$
M = C\,(1 + i)^{t} .
$$
The accumulated value is an exponential function of time. With $C = 2000$ euros and $i = 4\%$, after $3$ years one has $M = 2000 \cdot 1.04^{3} = 2249.73$ euros, that is, $9.73$ euros more than under simple interest, and the difference is due to the interest earned by the interest of the first two years.

::grafico{f="1000*1.1^x+0*sqrt(x);1000*(1+0.1*x)+0*sqrt(x)" punti="1,1100,pieno" xmin=-1 xmax=5 ymin=-200 ymax=1800 nomi="t,M" legenda="M = 1000 \cdot 1.1^{t};M = 1000\,(1 + 0.1\,t)" titolo="Accumulated value of $1000$ euros at $10\%$ per year under compound and simple interest: the two accumulated values coincide for $t = 1$"}

:::

:::teorema{#confronto-regimi titolo="Comparison of the two regimes"}
Let $i > 0$. Then
$$
\begin{cases}
(1 + i)^{t} < 1 + i\,t & \text{if } 0 < t < 1 , \\[4pt]
(1 + i)^{t} > 1 + i\,t & \text{if } t > 1 ,
\end{cases}
$$
and the two accumulation factors coincide for $t = 0$ and for $t = 1$. The result follows from the convexity of the exponential function, covered in the topic on curve sketching and optimization; indeed the graph of $(1 + i)^{t}$ lies below the line through the points with abscissas $0$ and $1$ between these two points, and above it outside. For durations shorter than a year simple interest therefore gives the larger accumulated value. With $1000$ euros at $10\%$ for six months one obtains $1050$ euros under simple interest and $1000 \cdot \sqrt{1.1} \approx 1048.81$ euros under compound interest.
:::

## Present value and discount

:::definizione{#valore-attuale titolo="Present value"}
The **present value** $V$ of an amount $M$ available in $t$ years is the principal that, invested today, has accumulated value $M$ after the time $t$. It is obtained by solving the accumulated value formula for $C$:
$$
V = M\,(1 + i)^{-t} \quad \text{(compound interest)},
\qquad
V = \frac{M}{1 + i\,t} \quad \text{(simple interest)} .
$$
The passage from $M$ to $V$ is called **discounting**, and the number $v = \dfrac{1}{1 + i}$ is the annual **discount factor**, with which $V = M\,v^{t}$. Present value is used to compare amounts available at different dates, by bringing all of them back to today. At $3\%$ compound, $5000$ euros available in $4$ years are worth $5000 \cdot 1.03^{-4} \approx 4442.44$ euros today. Since $0 < v < 1$, the present value decreases as the due date moves further away and tends to $0$ as $t \to +\infty$.

::grafico{f="1000*1.05^(-x)+0*sqrt(x);1000*1.1^(-x)+0*sqrt(x)" xmin=-4 xmax=36 ymin=-125 ymax=1125 nomi="t,V" legenda="V = 1000 \cdot 1.05^{-t};V = 1000 \cdot 1.1^{-t}" titolo="Present value of $1000$ euros available in $t$ years, at $5\%$ and at $10\%$: a higher rate corresponds to a lower present value"}

:::

:::definizione{#sconto titolo="Discount and discount rate"}
The **discount** is the difference $D = M - V$ between the amount at maturity and its present value; it is the interest seen by whoever pays in advance. The **annual discount rate** $d$ is the discount on $1$ euro due in one year, so
$$
d = 1 - v = 1 - \frac{1}{1 + i} = \frac{i}{1 + i} .
$$
Under **commercial discount**, used for short transactions, the discount is proportional to the amount and to the time, $D = M\,d\,t$, so
$$
V = M\,(1 - d\,t), \qquad 0 \leq t < \frac{1}{d} .
$$
The restriction on $t$ keeps the present value positive. A bill of exchange of $5000$ euros maturing in $9$ months, discounted today at the commercial rate $d = 4\%$, gives a present value of $5000 \left( 1 - 0.04 \cdot \dfrac{3}{4} \right) = 4850$ euros. With rational discount, that is, discounting under simple interest, and the rate $i = 4\%$ one would instead obtain $\dfrac{5000}{1.03} \approx 4854.37$ euros.
:::

:::teorema{#tempo-e-tasso titolo="Unknown time and rate"}
Under compound interest, given $C$, $M$ with $M > C > 0$ and the rate $i > 0$, the time needed for $C$ to become $M$ is
$$
t = \frac{\ln \dfrac{M}{C}}{\ln(1 + i)} ;
$$
given $C$, $M$ and $t > 0$, the rate that links them is
$$
i = \left( \frac{M}{C} \right)^{\frac{1}{t}} - 1 .
$$
The formulas follow from $(1 + i)^{t} = \dfrac{M}{C}$, by taking the logarithm of both sides in the first case and the $t$-th root in the second, as in the topic on real functions and economic models. For example $1000$ euros at $4\%$ become $1500$ euros after $t = \dfrac{\ln 1.5}{\ln 1.04} \approx 10.34$ years, and a principal that grows from $1000$ to $1210$ euros in $2$ years has been invested at the rate $\sqrt{1.21} - 1 = 10\%$.
:::

## Equivalent rates and nominal rate

:::definizione{#tassi-equivalenti titolo="Equivalent rates"}
The year is divided into $k$ equal periods (for example $k = 2$ for half-years, $k = 4$ for quarters, $k = 12$ for months). The periodic rate $i_k$ is **equivalent** to the annual rate $i$ if a principal invested for one year produces the same accumulated value in the two cases, that is, if
$$
(1 + i_k)^{k} = 1 + i .
$$
In other words, compounding $k$ times a year at the rate $i_k$ or once at the rate $i$ makes no difference. Solving gives the conversion formulas
$$
i_k = (1 + i)^{\frac{1}{k}} - 1,
\qquad
i = (1 + i_k)^{k} - 1 .
$$
The annual rate of $8.16\%$ is equivalent to the semiannual rate $i_2 = \sqrt{1.0816} - 1 = 4\%$. The monthly rate equivalent to $6\%$ per year is $1.06^{\frac{1}{12}} - 1 \approx 0.487\%$, a little less than $\dfrac{6\%}{12} = 0.5\%$. Under simple interest, instead, equivalent rates are proportional, $i_k = \dfrac{i}{k}$, because the accumulated value is linear in time.
:::

:::definizione{#tasso-nominale titolo="Nominal rate convertible k times"}
The **nominal annual rate convertible** $k$ times is the number $j_k = k\,i_k$, that is, the periodic rate multiplied by the number of periods. It is the rate stated in contracts (the APR), while the effective annual rate $i$ (the EAR) is the equivalent one:
$$
i = \left( 1 + \frac{j_k}{k} \right)^{k} - 1 .
$$
Since the expansion of $\left( 1 + \dfrac{j_k}{k} \right)^{k}$ by the binomial theorem contains, besides $1 + j_k$, other positive terms, for $k \geq 2$ the effective rate is greater than the nominal rate. An account that pays $12\%$ nominal with monthly compounding applies $1\%$ every month, so the effective rate is $1.01^{12} - 1 \approx 12.68\%$. The nominal rate of $8\%$ convertible quarterly corresponds to the effective rate $1.02^{4} - 1 \approx 8.24\%$.
:::

## Continuous compounding

:::richiamo{titolo="Standard limits"}
For every real number $r$
$$
\lim_{x \to +\infty} \left( 1 + \frac{r}{x} \right)^{x} = e^{r} .
$$
:::

::::teorema{#capitalizzazione-continua titolo="Continuous compounding"}
Let $\delta > 0$ be a nominal annual rate, and compound $k$ times a year at the periodic rate $\dfrac{\delta}{k}$. As $k$ increases, the accumulated value of a principal $C$ after $t$ years tends to
$$
M = C\,e^{\delta t} .
$$
This law is called **continuous compounding**, and $\delta$ is the **force of interest**. Continuous compounding is equivalent to compound interest at the annual rate $i$ when $e^{\delta} = 1 + i$, that is,
$$
\delta = \ln(1 + i),
\qquad
i = e^{\delta} - 1 .
$$
The nominal rate of $12\%$ gives, after one year, $1120$ euros for $1000$ euros compounded once, $1126.83$ euros compounded every month and $1000\,e^{0.12} \approx 1127.50$ euros compounded continuously. The annual rate of $5\%$ corresponds to the force $\delta = \ln 1.05 \approx 4.879\%$. Continuous compounding is used in theoretical models because the function $e^{\delta t}$ is easy to differentiate and to integrate, as in the present value of a continuous flow covered in the topic on integral calculus and economic applications.

::grafico{punti="1,1120,pieno;2,1123.6,pieno;3,1124.864,pieno;4,1125.509,pieno;5,1125.882,pieno;6,1126.162,pieno;7,1126.351,pieno;8,1126.493,pieno;9,1126.603,pieno;10,1126.691,pieno;11,1126.763,pieno;12,1126.825,pieno" asintoti="y=1127.497" xmin=-2 xmax=14 ymin=1116 ymax=1130 nomi="k,M" titolo="Accumulated value after one year of $1000$ euros at the nominal rate of $12\%$ compounded $k$ times: the values increase with $k$ and approach $1000\,e^{0.12} \approx 1127.50$ euros"}

:::dimostrazione
The idea is to write the accumulated value after $t$ years as a power of an expression to which the standard limit applies. After $t$ years there are $k\,t$ periods, therefore the accumulated value is
$$
C \left( 1 + \frac{\delta}{k} \right)^{k t} = C \left[ \left( 1 + \frac{\delta}{k} \right)^{k} \right]^{t} .
$$
By the standard limit with $r = \delta$ the expression in square brackets tends to $e^{\delta}$ as $k \to +\infty$, and the function $y \mapsto y^{t}$ is continuous, so the accumulated value tends to $C\,(e^{\delta})^{t} = C\,e^{\delta t}$. Equivalence with the annual rate $i$ requires the two accumulated values after one year to coincide, that is, $e^{\delta} = 1 + i$; taking the logarithm gives $\delta = \ln(1 + i)$, and then $e^{\delta t} = (1 + i)^{t}$ for every $t$.
:::
::::

## Financial equivalence and average due date

:::definizione{#equivalenza-finanziaria titolo="Financial equivalence"}
Two amounts, $C_1$ available at time $t_1$ and $C_2$ available at time $t_2$, are **financially equivalent** at the rate $i$, under compound interest, if they have the same present value:
$$
C_1\,(1 + i)^{-t_1} = C_2\,(1 + i)^{-t_2} .
$$
More generally, two sets of amounts are equivalent if the sums of their present values coincide. Equivalence makes it possible to replace one payment plan with another with no advantage to either party. At $5\%$, $1000$ euros in one year are equivalent to $1050$ euros in two years, because $1000 \cdot 1.05^{-1} = 1050 \cdot 1.05^{-2}$.
:::

::::teorema{#equivalenza-data titolo="Independence of the valuation date"}
Under compound interest, if two sets of amounts have the same value at a date $\tau$, then they have the same value at any other date.

For this reason equivalence can be defined with present value alone, and in problems one can choose the most convenient comparison date, for example the due date of the last payment, and avoid negative exponents.

:::dimostrazione
The idea is that moving all the amounts from one date to another means multiplying them by the same factor. The value at $\tau$ of an amount $C_h$ available at time $t_h$ is $C_h\,(1 + i)^{\tau - t_h}$, both for $t_h \leq \tau$ (accumulated value) and for $t_h > \tau$ (present value). One has
$$
\sum_h C_h\,(1 + i)^{\tau' - t_h} = (1 + i)^{\tau' - \tau} \sum_h C_h\,(1 + i)^{\tau - t_h} ,
$$
so the value at $\tau'$ of each set is the value at $\tau$ multiplied by $(1 + i)^{\tau' - \tau}$. If the values at $\tau$ coincide, the values at $\tau'$ coincide as well.
:::
::::

:::attenzione
Under simple interest equivalence *depends* on the chosen date. At $10\%$ simple, $1000$ euros today and $1100$ euros in one year have the same value at date $1$, because $1000 \cdot (1 + 0.1) = 1100$. At date $2$, instead, the first amount is worth $1000 \cdot (1 + 0.2) = 1200$ euros and the second $1100 \cdot (1 + 0.1) = 1210$ euros, so the two amounts are no longer equivalent.
:::

:::definizione{#scadenza-media titolo="Average due date"}
Let $C_1, \dots, C_n$ be positive amounts available at times $t_1, \dots, t_n$, with sum $S = C_1 + \dots + C_n$. The **average due date** is the time $t^*$ at which the single payment of $S$ is equivalent to the set of payments. Under compound interest the condition is
$$
S\,(1 + i)^{-t^*} = \sum_{h=1}^{n} C_h\,(1 + i)^{-t_h} ,
$$
and taking the logarithm gives
$$
t^* = \frac{\ln S - \ln \displaystyle\sum_{h=1}^{n} C_h\,(1 + i)^{-t_h}}{\ln(1 + i)} .
$$
It is used to replace several debts with a single payment of the same sum. With $2000$ euros due in one year, $3000$ euros in three years and $i = 5\%$, the present value of the two debts is $2000 \cdot 1.05^{-1} + 3000 \cdot 1.05^{-3} \approx 4496.27$ euros, so
$$
t^* = \frac{\ln 5000 - \ln 4496.27}{\ln 1.05} \approx 2.18 \text{ years} .
$$
:::

:::teorema{#scadenza-media-aritmetica titolo="Average due date with commercial discount"}
If the amounts are discounted with commercial discount at a rate $d$, with all times less than $\dfrac{1}{d}$, the average due date is the arithmetic mean of the times weighted by the amounts,
$$
t^* = \frac{C_1 t_1 + \dots + C_n t_n}{C_1 + \dots + C_n} ,
$$
and it does not depend on $d$. Indeed the condition $S\,(1 - d\,t^*) = \sum_h C_h\,(1 - d\,t_h)$ reduces to $S\,d\,t^* = d \sum_h C_h\,t_h$, because $S = \sum_h C_h$, and one divides by $S\,d$. In the previous example the weighted mean is $\dfrac{2000 \cdot 1 + 3000 \cdot 3}{5000} = 2.2$ years, a value close to the one under compound interest, and the formula is often used as an approximation.
:::

## Annuities

:::definizione{#rendita titolo="Annuity"}
An **annuity** is a sequence of amounts, the **payments**, available at regular intervals. Here the payments are constant, equal to $R$, and the period is the one to which the rate $i$ refers. The annuity is:

- **immediate** if each payment is made at the end of its period, **due** if it is made at the beginning;
- **non-deferred** if the first period begins today, **deferred** by $p$ periods if it begins in $p$ periods;
- **temporary** if there are $n$ payments, a **perpetuity** if they never end.

The **present value** of the annuity is the sum of the present values of the payments, the **accumulated value** is the sum of their values at the end of the last period. A rent paid at the beginning of each month is an annuity due; the installments of a mortgage, paid at the end of each period, form an annuity immediate.
:::

:::richiamo{titolo="Sum of the terms of a geometric progression"}
If $q \neq 1$, then $a_1 + a_1 q + \dots + a_1 q^{\,n-1} = a_1\,\dfrac{1 - q^{\,n}}{1 - q}$.
:::

::::teorema{#rendita-posticipata titolo="Annuity immediate"}
Let $i > 0$ and $n \geq 1$. The present value and the accumulated value of the annuity immediate of $n$ payments equal to $R$ are
$$
V = R\,a_{\overline{n}|i},
\qquad
M = R\,s_{\overline{n}|i},
\qquad
\text{with} \quad
a_{\overline{n}|i} = \frac{1 - (1 + i)^{-n}}{i},
\quad
s_{\overline{n}|i} = \frac{(1 + i)^{n} - 1}{i} .
$$
The numbers $a_{\overline{n}|i}$ and $s_{\overline{n}|i}$ (read "$a$ angle $n$ at rate $i$") are the present value and the accumulated value of the annuity with payment $1$, and $s_{\overline{n}|i} = (1 + i)^{n}\,a_{\overline{n}|i}$. Ten annual payments of $1000$ euros in arrears at $4\%$ have present value $1000\,a_{\overline{10}|0.04} \approx 8110.90$ euros and accumulated value $1000\,s_{\overline{10}|0.04} \approx 12\,006.11$ euros, as in the example of periodic deposits in the topic on sequences, progressions and series.

::grafico{assi=0 uguale=1 linee="-0.4,0 6.2,0" vettori="1,0,1,1.4,R;2,0,2,1.4,R;3,0,3,1.4,R;4,0,4,1.4,R;5,0,5,1.4,R" unicolore=1 punti="0,0,pieno;5,0,pieno" etichette="0,-0.45,0;1,-0.45,1;2,-0.45,2;3,-0.45,3;4,-0.45,4;5,-0.45,n;0,0.45,V;5.4,0.35,M" xmin=-1 xmax=7 ymin=-1 ymax=2 titolo="Annuity immediate: the $n$ payments $R$ are made at the end of periods $1, 2, \dots, n$; the present value $V$ refers to time $0$, the accumulated value $M$ to time $n$"}

:::dimostrazione
The idea is to recognize the present value as the sum of a geometric progression. The payment made at time $h$ is worth $R\,v^{h}$ today, with $v = (1 + i)^{-1}$, so
$$
V = R\,v + R\,v^{2} + \dots + R\,v^{n} .
$$
This is the sum of $n$ terms of a geometric progression with first term $R\,v$ and common ratio $v \neq 1$, therefore
$$
V = R\,v\,\frac{1 - v^{n}}{1 - v} = R\,\frac{1 - (1 + i)^{-n}}{i} ,
$$
because $1 - v = \dfrac{i}{1 + i}$ and hence $\dfrac{v}{1 - v} = \dfrac{1}{i}$. The accumulated value is the value of $V$ carried to time $n$, that is, $M = V\,(1 + i)^{n} = R\,\dfrac{(1 + i)^{n} - 1}{i}$.
:::
::::

:::teorema{#rendita-anticipata titolo="Annuity due"}
Under the same hypotheses, the annuity due of $n$ payments $R$ has present value and accumulated value
$$
V = R\,(1 + i)\,a_{\overline{n}|i},
\qquad
M = R\,(1 + i)\,s_{\overline{n}|i} .
$$
Each payment is made one period earlier than in the annuity immediate, so each value must be multiplied by $1 + i$. The ten payments of $1000$ euros at $4\%$ made at the beginning of each year are worth $1.04 \cdot 8110.90 \approx 8435.33$ euros today.
:::

:::teorema{#rendita-differita titolo="Deferred annuity"}
The annuity immediate of $n$ payments $R$ deferred by $p$ periods, with the first payment at time $p + 1$, has present value
$$
V = R\,(1 + i)^{-p}\,a_{\overline{n}|i} .
$$
At time $p$ the annuity is an annuity immediate, which at that date is worth $R\,a_{\overline{n}|i}$; the factor $(1 + i)^{-p}$ brings it back to time $0$. The ten payments of $1000$ euros at $4\%$ deferred by $2$ years are worth $1.04^{-2} \cdot 8110.90 \approx 7498.98$ euros today.

::grafico{assi=0 uguale=1 linee="-0.4,0 6.6,0" vettori="3,0,3,1.4,R;4,0,4,1.4,R;5,0,5,1.4,R;6,0,6,1.4,R" unicolore=1 punti="0,0,pieno;2,0,pieno" etichette="0,-0.45,0;1,-0.45,1;2,-0.45,p;3,-0.45,p + 1;6,-0.45,p + n;0,0.45,V;1,0.45,deferment" segmenti="0,0.2,2,0.2" xmin=-1 xmax=7 ymin=-1 ymax=2 titolo="Annuity immediate deferred by $p$ periods: the first payment is made at time $p + 1$ and the last at time $p + n$"}

:::

::::teorema{#rendita-perpetua titolo="Perpetuity"}
Let $i > 0$. The perpetuity immediate with payment $R$ and the perpetuity due have present values
$$
V = \frac{R}{i}
\qquad \text{and} \qquad
V = \frac{R\,(1 + i)}{i} .
$$
A perpetuity has no accumulated value, because it has no last due date. The present value is used to value an asset that produces a constant income with no end date, such as a rented plot of land. At $5\%$ an annual rent of $500$ euros paid in arrears is worth $\dfrac{500}{0.05} = 10\,000$ euros, and if it is paid in advance it is worth $10\,500$ euros.

:::dimostrazione
The present value of the perpetuity immediate is the limit as $n \to +\infty$ of the present value of the annuity of $n$ payments. Since $0 < (1 + i)^{-1} < 1$, by the limit of the geometric sequence one has $(1 + i)^{-n} \to 0$, so
$$
R\,a_{\overline{n}|i} = R\,\frac{1 - (1 + i)^{-n}}{i} \to \frac{R}{i} .
$$
This is the same result as the geometric series in the topic on sequences, progressions and series. For the perpetuity due each payment is made one period earlier, and one multiplies by $1 + i$.
:::
::::

:::esempio{titolo="Payment and number of payments"}
The formula $V = R\,a_{\overline{n}|i}$ links four quantities, and any one of them can be found from the other three. A loan of $20\,000$ euros to be repaid in $5$ annual payments in arrears at $3\%$ requires the payment
$$
R = \frac{20\,000}{a_{\overline{5}|0.03}} = \frac{20\,000 \cdot 0.03}{1 - 1.03^{-5}} \approx 4367.09 \text{ euros} .
$$
If instead the payment is fixed, from $1 - (1 + i)^{-n} = \dfrac{V\,i}{R}$ one obtains
$$
n = -\frac{\ln\left( 1 - \dfrac{V\,i}{R} \right)}{\ln(1 + i)} ,
$$
which makes sense *only* if $R > V\,i$, that is, if the payment exceeds the interest of the first period; otherwise the debt never decreases. In general $n$ is not an integer, and it is rounded up to the next integer by adjusting the last payment.
:::

## Loan amortization

:::definizione{#ammortamento titolo="Amortization schedule"}
A debt $S$ taken out at time $0$ at the rate $i$ is **amortized** with $n$ installments $R_1, \dots, R_n$ paid at the end of each period. Each installment splits into two parts,
$$
R_k = Q_k + I_k ,
$$
where the **interest portion** $I_k = i\,S_{k-1}$ pays the interest for the period on the debt still to be repaid, and the **principal portion** $Q_k$ reduces the debt. The **outstanding balance** after the payment of installment $k$ is $S_k = S_{k-1} - Q_k$, with $S_0 = S$. The closing conditions are
$$
S_n = 0,
\qquad \text{that is} \qquad
Q_1 + Q_2 + \dots + Q_n = S .
$$
The **amortization schedule** is the table that lists, period by period, the installment, principal portion, interest portion and outstanding balance. The two most widely used schedules are French amortization and Italian amortization.
:::

::::teorema{#debito-residuo titolo="Outstanding balance"}
In an amortization schedule the outstanding balance satisfies $S_k = (1 + i)\,S_{k-1} - R_k$, and after $k$ installments it equals
$$
S_k = \sum_{h=k+1}^{n} R_h\,(1 + i)^{-(h - k)}
\qquad \text{(prospective method)} ,
$$
that is, the value, at time $k$, of the installments still to be paid. In particular $S = S_0$ is the present value of all the installments, so the loan and the installments are financially equivalent. The outstanding balance is the sum to be paid to repay the loan early immediately after installment $k$.

:::dimostrazione
The idea is to derive a relation between two consecutive outstanding balances and to apply it backward starting from $S_n = 0$. Since $Q_k = R_k - I_k = R_k - i\,S_{k-1}$, one has
$$
S_k = S_{k-1} - Q_k = S_{k-1} + i\,S_{k-1} - R_k = (1 + i)\,S_{k-1} - R_k .
$$
It follows that $S_{k-1} = \dfrac{S_k + R_k}{1 + i}$. Applying this relation with $k = n$ and $S_n = 0$ gives $S_{n-1} = R_n\,(1 + i)^{-1}$; applying it again gives $S_{n-2} = R_{n-1}\,(1 + i)^{-1} + R_n\,(1 + i)^{-2}$, and continuing down to the index $k$ gives the formula.
:::
::::

::::teorema{#ammortamento-francese titolo="French amortization"}
In **French amortization** (constant-installment amortization) the $n$ installments are constant. Then
$$
R = \frac{S}{a_{\overline{n}|i}},
\qquad
Q_1 = R - i\,S,
\qquad
Q_{k+1} = Q_k\,(1 + i),
\qquad
S_k = R\,a_{\overline{n-k}|i} .
$$
The principal portions form an increasing geometric progression with common ratio $1 + i$, while the interest portions decrease, because the debt on which they are computed decreases. This is the schedule of fixed-rate, fixed-installment mortgages. With $S = 3000$ euros, $n = 3$ and $i = 10\%$ the installment is $R = \dfrac{3000}{a_{\overline{3}|0.1}} \approx 1206.34$ euros, and the schedule is the following (amounts in euros, rounded to the cent).

| $k$ | $R_k$ | $Q_k$ | $I_k$ | $S_k$ |
| --- | --- | --- | --- | --- |
| $0$ | | | | $3000.00$ |
| $1$ | $1206.34$ | $906.34$ | $300.00$ | $2093.66$ |
| $2$ | $1206.34$ | $996.98$ | $209.37$ | $1096.68$ |
| $3$ | $1206.34$ | $1096.68$ | $109.67$ | $0.00$ |

:::dimostrazione
By the theorem on the outstanding balance, $S$ is the present value of the installments, which form an annuity immediate, so $S = R\,a_{\overline{n}|i}$ and one obtains $R$. In the same way $S_k$ is the value at time $k$ of the $n - k$ remaining installments, that is, $R\,a_{\overline{n-k}|i}$. The first principal portion is the installment minus the interest on the initial debt. For two consecutive installments one has $R = Q_k + i\,S_{k-1} = Q_{k+1} + i\,S_k$; subtracting gives $Q_{k+1} - Q_k = i\,(S_{k-1} - S_k) = i\,Q_k$, so $Q_{k+1} = Q_k\,(1 + i)$.
:::
::::

:::teorema{#ammortamento-italiano titolo="Italian amortization"}
In **Italian amortization** (constant-principal amortization) the principal portions are constant. Then
$$
Q = \frac{S}{n},
\qquad
S_k = S \left( 1 - \frac{k}{n} \right),
\qquad
I_k = i\,S\,\frac{n - k + 1}{n},
\qquad
R_k = \frac{S}{n} + I_k .
$$
The formulas follow from the definitions, because after $k$ installments the debt has decreased by $k$ equal portions. The installments form a decreasing arithmetic progression with common difference $-\dfrac{i\,S}{n}$, so the first installments are higher than those of the French schedule with the same data. With $S = 12\,000$ euros, $n = 4$ and $i = 5\%$ the principal portion is $3000$ euros, and the schedule is the following.

| $k$ | $R_k$ | $Q_k$ | $I_k$ | $S_k$ |
| --- | --- | --- | --- | --- |
| $0$ | | | | $12\,000$ |
| $1$ | $3600$ | $3000$ | $600$ | $9000$ |
| $2$ | $3450$ | $3000$ | $450$ | $6000$ |
| $3$ | $3300$ | $3000$ | $300$ | $3000$ |
| $4$ | $3150$ | $3000$ | $150$ | $0$ |

The total interest is $1500$ euros. In the French schedule the debt decreases more slowly at the beginning, because the first principal portions are small, and the outstanding balance stays above that of the Italian schedule, as the graph shows.

::grafico{f="1000*(1-1.1^(-(10-x)))/(1-1.1^(-10))+0*sqrt(x*(10-x));1000*(1-x/10)+0*sqrt(x*(10-x))" punti="5,616.93,pieno;5,500,pieno" xmin=-2 xmax=12 ymin=-125 ymax=1125 nomi="k,S" legenda="\text{French};\text{Italian}" titolo="Outstanding balance of a loan of $1000$ euros in $10$ installments at $10\%$: after $5$ installments $616.93$ euros remain in the French schedule and $500$ euros in the Italian schedule"}

:::

## Net present value and internal rate of return

:::definizione{#van titolo="Net present value"}
An investment is described by the cash flows $a_0, a_1, \dots, a_n$ at times $0, 1, \dots, n$, with outflows negative and inflows positive. The **net present value** at the valuation rate $i$ is
$$
\operatorname{NPV}(i) = \sum_{k=0}^{n} a_k\,(1 + i)^{-k} = a_0 + \frac{a_1}{1 + i} + \dots + \frac{a_n}{(1 + i)^{n}} .
$$
The rate $i$ is the return of the available alternatives, for example the rate at which one can invest in a risk-free security. According to the **NPV criterion** the investment is worthwhile if $\operatorname{NPV}(i) > 0$, because the inflows, brought back to today, exceed the outflows; between two investments the one with the larger NPV is preferred. An investment that costs $1000$ euros and returns $400$ euros at the end of each of the following three years has, at $5\%$,
$$
\operatorname{NPV}(0.05) = -1000 + 400\,a_{\overline{3}|0.05} \approx 89.30 \text{ euros} ,
$$
so it is worthwhile compared with investing at $5\%$.
:::

:::definizione{#tir titolo="Internal rate of return"}
The **internal rate of return** (IRR) of an investment is the rate $i^* > -1$ that makes the net present value zero:
$$
\operatorname{NPV}(i^*) = 0 .
$$
At the rate $i^*$ the inflows and the outflows are financially equivalent, so $i^*$ is the return of the investment itself. According to the **IRR criterion** the investment is worthwhile if its IRR exceeds the rate of the alternatives. With only two periods the equation is quadratic in the unknown $v = (1 + i^*)^{-1}$; for example $-100 + 60\,v + 60\,v^{2} = 0$ gives $v = \dfrac{-3 + \sqrt{69}}{6} \approx 0.8844$, so $i^* \approx 13.07\%$. In general the equation cannot be solved with a formula, and the IRR is approximated.
:::

:::richiamo{titolo="Intermediate zero theorem"}
Let $f$ be continuous on the closed interval $[a, b]$, with $f(a)$ and $f(b)$ of opposite sign. Then there exists at least one point $c \in (a, b)$ such that $f(c) = 0$.
:::

::::teorema{#esistenza-tir titolo="Existence and uniqueness of the IRR"}
Consider an investment with $a_0 < 0$, with $a_k \geq 0$ for $k = 1, \dots, n$ and not all zero, and with
$$
a_0 + a_1 + \dots + a_n > 0 .
$$
Then the function $\operatorname{NPV}(i)$ is continuous and strictly decreasing for $i \geq 0$, and it has one and only one zero $i^* > 0$. Moreover $\operatorname{NPV}(i) > 0$ for $0 \leq i < i^*$ and $\operatorname{NPV}(i) < 0$ for $i > i^*$.

For an investment of this type, with an initial outflow followed only by inflows that exceed it in total, the two criteria therefore give the same answer, because the NPV at the rate $i$ is positive *if and only if* $i < i^*$. Moreover the IRR can be approximated with the **bisection method**, because the NPV is continuous and changes sign.

::grafico{f="-1000+400/(1+x/100)+400/(1+x/100)^2+400/(1+x/100)^3+0*sqrt(x)" punti="0,200,pieno;5,89.3,pieno;9.701,0,vuoto" segmenti="5,0,5,89.3" xmin=-4 xmax=36 ymin=-500 ymax=500 nomi="i,NPV" legenda="\operatorname{NPV}(i) = -1000 + 400\,a_{\overline{3}|i}" titolo="The NPV of the investment $(-1000, 400, 400, 400)$ decreases as the rate increases, equals $89.30$ euros at $5\%$ and vanishes at the IRR $i^* \approx 9.70\%$ (rate as a percentage on the horizontal axis)"}

:::dimostrazione
The idea is to apply the intermediate zero theorem on an interval $[0, b]$ with $b$ large enough, and to obtain uniqueness from monotonicity. Each term $a_k\,(1 + i)^{-k}$ is continuous for $i > -1$, so $\operatorname{NPV}$ is continuous. For $k \geq 1$ with $a_k > 0$ the term $a_k\,(1 + i)^{-k}$ is strictly decreasing, because $(1 + i)^{k}$ is increasing; the terms with $a_k = 0$ are zero. At least one $a_k$ is positive, therefore $\operatorname{NPV}$ is strictly decreasing.

For $i = 0$ one has $\operatorname{NPV}(0) = a_0 + a_1 + \dots + a_n > 0$ by hypothesis. As $i \to +\infty$ each term with $k \geq 1$ tends to $0$, so $\operatorname{NPV}(i) \to a_0 < 0$, and by the definition of limit there exists $b > 0$ with $\operatorname{NPV}(b) < 0$. The intermediate zero theorem applies to the function $\operatorname{NPV}$ on the interval $[0, b]$, and guarantees a zero $i^* \in (0, b)$. A strictly decreasing function takes each value at most once, so the zero is unique, and the sign of $\operatorname{NPV}$ is positive before $i^*$ and negative after.
:::
::::

:::esempio{titolo="IRR with the bisection method"}
For the investment $(-1000, 400, 400, 400)$ one has $\operatorname{NPV}(0) = 200 > 0$ and $\operatorname{NPV}(0.2) \approx -157.41 < 0$, so the IRR lies in $(0;\ 0.2)$. At each step one computes the NPV at the midpoint and keeps the half of the interval at whose endpoints the NPV has opposite signs.

| interval | midpoint | NPV at the midpoint | half kept |
| --- | --- | --- | --- |
| $[0;\ 0.2]$ | $0.1$ | $-5.26$ | left |
| $[0;\ 0.1]$ | $0.05$ | $89.30$ | right |
| $[0.05;\ 0.1]$ | $0.075$ | $40.21$ | right |
| $[0.075;\ 0.1]$ | $0.0875$ | $17.05$ | right |
| $[0.0875;\ 0.1]$ | $0.09375$ | $5.79$ | right |

After five steps the IRR lies in $[0.09375;\ 0.1]$, an interval of width $0.00625$; continuing one finds $i^* \approx 9.70\%$. Each step halves the width of the interval, therefore to obtain the IRR to within $0.01\%$ starting from an interval of width $0.2$, $11$ steps suffice, since $\dfrac{0.2}{2^{11}} < 0.0001$.
:::

:::attenzione
If the cash flows change sign more than once, the IRR may not be unique. The transaction $(-10\,000,\ 26\,000,\ -16\,800)$ has
$$
\operatorname{NPV}(i) = -10\,000 + 26\,000\,v - 16\,800\,v^{2}, \qquad v = (1 + i)^{-1},
$$
which vanishes for $v = \dfrac{5}{6}$ and for $v = \dfrac{5}{7}$, that is, for $i = 20\%$ and for $i = 40\%$. In this case the IRR does not identify a return, and the NPV criterion is used.

::grafico{f="-10000+26000/(1+x/100)-16800/(1+x/100)^2+0*sqrt((x-10)*(50-x))" punti="20,0,vuoto;40,0,vuoto" xmin=0 xmax=50 ymin=-400 ymax=100 nomi="i,NPV" legenda="\operatorname{NPV}(i)" titolo="The NPV of the transaction $(-10\,000,\ 26\,000,\ -16\,800)$, with the rate as a percentage on the horizontal axis, vanishes for $i = 20\%$ and for $i = 40\%$"}

:::
