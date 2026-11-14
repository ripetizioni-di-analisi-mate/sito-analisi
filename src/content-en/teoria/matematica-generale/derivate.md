---
titolo: Derivatives, marginal functions and elasticity
sommario: How derivatives are defined and computed, what marginal cost, marginal revenue, marginal profit and the price elasticity of demand measure, and what Fermat's theorem, Rolle's theorem, the mean value theorem and L'Hôpital's rule state.
---

## Difference quotient and derivative

:::definizione{#derivata titolo="Derivative at a point"}
Let $f$ be defined on an open interval containing $x_0$. The **difference quotient** of $f$ between $x_0$ and $x_0 + h$, with $h \neq 0$, is
$$
\frac{f(x_0 + h) - f(x_0)}{h} ,
$$
that is, the change in $f$ divided by the change in its input. On the graph, it is the slope of the secant line through the points with x-coordinates $x_0$ and $x_0 + h$. The function is **differentiable** at $x_0$ if the limit
$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h} ,
$$
exists and is finite. This limit is the **derivative** of $f$ at $x_0$ and is also denoted by $\dfrac{df}{dx}(x_0)$. For $f(x) = x^2$ and $x_0 = 3$, the difference quotient is $\dfrac{(3 + h)^2 - 9}{h} = \dfrac{6h + h^2}{h} = 6 + h$. It tends to $6$, so $f'(3) = 6$. The function $x \mapsto f'(x)$, defined wherever $f$ is differentiable, is called the **derivative function**.
:::

