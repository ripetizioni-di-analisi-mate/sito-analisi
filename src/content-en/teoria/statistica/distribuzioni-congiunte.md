---
titolo: "Joint distributions, covariance, and transformations"
sommario: "The distribution of a pair determines its marginal and conditional distributions, its covariance, and the distributions of sums, extremes, and other transformations."
---

Chapters 5 and 6 studied one random variable at a time. Many surveys, however, record two quantities on the same unit: a manufactured part undergoes two inspections, a student's study hours and exam grade are both recorded. The chapter computes, for example, the probability that a part passes both inspections, which equals $0.40$ in the first section, and determines whether the first result changes the probabilities of the second. In the same example the probability of passing the second inspection is $0.60$, and it drops to $\dfrac47\approx0.571$ when the first is known to have been passed.

The relationship between two variables is summarized by the covariance and by the correlation, which equals $\pm1$ when one variable is a linear function of the other. The chapter then derives the distribution of quantities built from the pair: the sum $X+Y$, such as the total time of two work stages, the maximum of several times, such as the moment when the last of three students hands in an exam, and new coordinates obtained through a transformation. The last section splits the variance of the number of parts produced in two modes into a part within each mode and a part due to the difference between the means.

The chapter closes the part on probability (chapters 3-7) and uses the independence of events from chapter 4. In chapter 8 the sample mean is the sum of $n$ independent variables divided by $n$, and its variance is computed with the formula for the variance of a sum given in this chapter. In chapter 12 covariance and correlation are computed from data.

## The joint distribution of a pair

