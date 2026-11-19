---
titolo: Level annuities, deferred annuities and perpetuities
sommario: Present and accumulated values of annuities, payments in advance and in arrears, deferral, and how to find the payment, term or interest rate.
---

## The payment schedule and the ordinary annuity

:::definizione{titolo="An annuity certain with level payments"}
An **annuity certain with level payments** is a sequence of equal payments made on known, equally spaced dates. Write $R$ for each payment and $n$ for the number of payments if the sequence is finite. The interval between consecutive payment dates is the payment period. Two years of quarterly deposits contain eight payments when the first is made after three months and the last after twenty-four months.

Let $i>-1$ be the effective compound interest rate per period. The **accumulation factor** is $q=1+i$ and the **discount factor** is $v=q^{-1}$. If a payment is due at time $t_k$ and valued at time $\tau$, with both times measured in payment periods, its contribution is $Rq^{\tau-t_k}$. Thus the value of the entire annuity at that date is

$$
V(\tau)=\sum_{k=1}^n Rq^{\tau-t_k}.
$$

If the payment falls after $\tau$, the exponent is negative and the payment is discounted. If it has already fallen due, the exponent is positive and it is accumulated. On the payment date itself the exponent is zero, so its contribution is $R$. This sum also values the schedule when the chosen date falls between two payments.
:::

:::esempio{titolo="Value of the entire schedule and value of the remaining payments"}
Three annual payments of $110$ euros are due at times $1,2,3$. At a rate of $10\%$, the value of the entire schedule at time $2$ is

$$
V(2)=110\cdot1.1+110+\frac{110}{1.1}=331\,\mathrm{EUR}.
$$

At time $2$, immediately after the second payment has been received, only the payment at time $3$ remains to be received. It is worth $100$ euros. The first sum values the entire contract at the chosen date. The second value covers only the cash flows still to be received. The same distinction arises in the chapter on the outstanding loan balance.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 linee="-0.35,0 3.7,0;3.57,0.08 3.7,0 3.57,-0.08;0,-0.05 0,0.05;1,-0.05 1,0.05;2,-0.05 2,0.05;3,-0.05 3,0.05" vettori="1,0,1,1;2,0,2,1;3,0,3,1" etichette="-0.039,-0.25,0;1.052,-0.25,1;2.052,-0.25,2;3.052,-0.25,3;3.76,-0.05,t;0.883,1.12,110;1.883,1.12,110;2.883,1.12,110" xmin=-0.6 xmax=4.25 ymin=-0.65 ymax=1.35 titolo="Payments of $110$ euros at times $1$, $2$ and $3$, valued at time $\tau=2$. At $10\%$, the first payment is worth $121$ euros at that time, the second $110$ euros and the third $100$ euros."}
:::

:::osservazione
If the quoted rate is an effective annual rate and payments are monthly, the calculation period is one month. Write $i_a$ for the given annual rate and find the monthly rate $i$ by requiring $(1+i)^{12}=1+i_a$. If instead a nominal annual rate compounded monthly $j^{(12)}$ is quoted, the monthly rate is $i=\dfrac{j^{(12)}}{12}$. The chapter on interest conventions explains both conversions. Once $i$ is known, the value of twelve monthly payments can be calculated using $n=12$.
:::


