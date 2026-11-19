---
titolo: The term structure of interest rates, forward rates, and arbitrage
sommario: Zero-coupon bond prices determine the spot curve, forward rates, and the value of cash flows that can be replicated.
---

## Discount factors

:::definizione{#fattori-sconto titolo="The price of one euro payable in the future"}
Take time zero as the valuation date and measure maturities in years. The **discount factor** $v(0,T)$ is today's price of one euro payable with certainty at time $T$. By convention, $v(0,0)=1$. If a zero-coupon bond pays $N>0$ euros at time $T$ and its price is $P>0$, then

$$
v(0,T)=\frac{P}{N}.
$$

The factor is a ratio of amounts in the same currency. It can therefore be multiplied by any amount payable on the same date, provided that payment is equally certain. The **term structure** assigns a discount factor to each date. A problem may specify the curve at only finitely many dates, called *nodes*.
:::

:::esempio{titolo="Prices in euros and discount factors per unit"}
A bond pays $250\,\mathrm{EUR}$ in two years and costs $230$ today. The two-year discount factor is $\dfrac{230}{250}=0.92$. Two identical bonds together pay $500\,\mathrm{EUR}$ on the same date, so they cost $2\cdot230=460\,\mathrm{EUR}$. Discounting the same two-year payment directly also gives $500\cdot0.92=460\,\mathrm{EUR}$. The number of bonds changes with the promised payment. The factor stays the same because it always refers to one euro to be received in two years.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 xmin=-0.6 xmax=3 ymin=-1.25 ymax=1.3 linee="-0.3,0 2.6,0;2.5,0.05 2.6,0 2.5,-0.05;0,-0.04 0,0.04;1,-0.04 1,0.04;2,-0.04 2,0.04" vettori="0,0,0,-0.92;2,0,2,1" etichette="0,-1.08,230;2,1.14,250;-0.12,0.12,0;1,-0.14,1;2.13,-0.14,2;2.75,0,t" titolo="The buyer's cash flows from the zero-coupon bond, in euros, with time $t$ in years. The downward arrow is the outlay of $230$ today, and the upward arrow is the receipt of $250$ at time $2$. The ratio $\dfrac{230}{250}=0.92$ gives the discount factor $v(0,2)$."}

:::

:::attenzione
A positive discount factor satisfies $v(0,T)>0$. A curve with $v(0,1)=0.98$ and $v(0,2)=0.99$ meets this condition even though the factor increases between years one and two. The implied forward rate over that interval is negative. Inferring an arbitrage opportunity from the increase requires an additional assumption, such as the ability to carry one euro from the first date to the second at no cost. In a model that allows this transaction, paying $0.99\,\mathrm{EUR}$ today to receive one euro in year two would cost more than buying a euro payable in year one and holding it for another year.
:::

## Spot rates