:::definizione{#congiunta titolo="Joint distribution and cumulative distribution function"}
Two dice are rolled; let $X$ be the result of the first and $Y$ that of the second. The $36$ outcomes are equally likely. The event "the first die shows at most $2$ and the second at most $3$" contains $2\cdot3=6$ outcomes, so its probability is $\dfrac{6}{36}=\dfrac16$.

The assignment of probabilities to all events concerning the point $(X,Y)$ of the plane is called the **joint distribution** of $X$ and $Y$. The **joint cumulative distribution function** assigns to each pair of thresholds $(x,y)$ the probability that $X$ is at most $x$ and, at the same time, $Y$ is at most $y$:
$$
F_{X,Y}(x,y)=P(X\le x,\ Y\le y).
$$
In the dice example $F_{X,Y}(2,3)=\dfrac16$. For a single variable one recovers the cumulative distribution function $F_X(x)=P(X\le x)$ of chapters 5 and 6.

The distribution of $X$ alone is called the marginal distribution of $X$, and $F_X$ its marginal cumulative distribution function. As $y$ increases, the event $\{X\le x,\ Y\le y\}$ includes more and more outcomes and tends to $\{X\le x\}$. Therefore
$$
F_X(x)=\lim_{y\to+\infty}F_{X,Y}(x,y),\qquad
F_Y(y)=\lim_{x\to+\infty}F_{X,Y}(x,y).
$$
The joint cumulative distribution function gives the probability of every rectangle. For $a<b$ and $c<d$, the probability of the rectangle $(a,b]\times(c,d]$ is
$$
\begin{aligned}
P(a<X\le b,\ c<Y\le d)
&=F_{X,Y}(b,d)-F_{X,Y}(a,d)\\[6pt]
&\quad-F_{X,Y}(b,c)+F_{X,Y}(a,c).
\end{aligned}
$$
The term $F_{X,Y}(b,d)$ includes all points with $X\le b$ and $Y\le d$. The first subtraction removes the region $\{X\le a,\ Y\le d\}$, to the left of the rectangle. The second removes the region $\{X\le b,\ Y\le c\}$, below the rectangle. The points with $X\le a$ and $Y\le c$ belong to both regions and have been removed twice, so $F_{X,Y}(a,c)$ is added back once.

With the dice, for $a=2$, $b=4$, $c=1$, $d=3$ the formula gives $\dfrac{12-6-4+2}{36}=\dfrac19$, and indeed the rectangle contains the $4$ outcomes with $X\in\{3,4\}$ and $Y\in\{2,3\}$.

::grafico{assi=0 xmin=-0.45 xmax=4.35 ymin=-0.65 ymax=4.8 poligoni="1,2 3,2 3,4 1,4" segmenti="1,0,1,4;3,0,3,4;0,2,3,2;0,4,3,4" unicolore=1 vettori="-0.12,0,4.2,0;0,-0.35,0,4.65" etichette="4.23,-0.27,x;0.06,4.65,y;0.95,-0.34,a;2.97,-0.34,b;-0.25,1.97,c;-0.25,3.97,d;1.25,3.53,R" titolo="The four thresholds a, b, c, d in the joint cumulative distribution function define the highlighted rectangle R."}
:::

:::definizione{#masse-congiunte titolo="Joint and marginal probability masses"}
A fair coin is tossed twice; let $X$ be the number of heads on the first toss and $Y$ the number of heads in the two tosses. The four outcomes HH, HT, TH, TT (H heads, T tails) have probability $\dfrac14$ each and give the pairs $(1,2)$, $(1,1)$, $(0,1)$, $(0,0)$. The probabilities are written in a table with $X$ on the rows and $Y$ on the columns.

| $X$ | $Y=0$ | $Y=1$ | $Y=2$ | Total |
| ---: | ---: | ---: | ---: | ---: |
| $0$ | $\dfrac14$ | $\dfrac14$ | $0$ | $\dfrac12$ |
| $1$ | $0$ | $\dfrac14$ | $\dfrac14$ | $\dfrac12$ |
| Total | $\dfrac14$ | $\dfrac12$ | $\dfrac14$ | $1$ |

If $X$ and $Y$ are discrete, the **joint probability mass** at $(x,y)$ is
$$
p_{X,Y}(x,y)=P(X=x,\ Y=y).
$$
In the table $p_{X,Y}(0,1)=\dfrac14$ and $p_{X,Y}(0,2)=0$. The masses are nonnegative and sum to $1$; the pairs with positive mass form the support. The probability of a region is the sum of the masses of the pairs that belong to it, for example $P(Y>X)=p_{X,Y}(0,1)+p_{X,Y}(1,2)=\dfrac12$.

The probability $P(X=x)$ is the sum of the row of $x$, and $P(Y=y)$ is the sum of the column of $y$. These distributions are called **marginal probability masses**, because in the table they appear in the margins, as row and column totals:
$$
p_X(x)=\sum_y p_{X,Y}(x,y),\qquad
p_Y(y)=\sum_x p_{X,Y}(x,y).
$$
When $X$ and $Y$ take only the values $0$ and $1$, one writes briefly $p_{ij}=P(X=i,\ Y=j)$. For example $p_{10}=P(X=1,\ Y=0)$.
:::

:::esempio{titolo="Two inspections of the same unit"}
A unit undergoes two inspections. Let $X$ indicate a positive result on the first inspection and $Y$ a positive result on the second. An indicator equals $1$ when the event occurs and $0$ otherwise.

| $X$ | $Y=0$ | $Y=1$ | Total |
| ---: | ---: | ---: | ---: |
| $0$ | $0.10$ | $0.20$ | $0.30$ |
| $1$ | $0.30$ | $0.40$ | $0.70$ |
| Total | $0.40$ | $0.60$ | $1$ |

The probability of two positive results is $p_{11}=0.40$, because the event corresponds to a single cell. The probability of a positive result on the first inspection is $0.70$, because the two cells of the second row are added. The probability of exactly one positive result is $p_{01}+p_{10}=0.20+0.30=0.50$, because the two cells in which the indicators differ are added.
:::

## Joint densities and the region of integration

:::definizione{#densita-congiunta titolo="Joint and marginal densities"}
A point is chosen at random in the square $(0,1)\times(0,1)$, so that the probability of falling in a region of the square equals the area of the region. Let $X$ and $Y$ be the coordinates of the point. The probability that the point falls below the line $x+y=1$ is the area of the triangle with vertices $(0,0)$, $(1,0)$, $(0,1)$, that is, $\dfrac12$. The same probability is the double integral of the function equal to $1$ on the square and $0$ outside:
$$
P(X+Y<1)=\iint_{\{x+y<1\}}1\,dx\,dy=\frac12.
$$

A pair has a **joint density** $f_{X,Y}$ if the probability of every region $A$ of the plane (a rectangle, a triangle, a disk) is obtained by integrating $f_{X,Y}$ over $A$:
$$
P((X,Y)\in A)=\iint_A f_{X,Y}(x,y)\,dx\,dy.
$$
A joint density is nonnegative and has integral $1$ over the whole plane. Since it is zero outside the region where $(X,Y)$ lies, a probability is computed by integrating over the intersection of $A$ with the region where the density is positive. Boundary contact points, such as a segment or a vertex, have zero area and contribute nothing to the integral.

The density of $X$ alone is called the **marginal density** of $X$. It is obtained by fixing $x$ and integrating the joint density along the vertical line through $x$; for the marginal density of $Y$ one uses horizontal lines:
$$
\begin{aligned}
f_X(x)&=\int_{\mathbb R}f_{X,Y}(x,y)\,dy,\\[6pt]
f_Y(y)&=\int_{\mathbb R}f_{X,Y}(x,y)\,dx.
\end{aligned}
$$
In the square, for $0<x<1$ one has $f_X(x)=\displaystyle\int_0^1 1\,dy=1$, so $X$ is uniform on $(0,1)$.
:::

:::esempio{titolo="Cross sections of a triangular support"}
The density equals $2$ on the triangle $0<y<x<1$ and zero elsewhere. The triangle has area $\dfrac12$, so the integral of the density equals $2\cdot\dfrac12=1$. For $0<x<1$, the vertical cross section of the triangle runs from $y=0$ to $y=x$. For $0<y<1$, the horizontal cross section runs from $x=y$ to $x=1$. Integrating over the cross sections gives two different marginal densities, both zero outside $(0,1)$:
$$
f_X(x)=\int_0^x 2\,dy=2x,\qquad
f_Y(y)=\int_y^1 2\,dx=2(1-y).
$$

::grafico{xmin=-0.13 xmax=1.24 ymin=-0.12 ymax=1.22 poligoni="0,0 1,0 1,1" linee="0,0 1,1 1,0" segmenti="0.55,0,0.55,0.55;0.32,0.32,1,0.32" etichette="0.73,0.16,D;0.31,0.6,y=x" titolo="Triangular support D with a vertical and a horizontal cross section"}

A probability that concerns $Y$ only is computed with the marginal density of $Y$. For example
$$
P\left(Y>\frac12\right)=\int_{1/2}^1 2(1-y)\,dy=\Big[2y-y^2\Big]_{1/2}^1=1-\frac34=\frac14.
$$
The value is less than $\dfrac12$ because, as $y$ increases, the horizontal cross sections of the triangle become shorter and the marginal density decreases.

::grafico{xmin=-0.15 xmax=1.3 ymin=-0.18 ymax=2.3 nomi="y,f" linee="-0.12,0 0,0 0,2 1,0 1.2,0" poligoni="0.5,0 0.5,1 1,0" segmenti="0.5,0,0.5,1" titolo="Marginal density $f_Y(y)=2(1-y)$ on $(0,1)$. The shaded triangle has base $\dfrac{1}{2}$ and height $1$, so its area is $P\left(Y>\dfrac{1}{2}\right)=\dfrac{1}{4}$."}
:::

:::attenzione{titolo="Two marginal distributions with densities"}
Let $X$ be uniform on $(0,1)$ and let $Y=X$. Both marginal distributions are uniform on $(0,1)$. The point $(X,Y)$ lies with probability $1$ on the diagonal $y=x$, which has zero area. A joint density would assign probability $0$ to that line, because the integral over a set of zero area equals zero. Therefore this pair has two marginal distributions with densities but no joint density.
:::

## Conditioning and independence

:::definizione{#condizionamento titolo="Conditional distributions"}
For the two inspections, suppose the first inspection is known to be positive, that is, $X=1$. The two cells of the row $X=1$ remain possible, with masses $0.30$ and $0.40$ and total $0.70$. Dividing by the total gives the probabilities $\dfrac37$ for $Y=0$ and $\dfrac47$ for $Y=1$. This computation is the conditional probability of chapter 4, $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}$, applied to the events $\{X=x\}$ and $\{Y=y\}$.

In symbols, when $X$ is discrete and $p_X(x)>0$, the conditional distribution of $Y$ given $X=x$ has masses
$$
p_{Y\mid X}(y\mid x)=\frac{p_{X,Y}(x,y)}{p_X(x)}.
$$

For a pair with a density the event $\{X=x\}$ has probability zero, like every single value of a variable with a density (chapter 6), so one cannot divide by $P(X=x)$. The marginal density $f_X(x)$ is used in its place. When $0<f_X(x)<\infty$, the **conditional density** of $Y$ given $X=x$ is
$$
f_{Y\mid X}(y\mid x)=\frac{f_{X,Y}(x,y)}{f_X(x)}.
$$
The numerator, as a function of $y$, is the vertical cross section of the joint density at $x$, and $f_X(x)$ is the integral of that cross section. Hence the ratio has integral $1$ and is a density in $y$.

The **conditional expectation** $E[Y\mid X=x]$ is the mean of $Y$ computed with the conditional distribution of $Y$ given $X=x$:
$$
E[Y\mid X=x]=\sum_y y\,p_{Y\mid X}(y\mid x)
\quad\text{or}\quad
E[Y\mid X=x]=\int_{\mathbb R} y\,f_{Y\mid X}(y\mid x)\,dy.
$$
The **conditional variance** $\operatorname{Var}(Y\mid X=x)$ is the variance of the same distribution, that is, $E[Y^2\mid X=x]-E[Y\mid X=x]^2$, where $E[Y^2\mid X=x]$ is the mean of $Y^2$ under that distribution. For the two inspections, given $X=1$ the indicator $Y$ equals $1$ with probability $\dfrac47$, so $E[Y\mid X=1]=\dfrac47$ and $\operatorname{Var}(Y\mid X=1)=\dfrac47\cdot\dfrac37=\dfrac{12}{49}$. Given $X=0$, instead, $E[Y\mid X=0]=\dfrac{0.20}{0.30}=\dfrac23$.

The conditional expectation depends on the value $x$. Replacing $x$ with the variable $X$ gives the random variable $E[Y\mid X]$, which equals $E[Y\mid X=x]$ when $X=x$. For the two inspections, $E[Y\mid X]$ equals $\dfrac23$ with probability $0.30$ and $\dfrac47$ with probability $0.70$. Similarly, $\operatorname{Var}(Y\mid X)$ equals $\operatorname{Var}(Y\mid X=x)$ when $X=x$.
:::

:::esempio{titolo="Normalizing a cross section"}
If the density equals $2$ for $0<y<x<1$, then $f_X(x)=2x$ for $0<x<1$. For fixed $X=x$, the conditional density equals $\dfrac{2}{2x}=\dfrac1x$ on $(0,x)$ and zero elsewhere. It is constant on an interval of length $x$, so it is the uniform density on $(0,x)$. In particular $P\left(Y\le\dfrac{x}{2}\ \middle|\ X=x\right)=\dfrac1x\cdot\dfrac x2=\dfrac12$.

For $x=\dfrac12$ the conditional density equals $2$ on $\left(0,\dfrac12\right)$, and for $x=1$ it equals $1$ on $(0,1)$. In both cases the rectangle under the graph has area $1$.

::grafico{xmin=-0.12 xmax=1.3 ymin=-0.18 ymax=2.4 nomi="y,f" linee="-0.1,0 0,0 0,2 0.5,2 0.5,0 1.2,0;0,1 1,1 1,0" poligoni="0,0 0.25,0 0.25,2 0,2" segmenti="0.25,0,0.25,2" etichette="0.55,2.1,X = 0.5;1.04,1.12,x → 1" titolo="Conditional density of $Y$ given $X=\dfrac{1}{2}$ and its limiting form at the endpoint $X=1$. The shaded area equals $P\left(Y\le\dfrac{1}{4}\ \middle|\ X=\dfrac{1}{2}\right)=\dfrac{1}{2}$."}

The mean of the uniform distribution on $(0,x)$ is the midpoint $\dfrac x2$ and its variance is $\dfrac{x^2}{12}$ (chapter 6). Therefore $E[Y\mid X=x]=\dfrac x2$, $\operatorname{Var}(Y\mid X=x)=\dfrac{x^2}{12}$, and $E[Y\mid X]=\dfrac X2$.
:::

::::teorema{#indipendenza-congiunta titolo="Factorization and independence"}
With two dice rolled separately, $P(X\le2,\ Y\ge5)=\dfrac{2\cdot2}{36}=\dfrac19$, and the same number is the product $P(X\le2)\,P(Y\ge5)=\dfrac13\cdot\dfrac13=\dfrac19$. In chapter 4 two events $A$ and $B$ were called independent if $P(A\cap B)=P(A)P(B)$; for two variables this equality is required for all events built from $X$ and from $Y$.

The variables $X$ and $Y$ are **independent** if
$$
P(X\in A,\ Y\in B)=P(X\in A)\,P(Y\in B)
$$
for all sets of real numbers $A$ and $B$ (intervals, unions of intervals, single points).

- If the pair is discrete, independence is equivalent to $p_{X,Y}(x,y)=p_X(x)\,p_Y(y)$ for every pair $(x,y)$.
- If the pair has a joint density, independence is equivalent to $f_{X,Y}(x,y)=f_X(x)\,f_Y(y)$ almost everywhere in the plane.

"Almost everywhere" means at all points except at most those of a set of zero area, such as a line. Changing a density on a set of zero area changes no probability, because the integral over that set equals zero.

:::dimostrazione
Discrete case. If $X$ and $Y$ are independent, the equality applied to the sets $A=\{x\}$ and $B=\{y\}$ gives $p_{X,Y}(x,y)=p_X(x)p_Y(y)$. Conversely, if the masses factor, the sum of the masses over $A\times B$ splits into two sums:
$$
P(X\in A,\ Y\in B)=\sum_{x\in A}\sum_{y\in B}p_X(x)p_Y(y)
=\sum_{x\in A}p_X(x)\sum_{y\in B}p_Y(y)=P(X\in A)\,P(Y\in B).
$$

Case with a density. If $f_{X,Y}=f_Xf_Y$, the same computation with integrals in place of sums gives
$$
P(X\in A,\ Y\in B)=\int_A f_X(x)\,dx\int_B f_Y(y)\,dy=P(X\in A)\,P(Y\in B).
$$
Conversely, if $X$ and $Y$ are independent, for every pair of thresholds
$$
F_{X,Y}(x,y)=F_X(x)F_Y(y)=\int_{-\infty}^x\!\!\int_{-\infty}^y f_X(s)f_Y(t)\,dt\,ds.
$$
Hence $f_Xf_Y$ and $f_{X,Y}$ give the same joint cumulative distribution function and, by the rectangle formula, the same probability to every rectangle. Every region of the plane is approximated by unions of rectangles, so the two functions give the same probability to every region and differ at most on a set of zero area.
:::
::::

:::attenzione{titolo="Factorization and the shape of the support"}
If the joint density is positive on a region that is not a rectangle with sides parallel to the axes, $X$ and $Y$ are dependent. Indeed, if the two marginal densities are positive on two intervals, the product $f_X(x)f_Y(y)$ is positive at all points with $f_X(x)>0$ and $f_Y(y)>0$, which form a rectangle; this rectangle contains points outside the region, where the joint density equals zero.

With density $2$ on the triangle $0<y<x<1$, the marginal densities are $f_X(x)=2x$ and $f_Y(y)=2(1-y)$, both positive on $(0,1)$. At the point $\left(\dfrac14,\dfrac34\right)$ their product equals $2\cdot\dfrac14\cdot2\left(1-\dfrac34\right)=\dfrac12\cdot\dfrac12=\dfrac14$, while the joint density equals zero, because the point has $y>x$. The same happens on the whole triangle $0<x<y<1$, of area $\dfrac12$, so $X$ and $Y$ are dependent.

::grafico{xmin=-0.12 xmax=1.25 ymin=-0.12 ymax=1.2 uguale=1 poligoni="0,0 1,0 1,1" linee="0,1 1,1 1,0" segmenti="0,0,1,1" punti="0.25,0.75,pieno,P" etichette="0.68,0.2,f = 2;0.12,0.9,f = 0" titolo="The joint density is positive only inside the shaded triangle, whereas the product of the marginal densities is positive throughout the square $(0,1)^2$. The two values differ at $P=\left(\dfrac{1}{4},\dfrac{3}{4}\right)$."}
:::

:::osservazione
For discrete variables with finitely many values, independence can also be checked by comparing the conditional distributions with the marginal one. For the two inspections, the probability of a positive second inspection given a positive first one equals $\dfrac{0.40}{0.70}=\dfrac47\approx0.571$. The marginal probability of a positive second inspection equals $0.60$. Since the two values differ, the variables are dependent.

In a table of two indicators, the cell $p_{11}$ and the two marginal distributions determine the other three cells:
$$
p_{10}=p_X(1)-p_{11},\qquad
p_{01}=p_Y(1)-p_{11},\qquad
p_{00}=1-p_X(1)-p_Y(1)+p_{11}.
$$
If $p_{11}=p_X(1)\,p_Y(1)$, the first formula gives $p_{10}=p_X(1)\big(1-p_Y(1)\big)=p_X(1)\,p_Y(0)$, and the other two factor in the same way. Therefore, for two indicators, checking the single cell $p_{11}$ is enough.
:::

## Expectations of functions and covariance

:::definizione{#attesa-congiunta titolo="Expectation of a function of a pair"}
For the two inspections the number of positive results is $X+Y$. Its expected value is the sum of the values of $x+y$ in the four cells, each times the mass of its cell:
$$
E[X+Y]=0\cdot0.10+1\cdot0.20+1\cdot0.30+2\cdot0.40=1.30.
$$

Let $g(x,y)$ be a function of two variables. The **expected value** of $g(X,Y)$ is the average of the values of $g$ weighted by the mass or by the density of the pair:
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
The formulas apply when $g(X,Y)$ is integrable, that is, when the same sum or integral with $|g|$ in place of $g$ is finite.

If $g$ depends on only one coordinate, the marginal distribution suffices; for $g(x,y)=xy$ the joint distribution is needed.

If $X$ and $Y$ are independent, the joint mass is the product of the marginal masses and the sum splits:
$$
E[XY]=\sum_{x,y}xy\,p_X(x)p_Y(y)=\sum_x x\,p_X(x)\sum_y y\,p_Y(y)=E[X]\,E[Y].
$$
With densities the same computation holds with integrals.
:::

:::definizione{#covarianza titolo="Covariance and affine transformations"}
A pair takes the values $(1,2)$ and $(3,6)$, each with probability $\dfrac12$, so it has means $\mu_X=2$ and $\mu_Y=4$ ($\mu$ is read "mu"). The deviations from the means are $-1$ and $-2$ in the first outcome, $1$ and $2$ in the second. In both outcomes the two variables lie on the same side of their respective means, so the product of the deviations is positive and equals $2$, and its mean also equals $2$.

Let $X$ and $Y$ have finite second moments, that is, finite $E[X^2]$ and $E[Y^2]$, and let $\mu_X=E[X]$ and $\mu_Y=E[Y]$. The **covariance** of $X$ and $Y$ is the expected value of the product of their deviations from their respective means:
$$
\begin{aligned}
\operatorname{Cov}(X,Y)
&=E[(X-\mu_X)(Y-\mu_Y)]\\[6pt]
&=E[XY]-\mu_X\mu_Y.
\end{aligned}
$$
The second form follows by expanding the product,
$$
(X-\mu_X)(Y-\mu_Y)=XY-\mu_YX-\mu_XY+\mu_X\mu_Y.
$$
By linearity of expectation, the second and third terms have expectation $-\mu_Y\mu_X$ and $-\mu_X\mu_Y$, and the constant last term has expectation $\mu_X\mu_Y$. Hence what remains is $E[XY]-\mu_X\mu_Y$. In the example $E[XY]=\dfrac{1\cdot2+3\cdot6}{2}=10$ and $10-2\cdot4=2$.

The covariance is positive when the positive products predominate in the weighted average, that is, the outcomes in which the two deviations have the same sign, and negative when those with opposite signs predominate. Its units are the product of the units of $X$ and $Y$, for example meters times kilograms.

Three rules of computation follow from the definition.

- If $Y=X$, the two deviations coincide, so $\operatorname{Cov}(X,X)=E[(X-\mu_X)^2]=\operatorname{Var}(X)$.
- Replacing $X$ by $a+bX$, the mean becomes $a+b\mu_X$ and the deviation becomes $b(X-\mu_X)$; similarly the deviation of $c+dY$ is $d(Y-\mu_Y)$. Hence $\operatorname{Cov}(a+bX,c+dY)=bd\operatorname{Cov}(X,Y)$.
- Covariance is linear in each variable, because the deviation of a linear combination is the same combination of the deviations. For example $\operatorname{Cov}(X,X-2Y)=\operatorname{Cov}(X,X)-2\operatorname{Cov}(X,Y)=\operatorname{Var}(X)-2\operatorname{Cov}(X,Y)$.
:::

:::esempio{titolo="Covariance of two indicators"}
For the two inspections, $E[X]=0.70$ and $E[Y]=0.60$. The product $XY$ equals $1$ only if both indicators equal $1$, so $E[XY]=p_{11}=0.40$ and
$$
\operatorname{Cov}(X,Y)=0.40-(0.70)(0.60)=-0.02.
$$
The sign is negative because the probability of two positive results, $0.40$, is slightly less than the value $0.42$ that two independent inspections with the same marginal distributions would have.
:::

:::esempio{titolo="Identical marginal distributions and different covariances"}
Two indicators each have success probability $\dfrac12$, so $E[X]E[Y]=\dfrac14$ and $\operatorname{Cov}(X,Y)=p_{11}-\dfrac14$. Three distributions of the pair are compared.

- If the inspections are independent, $p_{11}=\dfrac12\cdot\dfrac12=\dfrac14$ and the covariance is $0$.
- If the two inspections always give the same result, $p_{11}=P(X=1)=\dfrac12$ and the covariance is $\dfrac12-\dfrac14=\dfrac14$.
- If exactly one of the two inspections gives a positive result, $p_{11}=0$ and the covariance is $-\dfrac14$.

The marginal distributions are identical in the three cases; the distribution of the pair changes, so $E[XY]$ and the covariance change.
:::

## Linear correlation and dependence

:::definizione{#correlazione titolo="The correlation coefficient"}
The height $X$ and the weight $Y$ of the same people are measured. If height is converted from meters to centimeters, by the rule $\operatorname{Cov}(a+bX,c+dY)=bd\operatorname{Cov}(X,Y)$ the covariance is multiplied by $100$. Dividing by the standard deviations, which change by the same factor, gives a number that does not depend on the units.

Let $X$ and $Y$ have finite second moments and positive variances, and let $\sigma_X$ and $\sigma_Y$ be their standard deviations ($\sigma$ is read "sigma"; the standard deviation is the square root of the variance, chapter 5). The **correlation coefficient** is
$$
\rho=\operatorname{Corr}(X,Y)
=\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y},
$$
where $\rho$ is read "rho". The denominator is positive, so $\rho$ has the sign of the covariance.

An indicator with success probability $p$ has variance $p(1-p)$ (chapter 5), so for the two inspections $\sigma_X=\sqrt{0.21}$ and $\sigma_Y=\sqrt{0.24}$. Therefore
$$
\rho=\frac{-0.02}{\sqrt{0.21\cdot0.24}}\approx-0.089.
$$
Since $\rho$ always lies between $-1$ and $1$ (next theorem), a value this close to zero indicates a very weak linear relationship.
:::

::::teorema{#limiti-correlazione titolo="Extreme values of the correlation coefficient"}
If $Y=3-2X$, each deviation of $Y$ is $-2$ times the deviation of $X$, so $\operatorname{Cov}(X,Y)=-2\operatorname{Var}(X)$, $\sigma_Y=2\sigma_X$, and $\rho=\dfrac{-2\sigma_X^2}{\sigma_X\cdot2\sigma_X}=-1$.

Suppose the assumptions of the definition hold. Then $|\rho|\le1$. Moreover $|\rho|=1$ if and only if $Y=a+bX$ almost surely, for some real $a$ and $b\neq0$. In that case $\rho$ has the sign of $b$.

"Almost surely" means "with probability $1$".

:::dimostrazione
Use the standardized variables $U=\dfrac{X-\mu_X}{\sigma_X}$ and $V=\dfrac{Y-\mu_Y}{\sigma_Y}$. Both have mean $0$ and $E[U^2]=E[V^2]=1$, because $E[(X-\mu_X)^2]=\sigma_X^2$. Moreover $E[UV]=\dfrac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}=\rho$. Expanding the square and using linearity of expectation gives
$$
E[(V-\rho U)^2]=E[V^2]-2\rho E[UV]+\rho^2E[U^2]=1-2\rho^2+\rho^2=1-\rho^2.
$$
The left-hand side is the expectation of a square, so it is nonnegative. Therefore $1-\rho^2\ge0$, that is, $|\rho|\le1$.

If $|\rho|=1$, then $E[(V-\rho U)^2]=0$. A nonnegative variable with mean zero equals zero with probability $1$, so $V=\rho U$ almost surely. Returning to $X$ and $Y$,
$$
Y=\mu_Y+\rho\frac{\sigma_Y}{\sigma_X}(X-\mu_X),
$$
which has the form $a+bX$ with $b=\rho\dfrac{\sigma_Y}{\sigma_X}$. Since $\dfrac{\sigma_Y}{\sigma_X}>0$, $b$ has the sign of $\rho$.

Conversely, if $Y=a+bX$ with $b\neq0$, the rules for covariance give $\operatorname{Cov}(X,Y)=b\operatorname{Var}(X)=b\,\sigma_X^2$ and $\sigma_Y=|b|\,\sigma_X$. Hence $\rho=\dfrac{b\,\sigma_X^2}{\sigma_X\cdot|b|\,\sigma_X}=\dfrac{b}{|b|}$, which equals $1$ if $b>0$ and $-1$ if $b<0$.
:::
::::

:::attenzione{titolo="Dependent variables with zero correlation"}
If $X$ and $Y$ are independent, $E[XY]=E[X]E[Y]$ (definition of the expectation of a function of a pair), so the covariance is zero. The converse is false, as the following case shows.

Let $X$ be uniform on $\{-1,0,1\}$ and let $Y=X^2$. The values of $X$ are symmetric about $0$, so $E[X]=0$ and $E[X^3]=\dfrac{-1+0+1}{3}=0$. Moreover $E[X^2]=\dfrac23$. Since $XY=X^3$,
$$
\operatorname{Cov}(X,Y)=E[X^3]-E[X]\,E[X^2]=0-0\cdot\frac23=0.
$$
Yet $Y$ is a function of $X$. For example $P(Y=0\mid X=0)=1$, whereas $P(Y=0)=\dfrac13$. The variables are therefore dependent. The deviations of $X$ are $-1$, $0$, $1$ and those of $Y$ are $\dfrac13$, $-\dfrac23$, $\dfrac13$; the products $-\dfrac13$, $0$, $\dfrac13$ cancel out, because the three points lie on a parabola symmetric about the $y$-axis.

The regression line of $Y$ on $X$ is the line $y=a+bx$ that minimizes $E[(Y-a-bX)^2]$; its slope is $b=\dfrac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}$ (chapter 12). Here $b=0$, so the line is horizontal, $y=E[Y]=\dfrac23$, even though $Y$ is a function of $X$.

::grafico{f="x^2;2/3" xmin=-1.7 xmax=1.7 ymin=-0.45 ymax=1.75 uguale=1 legenda="y=x^2;y=\dfrac{2}{3}" punti="-1,1,pieno;0,0,pieno;1,1,pieno" titolo="The three equally likely values of $(X,X^2)$ lie on the parabola. The regression line is horizontal because the covariance is zero."}
:::

:::osservazione
For normal pairs, zero covariance is enough for independence. A pair is jointly normal, with means $\mu_X$, $\mu_Y$, standard deviations $\sigma_X$, $\sigma_Y$ and correlation $\rho$ with $|\rho|<1$, if it has density
$$
f_{X,Y}(x,y)=\frac{1}{2\pi\sigma_X\sigma_Y\sqrt{1-\rho^2}}
\exp\left(-\frac{z_x^2-2\rho z_xz_y+z_y^2}{2(1-\rho^2)}\right),
$$
where $z_x=\dfrac{x-\mu_X}{\sigma_X}$ and $z_y=\dfrac{y-\mu_Y}{\sigma_Y}$. The marginal distributions are the normal distributions $N(\mu_X,\sigma_X^2)$ and $N(\mu_Y,\sigma_Y^2)$ of chapter 6. With zero covariance $\rho=0$, and the density becomes
$$
f_{X,Y}(x,y)=\frac{1}{\sigma_X\sqrt{2\pi}}e^{-\frac{z_x^2}{2}}\cdot\frac{1}{\sigma_Y\sqrt{2\pi}}e^{-\frac{z_y^2}{2}},
$$
that is, the product of the two marginal densities. By the factorization theorem $X$ and $Y$ are independent. The conclusion requires the joint density to have this form, not only the marginal distributions.
:::

## Linear combinations and convolution

::::teorema{#somme titolo="Expectation and variance of a linear combination"}
For the two inspections $\operatorname{Var}(X)=0.21$, $\operatorname{Var}(Y)=0.24$ and $\operatorname{Cov}(X,Y)=-0.02$. The sum $X+Y$ takes the values $0$, $1$, $2$ with probabilities $0.10$, $0.50$, $0.40$, so it has mean $1.30$ and variance $0.50+4\cdot0.40-1.30^2=0.41$, while the sum of the two variances is $0.45$. The difference $0.04$ is twice the covariance with the sign changed.

For variables with finite second moments and real coefficients $a$, $b$,
$$
\begin{aligned}
E[aX+bY]&=aE[X]+bE[Y],\\[6pt]
\operatorname{Var}(aX+bY)
&=a^2\sigma_X^2+b^2\sigma_Y^2\\[6pt]
&\quad+2ab\operatorname{Cov}(X,Y).
\end{aligned}
$$

Two variables with zero covariance are called **uncorrelated**; for them the covariance term vanishes and the variance of the combination is $a^2\sigma_X^2+b^2\sigma_Y^2$. Two independent variables are uncorrelated.

With $a=1$ and $b=-1$ the formula gives $\operatorname{Var}(X-Y)=\sigma_X^2+\sigma_Y^2-2\operatorname{Cov}(X,Y)$. If the covariance is positive, the variance of the difference is less than the sum of the variances.

:::dimostrazione
The first identity is linearity of expectation. For the second, the deviation of the combination from its mean is
$$
aX+bY-(a\mu_X+b\mu_Y)=a(X-\mu_X)+b(Y-\mu_Y).
$$
Squaring gives
$$
a^2(X-\mu_X)^2+b^2(Y-\mu_Y)^2+2ab(X-\mu_X)(Y-\mu_Y).
$$
Taking the expectation term by term, the first two terms give $a^2\sigma_X^2$ and $b^2\sigma_Y^2$, and the third gives $2ab\operatorname{Cov}(X,Y)$, by the definition of covariance.
:::
::::

:::teorema{#convoluzione titolo="Distribution of the sum of independent variables"}
Two dice are rolled and $S=X+Y$ is the sum of the results. One has $S=4$ when the first die shows $x$ and the second $4-x$, with $x=1,2,3$. By independence each pair has probability $\dfrac16\cdot\dfrac16$, so
$$
P(S=4)=\sum_{x=1}^{3}p_X(x)\,p_Y(4-x)=3\cdot\frac{1}{36}=\frac{1}{12}.
$$

Let $X$ and $Y$ be independent and let $S=X+Y$. For discrete variables
$$
p_S(s)=\sum_x p_X(x)p_Y(s-x).
$$
For variables with densities
$$
f_S(s)=\int_{\mathbb R}f_X(x)f_Y(s-x)\,dx.
$$
The integral is called the **convolution** of the densities $f_X$ and $f_Y$.

In the discrete case the sum runs over the pairs $(x,s-x)$, that is, those with sum $s$, each with mass $p_X(x)p_Y(s-x)$ by independence. In the case with densities the joint density is $f_X(x)f_Y(y)$ and the event $\{S\le s\}$ is the region $y\le s-x$, so
$$
F_S(s)=\int_{\mathbb R}f_X(x)\left(\int_{-\infty}^{s-x}f_Y(y)\,dy\right)dx=\int_{\mathbb R}f_X(x)F_Y(s-x)\,dx.
$$
Differentiating with respect to $s$ under the integral sign, $F_Y(s-x)$ becomes $f_Y(s-x)$ and the formula follows. The same formula follows from the change-of-variables theorem, later in the chapter, applied to $(x,y)\mapsto(x,x+y)$, whose inverse has Jacobian determinant $1$, by then integrating the density of $(X,S)$ with respect to $x$.
:::

:::esempio{titolo="Sum of two independent uniform random variables"}
Let $X$ and $Y$ be independent and uniform on $(0,1)$. The product $f_X(x)f_Y(s-x)$ equals $1$ if $0<x<1$ and $0<s-x<1$, that is, if $x$ belongs to $(0,1)\cap(s-1,s)$, and equals $0$ otherwise. The convolution integral is therefore the length of this intersection.

For $0<s<1$ the intersection is $(0,s)$, of length $s$. For $1\le s<2$ it is $(s-1,1)$, of length $1-(s-1)=2-s$. Outside $(0,2)$ the intersection is empty. One obtains

- $f_S(s)=s$ if $0<s<1$;
- $f_S(s)=2-s$ if $1\le s<2$;
- $f_S(s)=0$ outside $(0,2)$.

The graph is a triangle made of two pieces of area $\dfrac12$ each, so the density has integral $1$.

::grafico{xmin=-0.3 xmax=2.32 ymin=-0.15 ymax=1.23 nomi="s,f_S(s)" poligoni="0,0 1,1 2,0" linee="-0.2,0 0,0 1,1 2,0 2.22,0" titolo="Density of the sum of two independent uniform random variables on (0, 1)"}
:::

## Extremes and transformations of a pair

:::teorema{#estremi titolo="Maximum and minimum of independent variables"}
Three students hand in an exam at independent times, each uniform on $(0,1)$ hours. The room becomes free when the last one hands in, that is, at time $M$, the maximum of the three times. The room is free within half an hour if all three have handed in within half an hour, so $P\left(M\le\dfrac12\right)=\left(\dfrac12\right)^3=\dfrac18$.

Let $X_1,\ldots,X_n$ be independent, with cumulative distribution functions $F_1,\ldots,F_n$. Let $M$ denote the maximum and $m$ the minimum of the $n$ variables. For every threshold $t$,
$$
F_M(t)=\prod_{i=1}^n F_i(t),\qquad
P(m>t)=\prod_{i=1}^n(1-F_i(t)).
$$
The maximum is at most $t$ when all the variables are at most $t$, and the minimum exceeds $t$ when all of them exceed $t$. Since the variables are independent, the probability that all of them satisfy the condition is the product of their probabilities.

If the variables have the same cumulative distribution function $F$, the products become $F(t)^n$ and $(1-F(t))^n$. For the three times uniform on $(0,1)$ one has $F(t)=t$, so $F_M(t)=t^3$ and $P(m>t)=(1-t)^3$. In particular $P\left(m>\dfrac12\right)=\left(1-\dfrac12\right)^3=\dfrac18$. The two curves in the graph meet at the point $\left(\dfrac12,\dfrac18\right)$, because at $t=\dfrac12$ one has $1-t=t$.

::grafico{curve="t,t^3,0,1;t,(1-t)^3,0,1" xmin=-0.12 xmax=1.25 ymin=-0.12 ymax=1.18 nomi="t,p" legenda="F_M(t)=t^3;P(m>t)=(1-t)^3" punti="0.5,0.125,pieno" segmenti="0.5,0,0.5,0.125" titolo="Cumulative distribution function of the maximum and probability that the minimum exceeds $t$ for three independent uniform variables on $(0,1)$."}
:::

:::teorema{#jacobiano-congiunto titolo="Change of variables for a joint density"}
Let $(X,Y)$ be uniform on the square $(0,1)\times(0,1)$ and let $U=2X$, $V=Y$. The transformation doubles the abscissas, so it doubles the area of every region, and $(U,V)$ is uniform on the rectangle $(0,2)\times(0,1)$ with density $\dfrac12$.

Let $(X,Y)$ have a density that is zero outside an open region $G$ (a region without its boundary points), and let $T$ be a transformation from $G$ to its image $T(G)$ with three properties:

- it is one-to-one, that is, each point $(u,v)$ of $T(G)$ comes from exactly one point $(x,y)$ of $G$;
- the image $T(G)$ is an open region;
- $T$ and its inverse $T^{-1}$ have continuous partial derivatives (they are said to be of class $C^1$).

Setting $(U,V)=T(X,Y)$, for $(u,v)\in T(G)$
$$
f_{U,V}(u,v)=f_{X,Y}(T^{-1}(u,v))
\left|\det J_{T^{-1}}(u,v)\right|,
$$
and the density is zero outside $T(G)$.

Here $J_{T^{-1}}(u,v)$ is the **Jacobian matrix** of the inverse: if the inverse is $x=x(u,v)$, $y=y(u,v)$, the matrix has in its first row the derivatives of $x$ with respect to $u$ and $v$, and in its second row those of $y$. Its determinant is called the Jacobian determinant, and its absolute value is the factor by which small areas are multiplied when passing from the $(u,v)$ plane to the $(x,y)$ plane. In the opening example the inverse is $x=\dfrac u2$, $y=v$, its matrix has rows $\left(\dfrac12,0\right)$ and $(0,1)$, so the determinant equals $\dfrac12$ and $f_{U,V}=1\cdot\dfrac12=\dfrac12$.

The Jacobian determinant of the inverse is the reciprocal of that of the direct transformation. For $u=3x+y$, $v=y$ the direct matrix has rows $(3,1)$ and $(0,1)$ and determinant $3$, so the inverse has determinant $\dfrac13$.
:::

:::esempio{titolo="Sum and difference as new coordinates"}
Let $X$ and $Y$ be independent and uniform on $(0,1)$, hence with joint density $1$ on the square, and let $U=X+Y$ and $V=X-Y$. Adding and subtracting the two equations gives the inverse $x=\dfrac{u+v}{2}$, $y=\dfrac{u-v}{2}$. Its Jacobian matrix has rows $\left(\dfrac12,\dfrac12\right)$ and $\left(\dfrac12,-\dfrac12\right)$, so the determinant equals $\dfrac12\cdot\left(-\dfrac12\right)-\dfrac12\cdot\dfrac12=-\dfrac12$. The conditions $0<x<1$ and $0<y<1$ become $0<u+v<2$ and $0<u-v<2$. Therefore the joint density of $(U,V)$ equals $1\cdot\left|-\dfrac12\right|=\dfrac12$ in the region where both conditions hold and zero elsewhere.

For $0<u<1$, the vertical cross section of the region is $-u<v<u$, of length $2u$. Integrating with respect to $v$ gives the marginal density of $U$, namely $\dfrac12\cdot2u=u$. It coincides with the density of the sum obtained by convolution.

::grafico{xmin=-0.18 xmax=2.35 ymin=-1.3 ymax=1.28 nomi="u,v" poligoni="0,0 1,1 2,0 1,-1" segmenti="0.6,-0.6,0.6,0.6" punti="0,0,vuoto;1,1,vuoto;2,0,vuoto;1,-1,vuoto" titolo="Region where the joint density of (U,V) is positive. To the left of u=1, the dashed cross section runs from −u to u."}
:::

:::osservazione
Some transformations are one-to-one only after the region is split into parts. Let $(X,Y)$ have a density that is zero outside $(-1,1)^2$, and let $U=X^2$ and $V=Y$. A point $(u,v)$ with $0<u<1$ comes from two points, $(\sqrt u,v)$ with $x>0$ and $(-\sqrt u,v)$ with $x<0$. On each of the two parts the transformation is one-to-one, and the Jacobian determinant of the inverse $x=\pm\sqrt u$, $y=v$ equals $\pm\dfrac{1}{2\sqrt u}$. The two parts are disjoint, so the two contributions add:
$$
f_{U,V}(u,v)=\frac{1}{2\sqrt u}\Big(f_{X,Y}(\sqrt u,v)+f_{X,Y}(-\sqrt u,v)\Big).
$$
The line $x=0$ has zero area, so it has probability zero and can be ignored.
:::

## Total expectation and total variance

::::teorema{#totale titolo="Laws of total expectation and total variance"}
For the two inspections the conditional expectation $E[Y\mid X]$ equals $\dfrac23$ with probability $0.30$ and $\dfrac47$ with probability $0.70$. Its mean is
$$
0.30\cdot\frac23+0.70\cdot\frac47=0.20+0.40=0.60,
$$
which is exactly $E[Y]$. The values of $X$ divide the units into groups, and $E[Y\mid X]$ is the mean of the group to which the unit belongs.

Let $Y$ be integrable, that is, with finite $E[|Y|]$. Then
$$
E[Y]=E\big[E[Y\mid X]\big].
$$
If moreover $E[Y^2]$ is finite,
$$
\begin{aligned}
\operatorname{Var}(Y)
&=E[\operatorname{Var}(Y\mid X)]\\[6pt]
&\quad+\operatorname{Var}(E[Y\mid X]).
\end{aligned}
$$
The first term is the mean of the variances within the groups. The second is the variance of the group means.

:::dimostrazione
In the discrete case, by the definition of conditional expectation,
$$
E\big[E[Y\mid X]\big]=\sum_x E[Y\mid X=x]\,p_X(x)
=\sum_x\sum_y y\,\frac{p_{X,Y}(x,y)}{p_X(x)}\,p_X(x)
=\sum_{x,y}y\,p_{X,Y}(x,y)=E[Y].
$$
The denominator $p_X(x)$ cancels with the weight $p_X(x)$. For a pair with a density the computation is the same with integrals.

For the variance one starts from the identity $\operatorname{Var}(Y\mid X)=E[Y^2\mid X]-E[Y\mid X]^2$. Taking expectations and applying the first law to $Y^2$ gives
$$
E[\operatorname{Var}(Y\mid X)]=E[Y^2]-E\big[E[Y\mid X]^2\big].
$$
The variance of the variable $E[Y\mid X]$, which by the first law has mean $E[Y]$, is
$$
\operatorname{Var}(E[Y\mid X])=E\big[E[Y\mid X]^2\big]-E[Y]^2.
$$
Adding the two equalities, the term $E\big[E[Y\mid X]^2\big]$ cancels, leaving $E[Y^2]-E[Y]^2=\operatorname{Var}(Y)$.
:::
::::

:::esempio{titolo="Within-group variation and differences between groups"}
A plant uses two production modes with equal probability. Let $X$ be the mode used and $Y$ the number of parts produced. In the first mode $Y$ has mean $10$ and variance $4$, in the second mean $14$ and variance $8$.

- The overall mean is $E[Y]=\dfrac12\cdot10+\dfrac12\cdot14=12$.
- The mean of the conditional variances is $E[\operatorname{Var}(Y\mid X)]=\dfrac12\cdot4+\dfrac12\cdot8=6$.
- The two conditional means are both at distance $2$ from the overall mean, so $\operatorname{Var}(E[Y\mid X])=\dfrac12\cdot2^2+\dfrac12\cdot2^2=4$.

By the law of total variance, $\operatorname{Var}(Y)=6+4=10$. The part $6$ comes from the dispersion of the parts around the mean of their own mode, the part $4$ from the distance between the means $10$ and $14$.
:::
