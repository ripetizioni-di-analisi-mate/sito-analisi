---
titolo: Differential equations
sommario: What differential equations and the Cauchy problem are, and the solution methods for first-order equations and for second-order equations with constant coefficients.
---

## Differential equations and the Cauchy problem

:::definizione{#equazione-differenziale titolo="Differential equation, order, solution"}
A **differential equation** is an equation whose unknown is a *function* $y(x)$ and in which one or more derivatives of $y$ appear. The **order** of the equation is the highest order of differentiation present: $y' = 2y$ has order $1$, $y'' + y = 0$ has order $2$. A **solution** (or integral) on an interval $I$ is a function $y : I \to \mathbb{R}$, differentiable on $I$ as many times as the order requires, which, when substituted into the equation, turns it into an identity for every $x \in I$. To verify that a function is a solution, one computes its derivatives and substitutes them into the equation.
:::

:::esempio{titolo="Verifying a solution"}
$y = e^{3x}$ is a solution of $y' = 3y$ on $\mathbb{R}$, since $y' = 3e^{3x} = 3y$. The function $y = C e^{3x}$ is also a solution for *every* constant $C \in \mathbb{R}$, because $y' = 3Ce^{3x} = 3y$.
:::

:::definizione{#integrale-generale titolo="General solution and particular solution"}
The **general solution** of a differential equation is the family of *all* its solutions; for the equations of order $n$ treated in this chapter it depends on $n$ arbitrary constants. A **particular solution** is the single solution obtained by assigning a value to the constants. The general solution of $y' = 3y$ is $y = Ce^{3x}$ with $C \in \mathbb{R}$; for $C = 1$ one obtains the particular solution $y = e^{3x}$.
:::

:::definizione{#problema-di-cauchy titolo="Cauchy problem"}
A **Cauchy problem** for a first-order equation is the system
$$
\begin{cases}
y' = f(x, y) \\[4pt]
y(x_0) = y_0
\end{cases}
$$
formed by the equation and an **initial condition**. The initial condition selects, among the infinitely many solutions in the general solution, the one whose graph passes through the point $(x_0, y_0)$: one substitutes $x_0$ and $y_0$ into the general solution and solves for the constant.
:::

:::esempio{titolo="Solving a Cauchy problem"}
For the problem $y' = 3y$ with $y(0) = 2$, the general solution is $y = Ce^{3x}$. Imposing the initial condition gives $y(0) = C = 2$, so the **solution** is $y = 2e^{3x}$.

::grafico{f="2*exp(3*x);exp(3*x);-exp(3*x)" punti="0,2,pieno" xmin=-2 xmax=1.2 ymin=-4 ymax=6 titolo="Three solutions of $y' = 3y$: $y = 2e^{3x}$ in color, $y = e^{3x}$ dashed, $y = -e^{3x}$ in red; the condition $y(0) = 2$ selects the solution passing through $(0, 2)$"}

:::

## Local existence and uniqueness

:::teorema{#esistenza-unicita titolo="Local existence and uniqueness"}
Let $f(x, y)$ be defined on an open rectangle of the plane containing the point $(x_0, y_0)$. If $f$ and the partial derivative $\dfrac{\partial f}{\partial y}$ are continuous on the rectangle, then the Cauchy problem $y' = f(x, y)$ with $y(x_0) = y_0$ has **one and only one solution**, defined in a neighborhood of $x_0$. The theorem guarantees that the problem is well posed before any computation. The adjective *local* indicates that the solution is guaranteed *only* near $x_0$: the maximal interval on which it is defined can be smaller than the one on which $f$ is defined, as the exercises on the interval of existence show. The proof requires sequences of functions and is deferred to later courses.
:::

:::attenzione
Without the continuity of $\dfrac{\partial f}{\partial y}$, uniqueness **may fail**. The Cauchy problem $y' = 2\sqrt{|y|}$ with $y(0) = 0$ has *at least two* solutions on $\mathbb{R}$: the zero function $y \equiv 0$ and the function $y = x\,|x|$, for which $y' = 2|x| = 2\sqrt{|y|}$. The function $f(x, y) = 2\sqrt{|y|}$ is continuous, but its partial derivative with respect to $y$ is unbounded near $y = 0$, so the hypothesis of the theorem **is not satisfied**.

::grafico{f="x*abs(x);0" punti="0,0,pieno" xmin=-2 xmax=2 ymin=-2.5 ymax=2.5 titolo="Two solutions of the problem $y' = 2\sqrt{|y|}$, $y(0) = 0$: $y = x|x|$ in color and $y = 0$ dashed, both passing through the origin"}

:::

## Separable equations

:::definizione{#variabili-separabili titolo="Separable equation"}
A first-order equation is **separable** if it can be written in the form
$$
y' = g(x)\, h(y)
$$
with $g$ continuous on an interval and $h$ of class $C^1$. The right-hand side is the **product** of a function of $x$ *alone* and a function of $y$ alone: the equation $y' = x y^2$ is separable with $g(x) = x$ and $h(y) = y^2$, while $y' = x + y$ is not.
:::

::::teorema{#metodo-di-separazione titolo="Method of separation of variables"}
For the equation $y' = g(x)\,h(y)$ the following facts hold.

- If $h(\bar{y}) = 0$, the constant function $y \equiv \bar{y}$ is a **solution**.
- In the regions where $h(y) \neq 0$, the solutions satisfy
$$
H(y(x)) = G(x) + C ,
$$
where $H$ is an antiderivative of $\dfrac{1}{h}$ and $G$ is an antiderivative of $g$; from this equality one obtains $y(x)$.

In practice one writes $\dfrac{dy}{h(y)} = g(x)\,dx$ and integrates the two sides, each in its own variable. The **constant solutions** must be sought *separately*, because dividing by $h(y)$ excludes them.

:::dimostrazione
The constant function $y \equiv \bar{y}$ has zero derivative and, since $h(\bar{y}) = 0$, the right-hand side is also zero, so the equation is satisfied. Now let $y$ be a solution with $h(y(x)) \neq 0$ on an interval. Dividing the equation by $h(y(x))$ gives
$$
\frac{y'(x)}{h(y(x))} = g(x) .
$$
By the **chain rule**, the left-hand side is the derivative of $H(y(x))$, since $\dfrac{d}{dx} H(y(x)) = H'(y(x))\, y'(x) = \dfrac{y'(x)}{h(y(x))}$. Hence $H(y(x))$ and $G(x)$ have the same derivative on the interval, therefore they **differ by a constant**.
:::
::::

:::esempio{titolo="Separation with a constant solution"}
$y' = -2xy$. The zero function $y \equiv 0$ is a **solution**. For $y \neq 0$ we separate:
$$
\int \frac{dy}{y} = \int (-2x)\, dx
\quad\implies\quad
\ln |y| = -x^2 + c
\quad\implies\quad
y = C e^{-x^2}
$$
with $C = \pm e^{c} \neq 0$. The value $C = 0$ gives back the zero solution, so the **general solution** is $y = Ce^{-x^2}$ with $C \in \mathbb{R}$.

::grafico{f="exp(-x*x)" xmin=-3 xmax=3 ymin=-0.3 ymax=1.3 titolo="The solution with $C = 1$, that is, $y = e^{-x^2}$"}

:::

:::osservazione
The **interval of existence** of the solution of a Cauchy problem is the largest interval containing $x_0$ on which the function found is differentiable and satisfies the equation. It can be bounded *even* when $f$ is defined on the whole plane. The problem $y' = 1 + y^2$ with $y(0) = 0$ has solution $y = \tan x$: the solution is defined on $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, the interval containing $0$ on which the tangent is differentiable, and it tends to infinity at the endpoints.

::grafico{f="tan(x)+0*sqrt(2.4674-x*x)" asintoti="x=-1.5708;x=1.5708" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-5 ymax=5 titolo="The solution $y = \tan x$ of the problem $y' = 1 + y^2$, $y(0) = 0$, is defined only on $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, even though the equation makes sense on the whole plane"}

:::

## First-order linear equations

:::definizione{#lineari-primo-ordine titolo="First-order linear equation"}
A first-order equation is **linear** if it can be written in the form
$$
y' + a(x)\, y = b(x)
$$
with $a$ and $b$ continuous on an interval $I$. If $b \equiv 0$ the equation is called **homogeneous**; the equation $y' + a(x)\,y = 0$ is the **associated homogeneous equation**. The unknown and its derivative appear to the *first degree*: $y' + x y = e^x$ is linear, $y' = y^2$ is not.
:::

::::teorema{#fattore-integrante titolo="Solution formula with the integrating factor"}
Let $A(x)$ be an antiderivative of $a(x)$ on $I$. The general solution of the equation $y' + a(x)\,y = b(x)$ is
$$
y(x) = e^{-A(x)} \left( C + \int b(x)\, e^{A(x)}\, dx \right), \qquad C \in \mathbb{R},
$$
where the integral denotes an antiderivative of $b(x)\,e^{A(x)}$. All solutions are defined on *all* of $I$. In practice one multiplies the equation by the **integrating factor** $e^{A(x)}$, recognizes the left-hand side as the derivative of $e^{A(x)} y$, and integrates.

:::dimostrazione
The integrating factor $e^{A(x)}$ never vanishes, so multiplying by it gives an **equivalent equation**. By the **product rule**,
$$
\left( e^{A(x)}\, y \right)' = e^{A(x)} y' + a(x)\, e^{A(x)} y = e^{A(x)} \bigl( y' + a(x)\, y \bigr),
$$
therefore the equation is equivalent to
$$
\left( e^{A(x)}\, y \right)' = e^{A(x)}\, b(x) .
$$
Two antiderivatives of the same function on an interval differ by a constant, so $e^{A(x)} y = \displaystyle\int b(x)\, e^{A(x)}\, dx + C$; dividing by $e^{A(x)}$ gives the formula. All the steps are equivalences, therefore the formula provides **all and only** the solutions.
:::
::::

:::teorema{#struttura-primo-ordine titolo="Structure of the general solution"}
The general solution of $y' + a(x)\,y = b(x)$ is
$$
y = C e^{-A(x)} + y_p(x) ,
$$
where $Ce^{-A(x)}$ is the **general solution of the associated homogeneous equation** and $y_p$ is *any* **particular solution** of the complete equation. The structure can be read off the solution formula by separating the term with the constant $C$ from the term with the antiderivative. The same structure holds for every linear equation, of any order, and is taken up again for the second order.
:::

:::esempio
$y' + y = x$. Here $a(x) = 1$, so $A(x) = x$ and the integrating factor is $e^{x}$:
$$
\left( e^{x} y \right)' = x e^{x}
\quad\implies\quad
e^{x} y = (x - 1)e^{x} + C
\quad\implies\quad
y = x - 1 + Ce^{-x} ,
$$
where the antiderivative of $xe^{x}$ is computed **by parts**. The term $Ce^{-x}$ solves the associated homogeneous equation, the term $x - 1$ is a **particular solution** of the complete equation.

::grafico{f="x-1;x-1+3*exp(-x);x-1-3*exp(-x)" xmin=-1.5 xmax=6 ymin=-5 ymax=6 titolo="Solutions of $y' + y = x$: the particular solution $y = x - 1$ in color, those with $C = 3$ (dashed) and $C = -3$ (in red); as $x \to +\infty$ the term $Ce^{-x}$ tends to $0$ and the graphs approach the line"}

:::

## Bernoulli equations

:::teorema{#bernoulli titolo="Bernoulli equation"}
A **Bernoulli equation** has the form
$$
y' + a(x)\, y = b(x)\, y^{\alpha}
$$
with $a$, $b$ continuous and $\alpha \in \mathbb{R}$, $\alpha \neq 0$, $\alpha \neq 1$ (for $\alpha = 0$ the equation is linear, for $\alpha = 1$ it is linear homogeneous). If $\alpha > 0$, the zero function $y \equiv 0$ is a **solution**. In the regions where $y \neq 0$ (with $y > 0$ if $\alpha$ is not an integer), the substitution
$$
z = y^{1 - \alpha}
$$
transforms the equation into the **linear equation**
$$
z' + (1 - \alpha)\, a(x)\, z = (1 - \alpha)\, b(x) .
$$
Indeed, dividing the original equation by $y^{\alpha}$ gives $y^{-\alpha} y' + a(x)\, y^{1-\alpha} = b(x)$, and since $z' = (1 - \alpha)\, y^{-\alpha} y'$, multiplying by $1 - \alpha$ produces the linear equation written above. One solves the linear equation with the integrating factor and recovers $y$ from the substitution.
:::

:::esempio
$y' - y = -y^2$, a Bernoulli equation with $\alpha = 2$. The constants $y \equiv 0$ and $y \equiv 1$ are **solutions**. For $y \neq 0$, the substitution $z = y^{-1}$ gives $z' + z = 1$, a linear equation with general solution $z = 1 + Ce^{-x}$, so
$$
y = \frac{1}{1 + Ce^{-x}} .
$$
For $C = 0$ one recovers the **constant solution** $y \equiv 1$.

::grafico{f="1/(1+exp(-x));1;1/(1-0.5*exp(-x))+0*sqrt(x+0.6931)" xmin=-5 xmax=5 ymin=-0.5 ymax=3 titolo="Solutions of $y' - y = -y^2$: $C = 1$ in color, $C = -\dfrac{1}{2}$ in red; as $x \to +\infty$ both approach the constant solution $y = 1$ (dashed), one from below and one from above"}

:::

## Second order with constant coefficients: homogeneous equations

:::definizione{#secondo-ordine-omogenea titolo="Second-order equation with constant coefficients"}
A **second-order linear equation with constant coefficients** has the form
$$
y'' + a\, y' + b\, y = f(x)
$$
with $a, b \in \mathbb{R}$ and $f$ continuous on an interval $I$. If $f \equiv 0$ the equation is called **homogeneous**; the equation with $f \equiv 0$ is the associated homogeneous equation. These equations describe the oscillating systems of physics, such as the spring with friction and the electric circuit, in which $f$ represents the external forcing term.
:::

::::teorema{#equazione-caratteristica titolo="Characteristic equation"}
With the homogeneous equation $y'' + a y' + b y = 0$ one associates the **characteristic equation**
$$
r^2 + a r + b = 0 ,
$$
obtained by looking for solutions of the form $y = e^{rx}$. Setting $\Delta = a^2 - 4b$, the general solution depends on the *type of roots*:

- if $\Delta > 0$, the roots $r_1 \neq r_2$ are real and distinct and $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$;
- if $\Delta = 0$, the root $r$ is a real double root and $y = (C_1 + C_2\, x)\, e^{r x}$;
- if $\Delta < 0$, the roots are complex conjugates $\lambda \pm i\mu$ with $\mu > 0$ and $y = e^{\lambda x} \bigl( C_1 \cos(\mu x) + C_2 \sin(\mu x) \bigr)$;

in all cases $C_1, C_2 \in \mathbb{R}$ are arbitrary constants.

:::dimostrazione
Substituting $y = e^{rx}$ into the equation gives $(r^2 + ar + b)\, e^{rx} = 0$ and, since $e^{rx} > 0$, the function $e^{rx}$ is a solution *if and only if* $r$ is a **root of the characteristic equation**. For $\Delta > 0$ this provides the two non-proportional solutions $e^{r_1 x}$ and $e^{r_2 x}$. For $\Delta = 0$ the double root is $r = -\dfrac{a}{2}$ and $x e^{rx}$ is also a solution: substituting gives $(r^2 + ar + b)\, x e^{rx} + (2r + a)\, e^{rx} = 0$, where $r^2 + ar + b = 0$ because $r$ is a root and $2r + a = 0$ by the choice of $r$. For $\Delta < 0$ the roots are $\lambda \pm i\mu$ and by **Euler's formula**
$$
e^{(\lambda + i\mu)x} = e^{\lambda x} \bigl( \cos(\mu x) + i \sin(\mu x) \bigr) ;
$$
the real part $e^{\lambda x}\cos(\mu x)$ and the imaginary part $e^{\lambda x}\sin(\mu x)$ are real solutions, because the equation has real coefficients. In every case the combinations $C_1 y_1 + C_2 y_2$ are solutions by linearity, and by the **theorem on the structure of the solution space** there are *no* others.
:::
::::

:::teorema{#spazio-delle-soluzioni titolo="Structure of the solution space"}
The solutions of the homogeneous equation $y'' + ay' + by = 0$ form a **vector space of dimension** $2$: if $y_1$ and $y_2$ are *non-proportional* solutions, every solution can be written in one and only one way as $C_1 y_1 + C_2 y_2$. The general solution of the complete equation $y'' + ay' + by = f(x)$ is
$$
y = C_1 y_1 + C_2 y_2 + y_p ,
$$
where $y_p$ is any particular solution of the complete equation. Hence the solution proceeds in **two steps**: the general solution of the homogeneous equation via the characteristic equation, then a particular solution via the method of undetermined coefficients or via variation of constants. The proof relies on the existence and uniqueness theorem for the second order and is deferred to later courses.
:::

:::esempio
$y'' - y = 0$: the characteristic equation $r^2 - 1 = 0$ has roots $\pm 1$, so $y = C_1 e^{x} + C_2 e^{-x}$. $y'' + 4y = 0$: the characteristic equation $r^2 + 4 = 0$ has roots $\pm 2i$, so $y = C_1 \cos(2x) + C_2 \sin(2x)$.

::grafico{f="exp(-x)*cos(2*x);exp(-x);-exp(-x)" xmin=-0.5 xmax=5 ymin=-1.2 ymax=1.2 titolo="For $y'' + 2y' + 5y = 0$ the roots are $-1 \pm 2i$: the solution $y = e^{-x}\cos(2x)$ oscillates between $y = e^{-x}$ (dashed) and $y = -e^{-x}$ (in red), with amplitude tending to $0$"}

:::

## Non-homogeneous equations: the method of undetermined coefficients

:::teorema{#somiglianza titolo="Method of undetermined coefficients"}
If the forcing term $f(x)$ of $y'' + ay' + by = f(x)$ has one of the forms in the table, the equation admits a **particular solution of the indicated form**; the coefficients of the trial function are determined by *substituting* it into the equation and equating the coefficients of corresponding terms.

| $f(x)$ | trial function $y_p$ |
| --- | --- |
| polynomial $p_n(x)$ of degree $n$ | polynomial $q_n(x)$ of degree $n$ |
| $A\, e^{\gamma x}$ | $a_0\, e^{\gamma x}$ |
| $A \cos(\omega x) + B \sin(\omega x)$ | $a_0 \cos(\omega x) + b_0 \sin(\omega x)$ |
| $p_n(x)\, e^{\gamma x}$ | $q_n(x)\, e^{\gamma x}$ |
| $e^{\gamma x} \bigl( A\cos(\omega x) + B\sin(\omega x) \bigr)$ | $e^{\gamma x} \bigl( a_0\cos(\omega x) + b_0\sin(\omega x) \bigr)$ |

**Resonance rule**: each row is associated with a number, namely $0$ for polynomials, $\gamma$ for the exponential, $\pm i\omega$ for sine and cosine, $\gamma \pm i\omega$ for the products. If this number is a root of the characteristic equation, the trial function in the table **must be multiplied by** $x$; if it is a *double* root, by $x^2$. If $f$ is a sum of terms from different rows, one looks for a particular solution for each term and adds the results, by the **linearity** of the equation.
:::

:::esempio{titolo="A case with resonance"}
$y'' + y = \cos x$. The characteristic equation $r^2 + 1 = 0$ has roots $\pm i$, which coincide with the number associated with $\cos x$, so the trial function $a_0 \cos x + b_0 \sin x$ **must be multiplied by** $x$. Substituting $y_p = x\,(a_0 \cos x + b_0 \sin x)$ gives $a_0 = 0$ and $b_0 = \dfrac{1}{2}$, therefore $y_p = \dfrac{x \sin x}{2}$ and the **general solution** is
$$
y = C_1 \cos x + C_2 \sin x + \frac{x \sin x}{2} .
$$

::grafico{f="x*sin(x)/2" xmin=-25 xmax=25 ymin=-13 ymax=13 titolo="$y = \dfrac{x \sin x}{2}$: the amplitude of the oscillations grows over time (resonance)"}

:::

:::teorema{#variazione-delle-costanti titolo="Variation of constants"}
Let $y_1$ and $y_2$ be non-proportional solutions of the associated homogeneous equation and let
$$
W(x) = y_1(x)\, y_2'(x) - y_1'(x)\, y_2(x)
$$
be their **Wronskian**, which *never* vanishes. A particular solution of $y'' + ay' + by = f(x)$ is
$$
y_p(x) = -\,y_1(x) \int \frac{y_2(x)\, f(x)}{W(x)}\, dx \;+\; y_2(x) \int \frac{y_1(x)\, f(x)}{W(x)}\, dx .
$$
The method applies to *every* continuous $f$, including those outside the table of the method of undetermined coefficients, for example to $y'' + y = \dfrac{1}{\cos x}$. The name comes from the form of the trial function $y_p = c_1(x)\, y_1 + c_2(x)\, y_2$, in which the constants of the general solution of the homogeneous equation are **replaced by functions**; the formula is verified by direct substitution into the equation.
:::

## Second-order Cauchy problem and equations of order n

:::teorema{#cauchy-secondo-ordine titolo="Second-order Cauchy problem"}
The problem
$$
\begin{cases}
y'' + a\, y' + b\, y = f(x) \\[4pt]
y(x_0) = y_0 \\[4pt]
y'(x_0) = y_1
\end{cases}
$$
with $f$ continuous on $I$ and $x_0 \in I$, has **one and only one solution**, defined on *all* of $I$. There are two initial conditions because the general solution contains **two constants**: they assign, at the same point, the value of the function and that of its derivative, that is, position and velocity in mechanical models. In practice one writes the general solution, computes its derivative, imposes the two conditions, and solves the linear system in the constants $C_1$ and $C_2$.
:::

:::esempio
For the problem $y'' + y = 0$ with $y(0) = 0$ and $y'(0) = 1$, the general solution is $y = C_1 \cos x + C_2 \sin x$. From the first condition $y(0) = C_1 = 0$; since $y' = C_2 \cos x$, from the second condition $y'(0) = C_2 = 1$. The **solution** is $y = \sin x$.

::grafico{f="sin(x);x;2*sin(x)" punti="0,0,pieno" xmin=-1 xmax=7 ymin=-2.5 ymax=2.5 titolo="The solution $y = \sin x$ (in color) starts from $y(0) = 0$ with slope $y'(0) = 1$, that of the dashed line $y = x$; with $y'(0) = 2$ the solution is $y = 2\sin x$ (in red)"}

:::

:::teorema{#ordine-n titolo="Linear equations of order n with constant coefficients"}
For the equation $y^{(n)} + a_{n-1}\, y^{(n-1)} + \cdots + a_1\, y' + a_0\, y = 0$ the *same scheme* as for the second order holds. The characteristic equation is $r^n + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0$ and the solutions form a **vector space of dimension** $n$. Each real root $r$ of **multiplicity** $m$ provides the solutions $e^{rx},\, x e^{rx},\, \dots,\, x^{m-1} e^{rx}$; each pair of complex roots $\lambda \pm i\mu$ of multiplicity $m$ provides $x^{k} e^{\lambda x} \cos(\mu x)$ and $x^{k} e^{\lambda x} \sin(\mu x)$ for $k = 0, \dots, m-1$. The general solution is the linear combination of the $n$ solutions obtained in this way: for $y''' - y'' = 0$ the characteristic equation $r^3 - r^2 = 0$ has the double root $0$ and the simple root $1$, so $y = C_1 + C_2\, x + C_3\, e^{x}$.
:::