:::definizione{#tassi-spot titolo="Effective annual spot rate"}
The **spot rate** $s_T$ is the equivalent annual compound rate for a transaction that begins today and ends at time $T>0$. The present value of one euro payable at maturity is $(1+s_T)^{-T}$, so

$$
v(0,T)=(1+s_T)^{-T},
\qquad s_T=v(0,T)^{-\frac{1}{T}}-1.
$$

The accumulation factor $1+s_T$ is positive, so $s_T>-1$. The subscript $T$ identifies the payment date. The exponent accounts for the length of time over which the annual rate applies. The spot rate expresses as an annual percentage the same information that the discount factor conveys as a price.
:::

:::esempio{titolo="Annual rate and two-year return"}
A payment of $121\,\mathrm{EUR}$ due in two years costs $100\,\mathrm{EUR}$. The two-year accumulation factor is $\dfrac{121}{100}=1.21$. The annual factor is the positive square root of $1.21$, so it equals $1.1$ and the spot rate is $10\%$. The total return is $21\%$ because the initial principal is multiplied by $1.1$ twice. Thus the second year also earns interest on the interest accumulated in the first year.
:::

:::osservazione
Spot rates can be constant, increasing, or decreasing across maturities. For example, if $s_1=s_2=5\%$, then $v(0,2)=(1.05)^{-2}<v(0,1)=(1.05)^{-1}$. A flat curve of positive rates therefore gives decreasing discount factors because the discounting period gets longer. The yield to maturity of a coupon bond, discussed in the chapter on bonds, is the single rate that reproduces a given price when all the bond's cash flows are discounted at that rate. Its value depends on the coupons and redemption payment because these amounts enter the pricing equation.

::grafico{f="1.05^(-x)" xmin=0 xmax=6 ymin=0 ymax=1.2 nomi="T,v" punti="0,1,pieno;1,0.9524,pieno;2,0.907,pieno" segmenti="1,0,1,0.9524;2,0,2,0.907" legenda="v(0,T)=1.05^{-T}" titolo="Discount factors at a constant spot rate of $5\%$. The factors decrease with maturity $T$, measured in years. For example, $v(0,1)=\dfrac{1}{1.05}\approx0.952$ and $v(0,2)=\dfrac{1}{1.05^2}\approx0.907$."}

:::

## Forward rates

::::teorema{#tassi-forward titolo="Implied forward rate"}
Consider two dates satisfying $0\le s<t$. Assume positive discount factors, no transaction costs, and the ability to buy or sell short zero-coupon bonds with unit face value maturing on either date. The effective annual **forward rate** $f_{s,t}$ agreed today for a loan from $s$ to $t$ with zero value today satisfies

$$
1+f_{s,t}=\left(\frac{v(0,s)}{v(0,t)}\right)^{\frac{1}{t-s}}.
$$

The formula determines today the implied terms of an exchange between two future dates. For example, it allows a comparison between a one-year loan beginning immediately and a one-year loan beginning at the end of the current year.

:::dimostrazione
Use zero-coupon bonds to construct the loan's two cash flows. The lender pays one euro at time $s$ and receives $K$ at time $t$, where $K=(1+f_{s,t})^{t-s}$. Selling short a unit bond today that matures at $s$ replicates the future outlay. Buying $K$ unit bonds today that mature at $t$ replicates the receipt. The total initial cost must be zero, so $Kv(0,t)-v(0,s)=0$. Dividing by $v(0,t)>0$ gives $K$. Raising this factor to the power $\dfrac{1}{t-s}$ annualizes it.
:::
::::

:::esempio{titolo="The implied rate from year one to year three"}
Let $v(0,1)=0.968$ and $v(0,3)=0.8$. The accumulation factor between the two dates is $\dfrac{0.968}{0.8}=1.21$. The interval lasts two years, so the annual factor is $\sqrt{1.21}=1.1$ and $f_{1,3}=10\%$. The same ratio compares the current prices of one euro payable on each date. Indeed, $1.21\cdot0.8=0.968$, so the present value of the repayment equals the present value of the principal lent.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 xmin=-0.6 xmax=4 ymin=-1.1 ymax=1.3 linee="-0.3,0 3.6,0;3.5,0.05 3.6,0 3.5,-0.05;0,-0.04 0,0.04;1,-0.04 1,0.04;2,-0.04 2,0.04;3,-0.04 3,0.04" vettori="1,0,1,-0.826;3,0,3,1" etichette="1,-0.97,100;3,1.14,121;-0.12,0.12,0;0.87,0.12,1;2,-0.14,2;2.87,-0.14,3;3.75,0,t" titolo="The lender's cash flows on a forward loan of $100$ euros from year one to year three, with time $t$ in years. The lender pays $100$ at time $1$ and receives $121$ at time $3$. Both amounts are worth $96.8$ euros today because $100\cdot0.968=121\cdot0.8$."}

:::

:::osservazione
Let the intermediate date satisfy $s<u<t$. The product of the ratios $\dfrac{v(0,s)}{v(0,u)}$ and $\dfrac{v(0,u)}{v(0,t)}$ is $\dfrac{v(0,s)}{v(0,t)}$. Forward accumulation factors therefore combine by multiplication. For two one-year intervals at $5\%$ and $10\%$, the two-year factor is $1.05\cdot1.10=1.155$. The equivalent annual rate is $\sqrt{1.155}-1$. Today's prices determine the forward rate. The spot rate observed at time $s$ may be different if prices change in the meantime.
:::

## Continuous compounding

:::definizione{#forward-continuo titolo="Spot and forward rates expressed as equivalent constant forces of interest"}
With continuous compounding, the spot discount factor is $v(0,T)=e^{-z(T)T}$, where $z(T)$ is the **continuously compounded spot rate** for $T>0$. Between two dates $s<t$, write the accumulation factor as $e^{\phi_{s,t}(t-s)}$, where $\phi_{s,t}$ is the **average continuously compounded forward rate**. Taking logarithms gives

$$
\begin{aligned}
z(T)&=-\frac{\log v(0,T)}{T},\\[6pt]
\phi_{s,t}&=\frac{\log v(0,s)-\log v(0,t)}{t-s}.
\end{aligned}
$$

Here $\log$ denotes the natural logarithm. To convert to an effective annual rate, equate the accumulation factors over one year. A continuously compounded rate $z$ therefore corresponds to $e^z-1$ with annual compounding.
:::

:::esempio{titolo="Maturities with different continuously compounded spot rates"}
Suppose the observed rates are $z(1)=2\%$ and $z(3)=4\%$. The logarithms of the two discount factors are $-0.02$ and $-0.12$. The logarithm of the accumulation factor from year one to year three is therefore $0.12-0.02=0.10$. Dividing by the two-year term gives $\phi_{1,3}=5\%$. To check the calculation, add the log accumulation factors for the first and second intervals. Indeed, $0.02+2\cdot0.05=0.12$.
:::

:::osservazione
When $T\mapsto v(0,T)>0$ is differentiable, the **instantaneous** forward rate at time $T$ is $g(T)=-\dfrac{\mathrm d}{\mathrm dT}\log v(0,T)$. It is the limit of the average continuously compounded forward rate as the interval length tends to zero. If the derivative is continuous, the fundamental theorem of calculus gives $\log v(0,s)-\log v(0,t)=\int_s^t g(u)\,\mathrm du$. The average continuously compounded forward rate is therefore the integral average of $g$ over the interval. Since $-\log v(0,T)=Tz(T)$, differentiability of $z$ also gives $g(T)=z(T)+Tz'(T)$.
:::

::grafico{f="2+x;2+2*x" xmin=0 xmax=4.3 ymin=0 ymax=11.2 nomi="T,tasso (%)" legenda="z(T);g(T)" punti="2,4,pieno;2,6,pieno" titolo="Continuously compounded spot rate $z(T)=0.02+0.01T$ and instantaneous forward rate $g(T)=0.02+0.02T$, with $T$ in years and rates in percentage points on the vertical axis. At year two the rates are $4\%$ and $6\%$."}

## Bootstrapping

::::teorema{#bootstrap titolo="Finding discount factors one at a time"}
Suppose the factors $v(0,t_k)$ are known for the first $n-1$ maturities. Let $P$ be the price of a bond that pays amounts $C_k$ at dates $t_k$, where $0<t_1<\dots<t_n$ and the final payment satisfies $C_n>0$. The missing factor is

$$
v(0,t_n)=\frac{P-\sum_{k=1}^{n-1} C_kv(0,t_k)}{C_n}.
$$

Repeating this procedure for a sequence of bonds is called **bootstrapping**. Finding a new factor requires a pricing equation in which its coefficient is nonzero. The final principal payment and the coupon payable on the same date both enter $C_n$.

:::dimostrazione
The bond price is the sum of the present values of the payments. Subtract from $P$ the contributions from dates with known factors. This leaves $C_n v(0,t_n)$ because $t_n$ is the only date whose payment still needs to be valued. Dividing by $C_n$ determines a unique value for the missing factor.
:::
::::

:::esempio{titolo="Building a curve from two bonds"}
A one-year zero-coupon bond with a redemption payment of $100\,\mathrm{EUR}$ costs $96\,\mathrm{EUR}$, so $v(0,1)=0.96$. A two-year bond pays an annual coupon of $5\,\mathrm{EUR}$, repays $100\,\mathrm{EUR}$ at maturity, and costs $99.30\,\mathrm{EUR}$. The first coupon is worth $4.80\,\mathrm{EUR}$ today. The final payment of $105\,\mathrm{EUR}$ therefore contributes $94.50\,\mathrm{EUR}$ to the price, and the second discount factor is

$$
v(0,2)=\frac{99.30-4.80}{105}=0.9.
$$

If a three-year bond with payments in all three years is now available, $0.96$ and $0.9$ determine the first two contributions. The remaining contribution determines the third-year factor.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 xmin=-0.6 xmax=3 ymin=-1.2 ymax=1.3 linee="-0.3,0 2.6,0;2.5,0.05 2.6,0 2.5,-0.05;0,-0.04 0,0.04;1,-0.04 1,0.04;2,-0.04 2,0.04" vettori="0,0,0,-0.946;1,0,1,0.25;2,0,2,1" etichette="0,-1.1,99.30;1,0.36,5;2,1.14,105;-0.12,0.12,0;1.07,-0.14,1;2.07,-0.14,2;2.75,0,t" titolo="The buyer's cash flows from the two-year bond, in euros, with time $t$ in years. Its price is $99.30$ today. It pays a coupon of $5$ at time $1$ and a final coupon and redemption payment totaling $105$ at time $2$. The coupon arrow is not drawn to scale."}

:::

:::attenzione
With a positive final payment, bootstrapping requires the bond price to exceed the sum of the contributions from dates with known factors. Suppose $v(0,1)=0.96$ and a bond pays $10\,\mathrm{EUR}$ in one year and $100\,\mathrm{EUR}$ in two years. If its price is $9\,\mathrm{EUR}$, the first coupon alone is worth $9.60\,\mathrm{EUR}$ today. This would give $v(0,2)=-0.006$, which is incompatible with a positive price for one euro payable with certainty on the second date. A bond with two new maturities presents a different difficulty. A single equation leaves two factors unknown, so another independent price or an assumption about the curve is needed.
:::

## Pricing from the spot curve

:::definizione{#prezzo-curva titolo="Valuing a stream of certain cash flows"}
Let $C_k$ be the signed cash flows at dates $t_k$. A positive amount is a receipt from the chosen perspective. If each date has a discount factor and the payments can be replicated with the corresponding zero-coupon bonds, the **value implied by the curve** is

$$
P=\sum_k C_kv(0,t_k).
$$

The factor for each date applies to the total amount due on that date. Two streams with the same nominal total can therefore have different values if the payments fall in different years.
:::

:::esempio{titolo="Pricing a new bond"}
Given $v(0,1)=0.96$ and $v(0,2)=0.9$, a bond pays $8\,\mathrm{EUR}$ in year one and $108\,\mathrm{EUR}$ in year two. The price implied by the curve is

$$
\begin{aligned}
P&=8\cdot0.96+108\cdot0.9\\[6pt]
 &=7.68+97.20=104.88\,\mathrm{EUR}.
\end{aligned}
$$

Moving $4\,\mathrm{EUR}$ from year two to year one raises the price by $4(0.96-0.9)=0.24\,\mathrm{EUR}$. The effect depends on the difference between the factors because the total payment is unchanged.
:::

:::osservazione
A payment can fall between two nodes of the curve. Under linear interpolation of log discount factors, averaging the logarithms at the midpoint gives the geometric mean of the two factors. For example, between $v(0,1)=0.96$ and $v(0,3)=0.864$, this convention gives $v(0,2)=\sqrt{0.96\cdot0.864}$. Linear interpolation of the factors themselves gives the arithmetic mean $0.912$. Both methods reproduce the given nodes exactly. Pricing a cash flow on an intermediate date requires specifying the convention because the value depends on the interpolated factor.
:::

:::esempio{titolo="The coupon that prices the bond at par"}
A bond with face value $100\,\mathrm{EUR}$ and constant annual coupon $c$ pays at the end of years one and two. With $v(0,1)=0.96$ and $v(0,2)=0.9$, the final principal payment is worth $90\,\mathrm{EUR}$ today. To give a price of $100\,\mathrm{EUR}$, the two coupons must therefore contribute $10\,\mathrm{EUR}$ in present value. Since $0.96c+0.9c=10$, we obtain $c=\dfrac{10}{1.86}\approx 5.38\,\mathrm{EUR}$. This is the par coupon. Dividing it by the face value gives a coupon rate of about $5.38\%$. Each spot rate is obtained separately from its discount factor. The first is about $4.17\%$ and the second about $5.41\%$. The par coupon solves an equation that depends on both dates.

::grafico{f="5.376" xmin=0 xmax=2.7 ymin=0 ymax=7 nomi="T,tasso (%)" punti="1,4.167,pieno,s₁;2,5.409,pieno,s₂" segmenti="1,0,1,4.167;2,0,2,5.409;1,4.167,2,5.409" legenda="\text{par coupon rate}\approx5.38\%" titolo="Spot rates obtained from $v(0,1)=0.96$ and $v(0,2)=0.9$, in percentage points. They are $s_1\approx4.17\%$ and $s_2\approx5.41\%$. The horizontal line is the two-year bond's par coupon rate, which lies between the two spot rates."}

:::

:::osservazione
If log discount factors are interpolated linearly between two maturities, the average continuously compounded forward rate is the same over every subinterval between those nodes. The numerator of the forward-rate formula is the decrease in an affine function and is therefore proportional to the length of the subinterval. This interpolation thus corresponds to a constant force of interest between nodes. For example, if $v(0,1)=0.9$ and $v(0,3)=0.729$, the factor in year two is $0.81$. Both one-year ratios equal $\dfrac{10}{9}$. Starting with the discount factor to year one, multiply by the one-year discount factor of $0.9$ for each of the next two years to obtain the discount factor to year three.
:::

## Arbitrage

:::definizione{#arbitraggio titolo="Arbitrage with certain cash flows"}
In a deterministic model, an **arbitrage** is a feasible strategy with zero or negative initial cost, nonnegative subsequent cash flows, and at least one strictly positive gain. A negative initial cost means that opening the position generates a receipt. Constructing the strategy requires checking every date because a positive nominal sum of future cash flows can still include an intermediate outlay. The available trades are those the model permits, including any short sales.
:::

:::esempio{titolo="The same redemption payment at two prices"}
Two instruments each pay $100\,\mathrm{EUR}$ in one year, with no other cash flows. The first costs $96\,\mathrm{EUR}$ and the second $97\,\mathrm{EUR}$. If the second can be sold short at the stated price, the sale brings in $97\,\mathrm{EUR}$ initially. Buying the first requires $96$, leaving an immediate receipt of $1\,\mathrm{EUR}$. In one year the first instrument pays $100\,\mathrm{EUR}$, exactly the amount owed to the counterparty to the sale. The net future cash flow is zero. Under the stated market assumptions, the two prices therefore violate the **law of one price**.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 xmin=-0.6 xmax=2.2 ymin=-0.78 ymax=0.82 linee="-0.4,0 1.8,0;1.72,0.035 1.8,0 1.72,-0.035;0,-0.03 0,0.03;1,-0.03 1,0.03" vettori="-0.1,0,-0.1,0.582;0.1,0,0.1,-0.576;0.9,0,0.9,0.6;1.1,0,1.1,-0.6" etichette="-0.2,0.68,97;0.04,-0.68,96;0.8,0.7,100;1.04,-0.7,100;-0.22,-0.09,0;0.97,0.09,1;1.9,0,t" titolo="The strategy's cash flows in euros, with time $t$ in years. At time $0$ the short sale brings in $97$ and the purchase costs $96$. At time $1$ the redemption payment of $100$ received equals the $100$ owed, leaving only the initial receipt of $1$ euro."}

:::

:::attenzione
The strategy assumes that both the sale and the purchase can be executed at the stated prices. With a bid–ask spread, the higher-priced bond might sell for $95\,\mathrm{EUR}$ while the lower-priced bond costs $96\,\mathrm{EUR}$ to buy. In that case the trade requires an outlay of $1\,\mathrm{EUR}$ and the cash flows cancel at maturity. The arbitrage described therefore requires the actual sale proceeds to exceed the actual purchase cost after commissions.
:::

## Replication

::::teorema{#replicazione titolo="Pricing a replicable cash flow"}
Let $b$ be a bond's cash flow vector. Let $A$ be the matrix whose columns contain the cash flows of tradable instruments on the same dates. If the signed positions $x_j$ are feasible and the vector $x$ satisfies $Ax=b$, the portfolio **replicates** the bond. If there is no arbitrage and the bond itself can be bought or sold short, its price is $\sum_j x_jP_j$, where $P_j$ are the prices of the instruments.

:::dimostrazione
The bond and the portfolio produce the same cash flow on every date. If one cost less than the other, one could buy the cheaper one and sell the more expensive one. Their future cash flows would cancel, and the price difference would generate a receipt today. The absence of arbitrage therefore requires equal initial costs.
:::
::::

:::esempio{titolo="Replication with a coupon bond"}
A one-year bond $A$ pays $100\,\mathrm{EUR}$ in year one and costs $96\,\mathrm{EUR}$. The two-year bond $B$ pays $10\,\mathrm{EUR}$ in year one and $110\,\mathrm{EUR}$ in year two and costs $108.60\,\mathrm{EUR}$. The aim is to replicate a cash flow of $60\,\mathrm{EUR}$ in year one and $110\,\mathrm{EUR}$ in year two. The second payment requires one unit of $B$. The first payment from $B$ covers $10\,\mathrm{EUR}$, so the position in $A$ must provide the remaining $50\,\mathrm{EUR}$. The holdings and their cost are

$$
\begin{aligned}
x_B&=\frac{110}{110}=1,\\[6pt]
x_A&=\frac{60-10x_B}{100}=0.5,\\[6pt]
P&=0.5\cdot96+108.60=156.60\,\mathrm{EUR}.
\end{aligned}
$$

If the objective were to receive only $110\,\mathrm{EUR}$ in year two, the year-one coupon would have to be offset by selling $0.1$ units of $A$ short. A negative holding represents that position. Indeed, the year-one cash flow is $10-0.1\cdot100=0$.

::grafico{assi=0 uguale=1 unicolore=1 legenda=0 xmin=-0.6 xmax=3 ymin=-1.2 ymax=1.3 linee="-0.3,0 2.6,0;2.5,0.05 2.6,0 2.5,-0.05;0,-0.04 0,0.04;1,-0.04 1,0.04;2,-0.04 2,0.04" vettori="0,0,0,-1;0.9,0,0.9,0.5;1.1,0,1.1,0.2;2,0,2,1" etichette="0,-1.12,156.60;0.62,0.62,50 from A;1.1,0.32,10 from B;2,1.14,110 from B;-0.12,0.12,0;1,-0.14,1;2.07,-0.14,2;2.75,0,t" titolo="Replicating portfolio, in euros, with time $t$ in years. Its cost today is $156.60$. At time $1$ half a unit of $A$ pays $50$ and the unit of $B$ pays $10$, for a total of $60$. At time $2$ the unit of $B$ pays $110$. The arrows are not drawn to scale."}

:::


:::osservazione
When two different portfolios replicate the same cash flows, the system $Ax=b$ can have more than one solution. In an arbitrage-free market every solution has the same cost. Otherwise, buying the cheaper portfolio and selling the other would generate an initial receipt with zero future cash flows. For example, if two instruments pay $100$ and $50\,\mathrm{EUR}$ respectively on the same date, one unit of the first and two of the second produce the same redemption payment. A price of $96\,\mathrm{EUR}$ for the first therefore requires a price of $48\,\mathrm{EUR}$ for the second, provided that the currency and the certainty of payment are the same.
:::
