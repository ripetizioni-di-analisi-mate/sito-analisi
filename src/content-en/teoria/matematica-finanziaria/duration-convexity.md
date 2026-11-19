---
titolo: Duration, convexity, and price sensitivity
sommario: Calculating Macaulay duration and estimating how the prices of bonds and portfolios change when yields move.
---

## Present-value-weighted time to payment

:::definizione{#duration-macaulay titolo="Macaulay duration"}
Consider a bond with certain payments $C_k>0$ at times $t_k\geq 0$, measured in years from the valuation date. Let $y>-1$ be the effective annual yield used to discount all cash flows. The one-year discount factor is $v=(1+y)^{-1}$. The present value of payment $k$ is $A_k=C_kv^{t_k}$, and the price is $P(y)=\sum_k A_k$. **Macaulay duration**, denoted by $D$, is the average time to payment, weighted by each payment's share of the price.

$$
\begin{aligned}
w_k&=\frac{A_k}{P(y)},\\[6pt]
D(y)&=\sum_k t_kw_k=\frac{\sum_k t_k C_kv^{t_k}}{P(y)}.
\end{aligned}
$$

The weights are positive and sum to one, so duration is measured in years and lies between the first and last payment dates. A payment that accounts for a large share of the price also carries substantial weight in the average payment time. The weights are based on present values because all amounts must be expressed as of the valuation date.
:::

:::esempio{titolo="From the payment schedule to duration"}
A bond pays $55\,\mathrm{EUR}$ in one year and $121\,\mathrm{EUR}$ in two years. At an effective annual yield of $10\%$, the present values are

$$
A_1=\frac{55}{1.1}=50\,\mathrm{EUR},
\qquad
A_2=\frac{121}{1.1^2}=100\,\mathrm{EUR}.
$$

The price is $150\,\mathrm{EUR}$, so the two shares of the price are $\dfrac13$ and $\dfrac23$. The duration is $1\cdot\dfrac13+2\cdot\dfrac23=\dfrac53\,\mathrm{years}$. The bond matures in two years. Its weighted average time to payment is less than two years because the first payment also contributes to the price.

::grafico{xmin=0 xmax=2.6 ymin=0 ymax=150 nomi="t,euro" vettori="1,0,1,55,55;2,0,2,121,121" unicolore=1 punti="1,50,pieno,50;2,100,pieno,100;1.6667,0,pieno,D" legenda=0 titolo="The arrows show the amounts paid at times $1$ and $2$. The filled dots show their present values at $10\%$. The point $D$ on the time axis marks the duration, $\dfrac{5}{3}\,\mathrm{years}$."}
:::

:::osservazione
Two bonds with the same payment dates can have different durations. For dates $1$ and $2$ with respective present values of $100$ and $100\,\mathrm{EUR}$, duration is $1.5\,\mathrm{years}$. If the first present value falls by $40\,\mathrm{EUR}$ and the second rises by the same amount, the price stays at $200\,\mathrm{EUR}$ and duration rises to $1.7\,\mathrm{years}$. At a fixed price, increasing the weight of the later payment raises the average.
:::

:::osservazione
The weights change as the yield changes. If two cash flows are due at $t_1<t_2$, the ratio of the later payment's present value to the earlier payment's is $\dfrac{C_2}{C_1}(1+y)^{-(t_2-t_1)}$. As $y$ increases, the ratio decreases because $t_2-t_1>0$. The later payment then accounts for a smaller share of the price, so Macaulay duration falls. With a single cash flow its weight is always one, and duration remains equal to the time to maturity.

::grafico{f="(55/(1+x/100)+242/(1+x/100)^2)/(55/(1+x/100)+121/(1+x/100)^2)" xmin=0 xmax=100 ymin=0 ymax=2.5 nomi="y,D" asintoti="y=1;y=2" punti="10,1.6667,pieno" legenda="D(y)" titolo="Duration of a bond that pays $55\,\mathrm{EUR}$ at time $1$ and $121\,\mathrm{EUR}$ at time $2$, with the yield $y$ in percentage points. The curve decreases and stays between the first and last payment dates. At $10\%$, duration is $\dfrac{5}{3}$."}
:::

:::osservazione
The calculation for two cash flows extends to any finite number of positive payments. Differentiate the numerator and denominator of the weight $w_k=\dfrac{A_k}{P(y)}$ using the quotient rule. Since $A'_k=-t_k \dfrac{A_k}{1+y}$ and $P'=-\dfrac{D P}{1+y}$, this gives

$$
w'_k=\frac{D-t_k}{1+y}w_k.
$$

A payment due before the duration gains weight as the yield rises. A payment due after the duration loses weight. The derivative of the weighted average payment time is therefore

$$
\begin{aligned}
D'(y)&=\frac{D^2-\sum_k w_k t_k^2}{1+y}\\[6pt]
&=-\frac{\sum_k w_k(t_k-D)^2}{1+y}.
\end{aligned}
$$

The sum in the numerator measures the dispersion of payment times around the duration. It is zero if all payments fall on the same date, and positive if at least two dates differ. Duration is therefore strictly decreasing in the yield for any stream of cash flows with more than one distinct payment date. This result concerns the weighted average with all weights recalculated at the same yield.
:::

## Modified duration

::::teorema{#duration-modificata titolo="The price derivative and modified duration"}
Assume that the cash flows are fixed and positive, the maturities are expressed in years, and at least one payment is in the future. The price $P(y)$ is differentiable for $y>-1$. **Modified duration** with respect to the effective annual yield $y$ is the negative of the price derivative divided by the price itself.

$$
D_{\mathrm{mod}}(y)=-\frac{P'(y)}{P(y)}=\frac{D(y)}{1+y}.
$$

The derivative measures the change in euros per unit change in yield. Dividing by the price gives the relative change, allowing comparisons between bonds with different prices. Since $P'(y)<0$, a higher yield reduces the price.

::grafico{f="100*1.05/(1+x/100);100*(1.05/(1+x/100))^5" xmin=0 xmax=10 ymin=50 ymax=150 nomi="y,P" punti="5,100,pieno" legenda="T=1;T=5" titolo="Prices in euros of two zero-coupon bonds maturing at $1$ and $5\,\mathrm{years}$, as functions of the yield $y$ in percentage points. Both are worth $100\,\mathrm{EUR}$ at a yield of $5\%$. At their common point the curve for $T=5$ is steeper because the respective sensitivities are $D_{\mathrm{mod}}=\dfrac{5}{1.05}$ and $\dfrac{1}{1.05}$."}

:::dimostrazione
Differentiate the sum of the present values while holding payments and dates fixed. For each cash flow,

$$
\frac{\mathrm d}{\mathrm dy}\bigl[C_k(1+y)^{-t_k}\bigr]
=-\frac{t_k}{1+y}\,C_k(1+y)^{-t_k}.
$$

All terms contain the factor $-\dfrac{1}{1+y}$. Factoring it out leaves the sum of the present values weighted by their payment times. Dividing this sum by $P(y)$ gives $D(y)$.
:::
::::

:::esempio{titolo="A half-year as the compounding period"}
A bond makes its only payment after three half-years, so its Macaulay duration is $1.5\,\mathrm{years}$. Its effective semiannual yield is $2\%$. If $j$ is the nominal annual yield compounded semiannually, then $j=4\%$ and the price is proportional to $\left(1+\dfrac{j}{2}\right)^{-3}$. Its relative sensitivity with respect to $j$ is

$$
D_{\mathrm{mod},j}
=\frac{3}{2(1+0.02)}
=\frac{1.5}{1.02}\approx 1.4706.
$$

With respect to the semiannual rate $i=\dfrac{j}{2}$, the relative sensitivity is $\dfrac{3}{1.02}$ because a given numerical change in $i$ corresponds to a change twice as large in $j$. The time unit for the average and the variable of differentiation must both be specified.
:::

:::osservazione
If an effective annual yield rises from $10\%$ to $11\%$, the absolute change is $\Delta y=0.01$, or one percentage point, equivalent to one hundred basis points. The yield has risen by $10\%$ relative to its starting value because $\dfrac{0.01}{0.10}=0.10$. The derivative-based price approximation uses the absolute difference, $0.01$.
:::

## Convexity

::::teorema{#convexity titolo="Curvature of price as a function of yield"}
**Convexity** with respect to the effective annual yield $y$ is the second derivative of the price divided by the price. For fixed positive cash flows at times $t_k\geq 0$, with at least one future payment,

$$
\mathcal C(y)
=\frac{P''(y)}{P(y)}
=\frac{\sum_k t_k(t_k+1)w_k}{(1+y)^2}>0.
$$

The price curve is strictly convex, so it lies above its tangent away from the point of tangency. Even a bond with a single payment shows this difference because the discount factor is a nonlinear function of the yield.

::grafico{f="88/(1+x/100)+145.2/(1+x/100)^2;200-320/110*(x-10)" xmin=0 xmax=30 ymin=140 ymax=240 nomi="y,P" punti="10,200,pieno" legenda="P(y);\text{Tangent line}" titolo="Price in euros as a function of yield $y$ in percentage points for a bond paying $88\,\mathrm{EUR}$ at time $1$ and $145.20\,\mathrm{EUR}$ at time $2$. The tangent is drawn at the yield $10\%$, where $P=200\,\mathrm{EUR}$. The curve lies above the tangent on both sides."}

:::dimostrazione
Differentiate the present value of each payment a second time. Differentiating $(1+y)^{-t_k-1}$ introduces the factor $-t_k-1$, so the second derivative of the term is $t_k(t_k+1)C_k(1+y)^{-t_k-2}$. Dividing the sum by $P(y)$ turns the present value of each payment into its weight $w_k$. At least one $t_k$ is positive, so the numerator in the weighted formula is strictly positive.
:::
::::

:::esempio{titolo="Convexity with two discounted cash flows"}
At an effective annual yield of $10\%$, two cash flows at times $1$ and $2$ contribute $80$ and $120\,\mathrm{EUR}$ to the price. The weighted average of the factors $t_k(t_k+1)$ is $2\cdot 0.4+6\cdot 0.6=4.4$. After division by $1.1^2$, convexity is $\dfrac{4.4}{1.21}\approx 3.6364$. The second payment accounts for $60\%$ of the price and contributes $3.6$ out of $4.4$ in the numerator. The second derivative gives greater weight to distant maturities because the factors grow quadratically with time.
:::

:::attenzione
Convexity depends on the parameter used to express yield. If the force of interest $\delta=\log(1+y)$ is used, each present value is $C_k e^{-\delta t_k}$. With this variable, the two normalized derivatives, with their usual signs, give $\sum_k w_k t_k$ and $\sum_k w_k t_k^2$. For example, a two-year zero-coupon bond has convexity $4$ with respect to $\delta$ and $\dfrac{6}{(1+y)^2}$ with respect to $y$. They describe the same price expressed in two different variables.
:::

## First-order price changes

:::definizione{#sensibilita-prezzo titolo="Relative changes, changes in euros, and DV01"}
At the initial yield $y$, consider a shift $\Delta y$ such that $y+\Delta y>-1$. Set $\Delta P=P(y+\Delta y)-P(y)$. The same movement has two first-order estimates.

$$
\begin{aligned}
\frac{\Delta P}{P(y)}&\approx -D_{\mathrm{mod}}(y)\Delta y,\\[6pt]
\Delta P&\approx -P(y)D_{\mathrm{mod}}(y)\Delta y.
\end{aligned}
$$

The first expresses the change as a fraction of the price and the second in euros. In this chapter, **DV01** is the positive amount of the estimated loss for a one-basis-point increase, namely $P(y)D_{\mathrm{mod}}(y)10^{-4}$. The exact loss for one basis point is obtained by revaluing all cash flows at the yield $y+10^{-4}$.
:::

:::esempio{titolo="From basis points to euros"}
A bond is worth $1200\,\mathrm{EUR}$ and has modified duration $4.5$. Its DV01 is $1200\cdot 4.5\cdot10^{-4}=0.54\,\mathrm{EUR}$ per basis point. A drop of $25$ basis points corresponds to $\Delta y=-0.0025$. Substituting in the linear expression gives a relative change of $+0.01125$ and an absolute change of $+13.50\,\mathrm{EUR}$. The positive sign indicates a price increase.
:::

:::osservazione
Modified duration ranks percentage sensitivities, while DV01 also accounts for the amount invested. A bond worth $1000\,\mathrm{EUR}$ with modified duration $6$ has a DV01 of $0.60\,\mathrm{EUR}$. A bond worth $3000\,\mathrm{EUR}$ with modified duration $3$ has a DV01 of $0.90\,\mathrm{EUR}$. For the same yield shift the first has the larger percentage price change. The second has the larger change in euros because its starting value is greater.
:::

## Second-order changes

::::teorema{#taylor-prezzo titolo="The duration–convexity approximation"}
With fixed payments and an effective annual yield $y>-1$, the price is three times differentiable in a neighborhood of $y$. For $\Delta y$ close to zero, the second-order Taylor expansion gives

$$
\frac{\Delta P}{P(y)}
=-D_{\mathrm{mod}}(y)\Delta y
+\frac{\mathcal C(y)}{2}(\Delta y)^2
+O\bigl((\Delta y)^3\bigr).
$$

The term $O\bigl((\Delta y)^3\bigr)$ denotes a remainder whose absolute value is bounded by a constant times $|\Delta y|^3$ in a neighborhood of zero. With positive cash flows, the quadratic correction is positive for a shift in either direction. For two admissible shifts of opposite sign and equal size, strict convexity gives $P(y-h)+P(y+h)>2P(y)$ for $h>0$. Thus the gain from the yield decrease exceeds the loss from the yield increase.

:::dimostrazione
Apply Taylor's theorem to $P$ at $y$. Subtract $P(y)$ and divide by the initial price. The coefficients of the first- and second-order terms become $-D_{\mathrm{mod}}(y)$ and $\dfrac{\mathcal C(y)}{2}$, respectively. The third derivative is continuous and bounded on a small closed interval around $y$, so the remainder has the stated order.
:::
::::

:::esempio{titolo="Comparison with the exact new price"}
A two-year bond pays $110.25\,\mathrm{EUR}$ at maturity. At a yield of $5\%$ the price is $100\,\mathrm{EUR}$. If the yield rises to $9\%$, the shift is $\Delta y=0.04$. The first-order price estimate is $100\bigl(1-\dfrac{2}{1.05}\cdot 0.04\bigr)\approx92.38\,\mathrm{EUR}$. Convexity is $\dfrac{6}{1.05^2}$, and the quadratic term adds about $0.435\,\mathrm{EUR}$. The second-order estimate is approximately $92.82\,\mathrm{EUR}$ and the exact price is $\dfrac{110.25}{1.09^2}\approx92.80\,\mathrm{EUR}$. Before rounding, the exact price and second-order estimate differ by about $0.021\,\mathrm{EUR}$.
:::

::grafico{f="110.25/(1.05+x/100)^2-100;-200/1.05*x/100;100*(-2/1.05*x/100+3/1.05^2*(x/100)^2)" xmin=-16 xmax=16 ymin=-32 ymax=44 nomi="h,ΔP" legenda="\text{Exact change};\text{First order};\text{Second order}" titolo="Two-year zero-coupon bond with an initial yield of $5\%$. The shift $h$ is in percentage points and the price change $\Delta P$ in euros."}

:::osservazione
Halving the shift reduces the quadratic term to one quarter of its original size. To compare estimates numerically, calculate the error in euros by subtracting the exact price from the estimate. The graph shows the yield shift in percentage points on the horizontal axis and the price change in euros on the vertical axis. All three curves pass through the point for a zero shift and have the same slope there. The exact price curve and the second-order approximation also have the same local curvature. The convexity formula gives a local estimate. For a large shift, exact repricing also accounts for higher-order terms.
:::

## Portfolios

::::teorema{#duration-portafoglio titolo="Market-value weights and portfolio sensitivity"}
Let $x_j\geq0$ be the holdings and $P_j(s)>0$ the prices of the individual bonds when yields vary with a common parameter $s$. One example is a parallel shift $s$, expressed as a decimal and added to each initial yield. Let $V(s)=\sum_j x_jP_j(s)>0$ be the portfolio value. The normalized sensitivities with respect to $s$ combine using the **market-value weights** $\omega_j=\dfrac{x_jP_j(s)}{V(s)}$.

$$
\begin{aligned}
D_{\mathrm{mod},V}&=\sum_j\omega_jD_{\mathrm{mod},j},\\[6pt]
\mathcal C_V&=\sum_j\omega_j\mathcal C_j.
\end{aligned}
$$

In particular, portfolio DV01 is the sum of the position DV01s. A bond's weight depends on the number of units held and its unit price. Even equal holdings of two bonds can have different weights.

:::dimostrazione
The holdings are fixed, so $V'=\sum_j x_jP_j'$ and $V''=\sum_j x_jP_j''$. Dividing by $V$ and multiplying each summand by $\dfrac{P_j}{P_j}$ gives the weights $\omega_j$. The DV01 formula follows by multiplying portfolio modified duration by $V\cdot 10^{-4}$.
:::
::::

:::esempio{titolo="Equal quantities with different market values"}
A portfolio holds one unit of a bond worth $300\,\mathrm{EUR}$ with modified duration $2$ and one unit of a bond worth $700\,\mathrm{EUR}$ with modified duration $5$. For a common yield shift, portfolio modified duration is $0.3\cdot2+0.7\cdot5=4.1$. Its DV01 is $0.41\,\mathrm{EUR}$. For an increase of $20$ basis points, the estimated loss is $8.20\,\mathrm{EUR}$. Adding $300\cdot 2\cdot0.002=1.20$ and $700\cdot 5\cdot0.002=7\,\mathrm{EUR}$ gives the same loss.
:::

:::attenzione
If the yield shifts differ, the first-order change is $\Delta V\approx-\sum_j x_jP_jD_{\mathrm{mod},j}\Delta y_j$. A bond with price $300\,\mathrm{EUR}$ and modified duration $2$ loses about $6\,\mathrm{EUR}$ if its yield rises by one percentage point. Another bond, with price $600\,\mathrm{EUR}$ and modified duration $2$, gains about $6\,\mathrm{EUR}$ if its yield falls by half a percentage point. The first-order changes offset even though both durations are positive. Immunization studies the conditions under which changes in asset and liability values offset under specified assumptions about yield shifts.
:::

## Zero-coupon bonds and annuities

:::teorema{#duration-zcb titolo="Sensitivity of a single payment"}
A zero-coupon bond, abbreviated ZCB, makes a single positive payment $C$ at time $T>0$. Because its entire price is attributable to the payment at $T$, its Macaulay duration is $D=T$. At an effective annual yield $y>-1$, the following identities hold

$$
D_{\mathrm{mod}}=\frac{T}{1+y},
\qquad
\mathcal C=\frac{T(T+1)}{(1+y)^2}.
$$

The first identity follows from the ratio of the price derivative to the price. Differentiating $C(1+y)^{-T}$ twice gives the second. The amount $C$ cancels in the ratios, so both relative measures depend on $T$ and $y$.
:::

:::esempio{titolo="A coupon bond and a zero-coupon bond"}
Two bonds mature in three years. The first is a zero-coupon bond, so its Macaulay duration is $3\,\mathrm{years}$. For the second, the payments at times $1$, $2$, and $3$ account for $0.1$, $0.1$, and $0.8$ of present value, respectively. Its duration is $0.1+0.2+2.4=2.7\,\mathrm{years}$. At the same effective annual yield, the coupon bond also has a lower modified duration because the divisor $1+y$ is the same for both bonds.

::grafico{xmin=0 xmax=3.6 ymin=0 ymax=1.2 nomi="t,peso" vettori="1,0,1,0.1,10%;2,0,2,0.1,10%;3,0,3,0.8,80%" unicolore=1 punti="2.7,0,pieno,D" legenda=0 titolo="Shares of the coupon bond's present value attributable to the payments at $1$, $2$, and $3$. Its duration of $2.7\,\mathrm{years}$ is shorter than the time to maturity. For the zero-coupon bond all the weight falls at time $3$."}
:::

:::osservazione
For a perpetuity with level annual payments $R>0$ in arrears and yield $y>0$, the price is $P(y)=\dfrac R y$. Its first derivative is $-\dfrac R {y^2}$ and its second derivative is $\dfrac{2R}{y^3}$. Therefore $D_{\mathrm{mod}}=\dfrac1y$, $D=\dfrac{1+y}{y}$, and $\mathcal C=\dfrac{2}{y^2}$. With $y=5\%$ the Macaulay duration is $21\,\mathrm{years}$. The average is finite because the present values of distant payments decrease geometrically.

::grafico{f="(1+x/100)/(x/100)" xmin=0 xmax=20 ymin=0 ymax=50 nomi="y,D" asintoti="y=1" punti="5,21,pieno" legenda="D=\dfrac{1+y}{y}" titolo="Macaulay duration of a perpetuity payable in arrears, with yield $y$ in percentage points. At $5\%$ duration is $21\,\mathrm{years}$. As the yield rises, duration approaches $1$, the date of the first payment."}
:::

## Checking sensitivity using derivatives

:::definizione{#derivate-prezzo titolo="Centered finite differences"}
Given prices at three nearby yields, the derivatives can be estimated without calculating the individual weights. Let $h>0$ be a yield increment expressed as a decimal, and suppose $y-h>-1$. The **centered finite differences** are

$$
\begin{aligned}
P'(y)&\approx\frac{P(y+h)-P(y-h)}{2h},\\[6pt]
P''(y)&\approx\frac{P(y+h)-2P(y)+P(y-h)}{h^2}.
\end{aligned}
$$

When the prices are expanded about $y$, the constant and even-order terms cancel in the difference. The linear term cancels in the sum, and subtracting twice $P(y)$ removes the constant term as well. The denominator $2h$ is the distance between the two outer yields.

::grafico{f="5/(x/100)" xmin=2 xmax=8 ymin=0 ymax=200 nomi="y,P" punti="3,166.67,pieno;5,100,pieno;7,71.43,pieno;5,119.05,vuoto" segmenti="3,166.67,7,71.43;5,100,5,119.05" legenda="P(y)=\dfrac{5}{y}" titolo="Perpetuity with payment $5\,\mathrm{EUR}$ and yield $y$ in percentage points. Prices are shown at yields $3\%$, $5\%$, and $7\%$ ($h=0.02$). The slope of the chord estimates $P'$. Its midpoint, at $119.05\,\mathrm{EUR}$, lies above the central price of $100\,\mathrm{EUR}$, and the distance between them is half of $P(y+h)-2P(y)+P(y-h)$."}
:::

:::esempio{titolo="Estimating sensitivity from three prices"}
At the initial yield of $4\%$ a bond is worth $100\,\mathrm{EUR}$. At $3.9\%$ it is worth $100.402\,\mathrm{EUR}$, and at $4.1\%$ it is worth $99.602\,\mathrm{EUR}$. Using $h=0.001$ gives

$$
\begin{aligned}
P'(y)&\approx \frac{99.602-100.402}{0.002}=-400,\\[6pt]
P''(y)&\approx \frac{99.602-200+100.402}{0.001^2}=4000.
\end{aligned}
$$

Dividing by the initial price gives a modified duration of approximately $4$ and a convexity of approximately $40$. The first difference captures the direction of the price change. The second compares the central price with the average of the two outer prices, which is higher because the price curve is convex.
:::

:::attenzione
If prices are rounded, a smaller step can give a poorer estimate. Rounding the three example prices to the nearest cent gives $100.40$, $100.00$, and $99.60\,\mathrm{EUR}$. The second difference becomes zero because rounding removes the difference of four thousandths. Measuring curvature requires prices quoted with sufficient precision for the chosen step size.
:::
