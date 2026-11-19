---
titolo: Interest conventions and equivalent rates
sommario: How to calculate principal, accumulated value and present value, and how to compare rates quoted for different periods.
---

## Principal, interest and time

:::definizione{#semplice titolo="Simple interest"}
A basic financial transaction exchanges an initial principal $C>0$ for a sum payable at a later date. This sum is the **accumulated value** $M$. The difference $I=M-C$ is the interest earned. The term $t\geq 0$ is measured in the same time unit as the rate $i$. If the rate is annual, six months is $\dfrac{1}{2}$ of a year.

Under **simple interest**, the interest earned in each unit of time is $Ci$. Since the principal on which interest is calculated remains $C$ throughout the term, total interest grows in proportion to $t$. It follows that
$$
I=Cit,\qquad M=C+I=C(1+it).
$$
The quantity $1+it$ is the accumulation factor. When $C>0$, we assume $1+it>0$ so that the accumulated value is positive. The same formula can be used to find a missing quantity, such as the principal needed to reach a given accumulated value.
:::

:::esempio{titolo="A term in months and an annual rate"}
A deposit of $2000\,\mathrm{EUR}$ earns simple interest at $4\%$ per year for nine months. The term in years is $\dfrac{9}{12}=\dfrac{3}{4}$, so the rate applied to the deposit over the term is $3\%$. This gives
$$
I=2000\cdot 0.04\cdot\frac{3}{4}=60\,\mathrm{EUR},
\qquad M=2060\,\mathrm{EUR}.
$$
Each month the deposit earns one twelfth of the annual interest of $80\,\mathrm{EUR}$. Adding the nine monthly amounts also gives $60\,\mathrm{EUR}$.

::grafico{curve="t,2000+80*t,0,3.3" xmin=-0.4 xmax=3.3 ymin=1800 ymax=2300 nomi="t,M" legenda="M(t)=2000\,(1+0.04\,t)" punti="0,2000,pieno;0.75,2060,pieno" segmenti="0.75,1800,0.75,2060;0,2060,0.75,2060" etichette="0.82,2030,2060" titolo="Accumulated value in euros of a deposit of $2000$ euros at $4\%$ simple annual interest, as a function of the term $t$ in years. At $t=\dfrac{3}{4}$, the accumulated value is $2060$ euros."}
:::

:::osservazione
If the term is given in days, the year fraction depends on the contract's day-count convention. Under Actual/365 Fixed, the actual number of days is divided by $365$. Under Actual/360, the same number of days is divided by $360$. The 30/360 convention also changes the numerator because it counts days according to rules based on thirty-day months. A “360-day basis” specifies the denominator. The contract must also state how to count the days in the numerator.

For $36$ actual days, the Actual/360 year fraction is $\dfrac{36}{360}=\dfrac{1}{10}$. At $5\%$ simple annual interest, a principal of $8000\,\mathrm{EUR}$ therefore earns $40\,\mathrm{EUR}$ in interest. On an Actual/365 Fixed basis, the year fraction would be $\dfrac{36}{365}$ and the interest would be lower because the same numerator is divided by a larger denominator.
:::

:::esempio{titolo="The same dates under different day-count conventions"}
A deposit of $6000\,\mathrm{EUR}$ earns $6\%$ simple annual interest from October 1 to February 1. There are $123$ actual days between the two dates. Under Actual/360 the year fraction is $\dfrac{123}{360}$. Under 30/360, four months beginning on the first day of the month count as $120$ days. The interest amounts are
$$
\begin{aligned}
I_{\mathrm{actual}}
&=6000\cdot0.06\cdot\frac{123}{360}
=123\,\mathrm{EUR}\\[6pt]
I_{\mathrm{30/360}}
&=6000\cdot0.06\cdot\frac{120}{360}
=120\,\mathrm{EUR}.
\end{aligned}
$$
The denominator is the same in both calculations. The difference of $3\,\mathrm{EUR}$ comes from the three additional days in the actual count, each worth one euro.
:::

:::esempio{titolo="The implied rate and the time needed to reach a target"}
From $M-C=Cit$ we obtain $i=\dfrac{M-C}{Ct}$ for $t>0$. If $2400\,\mathrm{EUR}$ grows to $2460\,\mathrm{EUR}$ in six months, the six-month return is $\dfrac{60}{2400}=2.5\%$. Six months is half a year, so the simple annual rate is $5\%$.

If the rate $i>0$ is given, we can instead find the time needed to reach an accumulated value $M\geq C$. The term is $t=\dfrac{M-C}{Ci}$. In this calculation, $Ci$ is the interest earned in one year when $i$ is annual. Dividing the required interest by the annual interest gives the term in years directly.
:::

## Compound interest

:::definizione{#composto titolo="Compound interest"}
Under **compound interest**, the principal at the end of a period includes the interest just earned. In the next period, the rate therefore applies to the new balance. If $i>-1$ is the effective rate per period, then $q=1+i$ is the accumulation factor for that period.

For $n$ whole periods the accumulated value is $M=Cq^n$. Under the exponential convention, the same law applies to every real-valued term $t\geq 0$. The one-period discount factor is $v=q^{-1}$. Therefore the principal that grows to $M$ at maturity is given by
$$
M=Cq^t,\qquad C=Mv^t .
$$
These two equations describe the same transaction at its two dates. To move from the initial date to maturity, multiply by $q^t$. To move back to the initial date, use the reciprocal of that factor.
:::

:::esempio{titolo="Interest over two periods"}
A deposit of $1000\,\mathrm{EUR}$ earns $10\%$ interest compounded annually. At the end of the first year its accumulated value is $1100\,\mathrm{EUR}$. In the second year the interest is $10\%$ of $1100\,\mathrm{EUR}$, which gives $110\,\mathrm{EUR}$. The final accumulated value is $1210\,\mathrm{EUR}$. The additional $10\,\mathrm{EUR}$ above the $200\,\mathrm{EUR}$ payable under simple interest is the interest earned on the first year's $100\,\mathrm{EUR}$.

::grafico{assi=0 uguale=1 xmin=-0.4 xmax=2.8 ymin=-1.3 ymax=1.55 linee="-0.2,0 2.45,0" vettori="2,0,2,1.21,+1210;0,0,0,-1,−1000;2.4,0,2.65,0" etichette="-0.14,-0.17,0;0.92,-0.17,1;1.92,-0.17,2;2.7,-0.12,t" segmenti="1,-0.06,1,0.06" titolo="The depositor's timeline, in years. The downward arrow shows the outflow of $1000$ euros at time $0$. The upward arrow shows the inflow of $1210$ euros at time $2$."}
:::

:::osservazione
The ratio $\dfrac{M}{C}$ is the observed accumulation factor over the full term. If $t>0$, taking the root of order $t$ gives the one-period factor. If the rate is known and nonzero, taking logarithms brings the unknown exponent down as a multiplier. Hence
$$
i=\left(\frac{M}{C}\right)^{\frac{1}{t}}-1,
\qquad
t=\frac{\log\left(\frac{M}{C}\right)}{\log(1+i)}.
$$
In the formula for the term, the numerator and denominator must have the same sign for $t>0$. When $-1<i<0$, the accumulated value decreases, so the ratio $\dfrac{M}{C}$ lies in $(0,1)$ for every positive term.
:::

:::esempio{titolo="Finding the term from a power"}
A principal of $2500\,\mathrm{EUR}$ grows to $3025\,\mathrm{EUR}$ at $10\%$ interest compounded annually. The ratio of the two amounts is $1.21=1.1^2$. Since the function $t\mapsto 1.1^t$ is strictly increasing, the only term that produces this ratio is $2$ years.
:::

:::osservazione
For a given $i>0$, the simple and compound accumulation factors agree at $t=0$ and $t=1$. For $0<t<1$, the compound interest curve is strictly convex and lies below the line segment joining those two points. For $t>1$, it lies above the extension of the same line. The comparison therefore depends on whether maturity falls before or after the end of one period.

::grafico{f="1+0.2*x;1.2^x" xmin=0 xmax=4.1 ymin=0 ymax=2.25 nomi="t,fattore" legenda="\text{Simple};\text{Compound}" punti="0,1,pieno;1,1.2,pieno" etichette="2.85,1.91,Compound;3.15,1.55,Simple" titolo="Simple and compound accumulation factors at 20% per year"}
:::

:::esempio{titolo="The same quoted rate for whole and fractional periods"}
A deposit earns an effective annual rate of $21\%$ under the exponential convention. The six-month factor is $\sqrt{1.21}=1.1$, so $5000\,\mathrm{EUR}$ grows to $5500\,\mathrm{EUR}$. A contract that applies simple interest to fractions of a year would instead have a six-month factor of $1+0.21\cdot\dfrac{1}{2}=1.105$. The annual rate determines the accumulated value at one year. The fractional-period convention determines which factor to use for a maturity within the year.
:::

## Commercial discount

:::definizione{#sconto-commerciale titolo="Present value under commercial discount"}
A security promises a future payment $M>0$. Discounting it before maturity means receiving its present value $V$ today. The difference $D=M-V$ is the discount. Under **commercial discount**, with a discount rate $d\geq 0$ per unit of time, the discount is proportional both to the future payment and to the term $t$. Thus
$$
D=Mdt,\qquad V=M(1-dt).
$$
The condition $dt<1$ ensures that $V$ is positive. The coefficient $1-dt$ is the commercial discount factor for the term $t$.
:::

:::esempio{titolo="Discounting a receivable before maturity"}
A receivable of $5000\,\mathrm{EUR}$ is due in six months and is discounted at a commercial discount rate of $6\%$ per year. Since $t=\dfrac{1}{2}$, the discount for the actual term is $3\%$ of the maturity value. This gives
$$
D=5000\cdot0.06\cdot\frac{1}{2}=150\,\mathrm{EUR},
\qquad V=4850\,\mathrm{EUR}.
$$
The ratio $\dfrac{150}{5000}$ measures the discount relative to the future payment. The ratio $\dfrac{150}{4850}$ measures the cost of the advance relative to the amount received today. Both ratios use the same difference in euros, with different bases for comparison.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=7.4 ymin=-3.4 ymax=3.5 linee="-0.4,0 6.6,0" vettori="6,0,6,3,+5000;0,0,0,-2.91,−4850;6.5,0,7,0" etichette="-0.28,-0.4,0;5.85,-0.4,6;6.85,-0.4,months" segmenti="1,-0.08,1,0.08;2,-0.08,2,0.08;3,-0.08,3,0.08;4,-0.08,4,0.08;5,-0.08,5,0.08" titolo="Cash flows of the bank that discounts the receivable. At time $0$ it pays out $4850$ euros (a downward arrow). Six months later it receives $5000$ euros (an upward arrow)."}
:::

:::attenzione
With $d=25\%$ per year and $t=4$ years, we obtain $dt=1$ and hence $V=0$. For longer terms the present value of a positive future payment would be negative. The restriction $dt<1$ specifies exactly which terms are admissible at that rate.
:::

## Rational discount and the comparison of advances

:::definizione{#sconto-razionale titolo="Present value under rational discount"}
Under **rational discount**, the present value is the principal that would grow to the future payment $M>0$ if invested at simple interest until maturity. With an interest rate $i$ per unit of time, a term $t\geq 0$ and $1+it>0$, we solve $M=V(1+it)$ to obtain
$$
V=\frac{M}{1+it},\qquad
D=M-V=\frac{Mit}{1+it}.
$$
The discount can also be written as $D=Vit$. The amount on which interest is calculated is therefore the present value.
:::

:::esempio{titolo="Comparing the two methods at the same quoted rate"}
For a receivable of $1100\,\mathrm{EUR}$ due in one year, rational discount at $10\%$ gives a present value of $1000\,\mathrm{EUR}$. Commercial discount at $10\%$ gives a present value of $990\,\mathrm{EUR}$. In the first case the discount is $10\%$ of $1000\,\mathrm{EUR}$, and in the second it is $10\%$ of $1100\,\mathrm{EUR}$. This is why the present value under rational discount is larger.

::grafico{f="100*(1-0.1*x);100/(1+0.1*x)" xmin=0 xmax=11 ymin=0 ymax=100 nomi="t,V (%)" legenda="\text{Commercial};\text{Rational}" punti="1,90,pieno;1,90.909,pieno;10,0,pieno;10,50,pieno" titolo="Present value as a percentage of the maturity value, at $10\%$ per year with $t$ in years. The commercial discount line $100\,(1-0.1\,t)$ reaches zero at $t=10$. The rational discount curve $\dfrac{100}{1+0.1\,t}$ remains positive and at $t=10$ its value is $50$."}
:::

:::osservazione
A commercial discount rate $d$ and a simple interest rate $i$ are equivalent for a term $t>0$ if they give the same present value for a given maturity value. Equating the discount factors and solving for the desired rate gives
$$
1-dt=\frac{1}{1+it},
\qquad
d=\frac{i}{1+it},
\qquad
i=\frac{d}{1-dt}.
$$
The appearance of $t$ in the conversion formulas shows that equivalence depends on the term. For a six-month receivable at $10\%$ simple annual interest, the equivalent annual commercial discount rate is $\dfrac{0.10}{1.05}$, or approximately $9.52\%$. For a one-year receivable at the same simple interest rate, it is $\dfrac{0.10}{1.10}$, or approximately $9.09\%$.
:::

:::osservazione
Equivalence of the two discounts can also be understood in terms of the discount amount in euros. If both contracts give the same present value, $D=M-V$ is the same in each case. For a term $t>0$ we therefore have $Mdt=Vit$, which gives $d=i\dfrac{V}{M}$. When $i>0$, the present value under rational discount is less than the future value, so the equivalent commercial discount rate is lower. This relationship explains how advances quoted at different rates can have the same cost in euros.
:::

## Equivalent effective rates

::::teorema{#tassi-equivalenti titolo="Equivalent rates under compound interest"}
Two rates are **equivalent** if, when applied over their respective periods, they produce the same accumulated value from the same principal at the same maturity. Let $i>-1$ be the effective annual rate and $i_m>-1$ the effective rate per subperiod, with $m\geq 1$ equal subperiods per year. Under compound interest the rates are equivalent if and only if
$$
1+i=(1+i_m)^m .
$$
The equivalent rate per subperiod is therefore $i_m=(1+i)^{\dfrac{1}{m}}-1$. This conversion lets us use a monthly rate for a monthly payment and an annual rate for an annual payment while preserving the same accumulation law.

:::dimostrazione
Express the one-year accumulated value of the same principal using each time unit. The annual rate applies once, so the accumulated value is $C(1+i)$. The subperiod rate applies $m$ times, so the accumulated value is $C(1+i_m)^m$. Since $C>0$, the accumulated values are equal exactly when the factors are equal. Both factors are positive, so the positive root of order $m$ determines a unique value of $i_m$. Raising both annual factors to the same power gives identical accumulated values for every term allowed by the exponential convention.
:::
::::

:::esempio{titolo="From a six-month rate to an annual rate"}
A deposit earns an effective rate of $5\%$ every six months. A year contains two six-month periods, so the annual factor is $1.05^2=1.1025$. The equivalent annual rate is $10.25\%$. Adding the two six-month interest amounts on the initial principal would give $10\%$. The difference of $0.25$ percentage points represents the second half-year's interest on the interest earned in the first.
:::

:::osservazione
To convert directly from an effective quarterly rate $i_4$ to a monthly rate $i_{12}$, we can choose one quarter as the common term. Since a quarter contains three months, $1+i_4=(1+i_{12})^3$. Equating the annual factors gives the same equation, since both sides would be raised to the fourth power. Choosing the common term this way reduces the number of calculations.
:::

## Nominal and effective rates

:::definizione{#tasso-nominale titolo="Nominal annual rate convertible periodically"}
The **nominal annual rate convertible $m$ times per year** is $j^{(m)}=mi_m$, where $i_m$ is the effective rate applied in each of the $m$ subperiods of the year. If $1+\dfrac{j^{(m)}}{m}>0$, the effective annual compound interest rate is given by
$$
i_m=\frac{j^{(m)}}{m},
\qquad
i=\left(1+\frac{j^{(m)}}{m}\right)^m-1.
$$
The first formula identifies the rate applied in each subperiod. The second accounts for the number of times the corresponding factor is applied during the year.
:::

:::esempio{titolo="The same quoted rate with two compounding frequencies"}
A nominal annual rate of $12\%$ compounded monthly corresponds to an effective monthly rate of $1\%$, so the effective annual rate is approximately $12.6825\%$. At the same nominal rate compounded quarterly, the quarterly rate is $3\%$ and the effective annual rate is $1.03^4-1$, or approximately $12.5509\%$. For a given positive nominal rate, more frequent compounding credits interest sooner and increases the annual accumulation factor.
:::

:::osservazione
Given the effective annual rate, the corresponding nominal rate convertible $m$ times a year can be found in two steps. First find the effective rate per subperiod by taking the root, then multiply it by $m$. Thus
$$
j^{(m)}=m\left[(1+i)^{\frac{1}{m}}-1\right].
$$
For $i=21\%$ and $m=2$, the six-month factor is $\sqrt{1.21}=1.1$. The nominal annual rate convertible twice a year is $20\%$. When comparing contracts with different compounding frequencies, we can compare their nominal rates by first finding the respective effective rates for a common term.
:::

:::osservazione
For a fixed nominal annual rate $j>0$, consider an increase from $m$ to $2m$ conversions per year over a single subperiod of the first contract. The first contract uses the factor $1+\dfrac{j}{m}$. The second divides the subperiod in half and applies the factor $1+\dfrac{j}{2m}$ to each half. The total factor for the original subperiod is
$$
\left(1+\frac{j}{2m}\right)^2=1+\frac{j}{m}+\frac{j^2}{4m^2}.
$$
The extra term is positive. Raising both factors to the power $m$ preserves the advantage of the second contract in the one-year accumulated value. This comparison holds the nominal rate fixed to measure the effect of the compounding frequency.

::grafico{xmin=0 xmax=13 ymin=118 ymax=128.6 nomi="m,euro" punti="1,120,pieno;2,123.6,pieno;3,124.864,pieno;4,125.509,pieno;6,126.162,pieno;12,126.825,pieno" asintoti="y=127.497" titolo="One year's interest on $1000$ euros at a nominal annual rate $j=12\%$ convertible $m$ times per year, given by $1000\left[\left(1+\dfrac{0.12}{m}\right)^m-1\right]$. The values increase with $m$ and stay below $1000\,(e^{0.12}-1)\approx127.50$ euros, shown by the dashed line."}
:::

:::attenzione
A nominal annual rate of $12\%$ compounded monthly and an effective annual rate of $12\%$ give different one-year accumulated values. In the first case, $1000\,\mathrm{EUR}$ grows to $1000\cdot1.01^{12}\,\mathrm{EUR}$, or approximately $1126.83\,\mathrm{EUR}$. In the second it grows to $1120\,\mathrm{EUR}$. For a six-month term, the first contract applies the monthly factor $1.01$ six times. Under the exponential convention, the second uses the square root of the annual factor $1.12$.
:::

## Instantaneous rate of interest

:::definizione{#capitalizzazione-continua titolo="Force of interest and continuous accumulation"}
Let $r(t)>0$ be the accumulation factor from time zero to time $t$, with $r(0)=1$. If $r$ is differentiable, the **force of interest** $\delta(t)$ is the instantaneous relative growth rate of the accumulated value, given by
$$
\delta(t)=\frac{r'(t)}{r(t)}.
$$
The numerator measures the change in the accumulation factor per unit of time. The denominator expresses that change relative to the value reached at the same time. If $\delta$ is continuous, the identity $\delta(t)=(\log r)'(t)$ gives
$$
r(t)=\exp\left(\int_0^t\delta(u)\,du\right),
$$
where $u$ is the variable of integration. The exponent is the integral of the force of interest over the actual term.
:::

:::esempio{titolo="Constant force of interest and the effective annual rate"}
With a constant annual force of interest $\delta$, the accumulation factor over $t$ years is $e^{\delta t}$. In one year the factor is $e^\delta$, so the equivalent effective annual rate is $i=e^\delta-1$. For $\delta=0.05$, the effective rate is approximately $5.1271\%$. After two years the same principal of $1000\,\mathrm{EUR}$ is worth $1000e^{0.10}\,\mathrm{EUR}$, or approximately $1105.17\,\mathrm{EUR}$. Conversely, an effective annual rate $i>-1$ gives an equivalent constant force $\delta=\log(1+i)$.
:::

:::esempio{titolo="A force of interest that increases over time"}
Consider $\delta(u)=0.02+0.01u$ with $u$ measured in years. Over the first two years the integral is
$$
\int_0^2 (0.02+0.01u)\,du
=0.02\cdot 2 + \frac{0.01}{2}\cdot 2^2
=0.06.
$$
The accumulation factor is $e^{0.06}$. The average annual force of interest over the two years is $\dfrac{0.06}{2}=0.03$. The final value $\delta(2)=0.04$ measures relative growth at the end of the second year. Using that value for the entire interval would overstate the accumulated value.

::grafico{f="2+x" area="2+x;0;0;2" xmin=0 xmax=2.6 ymin=0 ymax=5 nomi="u,δ (%)" legenda="100\,\delta(u)=2+u" punti="0,2,pieno;2,4,pieno" titolo="Force of interest $\delta(u)=0.02+0.01u$ expressed in percentage points, with $u$ in years. The shaded area between $0$ and $2$ is $6$ percentage points, or $0.06$, and gives the exponent of the two-year accumulation factor."}
:::

## Multiplicativity and reinvestment

::::teorema{#scindibilita titolo="Multiplicative, time-homogeneous accumulation laws"}
An accumulation law is **time-homogeneous** if its factor depends only on the length of the term and remains unchanged when both dates of the transaction shift by the same amount. Let $r(t)>0$ be a time-homogeneous accumulation law, continuous for $t\geq0$, with $r(0)=1$. The law is **multiplicative** if, for all $s,t\geq0$,
$$
r(s+t)=r(s)r(t).
$$
Under these assumptions, multiplicativity is equivalent to the existence of a real constant $\delta$ such that $r(t)=e^{\delta t}$. Under compound interest at a constant rate, investing directly over two consecutive intervals therefore gives the same final amount as reinvesting the entire accumulated value at the intermediate date.

:::dimostrazione
Taking logarithms turns multiplication of factors into addition. Setting $g(t)=\log r(t)$, multiplicativity becomes $g(s+t)=g(s)+g(t)$. Applying the identity $n$ times gives $g(nu)=ng(u)$ for every integer $n\geq1$ and every $u\geq0$. In particular, $g(1)=n g\left(\dfrac{1}{n}\right)$. For integers $m\geq0$ it follows that
$$
g\left(\frac{m}{n}\right)
=m g\left(\frac{1}{n}\right)
=\frac{m}{n}g(1).
$$
By continuity the identity holds for every real $t\geq0$, since every such number is the limit of a sequence of nonnegative rational numbers. Thus $r(t)=e^{tg(1)}$. Conversely, if $r(t)=e^{\delta t}$, then $e^{\delta(s+t)}=e^{\delta s}e^{\delta t}$, so the law is multiplicative.
:::
::::

:::esempio{titolo="Renewing a simple-interest deposit"}
At $10\%$ simple annual interest, a direct investment for two years has accumulation factor $1.2$. Renewing the deposit after one year and reinvesting the accumulated value gives $1.1^2=1.21$. In general, for two terms $s,t>0$ the product of the simple-interest factors contains an additional term, since
$$
(1+is)(1+it)=1+i(s+t)+i^2st.
$$
When $i\neq0$, the term $i^2st$ is positive. The two accumulated values differ even though the interest rate and the initial principal are the same. When $i=0$, both factors equal $1$.
:::

:::osservazione
If the force of interest depends on the date, the factor between dates $a$ and $b$, with $0\leq a\leq b$, is $r(a,b)=\exp\left(\int_a^b\delta(u)\,du\right)$. For an intermediate date $c$ we have $r(a,b)=r(a,c)r(c,b)$, since the integral is additive over the two adjacent intervals. The factor for the second interval must be calculated between $c$ and $b$. With $\delta(u)=0.02+0.01u$, the exponent from $0$ to $1$ is $0.025$, whereas from $1$ to $2$ it is $0.035$. The intervals are equally long, but their factors depend on their dates.
:::
