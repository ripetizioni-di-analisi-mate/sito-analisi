---
titolo: "Joint distributions, covariance, and transformations"
sommario: "The distribution of a pair determines its marginal and conditional distributions, its covariance, and the distributions of sums, extremes, and other transformations."
---

## The joint distribution of a pair

:::definizione{#congiunta titolo="Joint distribution and cumulative distribution function"}
The **joint distribution** of two random variables $X$ and $Y$ assigns probabilities to regions in which the point $(X,Y)$ may lie. At each pair of thresholds $(x,y)$, the **joint cumulative distribution function** gives the probability that the point lies at or to the left of the first threshold and at or below the second.
$$
F_{X,Y}(x,y)=P(X\le x,\ Y\le y).
$$
A marginal cumulative distribution function is obtained by letting the threshold for the unrestricted variable tend to infinity. For example, $F_X(x)=\lim_{y\to+\infty}F_{X,Y}(x,y)$.

For $a<b$ and $c<d$, the probability of the rectangle $(a,b]\times(c,d]$ is
$$
\begin{aligned}
P(a<X\le b,\ c<Y\le d)
&=F_{X,Y}(b,d)-F_{X,Y}(a,d)\\[6pt]
&\quad-F_{X,Y}(b,c)+F_{X,Y}(a,c).
\end{aligned}
$$
The two subtractions remove the regions $X\le a$ and $Y\le c$. Their intersection has been subtracted twice, so $F_{X,Y}(a,c)$ is added back.

::grafico{assi=0 xmin=-0.45 xmax=4.35 ymin=-0.65 ymax=4.8 poligoni="1,2 3,2 3,4 1,4" segmenti="1,0,1,4;3,0,3,4;0,2,3,2;0,4,3,4" unicolore=1 vettori="-0.12,0,4.2,0;0,-0.35,0,4.65" etichette="4.23,-0.27,x;0.06,4.65,y;0.95,-0.34,a;2.97,-0.34,b;-0.25,1.97,c;-0.25,3.97,d;1.25,3.53,R" titolo="The four thresholds a, b, c, d in the joint cumulative distribution function define the highlighted rectangle R."}
:::

:::definizione{#masse-congiunte titolo="Joint and marginal probability masses"}
If $X$ and $Y$ are discrete, the **joint probability mass** at $(x,y)$ is $p_{X,Y}(x,y)=P(X=x,Y=y)$. Each mass is nonnegative, and their sum over all pairs is one. The pairs with positive mass constitute the discrete support. The probability of any region of interest is the sum of the masses at the pairs in that region.

To find $P(X=x)$, hold $X$ fixed and include every value of $Y$. Interchanging the roles of the two variables gives the marginal distribution of $Y$.
$$
p_X(x)=\sum_y p_{X,Y}(x,y),\qquad
p_Y(y)=\sum_x p_{X,Y}(x,y).
$$
In a table with $X$ indexing the rows and $Y$ the columns, the row totals give $p_X$ and the column totals give $p_Y$.
:::

:::esempio{titolo="Two inspections of the same unit"}
A unit undergoes two inspections. Let $X$ indicate a positive result on the first inspection and $Y$ a positive result on the second. An indicator equals $1$ when the event occurs and $0$ otherwise.

| $X$ | $Y=0$ | $Y=1$ | Total |
| ---: | ---: | ---: | ---: |
| $0$ | $0.10$ | $0.20$ | $0.30$ |
| $1$ | $0.30$ | $0.40$ | $0.70$ |
| Total | $0.40$ | $0.60$ | $1$ |

The probability of two positive results is $0.40$ because the event corresponds to a single cell. The probability of a positive result on the first inspection is $0.70$ because it includes both cells in the second row. The probability of exactly one positive result is $0.20+0.30=0.50$, the sum of the two cells in which the indicators differ.
:::

## Joint densities and the region of integration

:::definizione{#densita-congiunta titolo="Joint and marginal densities"}
A pair has **joint density** $f_{X,Y}$ if the probability of every measurable region $A$ is the integral of $f_{X,Y}$ over $A$. A density is nonnegative and integrates to one over the entire plane. The region where it is positive determines the bounds used in calculations.
$$
P((X,Y)\in A)=\iint_A f_{X,Y}(x,y)\,dx\,dy.
$$
To find the **marginal density** of $X$ at $x$, hold $x$ fixed and integrate along the vertical line. Horizontal lines give the marginal density of $Y$.
$$
\begin{aligned}
f_X(x)&=\int_{\mathbb R}f_{X,Y}(x,y)\,dy,\\[6pt]
f_Y(y)&=\int_{\mathbb R}f_{X,Y}(x,y)\,dx.
\end{aligned}
$$
To compute a probability, integrate over the intersection of the specified region with the region where the density is positive. Points where the boundaries meet contribute nothing, since they have zero area.
:::

:::esempio{titolo="Cross sections of a triangular support"}
The density equals $2$ on the triangle $0<y<x<1$ and zero elsewhere. The triangle has area $\dfrac12$, so the density integrates to one. For $0<x<1$, a vertical cross section extends from $y=0$ to $y=x$. For $0<y<1$, a horizontal cross section extends from $x=y$ to $x=1$. This gives two different marginal densities, both zero outside $(0,1)$.
$$
f_X(x)=\int_0^x 2\,dy=2x,\qquad
f_Y(y)=\int_y^1 2\,dx=2(1-y).
$$

::grafico{xmin=-0.13 xmax=1.24 ymin=-0.12 ymax=1.22 poligoni="0,0 1,0 1,1" linee="0,0 1,1 1,0" segmenti="0.55,0,0.55,0.55;0.32,0.32,1,0.32" etichette="0.73,0.16,D;0.31,0.6,y=x" titolo="Triangular support D with a vertical and a horizontal cross section"}

For example, to find $P(Y>\dfrac12)$, use the horizontal cross sections. Integrating $2(1-y)$ from $\dfrac12$ to $1$ gives $\dfrac14$. This value is less than $\dfrac12$ because the cross sections grow shorter as $y$ increases.

::grafico{xmin=-0.15 xmax=1.3 ymin=-0.18 ymax=2.3 nomi="y,f" linee="-0.12,0 0,0 0,2 1,0 1.2,0" poligoni="0.5,0 0.5,1 1,0" segmenti="0.5,0,0.5,1" titolo="Marginal density $f_Y(y)=2(1-y)$ on $(0,1)$. The shaded triangle has base $\dfrac{1}{2}$ and height $1$, so its area is $P\left(Y>\dfrac{1}{2}\right)=\dfrac{1}{4}$."}
:::

:::attenzione{titolo="Two marginal distributions with densities"}
Let $X$ be uniform on $(0,1)$ and let $Y=X$. Both marginal distributions are uniform. With probability one, the pair lies on the diagonal $y=x$, which has zero area. A joint density would assign probability zero to this line, so the pair has no joint density.
:::

## Conditioning and independence

:::definizione{#condizionamento titolo="Conditional distributions"}
When $X$ is discrete and $p_X(x)>0$, knowing that $X=x$ restricts attention to pairs with that first coordinate. The masses in this row sum to $p_X(x)$, so dividing by the row total gives a new probability distribution.
$$
p_{Y\mid X}(y\mid x)=\frac{p_{X,Y}(x,y)}{p_X(x)}.
$$
For a pair with a joint density, when $0<f_X(x)<\infty$, a **conditional density** is given by
$$
f_{Y\mid X}(y\mid x)=\frac{f_{X,Y}(x,y)}{f_X(x)}.
$$
Dividing in this way normalizes the vertical cross section so that it integrates to one. This formula defines a version of the conditional distribution for almost every value of $X$. The denominator is a marginal density because the individual event $X=x$ has probability zero in the continuous case.
:::

:::esempio{titolo="Normalizing a cross section"}
If the density equals $2$ for $0<y<x<1$, then $f_X(x)=2x$ for $0<x<1$. For fixed $X=x$, the conditional density equals $\dfrac1x$ on $(0,x)$. The interval has length $x$, so this is the uniform distribution on $(0,x)$. In particular, $P(Y\le\dfrac{x}{2}\mid X=x)=\dfrac12$. The threshold lies halfway along the cross section for this value of $x$.

For $x=\dfrac12$, the conditional density equals $2$ on $(0,\dfrac12)$. At the endpoint $x=1$, taking the limit from below gives the density $1$ on $(0,1)$. This specifies one possible conditional distribution there, since the marginal density vanishes at the endpoint. In both cases, the rectangle under the graph has area one.

::grafico{xmin=-0.12 xmax=1.3 ymin=-0.18 ymax=2.4 nomi="y,f" linee="-0.1,0 0,0 0,2 0.5,2 0.5,0 1.2,0;0,1 1,1 1,0" poligoni="0,0 0.25,0 0.25,2 0,2" segmenti="0.25,0,0.25,2" etichette="0.55,2.1,X = 0.5;1.04,1.12,x → 1" titolo="Conditional density of $Y$ given $X=\dfrac{1}{2}$ and its limiting form at the endpoint $X=1$. The shaded area equals $P\left(Y\le\dfrac{1}{4}\ \middle|\ X=\dfrac{1}{2}\right)=\dfrac{1}{2}$."}
:::

::::teorema{#indipendenza-congiunta titolo="Factorization and independence"}
The variables $X$ and $Y$ are independent if $P(X\in A,Y\in B)=P(X\in A)P(Y\in B)$ for all measurable sets $A$ and $B$. For a discrete pair, this is equivalent to $p_{X,Y}(x,y)=p_X(x)p_Y(y)$ for every $(x,y)$. For a pair with a joint density, it is equivalent to $f_{X,Y}(x,y)=f_X(x)f_Y(y)$ almost everywhere in the plane.

:::dimostrazione
In the discrete case, applying independence to the events $X=x$ and $Y=y$ gives the product formula for each pair. Conversely, when the factored masses are summed over $A\times B$, the sum over $x$ separates from the sum over $y$, giving the product of the marginal probabilities.

For a pair with a density, the product $f_Xf_Y$ assigns to each rectangle the product of the marginal probabilities. Under independence, the joint density assigns the same probabilities to these rectangles. The two distributions agree because rectangles determine the joint cumulative distribution function. It follows that the densities agree almost everywhere.
:::
::::

:::attenzione{titolo="Factorization and the shape of the support"}
A constant density on the triangle $0<y<x<1$ can be written as a product of constants inside the triangle. Near $(\dfrac14,\dfrac34)$, however, both marginal densities are positive while the joint density is zero. The product must agree with the joint density even outside the region where the joint density is positive.

With density $2$ on the triangle, the marginal densities are $f_X(x)=2x$ and $f_Y(y)=2(1-y)$. At $(\dfrac14,\dfrac34)$ their product is $\dfrac12\cdot\dfrac12=\dfrac14$, whereas the joint density is zero. The same discrepancy holds throughout an open neighborhood of this point, so $X$ and $Y$ are dependent.

::grafico{xmin=-0.12 xmax=1.25 ymin=-0.12 ymax=1.2 uguale=1 poligoni="0,0 1,0 1,1" linee="0,1 1,1 1,0" segmenti="0,0,1,1" punti="0.25,0.75,pieno,P" etichette="0.68,0.2,f = 2;0.12,0.9,f = 0" titolo="The joint density is positive only inside the shaded triangle, whereas the product of the marginal densities is positive throughout the square $(0,1)^2$. The two values differ at $P=\left(\dfrac{1}{4},\dfrac{3}{4}\right)$."}
:::

:::osservazione
For discrete variables with finitely many possible values, independence can be checked by comparing every conditional distribution with the corresponding marginal distribution. In the table for the two inspections, for example, the probability of a positive result on the second inspection given a positive result on the first equals $\dfrac{0.40}{0.70}=\dfrac47$. The marginal probability of a positive result on the second inspection is $0.60$. The two probabilities differ, so the variables are dependent.

In a table for two indicators, the cell for two successes and the two marginal distributions determine the other three cells. In this special case, if the probability of two successes equals the product of their marginal probabilities, the other cells also satisfy the factorization.
:::

## Expectations of functions and covariance

:::definizione{#attesa-congiunta titolo="Expectation of a function of a pair"}
If $g(X,Y)$ is integrable, its **expected value** is the average of the values of $g$ weighted by the joint distribution. In the discrete case, sum each value times its probability mass. In the continuous case, integrate the product of the value and the density.
$$
\begin{aligned}
E[g(X,Y)]
&=\sum_{x,y}g(x,y)p_{X,Y}(x,y)
&&\text{in the discrete case},\\[6pt]
E[g(X,Y)]
&=\iint_{\mathbb R^2}g(x,y)f_{X,Y}(x,y)\,dx\,dy
&&\text{when there is a density}.
\end{aligned}
$$
If $g$ depends on only one coordinate, the corresponding marginal distribution suffices. For $g(x,y)=xy$, the joint distribution is generally needed because the product depends on both coordinates.
:::

:::definizione{#covarianza titolo="Covariance and affine transformations"}
Let $X$ and $Y$ have finite second moments, and denote their means by $\mu_X=E[X]$ and $\mu_Y=E[Y]$. Their **covariance** is the expected product of their deviations from their respective means.
$$
\begin{aligned}
\operatorname{Cov}(X,Y)
&=E[(X-\mu_X)(Y-\mu_Y)]\\[6pt]
&=E[XY]-\mu_X\mu_Y.
\end{aligned}
$$
The product of the deviations is positive when both have the same sign. If these contributions predominate in the weighted average, the covariance is positive. Its units are the product of the units of $X$ and $Y$. Replacing $X$ by $a+bX$ changes the deviation from its own mean to $b(X-\mu_X)$. It follows that $\operatorname{Cov}(a+bX,c+dY)=bd\operatorname{Cov}(X,Y)$. The same definition shows that covariance is linear in each variable, because the deviation of a linear combination is the same linear combination of the deviations. For example, $\operatorname{Cov}(X,X-2Y)=\operatorname{Var}(X)-2\operatorname{Cov}(X,Y)$.
:::

:::esempio{titolo="Covariance of two indicators"}
In the table for the two inspections, $E[X]=0.70$ and $E[Y]=0.60$. The product $XY$ equals one only if both indicators equal one. Therefore $E[XY]=0.40$ and
$$
\operatorname{Cov}(X,Y)=0.40-(0.70)(0.60)=-0.02.
$$
The negative sign agrees with the fact that two positive results have a slightly lower probability than they would under independence with the same marginal distributions.
:::

:::esempio{titolo="Identical marginal distributions and different covariances"}
Two indicators each have success probability $\dfrac12$. If the inspections are independent, the mass at $(1,1)$ is $\dfrac14$ and the covariance is zero. If both inspections always give the same result, the mass at $(1,1)$ is $\dfrac12$ and the covariance is $\dfrac14$. If exactly one inspection gives a positive result each time, the mass at $(1,1)$ is zero and the covariance is $-\dfrac14$. The marginal distributions are identical in the three cases. Changing the joint distribution changes the mean of $XY$ and hence the covariance.
:::

## Linear correlation and dependence

:::definizione{#correlazione titolo="The correlation coefficient"}
If $X$ and $Y$ have finite second moments and positive variances, let $\sigma_X$ and $\sigma_Y$ denote their standard deviations. The **correlation coefficient** is
$$
\rho=\operatorname{Corr}(X,Y)
=\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}.
$$
The denominator cancels the units and preserves the sign of the covariance. Converting one measurement from meters to centimeters multiplies the covariance by $100$ and multiplies the standard deviation of that measurement by the same factor. The correlation therefore stays the same.
:::

::::teorema{#limiti-correlazione titolo="Extreme values of the correlation coefficient"}
Suppose the assumptions of the definition hold. Then $|\rho|\le1$. Equality $|\rho|=1$ holds exactly when $Y=a+bX$ almost surely for some real $a$ and $b\neq0$. In that case $\rho$ has the same sign as $b$.

:::dimostrazione
Use the centered and standardized variables $U=\dfrac{X-\mu_X}{\sigma_X}$ and $V=\dfrac{Y-\mu_Y}{\sigma_Y}$. Both have second moment one, and $E[UV]=\rho$. Therefore
$$
E[(V-\rho U)^2]=1-2\rho^2+\rho^2=1-\rho^2.
$$
Since the left-hand side is nonnegative, $|\rho|\le1$ follows. Equality holds when the square is zero almost surely, that is, when $V=\rho U$ almost surely. Returning to the original variables gives the affine relationship with slope $\rho\dfrac{\sigma_Y}{\sigma_X}$.
:::
::::

:::attenzione{titolo="Dependent variables with zero correlation"}
Independence implies $E[XY]=E[X]E[Y]$ when the second moments exist, and hence implies zero covariance. The converse is false. If $X$ is uniform on $\{-1,0,1\}$ and $Y=X^2$, then $E[X]=E[X^3]=0$ by symmetry. The covariance is zero. Yet $P(Y=0\mid X=0)=1$, whereas $P(Y=0)=\dfrac13$. For a jointly normal pair, zero covariance is sufficient for independence. The normality assumption applies to the joint distribution.

The regression line of $Y$ on $X$, studied in the chapter on regression, has slope $\dfrac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}=0$. It is therefore the horizontal line $y=E[Y]=\dfrac23$, even though $Y$ is a function of $X$.

::grafico{f="x^2;2/3" xmin=-1.7 xmax=1.7 ymin=-0.45 ymax=1.75 uguale=1 legenda="y=x^2;y=\dfrac{2}{3}" punti="-1,1,pieno;0,0,pieno;1,1,pieno" titolo="The three equally likely values of $(X,X^2)$ lie on the parabola. The regression line is horizontal because the covariance is zero."}
:::

## Linear combinations and convolution

::::teorema{#somme titolo="Expectation and variance of a linear combination"}
For variables with finite second moments and real coefficients $a,b$,
$$
\begin{aligned}
E[aX+bY]&=aE[X]+bE[Y],\\[6pt]
\operatorname{Var}(aX+bY)
&=a^2\sigma_X^2+b^2\sigma_Y^2\\[6pt]
&\quad+2ab\operatorname{Cov}(X,Y).
\end{aligned}
$$
The covariance term is zero if the variables are independent or uncorrelated. In particular, the variance of the difference between two measurements with positive covariance is less than the sum of their individual variances.

:::dimostrazione
The first identity follows from linearity of expectation. The deviation of the linear combination from its mean is $a(X-\mu_X)+b(Y-\mu_Y)$. Square this expression and take its expectation. The squared deviations give the two variance terms, and the cross term gives twice the product of the coefficients times the covariance.
:::
::::

:::teorema{#convoluzione titolo="Distribution of the sum of independent variables"}
Let $X$ and $Y$ be independent, and let $S=X+Y$. For discrete variables,
$$
p_S(s)=\sum_x p_X(x)p_Y(s-x).
$$
For variables with densities,
$$
f_S(s)=\int_{\mathbb R}f_X(x)f_Y(s-x)\,dx.
$$
In the discrete case, the sum includes all pairs $(x,s-x)$, assigning to each the product of the two masses. In the continuous case use the transformation $(x,y)\mapsto(x,x+y)$, whose inverse has Jacobian determinant one in absolute value. Integrating the joint density of $(X,S)$ with respect to $x$ gives the formula.
:::

:::esempio{titolo="Sum of two independent uniform random variables"}
Let $X$ and $Y$ be independent and uniformly distributed on $(0,1)$. The product of their densities equals one when $0<x<1$ and $0<s-x<1$. The integral is therefore the length of the intersection $(0,1)\cap(s-1,s)$.
- If $0<s<1$, then $f_S(s)=s$.
- If $1\le s<2$, then $f_S(s)=2-s$.
- Outside $(0,2)$ the density is zero.
For $0<s<1$ the intersection is $(0,s)$. For $1<s<2$ it is $(s-1,1)$. The two pieces each enclose area $\dfrac12$, so the density integrates to one.

::grafico{xmin=-0.3 xmax=2.32 ymin=-0.15 ymax=1.23 nomi="s,f_S(s)" poligoni="0,0 1,1 2,0" linee="-0.2,0 0,0 1,1 2,0 2.22,0" titolo="Density of the sum of two independent uniform random variables on (0, 1)"}
:::

## Extremes and transformations of a pair

:::teorema{#estremi titolo="Maximum and minimum of independent variables"}
Let $X_1,\ldots,X_n$ be independent with cumulative distribution functions $F_i$. Write $M$ for their maximum and $m$ for their minimum. For every threshold $t$,
$$
F_M(t)=\prod_{i=1}^n F_i(t),\qquad
P(m>t)=\prod_{i=1}^n(1-F_i(t)).
$$
The maximum is at most $t$ when all the variables are at most $t$. The minimum exceeds $t$ when they all exceed $t$. Independence allows the probabilities to be multiplied. If the variables share the same cumulative distribution function $F$, the products become $F(t)^n$ and $(1-F(t))^n$. For example, for three independent uniform variables on $(0,1)$, $P(M\le\dfrac12)=\dfrac18$. For the same variables $P(m>\dfrac12)=(1-\dfrac12)^3=\dfrac18$, and the two curves in the graph meet at $(\dfrac12,\dfrac18)$ because $1-t=t$ at $t=\dfrac12$.

::grafico{curve="t,t^3,0,1;t,(1-t)^3,0,1" xmin=-0.12 xmax=1.25 ymin=-0.12 ymax=1.18 nomi="t,p" legenda="F_M(t)=t^3;P(m>t)=(1-t)^3" punti="0.5,0.125,pieno" segmenti="0.5,0,0.5,0.125" titolo="Cumulative distribution function of the maximum and probability that the minimum exceeds $t$ for three independent uniform variables on $(0,1)$."}
:::

:::teorema{#jacobiano-congiunto titolo="Change of variables for a joint density"}
Let $(X,Y)$ have a joint density concentrated in an open region $D$. Let $T$ be a one-to-one transformation of class $C^1$ from $D$ onto its open image, with inverse of class $C^1$. Write $(U,V)=T(X,Y)$. Then for $(u,v)\in T(D)$,
$$
f_{U,V}(u,v)=f_{X,Y}(T^{-1}(u,v))
\left|\det D T^{-1}(u,v)\right|.
$$
The density is zero outside $T(D)$. The symbol $D T^{-1}$ denotes the matrix of partial derivatives of the inverse. The absolute value of its determinant converts area in the new coordinates into area in the original plane.
:::

:::esempio{titolo="Sum and difference as new coordinates"}
If $X,Y$ are independent and uniform on $(0,1)$, set $U=X+Y$ and $V=X-Y$. The inverse is given by $x=\dfrac{u+v}{2}$ and $y=\dfrac{u-v}{2}$. Its Jacobian determinant is $-\dfrac12$. In the new coordinates the original square is described by $0<u+v<2$ and $0<u-v<2$. Hence the joint density equals $\dfrac12$ in the region satisfying both conditions and is zero elsewhere.

For $0<u<1$, the vertical cross section satisfies $-u<v<u$. The integral with respect to $v$ is then $\dfrac12\cdot 2u=u$. This agrees with the density of the sum obtained by convolution.

::grafico{xmin=-0.18 xmax=2.35 ymin=-1.3 ymax=1.28 nomi="u,v" poligoni="0,0 1,1 2,0 1,-1" segmenti="0.6,-0.6,0.6,0.6" punti="0,0,vuoto;1,1,vuoto;2,0,vuoto;1,-1,vuoto" titolo="Region where the joint density of (U,V) is positive. To the left of u=1, the dashed cross section runs from −u to u."}
:::

:::osservazione
Some transformations become one-to-one only after the domain is split into parts. If $U=X^2$ and $V=Y$ with $(X,Y)$ concentrated on $(-1,1)^2$, a pair $(u,v)$ with $0<u<1$ has two preimages, $(\sqrt u,v)$ and $(-\sqrt u,v)$. The parts $x>0$ and $x<0$ are disjoint, so each contributes its own transformed density and the two contributions are added. The line $x=0$ has probability zero for a pair with a density.
:::

## Total expectation and total variance

::::teorema{#totale titolo="Laws of total expectation and total variance"}
If $Y$ is integrable, then $E[Y]=E[E[Y\mid X]]$. The conditional expectation $E[Y\mid X]$ is a random variable because the conditional mean depends on the group identified by $X$. If $E[Y^2]<\infty$, then also
$$
\begin{aligned}
\operatorname{Var}(Y)
&=E[\operatorname{Var}(Y\mid X)]\\[6pt]
&\quad+\operatorname{Var}(E[Y\mid X]).
\end{aligned}
$$
The first term is the average of the within-group variances. The second measures how much the group means vary.

:::dimostrazione
In the discrete case, multiplying the conditional mean given $X=x$ by $p_X(x)$ cancels the denominator in the conditional mass function. Summing over $x$ gives the mean weighted by all the joint masses. The same reasoning applies to the integrals for a pair with a density. For the variance, take expectations in the identity $\operatorname{Var}(Y\mid X)=E[Y^2\mid X]-E[Y\mid X]^2$. The expectation of the first term is $E[Y^2]$. Adding the variance of $E[Y\mid X]$ cancels $E[E[Y\mid X]^2]$, leaving $E[Y^2]-E[Y]^2$.
:::
::::

:::esempio{titolo="Within-group variation and differences between groups"}
A plant uses two production modes with equal probability. The number of units produced has conditional means $10$ and $14$ and conditional variances $4$ and $8$. The overall mean is $12$. Both conditional means are $2$ units from the overall mean, so their variance is $4$. The average conditional variance is $6$. This gives an overall variance of $10$. The value $6$ alone describes the average dispersion about the group means.
:::
