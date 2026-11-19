---
titolo: Bonds, prices, and yields
sommario: Pricing bonds with and without coupons, yield to maturity, accrued interest, the clean price, and the realized holding-period return.
---

## Zero-coupon bonds

:::definizione{#zero-coupon titolo="Price and yield of a zero-coupon bond"}
A bond's price is the amount the buyer pays on the settlement date. The contract specifies the amounts the holder is entitled to receive and their payment dates. A **zero-coupon bond**, abbreviated ZCB, makes a single future payment. Let $M>0$ be its redemption value, payable in $T>0$ years. Under compound interest, an effective annual yield $y>-1$ corresponds to a price $P$ given by

$$
P=\frac{M}{(1+y)^T}.
$$

The factor $(1+y)^T$ accumulates an amount from today to maturity. Dividing by that factor discounts the redemption payment to the purchase date. If the price is known and $P>0$, the same equation can be solved for $y$.

$$
1+y=\left(\frac{M}{P}\right)^{\frac{1}{T}},
\qquad
y=\left(\frac{M}{P}\right)^{\frac{1}{T}}-1.
$$

The ratio $\dfrac{M}{P}$ is the growth factor over the full term. Raising it to the power $\dfrac{1}{T}$ expresses the same growth on an annual basis. When $T$ is fractional, the exponential convention applies.
:::

:::esempio{titolo="Annual return and total return"}
A zero-coupon bond bought for $800\,\mathrm{EUR}$ pays $968\,\mathrm{EUR}$ after two years. The ratio $\dfrac{968}{800}$ equals $1.21$, so the total return is $21\%$. The annual factor is $\sqrt{1.21}=1.1$, giving an effective annual return of $10\%$. Compounding $800\,\mathrm{EUR}$ for two years at $10\%$ verifies the result.

::grafico{assi=0 unicolore=1 legenda=0 xmin=-0.5 xmax=3.25 ymin=-1.2 ymax=1.25 linee="-0.3,0 2.55,0;0,-0.035 0,0.035;1,-0.035 1,0.035;2,-0.035 2,0.035" vettori="0,0,0,-0.826;2,0,2,1.0" etichette="-0.08,-0.976,800;1.92,1.09,968;0.04,0.07,0;1.04,-0.15,1;2.04,-0.15,2;2.6,-0.03,t (years)" titolo="Cash flows from the zero-coupon bond. The buyer pays 800 euros today and receives 968 euros in two years. Upward arrows indicate receipts and downward arrows indicate outlays. Amounts are in euros."}

:::

:::osservazione
The face value $N$ is the contractual base for stating coupons and price quotations. The redemption value $M$ is the principal actually paid in the cash flows. If a bond with face value $1000\,\mathrm{EUR}$ redeems at $102\%$ of face value, then $M=1020\,\mathrm{EUR}$. If it is quoted at $96$ per $100$ of face value, its price is $960\,\mathrm{EUR}$. The yield formula uses $1020$ and $960$, so the result also accounts for the redemption premium.
:::

:::attenzione
A zero-coupon bond can have a negative yield. If it costs $1050\,\mathrm{EUR}$ and pays $1000\,\mathrm{EUR}$ in one year, its yield is $\dfrac{1000}{1050}-1=-\dfrac{1}{21}$. The sign depends on how the initial outlay compares with the amount received at maturity.
:::

## Coupon bonds

:::definizione{titolo="Coupon, face value, and redemption payment"}
A **coupon** is a periodic payment specified in the contract. For a fixed-rate bond with one coupon per year, the amount is $C=Nr_c$, where $N$ is the face value and $r_c$ the annual coupon rate. At maturity the holder receives both the final coupon and the principal payment $M$. For example, with face value $2000\,\mathrm{EUR}$, an annual coupon rate of $3\%$, and a redemption payment of $2040\,\mathrm{EUR}$, the final cash inflow is $60+2040=2100\,\mathrm{EUR}$.
:::

::::teorema{#prezzo-obbligazione titolo="Price as the present value of the payments"}
Let $n\geq1$ be the number of remaining coupons, each of amount $C\geq0$. Settlement occurs immediately after a coupon date, and the next coupon is due in one period. The bond repays $M>0$ along with the last coupon. At an effective yield per period of $i>-1$, set $q=1+i$ and $v=q^{-1}$. The price is

$$
P(i)=C a_{\overline n|i}+Mv^n,
\qquad
a_{\overline n|i}=\sum_{k=1}^{n}v^k.
$$

The first term values the stream of coupons. The second values the principal repayment alone.

:::dimostrazione
Financial equivalence at the settlement date gives $\sum_{k=1}^{n-1} Cv^k+(C+M)v^n$. Splitting the final receipt into its two components gives $C\sum_{k=1}^{n}v^k+Mv^n$. If $i\ne0$, the geometric sum yields $a_{\overline n|i}=\dfrac{1-v^n}{i}$. If $i=0$, each discount factor $v^k$ equals one, so $a_{\overline n|0}=n$.
:::
::::

:::esempio{titolo="Two payment dates and a final redemption payment"}
A bond pays $55\,\mathrm{EUR}$ in one year and $1155\,\mathrm{EUR}$ in two years, of which $1100\,\mathrm{EUR}$ is the principal repayment. At an effective annual yield of $10\%$, the first coupon has a present value of $50\,\mathrm{EUR}$. The final cash inflow is worth $\dfrac{1155}{1.21}=\dfrac{10500}{11}\,\mathrm{EUR}$ today. The price is therefore $\dfrac{11050}{11}\,\mathrm{EUR}$, or approximately $1004.55\,\mathrm{EUR}$. The exponents differ because the payments arrive one year apart.
:::

:::osservazione
If the coupons differ in amount, each cash flow is discounted from its own payment date. For example, coupons of $30$ and $45\,\mathrm{EUR}$ with a redemption payment of $1000\,\mathrm{EUR}$ alongside the second coupon give $P=30v+1045v^2$. The level annuity formula applies to equal installments. When a separate spot rate is used for each maturity, each cash flow has its own discount factor, as in the chapter on the term structure of interest rates.
:::

## Yield to maturity

:::definizione{#rendimento-scadenza titolo="Effective yield to maturity"}
The **effective yield to maturity** is the internal rate of return on buying a bond and receiving its contractual cash flows through redemption. It is commonly called *yield to maturity*, or YTM. Let $P_{\mathrm{obs}}>0$ be the price paid at settlement and $F_k>0$ the amounts received on the remaining payment dates $t_k>0$, all measured in the same unit of time. The yield $i$ per unit of time satisfies

$$
P_{\mathrm{obs}}=\sum_{k=1}^{n}\frac{F_k}{(1+i)^{t_k}}.
$$

The inputs are the purchase price, the payment amounts, and their dates. If settlement falls between coupon dates, the price includes accrued interest and each time is measured from settlement.
:::

::::teorema{titolo="Existence and uniqueness of the yield to maturity"}
For a positive price and a finite sequence of positive future receipts, the YTM equation has exactly one solution $i>-1$. Therefore, an interval over which the theoretical price falls from above the observed price to below it contains exactly the yield sought.

:::dimostrazione
Each term $F_k(1+i)^{-t_k}$ is continuous and strictly decreasing for $i>-1$ because $F_k>0$ and $t_k>0$. The sum has the same properties. As $i$ tends to $-1$ from the right, each term tends to $+\infty$. As $i$ tends to $+\infty$, each term tends to zero. The intermediate value theorem guarantees existence for every positive price, and strict monotonicity guarantees uniqueness.
:::
::::

:::esempio{titolo="Finding the yield by successive trials"}
A bond costs $900\,\mathrm{EUR}$ and pays $60\,\mathrm{EUR}$ in one year and $1060\,\mathrm{EUR}$ in two years. At an annual yield of $10\%$, the theoretical price is approximately $930.58\,\mathrm{EUR}$. At $15\%$ it is approximately $853.69\,\mathrm{EUR}$. The observed price lies between these values, so the YTM lies between $10\%$ and $15\%$. Bisection evaluates the theoretical price at the midpoint. If it exceeds the observed price, retain the half with higher yields. If it falls below the observed price, retain the half with lower yields. Multiplying the equation $900=\dfrac{60}{q}+\dfrac{1060}{q^2}$ by $q^2$, with $q=1+i$, gives $900q^2-60q-1060=0$. Its positive root is $q=\dfrac{1+\sqrt{1061}}{30}$, so the YTM is approximately $11.91\%$.

::grafico{f="60/(1+x/100)+1060/(1+x/100)^2;900" xmin=0 xmax=20 ymin=760 ymax=1160 nomi="i,P" legenda="P(i);P_{\mathrm{obs}}=900" punti="10,930.58,vuoto;15,853.69,vuoto;11.91,900,pieno" segmenti="11.91,760,11.91,900" etichette="12.3,785,i ≈ 11.91" titolo="Theoretical price in euros against annual yield as a percentage. The intersection with the observed price line gives the YTM. The open circles show the trials at 10% and 15%."}

:::

:::attenzione
The **current yield** of a bond with annual coupon $C$ is the ratio $\dfrac{C}{P_{\mathrm{obs}}}$. It measures one year's coupon income relative to the price. For a bond that costs $800\,\mathrm{EUR}$ and pays a coupon of $40\,\mathrm{EUR}$ and a redemption amount of $840\,\mathrm{EUR}$ in one year, the current yield is $5\%$. The YTM is $\dfrac{880}{800}-1=10\%$ because it also includes the capital gain from $800$ to $840\,\mathrm{EUR}$.
:::

## Coupons paid more than once a year

:::definizione{#cedole-infrannuali titolo="Coupon period and equivalent yield"}
Let $m$ be the number of equal coupons per year, $N$ the face value, and $r_c$ the nominal annual coupon rate. Each coupon is $C=\dfrac{Nr_c}{m}$. Discount it at the effective yield $i$ for one coupon period. If the effective annual yield $y>-1$ is given, the yield per period follows from the equivalence

$$
(1+i)^m=1+y,
\qquad
i=(1+y)^{\frac{1}{m}}-1.
$$

If the quoted nominal annual yield is convertible $m$ times per year and denoted by $j^{(m)}$, its definition gives $i=\dfrac{j^{(m)}}{m}$. In the pricing formula, the coupon and yield refer to the same period, and the exponent counts the periods remaining until payment.
:::

:::esempio{titolo="Valuation with two semiannual coupons"}
A bond with face value $1000\,\mathrm{EUR}$ pays semiannual coupons at a nominal annual coupon rate of $6\%$ and redeems at par in one year. The effective annual yield is $10.25\%$, and settlement occurs immediately after a coupon payment. Each coupon is $\dfrac{1000\cdot0.06}{2}=30\,\mathrm{EUR}$. Since $1.1025=1.05^2$, the semiannual yield is $5\%$. The price is therefore

$$
\begin{aligned}
P&=\frac{30}{1.05}+\frac{1030}{1.05^2}\\[6pt]
 &\approx962.81\,\mathrm{EUR}.
\end{aligned}
$$

::grafico{assi=0 unicolore=1 legenda=0 xmin=-0.5 xmax=3.25 ymin=-1.2 ymax=1.25 linee="-0.3,0 2.55,0;0,-0.035 0,0.035;1,-0.035 1,0.035;2,-0.035 2,0.035" vettori="0,0,0,-0.935;1,0,1,0.2;2,0,2,1.0" etichette="-0.16,-1.085,962.81;0.947,0.29,30;1.893,1.09,1030;0.04,0.07,0;1.04,-0.15,1;2.04,-0.15,2;2.6,-0.03,t (half-years)" titolo="Cash flows from the semiannual coupon bond, valued at 5% per half-year. Upward arrows show receipts and downward arrows show outlays. Amounts are in euros. Arrow lengths are not to scale."}

:::

:::osservazione
A semiannual yield of $5\%$ can be quoted as a nominal annual yield of $10\%$ compounded semiannually or an effective annual yield of $10.25\%$. Applying the respective definitions gives the same half-year factor, $1.05$. The bond's nominal coupon rate still determines the amount of each coupon. With three years remaining and settlement at the beginning of the period, six semiannual payments remain. For a period of irregular length, the amounts and time intervals follow the convention specified in the problem.
:::

## Clean and dirty prices

:::definizione{#corso-secco titolo="Settlement price and accrued interest"}
A buyer entitled to the next coupon pays the **full price** $P_{\mathrm{tq}}$, also called the *dirty price*. The market quotation may give the **price excluding accrued interest** $P_{\mathrm{s}}$, called the *clean price*. Under the linear accrual convention, for a coupon $C$ and an elapsed fraction $\alpha$ of the coupon period, accrued interest $A$ is

$$
A=\alpha C,
\qquad
P_{\mathrm{tq}}=P_{\mathrm{s}}+A.
$$

If the problem specifies actual days in the coupon period, $\alpha$ is the ratio of the days from the previous coupon to settlement to the days in the whole coupon period. Both counts use the same convention. Subtracting the portion of the coupon accrued under that convention from the total gives the clean price.
:::

:::esempio{titolo="From a quote per hundred to the settlement amount"}
A bond with face value $2000\,\mathrm{EUR}$ has a clean price quote of $98.5$ per $100$ of face value. The next coupon is $40\,\mathrm{EUR}$. Under an actual day count, $45$ of the $180$ days in the period have elapsed at settlement. The clean price in euros is $98.5\cdot20=1970\,\mathrm{EUR}$, and accrued interest is $40\cdot\dfrac{45}{180}=10\,\mathrm{EUR}$. The buyer pays $1980\,\mathrm{EUR}$. In the YTM calculation this is the initial outlay against the remaining receipts.
:::

:::osservazione
The present value between coupons depends on the time *remaining* until the next payment. If the same day count is used for accrual and discounting, the next cash flow is $1-\alpha$ periods away. For regular coupons, $t_k=k-\alpha$ for remaining payment number $k$. The theoretical dirty price is therefore $q^{\alpha}\sum_{k=1}^{n}F_kv^k$. Equivalently, accumulate the value immediately after the previous coupon for $\alpha$ periods, because the bond makes no payments in that interval. Subtracting accrued interest, calculated by the linear rule, then gives the clean price.
:::

:::esempio{titolo="Dirty and clean prices during a coupon period"}
A bond with face value $1000\,\mathrm{EUR}$ pays an annual coupon of $50\,\mathrm{EUR}$ and has three coupons remaining immediately after a coupon payment. At an effective annual yield of $4\%$ its price on that date is

$$
P_0=50\,a_{\overline 3|0.04}+\frac{1000}{1.04^3}\approx1027.75\,\mathrm{EUR}.
$$

Until the next coupon, the bond makes no payments. After a fraction $\alpha$ of the period, the dirty price is therefore $P_{\mathrm{tq}}(\alpha)=1027.75\cdot1.04^{\alpha}$ and the clean price is $P_{\mathrm{s}}(\alpha)=P_{\mathrm{tq}}(\alpha)-50\alpha$. At the midpoint they are $P_{\mathrm{tq}}\approx1048.10\,\mathrm{EUR}$ and $P_{\mathrm{s}}\approx1023.10\,\mathrm{EUR}$, respectively. Immediately before the coupon payment, the dirty price is approximately $1068.86\,\mathrm{EUR}$, comprising the coupon of $50\,\mathrm{EUR}$ and the price $1018.86\,\mathrm{EUR}$ of the bond with two coupons remaining. Immediately after payment the dirty price falls to $1018.86\,\mathrm{EUR}$, which is also the clean price at the end of the period. Thus on the coupon date the dirty price drops by the coupon amount while the clean price varies continuously.

::grafico{curve="t,1027.7509*1.04^t,0,1;t,1027.7509*1.04^t-50*t,0,1" xmin=0 xmax=1.15 ymin=1000 ymax=1100 nomi="α,euro" legenda="P_{\mathrm{tq}}(\alpha);P_{\mathrm{s}}(\alpha)" punti="0,1027.75,pieno;1,1068.86,vuoto;1,1018.86,pieno" titolo="Dirty and clean prices during the period before the next coupon, for the bond with a 50-euro coupon, three coupons remaining, and a 4% annual yield."}
:::

:::attenzione
On a coupon date, ownership of the coupon due must be specified. If settlement occurs immediately after payment, the seller has already received that coupon. The buyer pays a dirty price equal to the clean price and receives the subsequent coupons. For example, if the only remaining payment is $1050\,\mathrm{EUR}$ in one year, the price at $5\%$ is $1000\,\mathrm{EUR}$. Also assigning the $50\,\mathrm{EUR}$ just paid to the buyer would raise the price to $1050\,\mathrm{EUR}$.
:::

## The price–yield relationship

::::teorema{#tassi-prezzi titolo="Prices above, at, or below par"}
Let $N>0$ denote both face value and redemption value, $C\geq0$ the level coupon, $n\geq1$ the number of coupons remaining, and $i>-1$ the yield per coupon period. Value the bond immediately after a coupon payment, with the next coupon one period away. Then

$$
P-N=(C-iN)a_{\overline n|i}.
$$

The factor $a_{\overline n|i}$ is positive. The bond therefore trades above par if its coupon rate per period $\dfrac{C}{N}$ exceeds $i$, at par if the rates are equal, and below par if its coupon rate is lower.

:::dimostrazione
Setting $v=(1+i)^{-1}$ gives $iv^k=v^{k-1}-v^k$ for every $k\geq1$. Summation gives $ia_{\overline n|i}=1-v^n$, an identity that also holds for $i=0$. Substitute $Nv^n=N-Nia_{\overline n|i}$ in the price expression. Factoring out the annuity factor gives the formula.
:::
::::

:::esempio{titolo="Price premium and redemption premium"}
A bond with face value $1000\,\mathrm{EUR}$ pays $60\,\mathrm{EUR}$ in one year and redeems at par on the same date. At a yield of $5\%$, its price exceeds face value by $(60-50)\dfrac{1}{1.05}$, approximately $9.52\,\mathrm{EUR}$. If the redemption payment increased to $1021\,\mathrm{EUR}$, the price would rise by the present value of the additional $21\,\mathrm{EUR}$, which is $20\,\mathrm{EUR}$.
:::

:::osservazione
For a redemption amount $M$ different from face value, the same identity gives $P-M=(C-iM)a_{\overline n|i}$. The comparison with $M$ therefore depends on $\dfrac{C}{M}$, while a comparison with $N$ must also account for $M-N$. For example, with $N=1000$, $M=1050$, $C=20$, one payment date, and $i=5\%$, the price $\dfrac{1070}{1.05}$ is above face value and below redemption value.
:::

:::esempio{titolo="Pull to par"}
Two bonds with face and redemption values of $1000\,\mathrm{EUR}$ each have ten annual coupons remaining. The first pays $60\,\mathrm{EUR}$ per coupon and the second $40\,\mathrm{EUR}$. Both are valued at a constant yield of $5\%$. After $k$ coupon payments, $10-k$ coupons remain, so the relationship between price and face value gives $P=1000\pm10\,a_{\overline{10-k}|0.05}$, with the plus sign for the first bond. Today's prices are approximately $1077.22$ and $922.78\,\mathrm{EUR}$. After five years $a_{\overline 5|0.05}\approx4.3295$, so the respective prices are approximately $1043.29$ and $956.71\,\mathrm{EUR}$. The annuity factor decreases as the number of remaining coupons falls. Consequently, the premium and discount shrink after each payment until only the redemption amount of $1000\,\mathrm{EUR}$ remains at maturity.

::grafico{curve="t,1000+10*(1-1.05^(t-10))/0.05,0,10;t,1000-10*(1-1.05^(t-10))/0.05,0,10" xmin=0 xmax=10.8 ymin=900 ymax=1100 nomi="t,P" legenda="\text{coupon }60;\text{coupon }40" punti="0,1077.22,pieno;0,922.78,pieno;10,1000,pieno" asintoti="y=1000" titolo="Prices in euros immediately after each coupon payment at a constant yield of 5%, with t years elapsed out of ten. The curves connect the values calculated on the coupon dates t = 0, 1, …, 10."}
:::

:::esempio{titolo="The price curve for fixed cash flows"}
A bond with face value $1000\,\mathrm{EUR}$ pays $50\,\mathrm{EUR}$ at the end of year one and $1050\,\mathrm{EUR}$ at the end of year two. Its effective annual yield is $i$. At $5\%$ the bond trades at par. Because both cash flows are positive, any increase in $i$ reduces the present value of each. Price sensitivity to these changes is discussed in the chapter on duration and convexity.

::grafico{f="50/(1+x/100)+1050/(1+x/100)^2" xmin=0 xmax=13 ymin=850 ymax=1150 nomi="i,P" punti="5,1000,pieno" etichette="5.8,1015,At par" legenda="P(i)" titolo="Price in euros against annual yield as a percentage for a bond with two years remaining"}

:::

## Holding-period return

:::definizione{#rendimento-periodo titolo="Realized return over the holding period"}
The realized return measures what an investment earned between purchase and a chosen end date. Let $P_0>0$ be the dirty purchase price, $P_H$ the dirty sale price at time $H$, and $W_H$ the value at time $H$ of the coupons received during the holding period. If the bond is sold immediately after a coupon payment, that coupon is included in $W_H$ and the sale price covers only subsequent payments. The total return is

$$
h=\frac{P_H+W_H-P_0}{P_0}.
$$

If $H$ is measured in years and $P_H+W_H>0$, the equivalent effective annual return is $(1+h)^{\frac{1}{H}}-1$. If the bond is held to redemption, use the principal repaid in place of the sale price. In both cases each cash receipt enters the final calculation exactly once.
:::

:::esempio{titolo="Sale price and one-year return"}
A bond is bought for $980\,\mathrm{EUR}$ and sold for $970\,\mathrm{EUR}$ one year later, immediately after a coupon of $50\,\mathrm{EUR}$ is received. At the end of the year the holder has received $1020\,\mathrm{EUR}$. The gain over the purchase price is $40\,\mathrm{EUR}$, so the return is $\dfrac{40}{980}=\dfrac{2}{49}$, approximately $4.08\%$. The coupon offsets the price decline and leaves a net gain.
:::

:::osservazione
If a coupon is received before the end date, its contribution to terminal wealth depends on reinvestment. At an effective annual reinvestment rate $r>-1$, a coupon $C_k$ received at time $t_k$ contributes $C_k(1+r)^{H-t_k}$. Holding coupons in cash corresponds to $r=0$. If the bond is held to redemption and all intermediate coupons are reinvested at the YTM, the equivalent annual return equals the YTM. Indeed, multiplying both sides of the pricing equation by the accumulation factor to maturity gives precisely the terminal wealth.
:::

:::esempio{titolo="Terminal wealth with reinvestment"}
A bond costs $1000\,\mathrm{EUR}$, pays two annual coupons of $50\,\mathrm{EUR}$, and repays $1000\,\mathrm{EUR}$ in year two. Its YTM is $5\%$. If the first coupon is reinvested at $2\%$, it is worth $51\,\mathrm{EUR}$ in year two. Terminal wealth is $51+50+1000=1101\,\mathrm{EUR}$. The realized annual return is $\sqrt{1.101}-1$, below $5\%$ because $1.101<1.05^2$.

::grafico{assi=0 unicolore=1 legenda=0 xmin=-0.5 xmax=3.25 ymin=-1.2 ymax=1.25 linee="-0.3,0 2.55,0;0,-0.035 0,0.035;1,-0.035 1,0.035;2,-0.035 2,0.035" vettori="0,0,0,-0.952;1,0,1,0.2;2,0,2,1.0" segmenti="1,0.2,2,0.2" etichette="-0.107,-1.102,1000;0.947,0.29,50;1.893,1.09,1050;0.04,0.07,0;1.04,-0.15,1;2.04,-0.15,2;2.6,-0.03,t (years);1.3,0.26,51 at t = 2" titolo="The bond costs 1,000 euros and pays 50 euros in year one and 1,050 euros in year two. Reinvested at 2%, the first coupon is worth 51 euros in year two. Upward arrows show receipts and downward arrows show outlays. Amounts are in euros. Arrow lengths are not to scale."}

:::

## Bond portfolios

:::definizione{#portafoglio-titoli titolo="Aggregate value and cash flows"}
Let $x_j$ be the number of units held of bond $j$ and $P_j$ the unit price, all on the same date. The value of the **portfolio** is $\sum_j x_jP_j$. The aggregate cash flow on each future date is $\sum_j x_j F_j(t)$, where $F_j(t)$ is the per-unit payment by bond $j$ on that date. The market value sums holdings valued on a common date, while the aggregate cash flow sums receipts due on the same date. This distinction gives both the amount invested and the payment schedule, separately.
:::

:::esempio{titolo="From market-value weights to holdings"}
An investment of $4500\,\mathrm{EUR}$ is allocated to two zero-coupon bonds, $40\%$ to the first and $60\%$ to the second. The first costs $90\,\mathrm{EUR}$ per unit and repays $100\,\mathrm{EUR}$ in one year. The second costs $75\,\mathrm{EUR}$ and repays $100\,\mathrm{EUR}$ in two years. The holdings are $\dfrac{1800}{90}=20$ units of the first bond and $\dfrac{2700}{75}=36$ of the second. The portfolio pays $2000\,\mathrm{EUR}$ in year one and $3600\,\mathrm{EUR}$ in year two. The shares of the cash receipts differ from the market-value weights because the two bonds have different unit prices.

::grafico{assi=0 unicolore=1 legenda=0 xmin=-0.5 xmax=3.25 ymin=-1.2 ymax=1.25 linee="-0.3,0 2.55,0;0,-0.035 0,0.035;1,-0.035 1,0.035;2,-0.035 2,0.035" vettori="0,0,0,-1.0;1,0,1,0.444;2,0,2,0.8" etichette="-0.107,-1.15,4500;0.893,0.534,2000;1.893,0.89,3600;0.04,0.07,0;1.04,-0.15,1;2.04,-0.15,2;2.6,-0.03,t (years)" titolo="Aggregate cash flows of the portfolio holding 20 units of one zero-coupon bond and 36 of the other. Upward arrows show receipts and downward arrows show outlays. Amounts are in euros."}

:::

:::osservazione
If $h_j$ is the realized return on bond $j$ over the same horizon and under the same coupon reinvestment rule, the realized return on a portfolio with no intermediate transactions is $\sum_j w_j h_j$. Its initial weight $w_j=\dfrac{x_j P_j}{\sum_k x_kP_k}$ is the share of capital invested in bond $j$. Indeed, the bond contributes $x_jP_jh_j$ euros to the change in wealth. Dividing the sum of these changes by the initial value gives the weighted average.
:::

:::attenzione
The portfolio YTM is calculated using the total price and the schedule of aggregate cash receipts. For example, suppose two zero-coupon bonds each cost $100\,\mathrm{EUR}$. One pays $100\,\mathrm{EUR}$ after one year and the other $144\,\mathrm{EUR}$ after two years. Their individual YTMs are $0\%$ and $20\%$, with an arithmetic mean of $10\%$. At that rate their aggregate present value is $\dfrac{100}{1.1}+\dfrac{144}{1.21}\approx209.92\,\mathrm{EUR}$, above the total price of $200\,\mathrm{EUR}$. Since present value decreases as the rate rises, the portfolio YTM exceeds $10\%$.
:::
