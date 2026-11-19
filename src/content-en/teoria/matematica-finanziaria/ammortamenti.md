---
titolo: Loan amortization and outstanding balances
sommario: Constructing repayment schedules, finding the outstanding balance, calculating payoff amounts, valuing a loan and renegotiating its terms.
---

## Equations for a repayment schedule

:::definizione{#piano-ammortamento titolo="Installments, principal and interest"}
When the loan is issued, the borrower receives the principal $D_0$. At dates $k=1,\ldots,n$ the borrower pays installments $R_k$, each at the end of the corresponding period. Let $D_k$ be the balance immediately after installment $k$ and $i$ the effective rate per period. Assume $i\geq 0$ and that the rate stays constant. Write $q=1+i$ for the one-period accumulation factor and $v=q^{-1}$ for the corresponding discount factor.

The **interest portion** $I_k$ is the charge for the principal the borrower still has use of during period $k$. That principal is $D_{k-1}$, so $I_k=iD_{k-1}$. The part of the installment that reduces the debt is the **principal portion** $C_k=R_k-I_k$. These relationships give

$$
\begin{aligned}
D_k &= D_{k-1}-C_k \\[6pt]
    &= qD_{k-1}-R_k.
\end{aligned}
$$

The balance *before* the payment is $qD_{k-1}$ because it includes interest accrued during the period. The balance *after* payment is $D_k$. This distinction also makes it possible to read a schedule correctly when an installment includes an extra principal payment.
:::

:::esempio{titolo="Moving from one row to the next"}
A loan of $1000\,\mathrm{EUR}$ carries an effective rate of $5\%$ per period and has a first installment of $300\,\mathrm{EUR}$. Interest for the first period is $0.05\cdot1000=50\,\mathrm{EUR}$. The installment therefore repays $300-50=250\,\mathrm{EUR}$ of principal and leaves a balance of $750\,\mathrm{EUR}$. If the second installment is also $300\,\mathrm{EUR}$, its interest portion is $0.05\cdot750=37.50\,\mathrm{EUR}$. Its principal portion is $262.50\,\mathrm{EUR}$ and the balance after the second installment is $487.50\,\mathrm{EUR}$. Immediately before the second installment, the balance is $787.50\,\mathrm{EUR}$ because the period's interest has already accrued.
:::

:::osservazione
A loan paid off at time $n$ has $D_n=0$. Since $C_k=D_{k-1}-D_k$, summing the principal portions cancels all intermediate balances and leaves $D_0-D_n=D_0$. Subtracting the amount originally advanced from total installments therefore gives total interest. This accounting check applies to all schedules in which the installments contain no fees.

The amounts displayed in a table can be rounded to the nearest cent while calculations retain their original precision. If the amounts actually paid are rounded, the rounded payments must enter the balance recurrence. The final installment is determined from the balance immediately before payment, using the applicable rounding convention.
:::

:::attenzione
If $R_k=I_k$, the payment covers only interest and the balance stays constant. If $R_k<I_k$ and the contract adds unpaid interest to the loan balance, the principal portion is negative. For example, with an opening balance of $1000\,\mathrm{EUR}$, a rate of $5\%$ and a payment of $40\,\mathrm{EUR}$, the balance rises to $1010\,\mathrm{EUR}$ because $50\,\mathrm{EUR}$ in interest accrues and only $40\,\mathrm{EUR}$ is paid.
:::


:::osservazione
During an **initial interest-only period**, each payment covers all interest accrued by its due date and has zero principal portion. The balance when amortization begins therefore equals the original loan amount. For example, on a loan of $2000\,\mathrm{EUR}$ at $5\%$ per year, an initial interest-only year requires a payment of $100\,\mathrm{EUR}$ and leaves the balance at $2000\,\mathrm{EUR}$.
:::

## Level-payment amortization (French method)

::::teorema{#francese titolo="A constant installment"}
Let $D_0>0$ be the principal of a loan at a constant effective rate $i\geq 0$. Under the French method the borrower makes $n\geq 1$ equal payments in arrears. Write $a_{\overline n|i}$ for the value at time zero of $n$ unit payments due at times $1$ through $n$. The installment and the sequence of principal portions satisfy

$$
R=\frac{D_0}{a_{\overline n|i}},\qquad C_{k+1}=qC_k\quad (1\leq k<n).
$$

The first formula determines the payment from the contract terms. The second gives each principal portion from the preceding one. For $i>0$ the principal portions increase, and the interest portions decrease by the same amount. For $i=0$ the annuity factor is $n$, so each installment repays exactly $\dfrac{D_0}{n}$.

:::dimostrazione
Value the installments and the amount advanced at the same date. The initial value of the payments is $R\sum_{k=1}^n v^k=R a_{\overline n|i}$. Equating it to $D_0$ gives the value of $R$. Since $D_k=D_{k-1}-C_k$, we obtain

$$
\begin{aligned}
C_{k+1}
  &= R-iD_k \\[6pt]
  &= R-iD_{k-1}+iC_k \\[6pt]
  &= qC_k.
\end{aligned}
$$

The principal portions sum to $D_0>0$ and are all positive multiples of $C_1$. Hence $C_1>0$, and if $i>0$ the common ratio $q>1$ makes the principal portions strictly increasing. Since $I_k=R-C_k$ and $R$ is constant, the interest portions are strictly decreasing.
:::
::::

:::esempio{titolo="A schedule with two annual installments"}
Let $D_0=2100\,\mathrm{EUR}$, $i=10\%$ and $n=2$. The present value of a unit payment at the end of year one plus a unit payment at the end of year two is $\dfrac{1}{1.1}+\dfrac{1}{1.1^2}=\dfrac{210}{121}$. The installment is therefore $1210\,\mathrm{EUR}$. The repayment schedule, with all amounts in euros, is

| Installment | Opening balance | Interest | Principal repaid | Payment | Closing balance |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1 | 2100 | 210 | 1000 | 1210 | 1100 |
| 2 | 1100 | 110 | 1100 | 1210 | 0 |

Interest falls from $210$ to $110\,\mathrm{EUR}$ because interest in the second installment is charged only on the $1100\,\mathrm{EUR}$ still outstanding. The principal portions add up to $2100\,\mathrm{EUR}$ and the final balance is zero.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 linee="-0.52,0 3.51,0;3.38,0.08 3.51,0 3.38,-0.08;0,-0.05 0,0.05;1.3,-0.05 1.3,0.05;2.6,-0.05 2.6,0.05" vettori="0,0,0,1.4,2100;1.3,0,1.3,-0.807,1210;2.6,0,2.6,-0.807,1210" etichette="-0.16,-0.22,0;1.14,-0.22,1;2.44,-0.22,2;3.55,-0.04,t" xmin=-0.78 xmax=3.86 ymin=-1.007 ymax=1.6 titolo="Loan cash flows from the borrower's perspective, in euros. The upward arrow represents the principal of $2100$ received at time $0$. The downward arrows are the two installments of $1210$ paid at times $1$ and $2$. Time $t$ is measured in years."}
:::

:::osservazione
An additional payment at maturity changes the equation of value. If at the end of period $n$ the last regular installment $R$ is accompanied by an additional amount $B$, then

$$
D_0=R a_{\overline n|i}+Bv^n.
$$

Subtract the present value of $B$ from the principal before dividing by the annuity factor. For example, with $D_0=2200\,\mathrm{EUR}$, $i=10\%$, $n=2$ and $B=1210\,\mathrm{EUR}$, the additional payment has present value $1000\,\mathrm{EUR}$. The two regular installments cover the remaining present value of $1200\,\mathrm{EUR}$, so each is $\dfrac{4840}{7}\,\mathrm{EUR}$, or approximately $691.43\,\mathrm{EUR}$. The total payment on the final date is approximately $1901.43\,\mathrm{EUR}$.
:::

:::esempio{titolo="Components of three equal installments"}
Let $D_0=3000\,\mathrm{EUR}$, $i=5\%$ and $n=3$. The annuity factor is
$$
a_{\overline 3|0.05}=\frac{1-1.05^{-3}}{0.05}\approx2.72325,
$$
so the installment is $R=\dfrac{3000}{2.72325}\approx1101.63\,\mathrm{EUR}$. First-period interest accrues on the full principal and equals $0.05\cdot3000=150\,\mathrm{EUR}$, so the principal portion of the first installment is $C_1\approx951.63\,\mathrm{EUR}$. The relation $C_{k+1}=1.05\,C_k$ gives $C_2\approx999.21\,\mathrm{EUR}$ and $C_3\approx1049.17\,\mathrm{EUR}$. The interest portions are the differences between the installment and its principal portions, approximately $150$, $102.42$ and $52.46\,\mathrm{EUR}$. The outstanding balance after the first installment is therefore $3000-951.63=2048.37\,\mathrm{EUR}$.

::grafico{curve="t,1101.625694+0*t,1,3;t,951.625694*1.05^(t-1),1,3;t,1101.625694-951.625694*1.05^(t-1),1,3" xmin=0 xmax=3.6 ymin=0 ymax=1500 nomi="k,euro" punti="1,1101.63;2,1101.63;3,1101.63;1,951.63;2,999.21;3,1049.17;1,150;2,102.42;3,52.46" legenda="R;C_k;I_k" titolo="Installment, principal portions and interest portions in a level-payment schedule with $D_0=3000$ euros, $i=5\%$ and $n=3$. The principal portions grow by a factor of $1.05$, and at each payment date $C_k+I_k=R$."}
:::

## Equal-principal amortization (Italian method)

:::definizione{#italiano titolo="A constant principal portion"}
Under the Italian method, every installment repays the same fraction of the initial principal. With $n$ installments paid in arrears and a constant effective rate $i\geq 0$, we have $C_k=C=\dfrac{D_0}{n}$. After $k$ payments the borrower has repaid $k$ equal portions of principal, so

$$
D_k=D_0-kC,\qquad I_k=i[D_0-(k-1)C],\qquad R_k=C+I_k.
$$

In each period the opening balance falls by $C$. With $i>0$, the installment therefore decreases by $iC$ each period. Both the installments and the interest portions follow arithmetic progressions. Since the principal portion is known, any row of the schedule can be calculated without constructing the preceding rows.
:::

:::esempio{titolo="The third installment and total interest"}
For $D_0=3000\,\mathrm{EUR}$, $n=3$ and $i=5\%$, the borrower repays $1000\,\mathrm{EUR}$ of principal on each date. The opening balances for the three periods are $3000$, $2000$ and $1000\,\mathrm{EUR}$, so the interest portions are $150$, $100$ and $50\,\mathrm{EUR}$. The third installment is $1050\,\mathrm{EUR}$ and total interest is $300\,\mathrm{EUR}$. In general, the average of the opening balance in the first period, $D_0$, and in the last period, $\dfrac{D_0}{n}$, is $\dfrac{D_0(n+1)}{2n}$. Multiplying by the $n$ periods and the rate $i$ gives

$$
\sum_{k=1}^n I_k=iD_0\frac{n+1}{2}.
$$

::grafico{curve="t,1200-50*t,1,3;t,1000+0*t,1,3;t,200-50*t,1,3" xmin=0 xmax=3.6 ymin=0 ymax=1500 nomi="k,euro" punti="1,1150;2,1100;3,1050;1,1000;2,1000;3,1000;1,150;2,100;3,50" legenda="R_k;C;I_k" titolo="Equal-principal schedule with $D_0=3000$ euros, $i=5\%$ and $n=3$. The principal portion stays at $1000$ euros, while the installment and its interest portion each decrease by $50$ euros per payment date."}
:::

:::osservazione
Given the same principal, number of payments and positive rate, equal-principal amortization repays more principal early in the schedule than level-payment amortization when $n>1$. Indeed, the mean principal portion under the level-payment method is $C=\dfrac{D_0}{n}$, and the portions form a strictly increasing sequence. For each $k<n$ the average of the first $k$ principal portions of that schedule is therefore below $C$. Consequently the equal-principal balance after installment $k$ is smaller, as is the interest charged on that balance in the next period. Both loans are fully repaid on the final date.
:::

::grafico{curve="t,3000-1000*t,0,3;t,3000*(1.05^3-1.05^t)/(1.05^3-1),0,3" nomi="k,euro" xmin=-0.3 xmax=3.3 ymin=-400 ymax=3600 legenda="D_k\ \mathrm{equal principal};D_k\ \mathrm{level payment}" punti="0,3000;1,2000;2,1000;3,0;1,2048.3743,vuoto;2,1049.1673,vuoto" titolo="Balance after installment k, in euros, on a loan of 3000 euros at 5%. The filled circles show equal-principal amortization and the open circles level-payment amortization. The schedules agree at k = 0 and k = 3."}

## Sinking-fund repayment (American method)

:::definizione{#americano titolo="Repayment at maturity and the sinking fund"}
On a loan with a single principal repayment, or a *bullet loan*, the borrower pays interest $iD_0$ at each period-end and repays $D_0$ at maturity $n$. The principal owed to the lender stays at $D_0$ after each of the first $n-1$ payments. At maturity the lender receives both the last period's interest and the principal.

Under the **sinking-fund method**, the borrower makes a separate, constant deposit $Q$ at the end of each period to accumulate the principal due. Let $j\geq0$ be the effective rate earned by the fund. Writing $s_{\overline n|j}$ for the accumulated value of $n$ unit deposits made in arrears, the deposit amount is

$$
Q=\frac{D_0}{s_{\overline n|j}},\qquad
s_{\overline n|j}=\sum_{k=1}^n(1+j)^{n-k}.
$$

The payment to the lender and the deposit into the fund arise from separate arrangements. If the deposits are made as scheduled, the fund supplies the full principal repayment to the lender at maturity. The borrower's periodic outlay is then $iD_0+Q$, counting the principal transferred from the fund only once.
:::

:::esempio{titolo="Loan interest and the return on the fund"}
A principal of $2100\,\mathrm{EUR}$ must be repaid in two years. The loan costs $5\%$ per year, so the lender receives $105\,\mathrm{EUR}$ in interest at each year-end. The fund earns $10\%$ per year. The first deposit earns interest for one year, and the second enters the fund on the date the principal is needed. Consequently $Q(1.1+1)=2100\,\mathrm{EUR}$ and each deposit is $1000\,\mathrm{EUR}$. The borrower's outlay is $1105\,\mathrm{EUR}$ per year. After the first payment the fund holds $1000\,\mathrm{EUR}$, while the principal still owed to the lender is $2100\,\mathrm{EUR}$.

::grafico{curve="t,2100+0*t,0,2;t,1000*1.1^(t-1),1,2" segmenti="1,0,1,1000;2,1100,2,2100" punti="0,0;1,1000;2,2100;2,1100,vuoto" xmin=-0.2 xmax=2.5 ymin=0 ymax=2500 nomi="t,euro" legenda="\text{Principal owed to the lender};\text{Fund balance}" titolo="Principal owed to the lender and balance of the fund earning $10\%$, in euros. The fund receives $1000$ euros at times $1$ and $2$. The open circle shows its balance of $1100$ euros immediately before the second deposit."}
:::

:::osservazione
If the fund earns zero interest, the deposits simply add up, giving $Q=\dfrac{D_0}{n}$. If the fund and the loan have the same positive effective rate $i$, the periodic outlay $iD_0+Q$ equals the level installment on a loan of the same term. Indeed, $s_{\overline n|i}=q^n a_{\overline n|i}$ and $i\,s_{\overline n|i}=q^n-1$, so

$$
iD_0+\frac{D_0}{s_{\overline n|i}}
=\frac{D_0q^n}{s_{\overline n|i}}
=\frac{D_0}{a_{\overline n|i}}.
$$

The equality applies to the borrower's periodic outlay. The balances owed to the lender follow different schedules.
:::

## The outstanding loan balance

::::teorema{#debito-residuo titolo="Prospective and retrospective methods"}
Let $D_0$ be the initial principal, $R_h$ the actual installments at times $h=1,\ldots,n$, and $i$ the constant contractual rate per period. Suppose the loan is paid off at time $n$. Immediately after installment $k$ the outstanding balance is

$$
\begin{aligned}
D_k &= \sum_{h=k+1}^n R_h q^{k-h} \\[6pt]
    &= D_0q^k-\sum_{h=1}^k R_h q^{k-h}.
\end{aligned}
$$

The **prospective method** discounts only the future installments back to time $k$. The **retrospective method** accumulates the original principal and the payments already made to that same date, then subtracts the accumulated payments from the accumulated principal. The prospective method is convenient when few payments remain. The retrospective method is convenient when the original principal and early payments are known.

:::dimostrazione
At the initial date the principal equals the present value of all the installments, so $D_0=\sum_{h=1}^n R_hq^{-h}$. Multiplying by $q^k$ and separating the payments already made from the rest gives

$$
D_0q^k=\sum_{h=1}^k R_hq^{k-h}+\sum_{h=k+1}^n R_hq^{k-h}.
$$

Subtracting the first sum gives the retrospective formula. The remaining sum contains only future installments. Each exponent $k-h$ is negative and discounts its payment to date $k$, so this sum also gives the prospective formula.
:::
::::

:::esempio{titolo="Two calculations at the same point in time"}
For a loan of $2100\,\mathrm{EUR}$ at $10\%$ repaid in two installments of $1210\,\mathrm{EUR}$, only one future payment remains to be discounted immediately after the first installment. The prospective method gives $\dfrac{1210}{1.1}=1100\,\mathrm{EUR}$. The retrospective method gives $2100\cdot1.1-1210=1100\,\mathrm{EUR}$. The first installment is subtracted in the retrospective calculation because it has just been paid at the valuation date. For a level-payment loan with $n-k$ equal payments remaining, we can write $D_k=R a_{\overline{n-k}|i}$, where $a_{\overline 0|i}=0$.

::grafico{curve="t,t<1.002?2100*1.1^t:(t<1.004?0/0:1100*1.1^(t-1)),0,2" segmenti="1,2310,1,1100;2,1210,2,0" punti="0,2100;1,2310,vuoto;1,1100;2,1210,vuoto;2,0" etichette="1.06,2380,2310;1.06,1000,1100;2.06,1280,1210" xmin=-0.2 xmax=2.5 ymin=0 ymax=2500 nomi="t,euro" legenda=0 titolo="Balance of a loan of $2100$ euros at $10\%$ repaid in two installments of $1210$ euros. Between payment dates the balance accrues interest at $10\%$ per year. The open circles show the balances before payment, $2310$ and $1210$ euros, and the filled circles the balances after payment, $1100$ and $0$ euros."}
:::

## Early repayment

:::definizione{#estinzione-anticipata titolo="Contractual payoff and market value"}
In the model without additional charges, paying off the loan immediately after installment $k$ requires a payment of $D_k$. If payoff occurs a fraction $\theta$ of a period later, with $0<\theta<1$, and the contract uses exponential interpolation, the amount rises to $D_kq^\theta$. Any additional charges specified in the problem enter at the dates they fall due.

The **market value of the loan** is the value of the remaining installments discounted at the valuation rate $j$. At the same date $k$ it is

$$
V_k(j)=\sum_{h=k+1}^n R_h(1+j)^{k-h},\qquad j>-1.
$$

If $j=i$, this value equals $D_k$. If all remaining installments are positive and at least one remains, the value falls as $j$ rises because each exponent $k-h$ is negative. The agreed installments are the cash flows used in the valuation.
:::

:::esempio{titolo="The payoff balance and the market price of the loan"}
Immediately after an installment, the only remaining payment is $1210\,\mathrm{EUR}$ due in one year. The contractual rate is $10\%$, so the payoff amount on that date is $1100\,\mathrm{EUR}$ in the absence of charges. If the valuation rate is $21\%$, the market value is $\dfrac{1210}{1.21}=1000\,\mathrm{EUR}$. Both calculations use the same payment and the discount factor appropriate to each valuation. If payoff occurs immediately *before* the current installment, the payment due on that date must also be included.

::grafico{f="1210/(1+x/100)" xmin=0 xmax=32 ymin=0 ymax=1400 nomi="j,euro" punti="10,1100;21,1000" segmenti="10,0,10,1100;21,0,21,1000" etichette="11,1180,1100;22,1080,1000" legenda="V_k(j)" titolo="Value at date $k$ of the single remaining payment of $1210$ euros, given by $V_k(j)=\dfrac{1210}{1+j}$. The horizontal axis shows the rate $j$ as a percentage. At the contractual rate of $10\%$ the value equals the outstanding balance of $1100$ euros. At $21\%$ it falls to $1000$ euros."}
:::

## Interest-only and principal-only components

:::definizione{#usufrutto-nuda-proprieta titolo="Valuing the two components separately"}
For a given repayment schedule, the **interest-only value (usufruct)** $U(j)$ is the initial value of the interest portions at the effective valuation rate $j>-1$. The **principal-only value (bare ownership)** $N(j)$ is the initial value of the principal portions at the same rate. The two components are given by

$$
\begin{aligned}
U(j) &= \sum_{k=1}^n I_k(1+j)^{-k},\\[6pt]
N(j) &= \sum_{k=1}^n C_k(1+j)^{-k}.
\end{aligned}
$$

Use the contractual rate $i$ to determine the components of the amortization schedule and the valuation rate $j$ to value them. Since $I_k+C_k=R_k$ in each period, the total value of the installments is $U(j)+N(j)$. For $j=i$ this sum equals $D_0$ by financial equivalence at the initial date.
:::

:::esempio{titolo="Principal-only value of an equal-principal loan"}
For a principal of $2000\,\mathrm{EUR}$ repaid in two equal principal portions, each portion is $1000\,\mathrm{EUR}$. If $j=10\%$, the principal-only value is

$$
N(j)=\frac{1000}{1.1}+\frac{1000}{1.1^2}
=\frac{210000}{121}\,\mathrm{EUR}\approx1735.54\,\mathrm{EUR}.
$$

If the contractual rate is $5\%$, the interest portions on the same dates are $100$ and $50\,\mathrm{EUR}$. Their initial value at $10\%$ is approximately $132.23\,\mathrm{EUR}$. To value an equal-principal schedule with $n$ installments, it therefore suffices to use $N(j)=\dfrac{D_0}{n}a_{\overline n|j}$ for the principal-only component and to discount the decreasing sequence of interest payments for the interest-only component.
:::

## A change in the interest rate

:::definizione{#tasso-variabile titolo="Recalculating the installment from the outstanding balance"}
Suppose that immediately after installment $k$ the rate changes from $i$ to $j\geq0$ and the final maturity stays the same. If all $m=n-k$ remaining installments are to be equal, use $D_k$ as the principal of a new level-payment schedule at date $k$. The new installment and the first interest portion after the change are

$$
R_{\mathrm{new}}=\frac{D_k}{a_{\overline m|j}},
\qquad I_{k+1}=jD_k.
$$

The rates already applied remain in effect through installment $k$. The new rate applies to periods following the change. If the contract calls for further rate resets, the balance outstanding at each reset date is the starting point of the next calculation.
:::

:::esempio{titolo="A rate change after a payment"}
A borrower has just paid the current installment and still owes $1100\,\mathrm{EUR}$. One annual payment remains and the rate changes from $10\%$ to $5\%$. Interest for the final year is $55\,\mathrm{EUR}$, so the single remaining payment is $1155\,\mathrm{EUR}$. Since the change occurs after the current installment, that installment has already been taken into account in calculating the balance of $1100\,\mathrm{EUR}$.
:::

:::osservazione
Renegotiation may include an immediate extra payment $X$ and a new term of $m$ periods. If $0\leq X<D_k$, the principal to be refinanced is $D_k-X$. The new payment in arrears is $\dfrac{D_k-X}{a_{\overline m|j}}$. If the installment is fixed instead and the new term is sought, then for $j>0$ a finite term is possible only if the payment exceeds $j(D_k-X)$. This product is the first period's interest. When the payment equals that amount, the balance stays constant. When it is smaller, the balance increases if unpaid interest is capitalized.
:::

:::esempio{titolo="An unchanged installment and a smaller final payment"}
After an extra repayment the outstanding principal is $1000\,\mathrm{EUR}$. The rate for the remaining periods is $10\%$. If the borrower keeps the installment at $600\,\mathrm{EUR}$, the balance after the first period is $1000\cdot1.1-600=500\,\mathrm{EUR}$. Immediately before the second installment the accrued balance is $550\,\mathrm{EUR}$, so a smaller payment on that date pays off the loan. If the accrued balance still exceeded the regular installment, the schedule would continue for another period. The successive balances therefore determine both the number of full installments and the amount of any smaller final payment. The calculation starts from the balance after the extra payment because principal repaid on that date no longer accrues interest.
:::
