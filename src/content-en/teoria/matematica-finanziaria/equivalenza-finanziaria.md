---
titolo: Financial equivalence and cash flow valuation
sommario: How to value dated cash flows, replace debts and compare payment schedules under a specified accumulation law.
---

## Amounts, payment dates and the focal date

:::definizione{#valore-finanziario titolo="The value of a cash flow stream"}
A payment is specified by its amount and the date on which it occurs. A **certain cash flow stream** is a list of pairs $(t_k,C_k)$, where $t_k$ is the payment date and $C_k$ is the amount. All dates are measured in the same unit from a stated time origin. From the perspective of the party valuing the stream, $C_k>0$ represents a receipt and $C_k<0$ an outlay. Switching from the borrower's perspective to the lender's reverses the signs of all transfers between them.

Let $i>-1$ be the constant effective rate per unit of time, $q=1+i$ the one-period accumulation factor and $v=q^{-1}$ the corresponding discount factor. The **focal date** $\tau$ is the date at which all amounts are valued. The value of the stream on that date is

$$
V(\tau)=\sum_{k=1}^{n} C_k q^{\tau-t_k}.
$$

The exponent $\tau-t_k$ is the signed difference between the dates. For $t_k<\tau$ the payment is accumulated, for $t_k>\tau$ it is discounted, and for $t_k=\tau$ its value is unchanged. The resulting amounts can be added because they are all valued at the same date.
:::

:::esempio{titolo="A focal date between a receipt and a payment"}
A company receives $100$ euros after one year and pays $121$ euros after three years. The focal date is the end of year two, and the effective annual rate is $10\%$. From the company's perspective this gives

$$
\begin{aligned}
V(2)&=100q^{2-1}-121q^{2-3}\\[6pt]
    &=100\cdot1.1-\frac{121}{1.1}=0.
\end{aligned}
$$

::grafico{xmin=0 xmax=4 ymin=-175 ymax=175 nomi="t,C" vettori="1,0,1,100,100;3,0,3,-121,−121" punti="2,0,pieno" titolo="The original stream has an inflow of 100 euros at time 1 and an outflow of 121 euros at time 3. The point on the time axis marks the focal date."}

A value of zero means that the receipt at time $1$, if left invested until time $3$, is just sufficient to cover the payment. The two events are two years apart, so the final accumulated value is $100q^2=121$ euros.
:::

:::osservazione
Valuation is linear in the payment amounts. If a receivable of $250$ euros and an invoice for $40$ euros are due on the same date, the net amount on that date is $210$ euros. They can be combined before changing the valuation date because their exponents are the same. If the receivable falls due before the invoice, the two factors differ and the amounts must be valued separately.
:::

## Equivalence and changes of valuation date

::::teorema{#equivalenza titolo="Equivalence under compound interest"}
Two payment schedules are **financially equivalent** under a given accumulation law at a given date if their values on that date are equal. Under compound interest at a constant rate $i>-1$, two schedules equivalent at date $\tau$ are equivalent at every date $\sigma$. The ordering of their values is also preserved.

:::dimostrazione
Changing the valuation date from $\tau$ to $\sigma$ multiplies the value of every payment by the same positive factor $q^{\sigma-\tau}$. Indeed,

$$
C_k q^{\sigma-t_k}=q^{\sigma-\tau}C_kq^{\tau-t_k}.
$$

Summing over $k$ gives $V(\sigma)=q^{\sigma-\tau}V(\tau)$. Thus for the difference between two schedules $A$ and $B$ we have

$$
V_A(\sigma)-V_B(\sigma)=q^{\sigma-\tau}\bigl(V_A(\tau)-V_B(\tau)\bigr).
$$

The factor is positive, so the difference has the same sign at both dates. In particular, if it is zero at one date, it is zero at both.
:::
::::

:::esempio{titolo="Choosing a date that simplifies the calculation"}
Compare a payment of $1000$ euros today with a payment of $1210$ euros in two years at $10\%$ interest compounded annually. With the end of year two as the focal date, the first payment is worth $1000q^2=1210$ euros and the second is already valued at $1210$ euros. At the intermediate date, each would be worth $1100$ euros. Choosing one of the existing payment dates as the focal date leaves at least one amount that requires no adjustment.
:::

:::attenzione
Independence of the valuation date requires a multiplicative accumulation law. Consider simple interest at $10\%$ per year, with factor $1+i(t-s)$ between dates $s$ and $t$. A payment of $100$ euros today and a payment of $120$ euros in two years are each worth $120$ euros at time $2$. At time $1$, the first is worth $110$ euros and the second $\dfrac{120}{1.1}\approx109.09$ euros. The results differ because $1.1^2=1.21$, whereas the two-year simple interest factor is $1.2$.

::grafico{f="100*(1+0.1*x)" curve="t,120/(1+0.1*(2-t)),0,2" xmin=0 xmax=2.3 ymin=94 ymax=124 nomi="t,euro" legenda="100(1+0.1t);\dfrac{120}{1+0.1(2-t)}" punti="0,100,pieno;2,120,pieno;1,110,pieno;1,109.09,vuoto" segmenti="1,94,1,110" titolo="Values at time $t$, at 10% simple interest, of 100 euros available today and 120 euros due at time 2. The curves meet at $t=0$ and $t=2$. At $t=1$, the values are 110 euros and 109.09 euros."}
:::

:::osservazione
Equivalence at a given rate does not imply equivalence at another rate. A payment of $1210$ euros in two years and a payment of $1000$ euros today have the same value at $10\%$. At $5\%$, the first payment has a present value of $\dfrac{1210}{1.05^2}\approx1097.51$ euros. The second remains worth $1000$ euros because its payment date is the valuation date. Changing the date at a fixed rate multiplies every term by the same factor. Changing the rate affects each term differently according to its payment date.
:::

## Replacing debts and finding unknown payments

:::definizione{#capitale-unico titolo="An equivalent single payment"}
Here a debt schedule uses positive amounts to represent the sums owed. If we use signed cash flows from the borrower's perspective, every amount has the opposite sign, including the replacement payment. Under compound interest at a constant rate $i>-1$, a single payment $X$ on a specified date $T$ is equivalent to the debts $(t_k,C_k)$ if

$$
X=\sum_{k=1}^{n}C_k q^{T-t_k}.
$$

The equation values the amounts directly at date $T$. If an installment is paid earlier, its value must be accumulated to $T$ and subtracted from the value of the debts at that date.
:::

:::esempio{titolo="The balance after a partial payment"}
A debt of $1210$ euros is due in two years. The borrower pays $500$ euros after one year and defers the balance $X$ to the third year. At $10\%$ interest compounded annually, the equation at the original due date is

$$
\begin{aligned}
1210&=500q+Xq^{-1}\\[6pt]
X&=q(1210-500q)\\[6pt]
 &=1.1(1210-550)=726.
\end{aligned}
$$

At the end of year two the partial payment is worth $550$ euros, so the outstanding balance is $660$ euros. One year later that balance is worth $726$ euros. At the initial date the original schedule is worth $1210q^{-2}=1000$ euros. The new schedule has the same value, since its present value is $500q^{-1}+726q^{-3}=1000$ euros.

::grafico{assi=0 uguale=1 xmin=-0.4 xmax=4.6 ymin=-2.6 ymax=0.45 linee="-0.2,0 4.2,0;0,-0.07 0,0.07;1,-0.07 1,0.07;2,-0.07 2,0.07;3,-0.07 3,0.07;4,-0.07 4,0.07;-0.2,-1.7 4.2,-1.7;0,-1.77 0,-1.63;1,-1.77 1,-1.63;2,-1.77 2,-1.63;3,-1.77 3,-1.63;4,-1.77 4,-1.63" vettori="4.1,0,4.45,0;4.1,-1.7,4.45,-1.7;2,0,2,-1.21,1210;1,-1.7,1,-2.2,500;3,-1.7,3,-2.426,726" unicolore=1 etichette="4.3,0.15,t;-0.05,0.15,0;0.95,0.15,1;1.95,0.15,2;2.95,0.15,3;3.95,0.15,4;4.3,-1.55,t;-0.05,-1.55,0;0.95,-1.55,1;1.95,-1.55,2;2.95,-1.55,3;3.95,-1.55,4" titolo="The downward arrows show the borrower's payments in euros. The upper timeline shows the original payment of 1210 euros at time 2. The lower timeline shows the replacement payments of 500 euros at time 1 and 726 euros at time 3."}
:::

:::osservazione
If the replacement payments are $a_1X,\ldots,a_mX$ at dates $s_1,\ldots,s_m$, with specified coefficients $a_j>0$, the unknown $X$ can be factored out. Writing $V_{\mathrm{debts}}(0)$ for the present value of the original schedule gives

$$
X=\frac{V_{\mathrm{debts}}(0)}
{\sum_{j=1}^{m} a_j q^{-s_j}}.
$$

For two equal payments the coefficients are both $1$. If the second payment must be twice the first, their coefficients are $1$ and $2$, respectively. Such a condition is necessary to determine the two individual amounts from a single equation of value.
:::

:::esempio{titolo="Valuing a schedule with proportional payments"}
A debt of $310$ euros due at time $1$ is replaced by two payments. The first, at time $0$, is $X$ and the second, at time $2$, is $2X$. At $10\%$ interest compounded annually, the equation of value at time $1$ is $310=qX+2q^{-1}X$. The coefficient of $X$ is $\dfrac{321}{110}$, so the first payment is $\dfrac{34100}{321}\approx106.23$ euros and the second is twice that exact value. In contracts that specify amounts to the nearest cent, any rounding difference is settled in the final payment.

::grafico{assi=0 uguale=1 xmin=-0.4 xmax=3.6 ymin=-2.9 ymax=0.45 linee="-0.2,0 3.2,0;0,-0.07 0,0.07;1,-0.07 1,0.07;2,-0.07 2,0.07;3,-0.07 3,0.07;-0.2,-1.6 3.2,-1.6;0,-1.67 0,-1.53;1,-1.67 1,-1.53;2,-1.67 2,-1.53;3,-1.67 3,-1.53" vettori="3.1,0,3.45,0;3.1,-1.6,3.45,-1.6;1,0,1,-1.24,310;0,-1.6,0,-2.025,X;2,-1.6,2,-2.45,2X" unicolore=1 etichette="3.3,0.15,t;-0.05,0.15,0;0.95,0.15,1;1.95,0.15,2;2.95,0.15,3;3.3,-1.45,t;-0.05,-1.45,0;0.95,-1.45,1;1.95,-1.45,2;2.95,-1.45,3" titolo="The downward arrows show the borrower's payments. The upper timeline shows the debt of 310 euros at time 1. The lower timeline shows payments of $X$ at time 0 and $2X$ at time 2, where $X\approx106.23$ euros."}
:::

## Finding the common due date

:::definizione{#scadenza-comune titolo="Equivalent due date for a specified amount"}
Let $X>0$ be the specified replacement payment and $V>0$ the present value of the schedule being replaced. Under compound interest at a constant rate $i>-1$, the **common due date** is a time $T$ for which $Xq^{-T}=V$. If $i\ne0$, taking logarithms in $q^T=\dfrac{X}{V}$ gives

$$
T=\frac{\log\!\left(\frac{X}{V}\right)}{\log q}.
$$

Since $\log q\ne0$, the real solution is unique. For $i>0$, the condition $T\ge0$ is equivalent to $X\ge V$. For $-1<i<0$ the condition becomes $X\le V$ because $\log q$ is negative. For $i=0$ every due date is equivalent if $X=V$, while if $X\ne V$ there is no equivalent due date.
:::

:::esempio{titolo="Finding a due date from known powers"}
The present value of a payment schedule is $400$ euros. The agreed replacement amount is $576$ euros and the annual compound interest rate is $20\%$. Since $\dfrac{576}{400}=1.44=1.2^2$, a payment of $576$ euros is equivalent at the end of year two.

::grafico{f="576*1.2^(-x);400" xmin=0 xmax=4.2 ymin=200 ymax=600 nomi="T,euro" legenda="576\cdot1.2^{-T};V=400" punti="2,400,pieno" segmenti="2,200,2,400" titolo="Present value of a payment of 576 euros as a function of the due date $T$, at 20% compound interest. The curve crosses the level $V=400$ at $T=2$."}

The ratio of the agreed amount to the present value is the required accumulation factor. If the contract allows only whole-year maturities, a solution between two anniversaries does not satisfy that restriction. The payment can instead be recalculated for an admissible date.
:::

## The equivalent average due date

:::definizione{#scadenza-media titolo="Due date for the sum of the nominal amounts"}
Let $C_k>0$ be the amounts in a payment schedule and $t_k\ge0$ their due dates. The **equivalent average due date** is the equivalent due date when the sum of the nominal amounts $S=\sum_k C_k$ is chosen as the replacement payment. Under compound interest at a constant rate $i>-1$, with $i\ne0$, we have

$$
q^{-T}=\sum_{k=1}^{n}w_k q^{-t_k},
\qquad w_k=\frac{C_k}{S}.
$$

The weights $w_k$ are positive and sum to one. We therefore calculate the weighted average of the discount factors and find the date with that factor.
:::

::::teorema{titolo="Location of the average due date"}
If all amounts are positive and $i\ne0$, the equivalent average due date under compound interest lies between the first and last due dates. If at least two dates differ, the equivalent time lies strictly inside the interval.

:::dimostrazione
The factor $q^{-T}$ is a weighted average of the factors $q^{-t_k}$, so it lies between their minimum and maximum. If the dates differ, both inequalities are strict because every weight is positive. Since $q\ne1$, the function $t\mapsto q^{-t}$ is strictly monotone and pairs the intermediate factors with exactly the intermediate dates.
:::
::::

:::esempio{titolo="Comparison with the arithmetic mean"}
Replace $100$ euros today and $100$ euros in two years with $200$ euros at the average due date. At $10\%$ compound interest, $q^{-T}=\dfrac{1+q^{-2}}{2}=\dfrac{221}{242}$. This gives $T=\dfrac{\log\!\left(\frac{242}{221}\right)}{\log(1.1)}\approx0.9524$ years. Under commercial discount at $10\%$, the present value is instead $100+100(1-0.1\cdot2)=180$ euros. The equation $200(1-0.1T)=180$ gives $T=1$ year.

::grafico{f="1.1^(-x)" xmin=-0.15 xmax=2.3 ymin=0.78 ymax=1.04 nomi="t,fattore" legenda="1.1^{-t}" segmenti="0,1,2,0.82645;0.9524,0.78,0.9524,0.91322;1,0.78,1,0.91322" punti="0,1,pieno;2,0.82645,pieno;1,0.91322,vuoto;0.9524,0.91322,pieno" etichette="0.84,0.795,T;1.03,0.795,1" titolo="The chord joins the discount factors at the two due dates. Its midpoint has vertical coordinate $\dfrac{221}{242}$ and horizontal coordinate 1. The curve reaches the same height at $T\approx0.9524$."}
:::

:::osservazione
Under commercial discount at a rate $d\ne0$, with positive discount factors from time zero, the value at time zero of an amount $S$ due at time $T$ is $S(1-dT)$. Equating this to $\sum_k C_k(1-dt_k)$ cancels the nominal amounts and the factor $d$. This gives the weighted arithmetic mean $\bar t=\sum_k w_k t_k$. Under compound interest, the same mean is obtained in the limit as $i\to0$. To see this, set $z=\log q$ and observe that the function $-\log\!\left(\sum_k w_k e^{-zt_k}\right)$ is zero at $z=0$ and has derivative $\bar t$ there. The ratio of that function to $z$ therefore tends to $\bar t$.
:::

:::osservazione
Under compound interest at a positive rate, if at least two due dates differ, the equivalent average due date precedes the weighted arithmetic mean of the dates. The function $t\mapsto q^{-t}$ is strictly convex because its second derivative is $(\log q)^2q^{-t}>0$. Jensen's inequality gives $q^{-\bar t}<\sum_k w_kq^{-t_k}=q^{-T}$. Since the discount factor is decreasing, it follows that $T<\bar t$. This explains the direction of the difference in the example with two payments of $100$ euros. The weighted arithmetic mean remains a good approximation when the rate is close to zero.
:::

:::attenzione
The due dates bound the average due date only when the weights are positive. Consider a receipt of $200$ euros today and an outlay of $100$ euros in one year. Their signed sum is $100$ euros. At $10\%$, the stream has a present value of $200-\dfrac{100}{1.1}\approx109.09$ euros. A single payment of $100$ euros with a present value greater than $100$ must precede time zero. The outlay has negative weight, so the weighted average of the factors can lie outside the range of the original factors.
:::

## Effective rates that vary by period

:::definizione{#tassi-variabili titolo="Product of the periodic accumulation factors"}
Consider a sequence of integer dates. Let $i_h>-1$ be the effective rate for the period from $h-1$ to $h$, and let $q_h=1+i_h$ be its accumulation factor. Between integer dates $s<t$, the overall factor is

$$
r(s,t)=\prod_{h=s+1}^{t}q_h.
$$

The first factor is $q_{s+1}$ because the principal is available at the end of period $s$. To discount an amount from $t$ back to $s$, divide by the same product. An intermediate deposit earns interest only in the periods following its deposit date.
:::

:::esempio{titolo="An additional deposit into an account"}
An account starts with $1000$ euros. A further $200$ euros is deposited at the end of the first year. The effective rates for the first two years are $5\%$ and $10\%$, respectively. Immediately before the deposit the balance is $1050$ euros, so immediately afterward it is $1250$ euros. At the end of year two the balance is $1250\cdot1.1=1375$ euros. We can also calculate it by tracking the two amounts separately. The initial principal grows to $1000\cdot1.05\cdot1.1=1155$ euros, while the deposit at time $1$ grows to $200\cdot1.1=220$ euros.

::grafico{curve="t,1000*1.05^t,0,1;t,1250*1.1^(t-1),1,2" xmin=0 xmax=2.3 ymin=900 ymax=1400 nomi="t,euro" legenda="\text{First year, }5\%;\text{Second year, }10\%" punti="0,1000,pieno;1,1050,vuoto;1,1250,pieno;2,1375,pieno" segmenti="1,1050,1,1250" titolo="Account balance. The vertical segment at time 1 represents the deposit of 200 euros that raises the balance from 1050 to 1250 euros. At the end of year two the balance is 1375 euros."}
:::

:::osservazione
With no intermediate deposits, reversing the order of the factors leaves their product unchanged. In the account example, reversing the rates makes the additional deposit earn $5\%$, so its final value becomes $210$ euros. The initial principal still grows to $1155$ euros, so the closing balance falls to $1365$ euros. The constant annual rate equivalent to a product of $n$ factors is found by raising the product to the power $\dfrac{1}{n}$ and subtracting one.
:::

## Accumulation factors between two dates

:::definizione{#leggi-due-variabili titolo="A two-date accumulation law"}
The **accumulation factor** $r(s,t)>0$ is the value at time $t$ of one euro available at time $s\le t$. We assume $r(t,t)=1$. The law is multiplicative if, for every $s\le t\le u$,

$$
r(s,u)=r(s,t)r(t,u).
$$

This states that moving directly from $s$ to $u$ gives the same value as moving in two steps. Unlike the factor $q^{t-s}$ under constant-rate compound interest, a two-date law can assign different factors to intervals of equal length.
:::

::::teorema{titolo="Representation by an account with unit initial balance"}
Let $r$ be a positive accumulation law with $r(t,t)=1$ for dates $t\ge0$. The law is multiplicative if and only if there is a positive function $a(t)$ with $a(0)=1$ such that $r(s,t)=\dfrac{a(t)}{a(s)}$ for $s\le t$.

:::dimostrazione
If the law is multiplicative, define $a(t)=r(0,t)$. Multiplicativity gives $a(t)=a(s)r(s,t)$. Since $a(s)>0$, dividing by $a(s)$ gives the required ratio. Conversely, if the representation holds, the product $r(s,t)r(t,u)$ equals $\dfrac{a(t)}{a(s)}\dfrac{a(u)}{a(t)}=\dfrac{a(u)}{a(s)}=r(s,u)$.
:::
::::

:::esempio{titolo="Valuation with a time-varying accumulation law"}
Suppose $a(1)=1.05$, $a(2)=1.155$ and $a(3)=1.21275$. The value at time $2$ of $210$ euros received at time $1$ and $315$ euros received at time $3$ is

$$
210\frac{a(2)}{a(1)}+315\frac{a(2)}{a(3)}
=210\cdot1.1+\frac{315}{1.05}=531.
$$

When an amount $C$ due at time $t$ is valued at the focal date, its contribution contains the factor $a(\tau)$. Every payment in the schedule shares this factor. Consequently the value of the schedule is $V(\tau)=a(\tau)\sum_k\dfrac{C_k}{a(t_k)}$, and a change of valuation date preserves equivalence even when rates vary, provided the law is multiplicative.
:::

:::richiamo{titolo="A deterministic force of interest"}
If $\delta(t)$ is the force of interest and is integrable over the intervals considered, the factor from $s$ to $t$ is $r(s,t)=\exp\!\left(\int_s^t\delta(u)\,\mathrm du\right)$. Additivity of the integral over adjacent intervals implies multiplicativity of the factors. If the force is $\delta_1$ for one year and $\delta_2$ for the following year, the two-year factor is $e^{\delta_1+\delta_2}$.
:::

:::osservazione
Given the discount factors $v(0,s)=a(s)^{-1}$ and $v(0,t)=a(t)^{-1}$ from time zero, the value at time $s$ of one euro available at time $t$ is $\dfrac{v(0,t)}{v(0,s)}$. For example, if $v(0,1)=0.96$ and $v(0,3)=0.864$, one euro at time $3$ is worth $0.9$ euros at time $1$. Indeed, $0.9$ euros at time $1$ and one euro at time $3$ are each worth $0.864$ euros today. The chapter on the term structure uses these ratios to calculate forward factors.
:::

## Comparing payment schedules

:::definizione{#confronto-operazioni titolo="Comparison at a common date"}
To compare two schedules, take the perspective of the same party, apply the same accumulation law and value both at the same date. A borrower choosing between streams consisting only of payments can express both costs as positive amounts. The schedule with the lower present cost is less expensive. If the borrower's cash flows are signed, the less expensive schedule has the higher algebraic value because outlays are negative.
:::

:::esempio{titolo="The break-even rate between two payments"}
A supplier asks for $500$ euros today or $550$ euros in one year. At $10\%$ interest compounded annually, the deferred payment is worth $550q^{-1}=500$ euros today, so the two schedules are equivalent. At $5\%$, the deferred payment is worth approximately $523.81$ euros and immediate payment costs less. At $15\%$, the deferred payment is worth approximately $478.26$ euros and costs less than immediate payment. The break-even rate depends on the ratio of the two amounts, whereas the present cost of the deferred payment decreases as the rate rises.

::grafico{f="550/(1+x/100);500" xmin=0 xmax=20 ymin=400 ymax=600 nomi="i,euro" legenda="\dfrac{550}{1+i};500" punti="10,500,pieno;5,523.81,vuoto;15,478.26,vuoto" segmenti="10,400,10,500" titolo="Present cost of a deferred payment of 550 euros as the annual rate $i$ varies, with the rate shown as a percentage on the horizontal axis. The second line gives the cost of immediate payment. The lines meet at 10%."}
:::

:::osservazione
If a schedule includes an immediate fee or an expense at a later date, the cost enters the valuation at the date when it occurs. In the supplier example, adding an upfront fee of $20$ euros to the deferred payment raises its present cost from $500$ to $520$ euros at a rate of $10\%$. The cost comparison therefore includes additional cash flows at their own dates. The chapter on investment appraisal applies the same valuation method to projects with both outlays and receipts.
:::