::::teorema{#rendita-posticipata titolo="Present value of level payments in arrears"}
Let $n\geq1$ be an integer and let $i>-1$. An **annuity-immediate**, also called an ordinary annuity, makes its first payment one period after time zero and its last at time $n$. Its value at time zero is

$$
V(0)=R a_{\overline n|i},\qquad
 a_{\overline n|i}=\sum_{k=1}^n v^k
=\frac{1-v^n}{i}\quad(i\neq0).
$$

The factor $a_{\overline n|i}$ is the present value of $n$ unit payments. For $i=0$, each unit payment is worth one, so $a_{\overline n|0}=n$. The factor replaces the sum of the individual present values with a single multiplication.

:::dimostrazione
Subtract from the sum the same sequence multiplied by $v$. If $A=v+v^2+\cdots+v^n$, we have

$$
\begin{aligned}
A-vA &= (v+v^2+\cdots+v^n)-(v^2+v^3+\cdots+v^{n+1}) \\[6pt]
&=v-v^{n+1}.
\end{aligned}
$$

For $i\neq0$ we have $1-v=iv\neq0$. Dividing by $1-v$ gives $A=\dfrac{v(1-v^n)}{iv}=\dfrac{1-v^n}{i}$. Multiplying by $R$ recovers the value of the schedule.
:::
::::

:::esempio{titolo="Two payments valued today"}
Two payments of $121$ euros are due in one and two years, respectively. At an annual rate of $10\%$, the first contributes $121\cdot\dfrac{10}{11}=110$ euros and the second $121\cdot\left(\dfrac{10}{11}\right)^2=100$ euros. The present value is therefore $210$ euros. The second payment has a lower present value because it is discounted for two periods. Comparing individual terms provides a check on the exponents in the formula.
:::

:::osservazione
For $R>0$ and $i>0$, each factor $v^k$ is less than one, so $V(0)<nR$. For $-1<i<0$ we have $v>1$, so $V(0)>nR$. For instance, at a periodic rate of $-20\%$ a payment of $80$ euros due in one period is worth $100$ euros today. The geometric sum retains its interpretation when the rate is negative. In that case the numerator and denominator of $\dfrac{1-v^n}{i}$ are both negative, so the factor is positive.
:::

## Annuities due

:::teorema{#rendita-anticipata titolo="Present value when payments are moved one period earlier"}
Let $n\geq1$ be an integer and let $i>-1$. An **annuity due starting immediately** makes payments at times $0,1,\ldots,n-1$. Its present value is

$$
V(0)=R\ddot a_{\overline n|i},\qquad
\ddot a_{\overline n|i}=
\sum_{k=0}^{n-1}v^k=q a_{\overline n|i}.
$$

Each payment is received one period earlier than the corresponding payment in arrears, so its present value is multiplied by $q$. The first payment is already available at time zero and contributes $R$. For $i=0$, both factors equal $n$.
:::

:::esempio{titolo="When the first payment is included in the price"}
An annuity due has three payments of $288$ euros at times $0,1,2$. At a rate of $20\%$, the present value is $288+240+200=728$ euros. Immediately after the initial payment, the payments at times $1$ and $2$ remain. Together they are worth $440$ euros. If the three payments fell at times $1,2,3$, their value would be $\dfrac{728}{1.2}$ euros. In both comparisons we start with the payment dates, so the initial payment is counted exactly once.
:::

:::osservazione
Two schedules with the same payment amount and contractual term can differ in timing by one period. Three annual payments made at the beginning of each year are due at dates $0,1,2$. If made at the end of each year, they are due at dates $1,2,3$. At a positive rate, the first schedule has a higher present value because the ratio of the two values is $q>1$. If the rate is negative, the ratio is $q<1$ and the ordering is reversed.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 linee="-0.35,2 3.7,2;3.57,2.08 3.7,2 3.57,1.92;0,1.95 0,2.05;1,1.95 1,2.05;2,1.95 2,2.05;3,1.95 3,2.05;-0.35,0 3.7,0;3.57,0.08 3.7,0 3.57,-0.08;0,-0.05 0,0.05;1,-0.05 1,0.05;2,-0.05 2,0.05;3,-0.05 3,0.05" vettori="0,2,0,3;1,2,1,3;2,2,2,3;1,0,1,1;2,0,2,1;3,0,3,1" etichette="0.06,1.75,0;1.06,1.75,1;2.06,1.75,2;2.955,1.75,3;3.76,1.95,t;-0.045,-0.25,0;1.06,-0.25,1;2.06,-0.25,2;3.06,-0.25,3;3.76,-0.05,t;-0.045,3.12,R;0.955,3.12,R;1.955,3.12,R;0.955,1.12,R;1.955,1.12,R;2.955,1.12,R;3.9,2.45,annuity due;3.9,0.45,ordinary annuity" xmin=-0.6 xmax=5.0 ymin=-0.45 ymax=3.45 titolo="Three equal payments of $R$. Under the annuity due they fall at times $0$, $1$ and $2$, and under the ordinary annuity at times $1$, $2$ and $3$. Each payment under the first schedule is one period earlier than its counterpart under the second, so the ratio of their present values is $q$."}
:::

## Accumulated value at the end of the term

::::teorema{#montante-rendita titolo="Accumulated value of level deposits"}
Let $n\geq1$ be an integer and let $i>-1$. The **accumulated value** at time $n$, immediately after the final payment of an annuity-immediate, is

$$
M=R s_{\overline n|i},\qquad
s_{\overline n|i}=\sum_{k=0}^{n-1}q^k
=\frac{q^n-1}{i}\quad(i\neq0).
$$

For $i=0$, we have $s_{\overline n|0}=n$. The factor $s_{\overline n|i}$ measures the amount accumulated through unit payments. For an annuity due valued at the same time $n$, the factor is $q s_{\overline n|i}$.

:::dimostrazione
Multiply the time-zero value by $q^n$ to move it to time $n$. In the sum, the contribution from the payment due at time $k$ then becomes $Rq^{n-k}$. As $k$ runs from $1$ to $n$, the exponents decrease from $n-1$ to zero. Hence

$$
s_{\overline n|i}=q^n a_{\overline n|i}=\frac{q^n-1}{i}\quad(i\neq0).
$$

Under an annuity due, each deposit remains invested one period longer than the corresponding deposit made in arrears, so the accumulated value is multiplied by a further factor of $q$.
:::
::::

:::esempio{titolo="The last deposit date and the end of the term"}
Three annual deposits of $100$ euros are made in advance at times $0,1,2$. At an annual rate of $10\%$, the accumulated value at time $2$, immediately after the last deposit, is $121+110+100=331$ euros. If the funds remain invested until time $3$, the accumulated value becomes $331\cdot1.1=364.10$ euros. This last amount equals $100q s_{\overline 3|i}$. The two answers differ in their valuation dates because the date of the final payment of an annuity due is $n-1$.

::grafico{curve="t,t<1?100*1.1^t:(t<1.004?0/0:(t<2?210*1.1^(t-1):(t<2.004?0/0:331*1.1^(t-2)))),0,3" segmenti="1,110,1,210;2,231,2,331" punti="0,100;1,110,vuoto;1,210;2,231,vuoto;2,331;3,364.1" etichette="0.08,70,100;1.08,85,110;0.62,225,210;2.08,205,231;1.62,345,331;2.62,395,364.10" xmin=-0.2 xmax=3.5 ymin=0 ymax=400 nomi="t,euro" legenda=0 titolo="Account balance for deposits of $100$ euros at times $0$, $1$ and $2$ at $10\%$ per year. Between deposits, the balance grows by a factor of $1.1$ per year. Open circles show the balances immediately before deposits, and filled circles the balances immediately afterward. At time $2$ the balance is $331$ euros, and at time $3$ it is $364.10$ euros."}
:::

## Deferral

:::definizione{#rendita-differita titolo="Deferred payments and the reference date"}
Let $m\geq0$ be an integer. An **ordinary annuity deferred for $m$ periods** makes payments at times $m+1,\ldots,m+n$. One period before the first payment, that is, at time $m$, its value is $R a_{\overline n|i}$. Discounting this amount for $m$ periods gives the present value, so

$$
V(0)=v^m R a_{\overline n|i}.
$$

An annuity due deferred for $m$ periods instead makes payments at times $m,\ldots,m+n-1$ and has present value $v^m R\ddot a_{\overline n|i}$. In both cases the factor $v^m$ discounts the annuity value measured at time $m$ back to time zero. The formula to use depends on the position of the first payment relative to that reference date.

If the payment dates stay the same and the valuation date is $\tau$, multiply the time-zero value by $q^\tau$. For example, a schedule with payments at times $4,5,6$ is worth $vR a_{\overline3|i}$ at time $2$. The ordinary annuity factor gives its value at time $3$, so it only needs to be discounted one period. The deferral from time zero describes the payment schedule, while the exponent of the discount or accumulation factor also depends on the chosen valuation date.
:::

:::esempio{titolo="Two representations of the same payment schedule"}
Three level payments are due at times $3,4,5$. Treating them as an ordinary annuity valued at time $2$ gives $V(0)=v^2Ra_{\overline3|i}$. Alternatively, value the schedule at time $3$ and include the initial payment immediately, which gives $V(0)=v^3R\ddot a_{\overline3|i}$. The results agree because $v^3\ddot a_{\overline3|i}=v^3 q a_{\overline3|i}=v^2 a_{\overline3|i}$.

::grafico{xmin=-0.5 xmax=6 ymin=-0.15 ymax=1.55 nomi="t,rate" vettori="3,0,3,1,R;4,0,4,1,R;5,0,5,1,R" unicolore=1 punti="2,0,pieno" legenda=0 titolo="The horizontal axis shows the dates. The unit-height arrows represent equal payments of amount R. The point at time 2 marks the reference date for the ordinary annuity factor."}
:::

:::attenzione
If the first payment falls at time $4$, an ordinary annuity is deferred for three periods. Applying the factor $v^4$ to a single unit payment in arrears would give $v^4a_{\overline1|i}=v^5$. This would value a payment at time $5$. The exponent of the first discount factor in the sum must equal the number of periods between time zero and the first payment.
:::

## Perpetuities

::::teorema{#rendita-perpetua titolo="Value of a level perpetuity"}
Let $R>0$. A **perpetuity** makes the same payment at regular intervals for an unlimited number of periods. If $i>0$, the time-zero value of a perpetuity with its first payment at time $1$ is

$$
V(0)=\sum_{k=1}^{\infty}Rv^k=\frac Ri.
$$

If the first payment falls at time $0$, add the initial payment $R$ to the value $\dfrac Ri$. If the first payment falls at time $m+1$, the present value is $v^m\dfrac Ri$. Thus the formula $\dfrac Ri$ values the perpetuity one period before the first payment.

::grafico{f="(1-1.2^(-x))/0.2" xmin=0 xmax=21 ymin=0 ymax=6 nomi="n,a" asintoti="y=5" punti="1,0.8333;2,1.5278;5,2.9906;10,4.1925;20,4.8696" legenda=0 titolo="The factor $a_{\overline n|i}=\dfrac{1-v^n}{i}$ at rate $i=20\%$ as a function of the number of payments $n$. The points correspond to $n=1$, $2$, $5$, $10$ and $20$. The factor increases with $n$ and approaches $\dfrac{1}{i}=5$, the value of a perpetuity with unit payments."}

:::dimostrazione
Start with the first $n$ payments, worth $R\dfrac{1-v^n}{i}$. The assumption $i>0$ implies $0<v<1$, so $v^n\to0$ as $n\to\infty$. The limit of the partial sums is $\dfrac Ri$. If $i=0$, every term equals $R$ and the partial sums grow without bound. If $-1<i<0$, each contribution exceeds $R$, so the partial sums again diverge to $+\infty$.
:::
::::

:::esempio{titolo="A deferred perpetuity"}
A perpetuity pays $144$ euros annually starting at time $3$. At an annual rate of $20\%$, its value one period before the first payment is $\dfrac{144}{0.2}=720$ euros. This is its value at time $2$, so today it is worth $720\cdot\left(\dfrac56\right)^2=500$ euros. The amount can be checked by following the invested principal. Five hundred euros grows to $720$ in two years and from then on earns $144$ euros of interest each year while leaving the principal intact.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 linee="-0.35,0 6.7,0;6.57,0.08 6.7,0 6.57,-0.08;0,-0.05 0,0.05;1,-0.05 1,0.05;2,-0.05 2,0.05;3,-0.05 3,0.05;4,-0.05 4,0.05;5,-0.05 5,0.05;6,-0.05 6,0.05" vettori="3,0,3,1;4,0,4,1;5,0,5,1;6,0,6,1" punti="0,0,pieno;2,0,pieno" etichette="-0.063,-0.25,0;0.937,-0.25,1;1.937,-0.25,2;3.084,-0.25,3;4.084,-0.25,4;5.084,-0.25,5;6.084,-0.25,6;6.76,-0.05,t;2.811,1.12,144;3.811,1.12,144;4.811,1.12,144;5.811,1.12,144;6.25,0.3,…;-0.45,0.45,V(0) = 500;1.55,0.45,V(2) = 720" xmin=-0.6 xmax=7.25 ymin=-0.65 ymax=1.35 titolo="Perpetuity of $144$ euros a year, with first payment at time $3$ and interest rate $20\%$. The formula $\dfrac{R}{i}$ gives $720$ euros at time $2$. Discounting for two years gives $500$ euros at time $0$."}
:::

:::osservazione
A perpetuity also measures the present value of payments excluded from a finite schedule. After the first $n$ payments of an ordinary perpetuity, payments from time $n+1$ onward remain. They are worth $\dfrac Ri$ at time $n$, so today they are worth $v^n\dfrac Ri$. The difference between the full perpetuity and the finite schedule is exactly this value. For example, if the perpetuity is worth $1200$ euros and $v^n=0.25$, the first $n$ payments are worth $1200-300=900$ euros. This recovers the finite present value formula from the schedule of remaining payments.
:::

## Finding the payment

:::definizione{#rata-incognita titolo="A payment equivalent to a principal or a target accumulated value"}
If a principal $C$ available today is equivalent to $n$ level payments in arrears, the equation is $C=R a_{\overline n|i}$. Since the annuity factor is a sum of positive terms, the payment is uniquely determined by

$$
R=\frac{C}{a_{\overline n|i}}.
$$

To accumulate an amount $M$ at time $n$ through deposits in arrears, the equation is instead $M=R s_{\overline n|i}$, so $R=\dfrac{M}{s_{\overline n|i}}$. The date at which the principal is valued determines which factor appears in the denominator. If $i=0$, both factors equal $n$ and the payment is the principal divided by the number of deposits.
:::

:::esempio{titolo="Regular installments and an additional final payment"}
A principal of $310$ euros is repaid with two equal year-end installments and an additional final payment of $121$ euros on the second due date. The interest rate is $10\%$. The additional final payment is worth $121\left(\dfrac{10}{11}\right)^2=100$ euros today. The two regular installments must cover the remainder, amounting to $210$ euros. Since $a_{\overline2|i}=\dfrac{210}{121}$, each regular installment is $121$ euros. On the second date the total payment is $242$ euros because it includes both the regular installment and the additional amount.
:::

:::osservazione
Even when the principal is given in euros and cents, dividing it by the annuity factor can give a payment with more than two decimal places. For example, at zero interest three theoretically identical payments repay $100$ euros if each is $\dfrac{100}{3}$ euros. Two payments of $33.33$ euros leave $33.34$ euros to be paid on the final date. At a nonzero rate, rounding differences on early payments are carried to the final date using the accumulation factors. The equation of value is therefore solved first with exact figures, and the rounding convention for the actual payments is stated separately.
:::

## Finding the term

:::teorema{#durata-incognita titolo="The theoretical term and the number of payment dates"}
Let $C>0$, $R>0$ and $i>0$. To repay $C$ with level payments in arrears, we must solve $C=R\dfrac{1-q^{-n}}i$. A positive, finite real solution exists if and only if $C<\dfrac Ri$. Indeed, isolating $q^{-n}$ gives $q^{-n}=1-\dfrac{Ci}{R}$, which must lie in $(0,1)$. Under these conditions,

$$
n=-\frac{\log\left(1-\frac{Ci}{R}\right)}{\log q}.
$$

The formula gives a theoretical term. If $n$ is an integer, it describes a schedule with all payments equal. If $n$ is not an integer and payments must fall at regular intervals, the regular installment can be paid on the first $\lfloor n\rfloor$ dates, followed by a smaller final payment on the next date. If $R=Ci$, the payment covers exactly one period's interest and the debt stays constant. If $R<Ci$, the debt after the first payment exceeds the initial principal. At a zero rate the equation is $C=nR$.
:::

:::esempio{titolo="Paying off the balance on the next due date"}
A loan of $150$ euros is repaid in installments of $100$ euros at an annual rate of $10\%$. After one year the balance before payment is $165$ euros, so $65$ euros remains after the first payment. At the second due date the amount required to pay off the loan is $65\cdot1.1=71.50$ euros. The theoretical term is between one and two years because the present value of one installment is less than $150$ euros and the present value of two is greater than $150$ euros. The balance is accumulated for a full year because the second due date is time $2$.

::grafico{curve="t,t<1?150*1.1^t:(t<1.004?0/0:65*1.1^(t-1)),0,2" segmenti="1,165,1,65;2,71.5,2,0" punti="0,150;1,165,vuoto;1,65;2,71.5,vuoto;2,0" etichette="0.08,128,150;1.08,172,165;1.08,45,65;2.08,80,71.50" xmin=-0.2 xmax=2.6 ymin=0 ymax=200 nomi="t,euro" legenda=0 titolo="A loan of $150$ euros at $10\%$ with installments of $100$ euros. The balance rises to $165$ euros, falls to $65$ euros after the first payment, and at time $2$ is $71.50$ euros, the final payoff amount. The open circles show the balances before payment."}
:::

## Finding the interest rate

::::teorema{#tasso-rendita titolo="Existence and uniqueness of the implied rate"}
Let $n\geq1$ be an integer and let $R>0$. The present value of an annuity-immediate as a function of the rate is

$$
V(i)=R\sum_{k=1}^{n}(1+i)^{-k},\qquad i>-1.
$$

For every price $C>0$ there is a unique rate $i>-1$ satisfying $V(i)=C$. The rate is positive for $C<nR$, zero for $C=nR$ and negative for $C>nR$. Comparing the price with the sum of the nominal payments establishes the sign of the rate before any numerical search.

:::dimostrazione
Each term is continuous and strictly decreasing in $i$ because its derivative is $-kR(1+i)^{-k-1}<0$. Consequently the sum has the same properties. As $i\to-1^+$, the factor $(1+i)^{-1}$ diverges, so $V(i)\to+\infty$. As $i\to+\infty$, every term approaches zero and so does the finite sum. By continuity every positive price is attained at least once, and strict monotonicity makes it unique. Finally, $V(0)=nR$, which gives the three conditions for the sign of the rate.
:::
::::

:::esempio{titolo="Finding the rate for two payments"}
Two annual payments in arrears of $169$ euros have a present value of $230$ euros. If $v$ is the one-year discount factor, the equation is $169(v+v^2)=230$. The value $v=\dfrac{10}{13}$ satisfies it because $169v=130$ and $169v^2=100$. The rate is therefore $i=v^{-1}-1=30\%$. With more payments one can apply bisection to the function $V(i)-C$. If the value at the midpoint exceeds the price, the required rate is above the midpoint because $V$ is decreasing. If the value at the midpoint is below the price, the root lies in the half containing the lower rates.
:::

:::osservazione
For an annuity due with at least two payments, the initial term $R$ is constant and the other terms decrease as the rate increases. The limit as $i\to+\infty$ is $R$, so the equation has a unique finite solution for every price $C>R$. If the annuity due consists of just one payment, its value equals $R$ at every rate. Depending on the specified price, the equation then holds for all rates or has no solution. The rate is undetermined when $C=R$.
:::

:::esempio{titolo="Bracketing the required rate"}
Two payments in arrears of $100$ euros have a price of $175$ euros. At $10\%$ their value is approximately $173.55$ euros, so the required rate is below $10\%$. At a zero rate they are worth $200$ euros, so the required rate lies between zero and $10\%$. The midpoint is $5\%$, at which rate their value is approximately $185.94$ euros. One iteration narrows the interval to the range from $5\%$ to $10\%$. Reporting the endpoints of the final interval with the rate estimate shows the precision achieved.

::grafico{f="100/(1+x/100)+100/(1+x/100)^2;175" xmin=0 xmax=15 ymin=160 ymax=210 nomi="i,V" punti="0,200,vuoto;5,185.94,vuoto;10,173.55,vuoto;9.38,175,pieno" segmenti="9.38,160,9.38,175" etichette="0.4,203,200;5.3,189,185.94;10.3,169,173.55;7.4,163,i ≈ 9.38" legenda="V(i);C=175" titolo="Present value of two payments in arrears of $100$ euros as a function of the rate $i$, shown as a percentage on the horizontal axis, with a price of $C=175$ euros. The open circles show trials at $0\%$, $5\%$ and $10\%$. The intersection gives the implied rate, approximately $9.38\%$."}
:::
