---
titolo: Annuities with varying payments, continuous cash flows and savings plans
sommario: Valuing irregular payments, arithmetic and geometric payment sequences, continuous cash flows and savings plans.
---

## Valuing irregular payments

:::definizione{#rendita-generica titolo="The value of an annuity with varying payments"}
An **annuity with varying payments** is a sequence of payments whose amounts can vary from one payment date to the next. Let $R_k$ be payment number $k$ and $t_k$ its due date measured from today. If $i>-1$ is the effective rate per chosen unit of time, set $q=1+i$ and $v=q^{-1}$. The **present value** $V_0$ and the **accumulated value** $M_T$ at a date $T\geq t_n$ are
$$
V_0=\sum_{k=1}^n R_kv^{t_k},
\qquad
M_T=\sum_{k=1}^n R_kq^{T-t_k}.
$$
For each term, the discount period is the time from today until the payment falls due. The accumulation period is the time from the due date to the final date. Since $q^{T-t_k}=q^Tv^{t_k}$, the accumulated value is also $M_T=q^TV_0$. This relationship provides a check on the result obtained by accumulating each payment directly to the final date.
:::

:::esempio{titolo="Three receipts on different dates"}
A contract pays $220$ euros in one year, $363$ euros in two years and $1331$ euros in three years. At an effective annual rate of $10\%$, the three present values are $200$, $300$ and $1000$ euros, respectively. Therefore
$$
V_0=\frac{220}{1.1}+\frac{363}{1.1^2}
+\frac{1331}{1.1^3}=1500\,\mathrm{EUR}.
$$
At time $3$ the final payment falls on the valuation date itself, so it enters the accumulated value at its nominal amount. The other two payments earn interest for two years and one year, respectively. This gives $M_3=220\cdot1.1^2+363\cdot1.1+1331=1996.50\,\mathrm{EUR}$, the same amount obtained from $1500\cdot1.1^3$.

::grafico{assi=0 unicolore=1 legenda=0 xmin=-0.5 xmax=4.1 ymin=-0.45 ymax=2.35 linee="-0.3,0 3.5,0;3.38,0.06 3.5,0 3.38,-0.06;0,-0.04 0,0.04;1,-0.04 1,0.04;2,-0.04 2,0.04;3,-0.04 3,0.04" vettori="1,0,1,0.331;2,0,2,0.546;3,0,3,2.0" etichette="0.85,0.44,220;1.85,0.66,363;2.8,2.12,1331;-0.04,-0.2,0;0.96,-0.2,1;1.96,-0.2,2;2.96,-0.2,3;3.55,-0.03,t (years)" titolo="Receipts of $220$, $363$ and $1331$ euros at times $1$, $2$ and $3$. The upward arrows indicate receipts, and their heights are proportional to the amounts."}

:::

:::attenzione
The index of a payment coincides with its due date only for an annuity-immediate with payments one period apart. If receipts of $100$ and $110$ euros fall due today and in one year, their present value at $10\%$ is $100+100=200$ euros. Treating them as payments at times $1$ and $2$ would move the valuation date back a full year and give $\dfrac{200}{1.1}$ euros.
:::

## Payments in arithmetic progression

::::teorema{#progressione-aritmetica titolo="Payments with a fixed increment"}
An annuity with $n\geq1$ payments in arrears is **arithmetically varying** if the difference $d$ between consecutive payments is constant. Since the first payment is $R_1$, payment number $k$ is $R_k=R_1+(k-1)d$. Its present value can be written as
$$
V_0=R_1a_{\overline n|i}+dG_n(v),
\qquad
a_{\overline n|i}=\sum_{k=1}^n v^k,
\qquad
G_n(v)=\sum_{k=1}^n(k-1)v^k.
$$
For $v\ne1$ we have
$$
G_n(v)=\frac{v^2-nv^{n+1}+(n-1)v^{n+2}}{(1-v)^2}.
$$
For $i=0$ we have $v=1$, so $G_n(1)=\dfrac{n(n-1)}{2}$ and $a_{\overline n|0}=n$. This decomposition shows the share of the present value attributable to the common base $R_1$ and the share attributable to the increments that build up from the second payment onward.

:::dimostrazione
By linearity of the sum we can factor out $R_1$ from the constant terms and $d$ from the terms that depend on $k$. To obtain the formula for $G_n(v)$, start from the finite geometric sum $S_n(v)=\sum_{j=0}^{n-1}v^j=\dfrac{1-v^n}{1-v}$. Differentiating term by term and multiplying by $v^2$ gives
$$
\begin{aligned}
v^2 S_n'(v)
&=\sum_{j=1}^{n-1}jv^{j+1}=G_n(v)\\[6pt]
&=\frac{v^2(1-v^n)-nv^{n+1}(1-v)}{(1-v)^2}.
\end{aligned}
$$
Expanding the numerator yields the required expression. When $v=1$, the sum defining $G_n(v)$ contains the integers from $0$ to $n-1$, so the arithmetic sum formula applies.
:::
::::

:::esempio{titolo="Finding the initial payment from the present value"}
Three annual payments have a present value of $650$ euros at zero interest. Each payment after the first exceeds the preceding payment by $50$ euros. At zero interest the present value equals the sum of the amounts, so
$$
650=R_1+(R_1+50)+(R_1+100)=3R_1+150.
$$
The first payment is $\dfrac{500}{3}\,\mathrm{EUR}$ and the last is $\dfrac{800}{3}\,\mathrm{EUR}$. At a positive rate we would find the same unknown by factoring out $R_1$ with coefficient $a_{\overline 3|i}$, since the base amount appears once in each payment.
:::

:::osservazione
If $d<0$, the payments decrease. To check that all receipts are nonnegative, it suffices to check $R_1+(n-1)d\geq0$, since the last payment is the smallest. This condition is also useful when solving for $n$. For example, starting at $240$ euros with a decrease of $70$ euros each period, the fourth payment is $30$ euros and the fifth would be $-40$ euros. A schedule consisting entirely of receipts can therefore last at most four payment dates with these parameters.

::grafico{curve="t,240-70*(t-1),1,5" xmin=0 xmax=5.8 ymin=-80 ymax=320 nomi="k,euro" punti="1,240,pieno;2,170,pieno;3,100,pieno;4,30,pieno;5,-40,vuoto" segmenti="1,0,1,240;2,0,2,170;3,0,3,100;4,0,4,30;5,0,5,-40" etichette="1.12,262,240;2.12,192,170;3.12,122,100;4.12,52,30;5.15,-58,−40" legenda="R_k=240-70(k-1)" titolo="An arithmetic payment sequence with $R_1=240$ euros and $d=-70$ euros. The filled circles mark the first four payments. The open circle marks the fifth, which would be negative."}

:::

:::esempio{titolo="Value of an increase beginning in the second year"}
The price of a two-year annuity depends on two payments. The first is $200$ euros and the second $260$ euros. At an annual rate of $10\%$, the contract can be split into an annuity of two payments of $200$ euros and an additional receipt of $60$ euros at time $2$. Therefore
$$
V_0=200(v+v^2)+60v^2.
$$
The difference $d=60$ appears only at time $2$ because the first payment already equals the base amount. If the second receipt fell to $140$ euros, we would substitute $d=-60$ into the same formula. The value would fall by $120v^2$ euros, the present value of the change in the second payment alone.
:::

## Payments in geometric progression

::::teorema{#progressione-geometrica titolo="Payments growing at a constant percentage rate"}
Suppose $n\geq1$ payments in arrears with first payment $R_1$ follow the rule $R_k=R_1(1+g)^{k-1}$, where $g>-1$. The parameter $g$ is the effective rate of change in the payment per period, and $i>-1$ is the effective interest rate for the same period. The ratio of successive present values is $\rho=(1+g)v$. The following formulas therefore hold.

- If $i\ne g$, then $V_0=\dfrac{R_1}{i-g}\left(1-\rho^n\right)$.
- If $i=g$, then $V_0=\dfrac{nR_1}{1+i}$.

The numerator uses the amount of the *first payment actually made*. If the contract specifies a base amount today and calls for the first adjustment before payment, the first amount to be discounted is the base multiplied by $1+g$.

:::dimostrazione
Since payment $k$ has already undergone $k-1$ adjustments and is due in $k$ periods, its present value is
$$
R_1(1+g)^{k-1}v^k=R_1v\,\rho^{k-1}.
$$
If $\rho\ne1$, the sum of the $n$ terms is $R_1v\dfrac{1-\rho^n}{1-\rho}$. Since $1-\rho=(i-g)v$, this gives the first formula. If $\rho=1$, every term equals $R_1v$ and the sum gives the second formula.
:::
::::

:::esempio{titolo="Equal discounted payments"}
A subscription provides four annual receipts, the first being $110$ euros in one year. The amounts increase by $10\%$ per year, and the valuation rate is also $10\%$. The first two present values are $\dfrac{110}{1.1}=100$ euros and $\dfrac{121}{1.1^2}=100$ euros. The ratio $\rho$ equals $1$, so each of the other two payments also contributes $100$ euros and the total present value is $400$ euros.
:::

:::osservazione
If $i>g$, the present values decrease because $\rho<1$, even when the nominal amounts rise. If $i<g$, the present values increase because $\rho>1$. For a finite annuity of positive payments, the value remains positive in both cases. When $i<g$, the denominator $i-g$ and the factor $1-\rho^n$ are both negative, so their ratio is positive. For example, with $R_1=100$ euros, $g=10\%$ and $i=20\%$, the sixth payment is $100\cdot1.1^5=161.05$ euros and its present value is $\dfrac{161.05}{1.2^6}\approx53.94$ euros.

::grafico{curve="t,100*1.1^(t-1),1,6;t,100*1.1^(t-1)/1.2^t,1,6" xmin=0 xmax=6.6 ymin=0 ymax=200 nomi="k,euro" punti="1,100,pieno;2,110,pieno;3,121,pieno;4,133.1,pieno;5,146.41,pieno;6,161.051,pieno;1,83.333,vuoto;2,76.389,vuoto;3,70.023,vuoto;4,64.188,vuoto;5,58.839,vuoto;6,53.936,vuoto" legenda="R_k=100\cdot1.1^{k-1};R_kv^k\ \text{with}\ i=20\%" titolo="Payments growing at $10\%$ per period (filled circles) and their present values at $20\%$ (open circles). Since $\rho=\dfrac{1.1}{1.2}<1$, the present values decrease even as the payments grow."}

:::

:::esempio{titolo="Valuing a deferred annuity"}
An annuity with three payments provides its first receipt of $121$ euros at time $2$. The payments increase by $10\%$ per period and the valuation rate is $10\%$. At time $1$, the three discounted amounts are equal and sum to $3\cdot\dfrac{121}{1.1}=330\,\mathrm{EUR}$. Time $1$ is one year from today, so the present value is $\dfrac{330}{1.1}=300\,\mathrm{EUR}$. The payments are deferred one period relative to dates $1,2,3$, so the additional discount factor is $v$.
:::

## Growing perpetuities and deferral

::::teorema{#perpetuita-crescente titolo="Value of a growing perpetuity"}
A perpetuity makes its first payment $R_1>0$ at time $1$ and its payments change at a periodic rate $g>-1$. At an interest rate $i>-1$ the present value is finite if and only if $i>g$. When this condition holds,
$$
V_0=\frac{R_1}{i-g}.
$$
The formula gives the value one period before the first payment. If the first payment is at time $m+1$, where $m\geq0$ is a whole number of periods, the value at time $m$ is $\dfrac{R_1}{i-g}$ and the value at time $0$ is $\dfrac{R_1v^m}{i-g}$.

:::dimostrazione
The present value of the first $n$ payments is the sum of the first $n$ terms of a geometric sequence with common ratio $\rho=(1+g)v>0$. If $i>g$, then $0<\rho<1$ and $\rho^n$ tends to zero. The finite annuity formula therefore converges to $\dfrac{R_1}{i-g}$. If $i=g$, all discounted payments equal $R_1v>0$ and the partial sums grow without bound. If $i<g$, the discounted payments increase and the partial sums again diverge.
:::
::::

:::esempio{titolo="Present value and the remaining value after a payment"}
A perpetuity pays $120$ euros in one year, with payments growing by $2\%$ at each subsequent date. At a rate of $6\%$ it is worth $\dfrac{120}{0.06-0.02}=3000\,\mathrm{EUR}$ today. Immediately after the first receipt, the next payment is $122.40$ euros. The value of the remaining payments at time $1$ is therefore $\dfrac{122.40}{0.04}=3060\,\mathrm{EUR}$. Indeed, accumulating the initial value for one year gives $3180$ euros, from which the $120$ euros already paid must be subtracted.
:::

:::attenzione
The condition $i>g$ applies to the perpetuity because it requires summing infinitely many present values. If $i=g=5\%$ and the first payment is $105$ euros, ten payments are worth $1000$ euros. For a perpetuity on the same terms the partial sums are $100n$ euros and grow without bound.

::grafico{f="3000*(1-(1.02/1.06)^x);100*x" xmin=0 xmax=54 ymin=0 ymax=6000 nomi="n,euro" asintoti="y=3000" legenda="i=6\%,\ g=2\%,\ R_1=120;i=g=5\%,\ R_1=105" titolo="Present value of the first $n$ payments of two growing perpetuities. With $i>g$ the partial sums approach $\dfrac{120}{0.04}=3000$ euros. With $i=g$ they equal $100n$ euros and grow without bound."}

:::

## Payment rate and constant force of interest

:::definizione{#flussi-continui titolo="Payment rate and value of a continuous cash flow"}
A **payment rate** $c(t)$ gives the amount received per unit of time, for example in euros per year. Over a short interval of length $\Delta t$ the payment is approximately $c(t)\Delta t$. For a payment rate integrable on $[0,T]$ and a constant force of interest $\delta$ expressed in the same time unit, we have
$$
V_0=\int_0^T c(t)e^{-\delta t}\,dt,
\qquad
M_T=\int_0^T c(t)e^{\delta(T-t)}\,dt.
$$
Taking the limit of the sums over small intervals gives the integral. The factor $e^{-\delta t}$ discounts the payment to today, while $e^{\delta(T-t)}$ accumulates it to the final date. Since the second factor equals the first multiplied by $e^{\delta T}$, it follows that $M_T=e^{\delta T}V_0$.
:::

:::esempio{titolo="Continuous payments at a constant rate"}
If the payment rate is constant at $c$ euros per year, then for $\delta\ne0$ integration gives
$$
V_0=\frac{c(1-e^{-\delta T})}{\delta},
\qquad
M_T=\frac{c(e^{\delta T}-1)}{\delta}.
$$
When $\delta=0$, the total amount is $cT$ at both dates because the financial factors equal $1$. With $c=600\,\mathrm{EUR/year}$ and $T=2$ years, the amount without interest is $1200$ euros. If $\delta>0$, the present value is less than $1200$ euros because each future euro is discounted, while the accumulated value is greater because deposits made before $T$ earn interest. With $\delta=0.05\,\mathrm{year}^{-1}$, the two values are $V_0=12000\left(1-e^{-0.1}\right)\approx1141.95$ euros and $M_2=12000\left(e^{0.1}-1\right)\approx1262.05$ euros.

::grafico{f="600;600*exp(-0.05*x)" area="600*exp(-0.05*x);0;0;2" xmin=0 xmax=3 ymin=0 ymax=750 nomi="t,euro/anno" legenda="c=600;600e^{-0.05t}" titolo="A constant payment rate of $600$ euros per year and its discounted rate with $\delta=0.05$. The shaded area between $0$ and $2$ gives the present value of $V_0=12000\left(1-e^{-0.1}\right)$ euros."}

:::

:::osservazione
A payment rate of $1200\,\mathrm{EUR/year}$ distributes $1200$ euros over a full year. A payment of $1200$ euros at year-end delivers the same amount at one instant. At the same positive force of interest, the continuous stream has a higher present value because amounts received before year-end are discounted for less time. If the problem specifies the effective annual rate $i$, the constant force of interest to use in the integral is $\delta=\log(1+i)$.
:::

:::esempio{titolo="A continuous cash flow that begins in one year"}
A stream with constant payment rate $c$ begins at time $1$ and ends at time $3$. With a constant force of interest $\delta>0$, its value at time $1$ is $c\dfrac{1-e^{-2\delta}}{\delta}$ because the stream lasts two years. Its present value is
$$
V_0=e^{-\delta}\frac{c(1-e^{-2\delta})}{\delta}.
$$
The factor $e^{-\delta}$ discounts to today the entire value calculated at time $1$. Indeed, integrating $ce^{-\delta t}$ directly from $1$ to $3$ gives $\dfrac{c}{\delta}(e^{-\delta}-e^{-3\delta})$.
:::

## An exponentially growing payment rate

::::teorema{#flussi-crescenti titolo="Valuing a stream with an exponential payment rate"}
Let $c(t)=c_0e^{\gamma t}$, with $c_0>0$ and a constant force of interest $\delta$. The initial payment rate $c_0$ is an amount per unit of time, and $\gamma$ is its instantaneous relative growth rate in the same time unit. For finite $T$, the formula depends on how the growth rate compares with the force of interest.

- If $\delta\ne\gamma$, then $V_0=c_0\dfrac{1-e^{-(\delta-\gamma)T}}{\delta-\gamma}$.
- If $\delta=\gamma$, then $V_0=c_0T$.

Over an infinite horizon the present value is finite precisely when $\delta>\gamma$. In that case it equals $\dfrac{c_0}{\delta-\gamma}$.

:::dimostrazione
Multiplying the payment rate by the discount factor gives $c_0e^{(\gamma-\delta)t}$. If $\gamma\ne\delta$, an antiderivative is $\dfrac{c_0}{\gamma-\delta}e^{(\gamma-\delta)t}$, and evaluating the difference at the endpoints yields the formula. If $\gamma=\delta$, we integrate the constant $c_0$. As $T\to+\infty$, when $\delta>\gamma$ the exponential tends to zero and the formula has a finite limit. When $\delta\leq\gamma$, the integrand is always at least $c_0>0$, so the integral grows without bound.
:::
::::

:::esempio{titolo="Undiscounted and discounted payment rates"}
With $c_0=100\,\mathrm{EUR/year}$, $\gamma=0.04\,\mathrm{year}^{-1}$ and $\delta=0.08\,\mathrm{year}^{-1}$, the undiscounted payment rate is $100e^{0.04t}$ and the discounted payment rate is $100e^{-0.04t}$. The first increases while the second decreases because the force of interest exceeds the growth rate. Over an infinite horizon the present value is $\dfrac{100}{0.04}=2500\,\mathrm{EUR}$.

::grafico{f="100*exp(0.04*x);100*exp(-0.04*x)" xmin=0 xmax=10 ymin=0 ymax=160 nomi="t,euro/anno" legenda="100e^{0.04t};100e^{-0.04t}" titolo="Undiscounted payment rate and payment rate discounted to time zero at an annual force of interest of 0.08"}

:::

## Time-varying force of interest

:::definizione{#intensita-variabile titolo="The discount factor between two dates"}
If the force of interest $\delta(u)$ is integrable over the interval between dates $s\leq t$, the accumulation factor between those dates is $\exp\!\left(\int_s^t\delta(u)\,du\right)$. The **discount factor** from time $t$ back to time $s$ is its reciprocal,
$$
v(s,t)=\exp\left(-\int_s^t\delta(u)\,du\right).
$$
An amount $C$ due at time $t$ is worth $Cv(s,t)$ at time $s$. For continuous payments from $s$ to $T$, each contribution $c(t)\,dt$ is weighted by $v(s,t)$, so the value is $\int_s^T c(t)v(s,t)\,dt$. When we value the stream at an intermediate date, the integral of the force starts at that same date.
:::

:::esempio{titolo="Two successive levels of the force of interest"}
The force of interest is $0.03\,\mathrm{year}^{-1}$ until time $2$ and $0.05\,\mathrm{year}^{-1}$ from time $2$ to time $5$. A receipt of $1000$ euros at time $5$ has the following value at time $1$.
$$
1000\exp\bigl(-0.03\cdot1-0.05\cdot3\bigr)
=1000e^{-0.18}\,\mathrm{EUR}.
$$
From time $1$ to time $2$, one year passes at the first force of interest. From time $2$ to time $5$, three years pass at the second. The integrals add, so the overall factor is the product of the factors for the two intervals.

::grafico{curve="t,t<1.999?0.03:(t<2.001?0/0:0.05),0,5.5" area="0.03;0;1;2|0.05;0;2;5" segmenti="2,0.03,2,0.05;5,0,5,0.05" etichette="0.25,0.034,δ = 0.03;3.2,0.054,δ = 0.05" xmin=-0.2 xmax=6 ymin=0 ymax=0.07 nomi="u,δ(u)" legenda=0 titolo="A two-level force of interest, in $\mathrm{year}^{-1}$. The shaded area between $1$ and $5$ equals $0.03\cdot1+0.05\cdot3=0.18$. Its negative is the exponent of the discount factor $e^{-0.18}$."}

:::

:::osservazione
If $\delta(u)=a+bu$ and time $u$ is measured in years, $a$ is measured in $\mathrm{year}^{-1}$ and $b$ in $\mathrm{year}^{-2}$. The integral from $0$ to $T$ is $aT+\dfrac{bT^2}{2}$. It is dimensionless, as an exponent must be. Over an interval $[s,t]$, the same integral is $a(t-s)+\dfrac{b(t^2-s^2)}{2}$, since the force at time $s$ already equals $a+bs$.
:::

:::esempio{titolo="Discounting a continuous stream under a piecewise constant force of interest"}
A payment stream with rate $100\,\mathrm{EUR/year}$ runs for two years. The force of interest is zero in the first year and $\delta>0$ in the second. The first interval contributes $100$ euros. A receipt at time $t\in[1,2]$ is discounted only over the interval between $1$ and $t$, so its discount factor is $e^{-\delta(t-1)}$. The second interval contributes $100\dfrac{1-e^{-\delta}}{\delta}$ euros. Valuing the intervals separately ensures the appropriate exponential factor is used in each.
:::

## Accumulating a target sum

:::definizione{#costituzione-capitale titolo="The savings plan equation"}
A **savings plan** specifies the deposits needed to reach a target $K$ at a future time $n$. Let $C_0$ be the amount deposited today and $R_k$ the amounts deposited at times $t_k\leq n$. For a constant effective rate $i>-1$, the condition is
$$
K=C_0q^n+\sum_k R_kq^{n-t_k}.
$$
Every term is valued at time $n$, so a deposit made on the target date itself enters with factor $1$. For $n$ equal annual deposits of $R$ made in arrears, this gives
$$
R=\frac{K-C_0q^n}{s_{\overline n|i}},
\qquad
s_{\overline n|i}=\sum_{j=0}^{n-1}q^j.
$$
The difference in the numerator is the portion of the target to be covered by the new deposits. If it is zero, the initial deposit reaches the target on its own. If it is negative, a withdrawal or a smaller initial deposit is needed to reach $K$ exactly because adding positive deposits would increase the accumulated value.
:::

:::esempio{titolo="A final top-up deposit"}
An account earns $10\%$ per year. Deposits of $1000$ euros today and $500$ euros in one year are planned. The target is $2000$ euros at the end of the second year. At that date the planned deposits are worth $1000\cdot1.1^2+500\cdot1.1=1760\,\mathrm{EUR}$. An additional $240$ euros must therefore be deposited on the target date. If the additional deposit were made one year earlier, the amount would be $\dfrac{240}{1.1}\,\mathrm{EUR}$ because it would earn a year's interest before covering the same final shortfall.

::grafico{curve="t,t<0.999?1000*1.1^t:(t<1.001?0/0:(t<1.999?1600*1.1^(t-1):0/0)),0,2" segmenti="1,1100,1,1600;2,1760,2,2000" punti="0,1000,pieno;1,1100,vuoto;1,1600,pieno;2,1760,vuoto;2,2000,pieno" etichette="0.1,850,1000;1.06,1020,1100;0.68,1640,1600;1.8,1590,1760;1.65,2080,2000" xmin=-0.1 xmax=2.5 ymin=0 ymax=2500 nomi="t,euro" legenda=0 titolo="Account balance at $10\%$ with deposits of $1000$ euros at time $0$, $500$ euros at time $1$ and $240$ euros at time $2$. The open circles show the balances before the deposits and the filled circles the balances immediately afterward."}

:::

:::osservazione
The accumulated value can be checked using a recurrence. If $B_k$ is the balance immediately after the deposit at time $k$, then $B_k=qB_{k-1}+R_k$ with $B_0=C_0$. First, interest is applied to the balance that was invested during the period. The deposit is then added. In the chapter on loan amortization the payment at the end of the period enters the balance recurrence with a negative sign because it reduces the principal owed.
:::
