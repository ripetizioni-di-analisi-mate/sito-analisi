---
titolo: Immunization and the management of interest rate risk
sommario: Using present value, duration, and convexity to hedge future liabilities and measure the effect of an interest rate shift.
---

## Assets and liabilities

:::definizione{#valore-netto titolo="Present values and surplus"}
A portfolio intended to fund future obligations includes **assets**, which generate receipts, and **liabilities**, which require payments. Value both sets of cash flows on the same date and under the same discounting convention. In this chapter's model the amounts are certain, and the maturities, measured in years from the valuation date, are fixed. The discount factor for date $t$ is $e^{-\delta t}$, where $\delta$ is the annual force of interest, common to all maturities.

If $a_k>0$ is a receipt at time $t_k$ and $\ell_j>0$ a payment at time $u_j$, the present values are
$$
\begin{aligned}
A(\delta)&=\sum_k a_k e^{-\delta t_k},\\[6pt]
L(\delta)&=\sum_j \ell_j e^{-\delta u_j}.
\end{aligned}
$$

The **surplus** is $S(\delta)=A(\delta)-L(\delta)$. A positive surplus means that the assets exceed the liabilities in present value at the given force of interest. If $\delta_0$ is the reference force of interest and $S(\delta_0)=0$, the portfolio exactly covers the present value of the obligations at that force. Evaluating $S$ at a different force of interest shows how well the hedge holds up when rates change.
:::

:::esempio{titolo="Equal values on a common date"}
A liability requires a payment of $1210\,\mathrm{EUR}$ at time $2$. The annual force of interest is $\delta_0=\log(1.1)$, so the effective annual rate is $10\%$. The present value is $1210(1.1)^{-2}=1000\,\mathrm{EUR}$. A bond paying $1100\,\mathrm{EUR}$ at time $1$ is also worth $1000\,\mathrm{EUR}$. The hedge is exact at $\delta_0$, and the receipt precedes the debt payment. To meet the obligation at time $2$, the bond proceeds must be reinvested for one year.

::grafico{assi=0 uguale=1 xmin=-0.4 xmax=3.6 ymin=-1.65 ymax=1.5 linee="-0.2,0 3.3,0" vettori="1,0,1,1.1;2,0,2,-1.21" unicolore=1 punti="0,0,pieno" etichette="1,1.3,1100;2,-1.45,1210;0,-0.22,0;1,-0.22,1;2,0.22,2;3.3,-0.22,t" legenda=0 titolo="A receipt of $1100$ euros at time $1$ (upward arrow) and a payment of $1210$ euros at time $2$ (downward arrow). At an effective annual rate of $10\%$, both are worth $1000$ euros at time $0$."}
:::

:::osservazione
The **force of interest** $\delta$ and the **effective annual rate** $i$ satisfy $1+i=e^\delta$. If $\delta$ changes, the new discount factor for maturity $t$ is the old factor multiplied by $e^{-ht}$, where $h$ is the change in the force of interest. If $i$ changes, use the ratio $\left(\dfrac{1+i_0}{1+i_0+\Delta i}\right)^t$, where $i_0$ is the initial rate and $\Delta i$ its change. The two ratios coincide when $\Delta i=(1+i_0)(e^h-1)$. The choice of parameter therefore determines the meaning of the derivative and the unit used to measure the shock.
:::

## Duration matching

::::teorema{#duration-matching titolo="Making the surplus insensitive to first-order changes"}
Consider positive, certain cash flows on both sides of the balance sheet. At a common force of interest $\delta$, **Macaulay duration** is the average of the times to payment weighted by present values. For the assets,
$$
D_A(\delta)=\frac{\sum_k t_k a_k e^{-\delta t_k}}{A(\delta)}.
$$
The liability duration $D_L$ is calculated using dates $u_j$ and amounts $\ell_j$. With respect to the force of interest, the present-value derivatives satisfy
$$
S'(\delta)=-A(\delta)D_A(\delta)+L(\delta)D_L(\delta).
$$
If $A(\delta_0)=L(\delta_0)>0$, then $S'(\delta_0)=0$ if and only if $D_A(\delta_0)=D_L(\delta_0)$. The two equalities fix the initial surplus and eliminate the linear term in its expansion.

:::dimostrazione
The rate shifts together at all maturities, so every term in the sum can be differentiated with respect to the same variable. The derivative of $a_k e^{-\delta t_k}$ is $-t_k a_k e^{-\delta t_k}$. Summing and factoring out $A$ gives $A'=-AD_A$. Similarly, $L'=-LD_L$, which gives the expression for $S'$. If the two present values coincide, then $S'=L(D_L-D_A)$. Since $L>0$, this product is zero precisely when the durations match.
:::
::::

:::esempio{titolo="Equal initial values and different sensitivities"}
At the initial force of interest, an asset is worth $1000\,\mathrm{EUR}$ and has a duration of one year. A liability of equal value has a duration of two years. The derivative of the surplus with respect to the force of interest is
$$
-1000\cdot1+1000\cdot2=1000.
$$
For an increase in the force of interest of $0.001\,\mathrm{year}^{-1}$, the linear term is $1\,\mathrm{EUR}$. Both sides fall in value. To first order, the liability falls by more because the cash flows that determine its value are further in the future.

::grafico{f="1000*exp(-x);1000*exp(-2*x)" xmin=-0.32 xmax=0.32 ymin=0 ymax=2000 nomi="h,euro" punti="0,1000,pieno" legenda="A=1000e^{-h};L=1000e^{-2h}" titolo="Present values after a shift $h$ in the force of interest. At $h=0$ both curves have value $1000$ euros, with slopes $-1000$ for the asset and $-2000$ for the liability."}
:::

:::osservazione
If the common parameter is the effective rate $i>-1$, the value $A(i)$ is calculated using the factors $(1+i)^{-t_k}$. Differentiation gives $A'(i)=-A(i)D_A(i)(1+i)^{-1}$. The **modified duration** with respect to $i$ is the ratio $\dfrac{D_A(i)}{1+i}$. Comparing derivatives requires durations calculated at the same common rate. If $i$ is a semiannual rate, maturities are measured in half-years and the derivative is taken with respect to the semiannual rate.
:::

## A portfolio of two zero-coupon bonds

::::teorema{#portafoglio-due-titoli titolo="Amounts to invest in the two bonds"}
A **zero-coupon bond** makes a single payment at maturity, so its duration equals its time to maturity. Let $T_1<T_2$ be the maturities of the two available bonds and $X_1,X_2$ the amounts invested today. The objective is to hedge a liability with present value $L_0>0$ and duration $D_L$ at the initial force of interest. The value and duration conditions give the system
$$
\begin{cases}
X_1+X_2=L_0,\\
T_1X_1+T_2X_2=D_LL_0.
\end{cases}
$$
The system has a unique solution. Setting $w_r=\dfrac{X_r}{L_0}$ for $r=1,2$ gives
$$
w_1=\frac{T_2-D_L}{T_2-T_1},\qquad
w_2=\frac{D_L-T_1}{T_2-T_1}.
$$
Both weights are nonnegative precisely when $T_1\leq D_L\leq T_2$. If the liability duration equals either endpoint, all the capital is invested in the bond maturing at that endpoint.

:::dimostrazione
Multiply the first equation by $T_1$ and subtract the result from the second. This gives $(T_2-T_1)X_2=(D_L-T_1)L_0$. Since $T_2-T_1>0$, the value of $X_2$ is unique, and so is $X_1=L_0-X_2$. Dividing by $L_0$ gives the weights. Their signs depend on the numerators because both denominators are positive.
:::
::::

:::esempio{titolo="From the amounts invested to the redemption payments"}
A liability has a present value of $1200\,\mathrm{EUR}$ and a duration of $3$ years. The available bonds mature in $2$ and $6$ years. The longer bond's weight is $\dfrac{3-2}{6-2}=\dfrac14$. The amounts invested are therefore $900\,\mathrm{EUR}$ and $300\,\mathrm{EUR}$. If the effective annual rate is $10\%$, the first bond's redemption payment is $900(1.1)^2=1089\,\mathrm{EUR}$. The second bond's redemption payment is $300(1.1)^6\,\mathrm{EUR}$. Discounting each payment over its own term recovers the amounts invested. The duration equations use these amounts because they are values on a common date.
:::

:::osservazione
With $T_1=2$, $T_2=6$, and $D_L=7$, the solution is $w_1=-\dfrac14$ and $w_2=\dfrac54$. This algebraic solution calls for a short position in the shorter bond and investment of the proceeds in the longer bond. Its feasibility depends on the trades permitted. If only purchases are allowed, a seven-year duration lies outside the range attainable with these two bonds.

::grafico{f="(6-x)/4;(x-2)/4" xmin=0 xmax=8.4 ymin=-0.6 ymax=1.75 nomi="D,w" segmenti="2,-0.5,2,1.5;6,-0.5,6,1.5" punti="3,0.75,pieno;3,0.25,pieno;7,-0.25,vuoto;7,1.25,vuoto" legenda="w_1=\dfrac{6-D_L}{4};w_2=\dfrac{D_L-2}{4}" titolo="Weights of bonds maturing at $2$ and $6$ as functions of the liability duration $D_L$ on the horizontal axis. Both weights are nonnegative between the two dashed lines. The filled dots correspond to $D_L=3$ and the open dots to $D_L=7$."}
:::

## Convexity and the dispersion of payment dates

:::definizione{#convexity-matching titolo="Second-order sensitivity"}
**Convexity** with respect to the force of interest $\delta$ is the second derivative of the value divided by the value itself. For the assets, differentiating the discounted cash flows a second time gives
$$
C_A(\delta)=\frac{A''(\delta)}{A(\delta)}
           =\frac{\sum_k t_k^2a_ke^{-\delta t_k}}{A(\delta)}.
$$
This is the weighted mean of the squared times to payment and is measured in years squared. The ratio $C_L(\delta)=\dfrac{L''(\delta)}{L(\delta)}$ is calculated in the same way. Equality of the present values at the initial force of interest gives
$$
S''(\delta_0)=L_0(C_A(\delta_0)-C_L(\delta_0)).
$$
The second-order effect therefore depends on the **difference in convexity** between assets and liabilities, multiplied by their common present value.
:::

:::esempio{titolo="Portfolios with the same average maturity"}
A liability payable entirely at time $3$ has present value $1000\,\mathrm{EUR}$. A portfolio invests $500\,\mathrm{EUR}$ at time zero in each of two zero-coupon bonds maturing at times $1$ and $5$. The asset duration is $\dfrac{1+5}{2}=3$ years. The convexities are
$$
C_A=\frac{1^2+5^2}{2}=13\,\mathrm{years}^2,\qquad
C_L=3^2=9\,\mathrm{years}^2.
$$
The second derivative of the surplus with respect to the force of interest is $1000(13-9)=4000$. The liability has only one payment date, so the variance of its payment times is zero. For the assets, the variance is $13-3^2=4\,\mathrm{years}^2$. In general, convexity equals the variance plus the square of duration. With equal durations, comparing convexities therefore amounts to comparing the dispersion of payment dates.

::grafico{assi=0 uguale=1 xmin=-0.4 xmax=6.6 ymin=-2.5 ymax=1.5 linee="-0.2,0 6.3,0" vettori="1,0,1,1;5,0,5,1;3,0,3,-2" unicolore=1 punti="0,0,pieno" etichette="1,1.25,500;5,1.25,500;3,-2.25,1000;0,-0.22,0;1,-0.22,1;3,0.22,3;5,-0.22,5;6.3,-0.22,t" legenda=0 titolo="Present values at time $0$, in euros. The asset payments occur at $1$ and $5$ (upward arrows), and the liability payment at $3$ (downward arrow). The average payment time is $3$ on both sides."}
:::

:::osservazione
When differentiating with respect to $i$ instead of $\delta$, the second derivative of the factor $(1+i)^{-t}$ is $t(t+1)(1+i)^{-t-2}$. Convexity with respect to $i$ is therefore $\dfrac{C+D}{(1+i)^2}$, where $C$ and $D$ are calculated with present-value weights at the same rate. If the values and durations of assets and liabilities coincide, the difference in their convexities with respect to $i$ has the same sign as the difference with respect to $\delta$. The additional term linear in $D$ cancels in the difference.
:::

## Redington's conditions

::::teorema{#redington titolo="A local minimum of the surplus"}
Let $S$ be twice continuously differentiable in a neighborhood of the reference force of interest $\delta_0$. If the following conditions hold simultaneously,
$$
\begin{cases}
S(\delta_0)=0,\\
S'(\delta_0)=0,\\
S''(\delta_0)>0,
\end{cases}
$$
then $\delta_0$ is a strict local minimum of $S$. Thus there is an interval around $\delta_0$ in which the surplus is positive for every nonzero parallel shift in the force of interest. Starting from the cash flows, check the initial value, then duration, and then convexity. With matching values and durations, the strict condition is equivalent to $C_A>C_L$.

:::dimostrazione
Expand the surplus in a Taylor series around $\delta_0$ to identify the first term that can determine its sign. If $h$ is the shift in the force of interest, then
$$
S(\delta_0+h)=\frac12 S''(\delta_0)h^2+o(h^2).
$$
The remainder divided by $h^2$ tends to zero. Since $S''(\delta_0)>0$, there is a neighborhood in which the absolute value of the remainder is less than $\dfrac14 S''(\delta_0)h^2$. For $h\ne0$ in that neighborhood, it follows that $S(\delta_0+h)>0$.
:::
::::

:::esempio{titolo="Surplus under two opposite shocks"}
Consider again the portfolio with present values of $500\,\mathrm{EUR}$ at times $1$ and $5$ and a liability with present value $1000\,\mathrm{EUR}$ payable at time $3$. For a shift $h$ from the initial force of interest, each present value is multiplied by the ratio of the new discount factor to the old one. Hence
$$
S(\delta_0+h)=500e^{-h}+500e^{-5h}-1000e^{-3h}.
$$
The quadratic term is $2000h^2$. A shift of $0.01\,\mathrm{year}^{-1}$ in either direction gives an estimate of $0.20\,\mathrm{EUR}$. In this case, factoring out $500e^{-3h}$ and using the inequality $e^{2h}+e^{-2h}\geq2$ gives the exact sign. Positivity for every $h\ne0$ follows from the particular pattern of cash flows.
:::

::grafico{f="500*exp(-x)+500*exp(-5*x)-1000*exp(-3*x);2000*x^2" xmin=-0.12 xmax=0.12 ymin=-6 ymax=49 nomi="h,euro" etichette="-0.111,-4.2,−0.1;0.093,-4.2,0.1" segmenti="-0.1,-0.7,-0.1,0.7;0.1,-0.7,0.1,0.7" legenda="S(\delta_0+h);2000h^2" punti="0,0,pieno" titolo="Exact surplus and its quadratic approximation for a parallel shift in the force of interest"}

:::attenzione
If the convexities are equal, the sign still needs to be determined. At the initial force of interest, suppose the assets have present values of $3$ euros for a payment at time $1$ and $1$ euros for a payment at time $3$. The liabilities have present values of $1$ euros for a payment at time $0$ and $3$ euros for a payment at time $2$. Both totals are $4$ euros, both value-weighted sums of payment times are $6$, and both corresponding sums of squared times are $12$. Yet the surplus is $(e^{-h}-1)^3$ and changes sign as it crosses $h=0$. Once the first two derivatives vanish, a cubic term remains.

::grafico{f="(exp(-x)-1)^3" xmin=-0.65 xmax=0.65 ymin=-0.2 ymax=0.65 nomi="h,euro" punti="0,0,pieno" segmenti="-0.5,-0.02,-0.5,0.02;0.5,-0.02,0.5,0.02;-0.02,0.5,0.02,0.5" etichette="-0.5,-0.06,−0.5;0.5,0.05,0.5;-0.08,0.5,0.5" legenda="S(\delta_0+h)=(e^{-h}-1)^3" titolo="Surplus with matching values, durations, and convexities. It is positive for $h<0$ and negative for $h>0$, and has an inflection point with a horizontal tangent at $h=0$."}
:::

## Price and reinvestment at the investment horizon

::::teorema{#rischio-reinvestimento titolo="Sensitivity of value at the target date"}
Let $c_k>0$ be the amounts in a portfolio of certain cash flows payable at times $t_k$. Consider a horizon $H$ and assume that the shock occurs immediately, moves the force of interest to the flat level $\delta$, and leaves it there for all discounting and reinvestment. The value at the target date is
$$
W_H(\delta)=\sum_k c_ke^{\delta(H-t_k)}.
$$
Cash flows received before $H$ are reinvested to the horizon, and later cash flows are valued at $H$. A cash flow occurring exactly at time $H$ enters at its nominal amount. If $D$ is the duration of the cash flows at the initial date, then $W_H'=(H-D)W_H$. At the initial force of interest, the first-order sensitivity is zero precisely when $D=H$.

:::dimostrazione
For a payment before $H$ the exponent $\delta(H-t_k)$ represents accumulation. For a later payment it represents discounting. Factoring $e^{\delta H}$ out of the sum gives $W_H=e^{\delta H}V$, where $V$ is the present value of the cash flows. Differentiating the product and using $V'=-VD$ gives $W_H'=e^{\delta H}(HV-VD)=(H-D)W_H$. Since $W_H>0$, the sign depends on $H-D$.
:::
::::

:::esempio{titolo="Two cash flows on opposite sides of the horizon"}
With an initial force of interest of zero, a portfolio pays $400\,\mathrm{EUR}$ in one year and $400\,\mathrm{EUR}$ in three years. For $H=2$, its horizon value is $W_2(\delta)=400e^\delta+400e^{-\delta}$. The first term increases with the force of interest because it describes reinvestment of the first payment. The second decreases because at time $2$ the payment at time $3$ is discounted. At the initial force of interest, the two contributions to the derivative are $400$ and $-400$, so the first-order sensitivity vanishes.

::grafico{f="400*exp(x);400*exp(-x);400*exp(x)+400*exp(-x)" xmin=-0.55 xmax=0.55 ymin=0 ymax=1000 nomi="δ,euro" punti="0,800,pieno" segmenti="-0.5,-20,-0.5,20;0.5,-20,0.5,20" etichette="-0.5,-55,−0.5;0.5,-55,0.5" legenda="400e^{\delta};400e^{-\delta};W_2(\delta)" titolo="Value at time $2$ of the two redemption payments as a function of the force of interest $\delta$. The accumulated value of the first payment increases, the value of the second decreases, and their sum $W_2$ reaches its minimum of $800$ euros at $\delta=0$."}
:::

:::osservazione
Horizon value describes the proceeds of a strategy that can reinvest receipts and sell the remaining bonds at prices based on the same flat curve. If actual reinvestment rates vary along the way, these must also be specified. An amount already available at $H$ is unaffected by the force of interest used to move cash flows between different dates.
:::

## Rebalancing at a new valuation date

:::definizione{#riequilibrio titolo="Updated values and remaining maturities"}
Revalue the portfolio at a date $s>0$. Payments already settled drop out of the calculation. Earlier receipts count to the extent that they are still held, for example as cash at time $s$. Discount future payments on the original dates $t_k>s$ using the remaining maturities $t_k-s$ and the curve observed at $s$. **Rebalancing** changes the holdings to attain the target values and sensitivities on the new date. In practice, first update the values of the current positions, then determine the new targets and the differences to buy or sell.
:::

:::esempio{titolo="Calculating the cost of rebalancing"}
At time $1$ the outstanding obligations to be hedged have a present value of $840\,\mathrm{EUR}$ and a duration of $3$ years. The available bonds have $1$ and $5$ years remaining. Matching duration requires equal weights, so the target is $420\,\mathrm{EUR}$ in each bond. The existing positions are worth $350\,\mathrm{EUR}$ and $460\,\mathrm{EUR}$. Buy $70\,\mathrm{EUR}$ of the shorter bond and sell $40\,\mathrm{EUR}$ of the longer one. With no cash or other proceeds available, the difference of $30\,\mathrm{EUR}$ is the new capital required. Trades can redistribute duration, while changing the total invested requires a transfer of funds.
:::

:::osservazione
Suppose the force of interest remains constant between two valuations, no payments fall due, and the holdings do not change. Each remaining present value is the previous value multiplied by $e^{\delta s}$. The weights stay the same and all durations fall by $s$ years. Under these conditions the match in values and durations is preserved. After a payment or a change in the curve, the weights must be recalculated from the updated positions. The time to maturity of the liability is also measured from the new date so that the comparison uses a common time origin.
:::

## Cash flow matching and yield curve shocks

:::definizione{#limiti-immunizzazione titolo="Matching cash flows by payment date"}
**Cash flow matching** means that on every date the portfolio receipts equal the payments due on that date. If the cash flows are certain and both sides use the same discount factors, the surplus terms cancel date by date for any curve. Matching also supplies the cash required on the contractual payment dates. For a single obligation in this model, a zero-coupon bond with the same redemption amount and maturity gives an exact match.
:::

:::esempio{titolo="A change confined to one maturity"}
At the reference force of interest, suppose each portfolio payment at times $1$ and $5$ has a time-zero value of $500\,\mathrm{EUR}$. The liability is due at time $3$ and is worth $1000\,\mathrm{EUR}$ on the same valuation date. If the one-year discount factor falls by $2\%$ in relative terms while the other factors stay the same, the first receipt becomes worth $490\,\mathrm{EUR}$. The new surplus is $490+500-1000=-10\,\mathrm{EUR}$. The change affects only one maturity, so the node-by-node calculation addresses a different shock from the parallel shifts covered by Redington's result.
:::

:::osservazione
One way to describe nonparallel shifts is to specify a separate spot force of interest $\delta_t$ for each maturity $t$. The present value of the net cash flow $N_t$ at time $t$ is $N_te^{-\delta_t t}$. If only $\delta_t$ changes, the derivative of the surplus with respect to that force of interest is $-tN_te^{-\delta_t t}$. If $N_t=0$ on every date, all these sensitivities are zero. Under duration matching alone, the sum of the sensitivities for a common shift can be zero even when individual maturities have nonzero sensitivities.
:::

:::attenzione
The extent of the hedge depends on the cash flows and on how rates are assumed to change. Local positivity of the surplus applies to sufficiently small shocks. For a specified finite shock, determine the sign by discounting the cash flows with the actual shifted curve. A portfolio of bonds with uncertain redemption payments also requires assumptions about the cash flows because the duration and convexity calculations used here assume fixed payments.
:::