:::teorema{#retta-tangente titolo="Tangent line"}
If $f$ is differentiable at $x_0$, the **tangent line** to the graph at the point $(x_0, f(x_0))$ is
$$
y = f(x_0) + f'(x_0)\,(x - x_0) .
$$
As $h$ tends to $0$, the second point defining the secant approaches the first. The secant tends to the line through $(x_0, f(x_0))$ with slope $f'(x_0)$. The formula gives the line through a point with a specified slope. For $f(x) = x^2$ at $x_0 = 3$, the tangent line is $y = 9 + 6\,(x - 3) = 6x - 9$.

::grafico{f="x^2;6*x-9;5*x-6" punti="3,9,pieno;2,4,pieno" xmin=-1 xmax=5 ymin=-2 ymax=18 legenda="y = x^2;y = 6x - 9;y = 5x - 6" titolo="The secant through the points with x-coordinates $2$ and $3$ has slope $5$. As the moving point approaches $3$, the secant tends to the tangent line $y = 6x - 9$, with slope $f'(3) = 6$"}

:::

::::teorema{#derivabile-continua titolo="Differentiability and continuity"}
If $f$ is differentiable at $x_0$, then $f$ is continuous at $x_0$.

The converse is false. For example, $f(x) = |x|$ is continuous at $0$. The difference quotient $\dfrac{|h|}{h}$ equals $1$ for $h > 0$ and $-1$ for $h < 0$, so it has no limit and the function is not differentiable at $0$. The graph has a **corner** at $(0, 0)$, where the slopes from the right and left differ.

::grafico{f="abs(x)" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-1 ymax=3 uguale=1 titolo="The graph of $|x|$ has slope $-1$ to the left of $0$ and slope $1$ to the right. Thus it has a corner at $(0, 0)$ and the function is not differentiable at $0$"}

:::dimostrazione
The difference $f(x_0 + h) - f(x_0)$ can be expressed as the product of the difference quotient and $h$.
$$
f(x_0 + h) - f(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} \cdot h \to f'(x_0) \cdot 0 = 0 ,
$$
because the first factor tends to the finite number $f'(x_0)$ and the second to $0$. Therefore $f(x_0 + h) \to f(x_0)$, that is, $f$ is continuous at $x_0$.
:::
::::

## Derivatives of elementary functions

:::teorema{#derivate-elementari titolo="Derivatives of elementary functions"}
The following formulas hold wherever each function is differentiable on its domain.

| $f(x)$ | $f'(x)$ |
| --- | --- |
| $k$ (constant) | $0$ |
| $x^{a}$, with $a$ real | $a\,x^{a-1}$ |
| $e^{x}$ | $e^{x}$ |
| $a^{x}$, with $a > 0$ | $a^{x} \ln a$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |

The formulas are derived from the definition using the standard limits. For the exponential
$$
\frac{e^{x + h} - e^{x}}{h} = e^{x} \cdot \frac{e^{h} - 1}{h} \to e^{x} ,
$$
and for the logarithm, with $x > 0$,
$$
\frac{\ln(x + h) - \ln x}{h} = \frac{1}{x} \cdot \frac{\ln\left( 1 + \dfrac{h}{x} \right)}{\dfrac{h}{x}} \to \frac{1}{x} .
$$
The power formula includes roots and reciprocals: $\left( \sqrt{x} \right)' = \left( x^{\frac{1}{2}} \right)' = \dfrac{1}{2\sqrt{x}}$ and $\left( \dfrac{1}{x} \right)' = \left( x^{-1} \right)' = -\dfrac{1}{x^2}$. The function $\sqrt{x}$ is not differentiable at $0$, where $\dfrac{1}{2\sqrt{x}}$ is not defined.
:::

## Differentiation rules

::::teorema{#regole-di-derivazione titolo="Differentiation rules"}
Let $f$ and $g$ be differentiable at $x$ and let $k$ be a real number. Then

- $(k f)' = k f'$ and $(f + g)' = f' + g'$;
- **product rule**: $(f g)' = f' g + f g'$;
- **quotient rule**: $\left( \dfrac{f}{g} \right)' = \dfrac{f' g - f g'}{g^2}$, where $g(x) \neq 0$;
- **chain rule**: if $f$ is differentiable at $g(x)$, then $\big( f(g(x)) \big)' = f'(g(x)) \cdot g'(x)$.

The chain rule multiplies the derivative of the outer function, evaluated at the value of the inner function, by the derivative of the inner function. For example,
$$
\left( x^2 e^{x} \right)' = 2x\,e^{x} + x^2 e^{x},
\qquad
\left( \frac{x}{x + 1} \right)' = \frac{(x + 1) - x}{(x + 1)^2} = \frac{1}{(x + 1)^2},
\qquad
\left( e^{-x^2} \right)' = -2x\,e^{-x^2} .
$$

:::dimostrazione
The first two rules follow from the limit laws. For the product, adding and subtracting $f(x + h)\,g(x)$ in the numerator splits the difference quotient into two terms.
$$
\begin{aligned}
\frac{f(x + h)\,g(x + h) - f(x)\,g(x)}{h}
&= f(x + h)\,\frac{g(x + h) - g(x)}{h} + g(x)\,\frac{f(x + h) - f(x)}{h} \\[6pt]
&\to f(x)\,g'(x) + g(x)\,f'(x) ,
\end{aligned}
$$
Here $f(x + h) \to f(x)$ because differentiability of $f$ implies continuity. The quotient rule follows by applying the product rule to $f \cdot \dfrac{1}{g}$, with $\left( \dfrac{1}{g} \right)' = -\dfrac{g'}{g^2}$ by the chain rule. For the chain rule, see the chapter on differential calculus in Mathematical Analysis 1.
:::
::::

:::definizione{#derivate-successive titolo="Higher-order derivatives"}
If the derivative function $f'$ is itself differentiable, its derivative is the **second derivative**, denoted by $f''$. The third derivative $f'''$ and higher derivatives are defined in the same way. The second derivative measures how the slope changes. For $f(x) = x^3$, the first derivative is $f'(x) = 3x^2$ and the second derivative is $f''(x) = 6x$. The sign of the second derivative determines the concavity of the graph, as discussed in the chapter on curve sketching and optimization.
:::

## Marginal functions

:::definizione{#funzioni-marginali titolo="Marginal cost, revenue and profit"}
Let the cost $C(q)$, revenue $R(q)$ and profit $\pi(q) = R(q) - C(q)$ be differentiable functions of quantity $q$. Their derivatives are the **marginal cost** $C'(q)$, **marginal revenue** $R'(q)$ and **marginal profit** $\pi'(q) = R'(q) - C'(q)$. Marginal cost is the rate of change in cost as output increases. For a small increase $\Delta q$, the following approximation holds.
$$
C(q + \Delta q) - C(q) \approx C'(q)\,\Delta q ;
$$
With $\Delta q = 1$, marginal cost approximates the cost of producing one more unit. For $C(q) = 1000 + 20q + 0{,}01\,q^2$, the derivative is $C'(q) = 20 + 0{,}02\,q$. Thus $C'(100) = 22$ euros, while the actual cost of the 101st unit is $C(101) - C(100) = 22{,}01$ euros. For the inverse demand function $p = 100 - 0{,}5\,q$, revenue is $R(q) = 100q - 0{,}5\,q^2$ and marginal revenue is $R'(q) = 100 - q$. At $q = 60$, one more unit therefore brings in about $40$ euros, below the price of $70$, because selling the additional unit requires lowering the price of every unit.

::grafico{f="1000+20*x+0.01*x^2+0*sqrt(x);22*x+900+0*sqrt(x)" punti="100,3100,pieno" segmenti="100,0,100,3100" xmin=-40 xmax=360 ymin=-1000 ymax=9000 nomi="q,C" legenda="C(q) = 1000 + 20q + 0{,}01\,q^2;y = 22q + 900" titolo="The marginal cost $C'(100) = 22$ is the slope of the tangent to the cost graph at the point $(100, 3100)$"}
:::

:::osservazione{#marginale-e-medio titolo="Marginal cost and average cost"}
Average cost $\bar{C}(q) = \dfrac{C(q)}{q}$ and marginal cost measure different quantities. Average cost is the cost per unit across total output. Marginal cost is the cost of the additional unit. The quotient rule gives
$$
\bar{C}'(q) = \frac{C'(q)\,q - C(q)}{q^2} = \frac{1}{q} \left( C'(q) - \bar{C}(q) \right) ,
$$
so average cost increases where marginal cost exceeds it and decreases where marginal cost is lower. A unit that costs more than the average raises the average. A unit that costs less lowers it. The two costs are equal at a point of minimum average cost, if one exists. The chapter on curve sketching and optimization completes the argument.
:::

## Elasticity

:::definizione{#elasticita titolo="Elasticity"}
Let $f$ be differentiable with $f(x) \neq 0$. The **elasticity** of $f$ at the point $x$ is
$$
\varepsilon_f(x) = \frac{x}{f(x)}\,f'(x) .
$$
For a small change $\Delta x$ in the input, $\dfrac{\Delta f}{f} \approx \varepsilon_f(x)\,\dfrac{\Delta x}{x}$ because $\Delta f \approx f'(x)\,\Delta x$. Thus elasticity is approximately the percentage change in $f$ caused by a $1\%$ change in the input. It is dimensionless and independent of the units of measurement. For a demand function $q(p)$, the **price elasticity of demand** $\varepsilon(p) = \dfrac{p}{q(p)}\,q'(p)$ is usually negative. Demand is

- **inelastic** (price-inelastic) if $|\varepsilon| < 1$, so the percentage change in quantity is smaller than that in price in magnitude.
- **elastic** if $|\varepsilon| > 1$, so the percentage change in quantity is larger than that in price in magnitude.
- **unit elastic** if $|\varepsilon| = 1$.

For the demand function $q(p) = 200 - 4p$, elasticity is $\varepsilon(p) = \dfrac{-4p}{200 - 4p}$. At a price of $20$, it equals $-\dfrac{2}{3}$ and demand is inelastic. At a price of $30$, it equals $-\dfrac{3}{2}$ and demand is elastic. At a price of $25$, demand is unit elastic.
:::

::::teorema{#elasticita-e-ricavo titolo="Elasticity and revenue"}
Let $q(p)$ be a differentiable demand function with $q(p) > 0$, and let $R(p) = p\,q(p)$ denote revenue as a function of price. Then
$$
R'(p) = q(p)\,\big( 1 + \varepsilon(p) \big) .
$$
Since $q > 0$, a price increase raises revenue if demand is inelastic ($-1 < \varepsilon < 0$) and lowers it if demand is elastic ($\varepsilon < -1$). Revenue is stationary where demand is unit elastic. For the demand function $q(p) = 200 - 4p$, revenue $R(p) = 200p - 4p^2$ attains its maximum at $p = 25$, where $\varepsilon = -1$.

:::dimostrazione
By the product rule $R'(p) = q(p) + p\,q'(p)$. Factoring out $q(p)$ gives
$$
R'(p) = q(p) \left( 1 + \frac{p}{q(p)}\,q'(p) \right) = q(p)\,\big( 1 + \varepsilon(p) \big) ,
$$
because the expression $\dfrac{p}{q(p)}\,q'(p)$ is the price elasticity of demand.
:::
::::

## Fermat's theorem, Rolle's theorem and the mean value theorem<span id="fermats-rolles-and-lagranges-theorems"></span>

::::teorema{#teorema-di-fermat titolo="Fermat's theorem"}
Let $f$ be defined on an interval $I$ and let $x_0$ be an interior point of $I$ at which $f$ has a local maximum or minimum, that is, $f(x_0) \geq f(x)$, or $f(x_0) \leq f(x)$, for every $x$ near $x_0$. If $f$ is differentiable at $x_0$, then
$$
f'(x_0) = 0 .
$$
The points where the derivative is zero are called **stationary points**. By the theorem, an interior local maximum or minimum of a differentiable function occurs at a stationary point. The condition is *necessary* but *not sufficient*. For example, $f(x) = x^3$ satisfies $f'(0) = 0$ and has neither a maximum nor a minimum at $0$.

::grafico{f="x^3" punti="0,0,pieno" xmin=-2 xmax=2 ymin=-4 ymax=4 titolo="The graph of $x^3$ has a horizontal tangent at $0$ because $f'(0) = 0$. The function is increasing, so $0$ is neither a maximum nor a minimum point"}

:::dimostrazione
Suppose the function has a local maximum at $x_0$. The proof for a local minimum is analogous. For small $h$, $f(x_0 + h) - f(x_0) \leq 0$. For $h > 0$ the difference quotient is therefore $\leq 0$, and its right-hand limit, which is $f'(x_0)$, is $\leq 0$. For $h < 0$ the difference quotient is $\geq 0$, because numerator and denominator are both nonpositive, and its left-hand limit, again $f'(x_0)$, is $\geq 0$. The two inequalities together give $f'(x_0) = 0$.
:::
::::

:::teorema{#teorema-di-lagrange titolo="Rolle's theorem and the mean value theorem"}
Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$.

- **Mean value theorem**: there is a point $c \in (a, b)$ such that $f'(c) = \dfrac{f(b) - f(a)}{b - a}$.
- **Rolle's theorem**: if $f(a) = f(b)$ also holds, there is a point $c \in (a, b)$ such that $f'(c) = 0$.

The mean value theorem states that at least one tangent has the same slope as the secant through the endpoints. Rolle's theorem is the case where the secant is horizontal. It follows from the extreme value theorem and Fermat's theorem. By the extreme value theorem, the function attains a maximum and a minimum on $[a, b]$. If the two extrema do not both occur at the endpoints, one occurs at an interior point where the derivative is zero. If they both occur at the endpoints, then $f(a) = f(b)$ implies that the maximum and minimum values are equal. The function is therefore constant and its derivative is zero at each interior point. Applying Rolle's theorem to the difference between $f$ and the secant line through the endpoints gives the mean value theorem. For $f(x) = x^3$ on $[0, 2]$, the average slope is $\dfrac{8 - 0}{2} = 4$. Solving $3c^2 = 4$ gives $c = \dfrac{2}{\sqrt{3}} \approx 1{,}15$.

::grafico{f="x^3;4*x-3.0792" segmenti="0,0,2,8" punti="0,0,pieno;2,8,pieno;1.1547,1.5396,pieno" xmin=-1 xmax=3 ymin=-2 ymax=10 legenda="y = x^3;y = 4x - \dfrac{16}{3\sqrt{3}}" titolo="For $x^3$ on $[0, 2]$, the dashed secant through $(0, 0)$ and $(2, 8)$ has slope $4$. The tangent at $c = \dfrac{2}{\sqrt{3}}$ has the same slope and is parallel to the secant"}

::grafico{f="x*(x-3)^2" segmenti="-0.5,4,2.5,4" punti="0,0,pieno;3,0,pieno;1,4,pieno" xmin=-1 xmax=4 ymin=-1 ymax=6 titolo="The function $x\,(x - 3)^2$ equals $0$ at $0$ and at $3$. By Rolle's theorem, it has a horizontal tangent at the interior point $c = 1$, where its value is $4$"}
:::

:::teorema{#monotonia-e-derivata titolo="Sign of the derivative and monotonicity"}
Let $f$ be differentiable on an interval $I$.

- If $f'(x) > 0$ for every $x \in I$, then $f$ is increasing on $I$.
- If $f'(x) < 0$ for every $x \in I$, then $f$ is decreasing on $I$.
- If $f'(x) = 0$ for every $x \in I$, then $f$ is constant on $I$.

For two points $x_1 < x_2$ in $I$, applying the mean value theorem to $[x_1, x_2]$ gives a point $c$ with $f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1)$. The difference therefore has the sign of $f'(c)$. This criterion identifies the intervals of increase and decrease when sketching a graph. The hypothesis that $I$ is an interval is necessary. For example, $\dfrac{1}{x}$ has a negative derivative on its domain, but it is not decreasing on the entire domain because $\dfrac{1}{-1} < \dfrac{1}{1}$.

::grafico{f="x^3-3*x;3*x^2-3" punti="-1,2,pieno;1,-2,pieno" segmenti="-1,0,-1,2;1,0,1,-2" xmin=-3 xmax=3 ymin=-4 ymax=6 legenda="y = x^3 - 3x;y = 3x^2 - 3" titolo="The derivative $3x^2 - 3$ is positive for $x < -1$ and for $x > 1$, where $x^3 - 3x$ increases, and is negative on $(-1, 1)$, where $x^3 - 3x$ decreases"}
:::

## L'Hôpital's rule<span id="de-lhôpitals-rule"></span>

:::teorema{#de-l-hopital titolo="L'Hôpital's rule"}
Let $f$ and $g$ be differentiable near $x_0$, except possibly at $x_0$, with $g'(x) \neq 0$. Suppose the limit $\displaystyle\lim_{x \to x_0} \frac{f(x)}{g(x)}$ has the indeterminate form $\dfrac{0}{0}$ or $\dfrac{\infty}{\infty}$. If the limit of the quotient of the derivatives exists, then
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)} .
$$
The rule also holds for $x_0 = \pm\infty$ and for one-sided limits. The numerator and denominator are differentiated *separately*, without differentiating the quotient itself. The rule can be applied again whenever the new quotient still has an indeterminate form.
$$
\lim_{x \to 0} \frac{e^{x} - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^{x} - 1}{2x} = \lim_{x \to 0} \frac{e^{x}}{2} = \frac{1}{2},
\qquad
\lim_{x \to +\infty} \frac{\ln x}{x} = \lim_{x \to +\infty} \frac{\dfrac{1}{x}}{1} = 0 .
$$
The second example confirms the relative growth rates discussed in Limits and continuity. The proof uses a variant of the mean value theorem. See the chapter on differential calculus in Mathematical Analysis 1.
:::

## Linear approximation

:::teorema{#approssimazione-lineare titolo="Linear approximation"}
Let $f$ be differentiable at $x_0$. For small $h$
$$
f(x_0 + h) \approx f(x_0) + f'(x_0)\,h ,
$$
and the error divided by $h$ tends to $0$ as $h \to 0$. Near $x_0$, the tangent line thus approximates the function. The term $f'(x_0)\,h$ is the **differential** of $f$ at $x_0$. For example, $\sqrt{4{,}1} \approx \sqrt{4} + \dfrac{1}{2\sqrt{4}} \cdot 0{,}1 = 2{,}025$, compared with the value $2{,}0248\ldots$. For a cost function $C(q)$, the same formula gives $C(q + \Delta q) \approx C(q) + C'(q)\,\Delta q$, the estimate using marginal cost.

::grafico{f="sqrt(x);x/4+1" punti="4,2,pieno" xmin=-1 xmax=9 ymin=-1 ymax=4 legenda="y = \sqrt{x};y = \dfrac{x}{4} + 1" titolo="Near $x_0 = 4$ the graph of $\sqrt{x}$ and the tangent $y = \dfrac{x}{4} + 1$ almost overlap, hence $\sqrt{4{,}1} \approx \dfrac{4{,}1}{4} + 1 = 2{,}025$"}
:::
