---
titolo: Differential equations
sommario: What a differential equation, a general solution, a particular solution, and an initial value problem are, how to solve first-order separable and linear equations and second-order linear equations with constant coefficients, and how to use them to describe radioactive decay, population growth, RC circuits, and simple harmonic motion.
---

## What is a differential equation?

:::definizione{#equazione-differenziale titolo="A differential equation and its order"}
A **differential equation** is an equation in which the unknown is a function $y = y(x)$ and which contains at least one derivative of $y$. The **order** of the equation is the order of the highest derivative it contains. For example,
$$
y' = 2x ,
\qquad
y' = 3y ,
\qquad
y'' + y = 0
$$
are first-order, first-order, and second-order equations, respectively. A **solution** on an interval $I$ is a function that is differentiable on $I$ as many times as the order of the equation requires and that, when substituted into the equation, makes it an identity for every $x$ in $I$.

To check that a function is a solution, calculate its derivatives and substitute them into the equation. The function $y = e^{3x}$ has derivative $y' = 3e^{3x}$, which equals $3y$ for every real $x$, so $y = e^{3x}$ is a solution of $y' = 3y$ on $\mathbb{R}$.
:::

:::esempio{titolo="Checking a solution by substitution"}
We check that $y = \sin x + \cos x$ is a solution of $y'' + y = 0$. Its derivatives are
$$
y' = \cos x - \sin x ,
\qquad
y'' = -\sin x - \cos x ,
$$
so $y'' + y = -\sin x - \cos x + \sin x + \cos x = 0$ for every $x$. For the function $y = x^2$, however, we have $y'' + y = 2 + x^2$, which differs from $0$ for every $x$. Therefore $x^2$ is *not* a solution.
:::

:::definizione{#soluzione-generale-particolare titolo="General and particular solutions"}
To solve a differential equation is to find all its solutions. The solutions of a first-order equation usually depend on one arbitrary constant $c$, and those of a second-order equation on two constants, $c_1$ and $c_2$. The expression that contains the constants and describes all the solutions is called the **general solution**. Each solution obtained by assigning values to the constants is called a **particular solution**. The graph of a solution is called an **integral curve**.

The solutions of the equation $y' = 2x$ are the antiderivatives of $2x$, that is,
$$
y = x^2 + c ,
\qquad
c \in \mathbb{R} .
$$
This is the general solution. Setting $c = 2$ gives the particular solution $y = x^2 + 2$, and setting $c = -1$ gives the particular solution $y = x^2 - 1$. The integral curves are parabolas that are vertical translations of one another.
:::

:::esempio{titolo="Solving a second-order equation by integrating twice"}
For the equation $y'' = 6x$, integrating once gives $y' = 3x^2 + c_1$. Integrating again gives
$$
y = x^3 + c_1 x + c_2 ,
\qquad
c_1, c_2 \in \mathbb{R} .
$$
There are two constants, one for each integration, as in any second-order equation. The antiderivatives are calculated using the methods in the chapter on indefinite integrals.
:::

## The initial value problem

:::definizione{#problema-di-cauchy titolo="Initial value problem"}
To select one of the infinitely many solutions in the general solution, we specify **initial conditions**. For a first-order equation we specify the value $y_0$ of the solution at a point $x_0$. For a second-order equation we specify the value of the solution and the value of its derivative at the same point. The **initial value problem** consists of the equation and the initial conditions:
$$
\begin{cases}
y' = f(x, y) \\
y(x_0) = y_0
\end{cases}
\qquad\qquad
\begin{cases}
y'' = f(x, y, y') \\
y(x_0) = y_0 \\
y'(x_0) = y_1
\end{cases}
$$
Geometrically, in the first-order case we seek the integral curve through the point $(x_0, y_0)$. For example, to solve $y' = 2x$, $y(1) = 3$, substitute the initial condition into the general solution $y = x^2 + c$. This gives $3 = 1 + c$, so $c = 2$ and the solution is $y = x^2 + 2$.

::grafico{f="x^2+2;x^2-1" punti="1,3,pieno,P" xmin=-3 xmax=3 ymin=-2 ymax=10 legenda="y = x^2 + 2;y = x^2 - 1" titolo="Two integral curves of $y' = 2x$. The solution of the initial value problem with $y(1) = 3$ is the one through $P(1, 3)$"}

:::

:::teorema{#esistenza-unicita titolo="Existence and uniqueness theorem"}
A first-order equation is in **normal form** if it is written as $y' = f(x, y)$, that is, if it is solved for $y'$. Suppose that $f(x, y)$ and its derivative with respect to $y$, calculated by treating $x$ as constant, are continuous in a rectangle in the plane containing the point $(x_0, y_0)$. Then there is an interval $I$ containing $x_0$ on which the initial value problem $y' = f(x, y)$, $y(x_0) = y_0$ has *one and only one* solution.

An analogous theorem holds for a second-order initial value problem. In particular, for second-order linear equations with constant coefficients, the problem has one and only one solution defined on all of $\mathbb{R}$, for any $x_0$, $y_0$, and $y_1$.

The theorem guarantees that exactly one integral curve passes through each point of the rectangle. For $y' = 3y$ we have $f(x, y) = 3y$, which is continuous and whose derivative with respect to $y$ equals $3$, so the theorem applies at every point of the plane. The proof is covered at the university level.
:::

:::esempio{titolo="A second-order initial value problem"}
We solve the problem $y'' = 6x$, $y(0) = 1$, $y'(0) = 2$. The general solution $y = x^3 + c_1 x + c_2$ gives $y' = 3x^2 + c_1$. The condition $y'(0) = 2$ gives $c_1 = 2$, and the condition $y(0) = 1$ gives $c_2 = 1$. The solution is therefore
$$
y = x^3 + 2x + 1 .
$$
:::

## Separable equations

:::definizione{#variabili-separabili titolo="Separable equation"}
A first-order equation is **separable** if it can be written in the form
$$
y' = g(x) \cdot h(y) ,
$$
that is, if the right-hand side is the product of a function of $x$ alone and a function of $y$ alone. For example, $y' = 2xy$ is separable, with $g(x) = 2x$ and $h(y) = y$. The equation $y' = x^2 + 1$ is also separable, with $h(y) = 1$. The equation $y' = x + y$, however, cannot be written in this form.

The simplest case is $y' = g(x)$. The solutions are the antiderivatives of $g$, so the general solution is $y = \displaystyle\int g(x)\,dx$, as in the example $y' = 2x$.
:::

:::teorema{#metodo-separazione titolo="Separation of variables"}
To solve $y' = g(x) \cdot h(y)$, proceed in two steps.

- **Constant solutions**: if $h(k) = 0$, the constant function $y = k$ is a solution because its derivative is $0$ and the right-hand side also equals $g(x) \cdot 0 = 0$.
- Other solutions: wherever $h(y) \neq 0$, write $y' = \dfrac{dy}{dx}$, divide by $h(y)$, and integrate each side with respect to its own variable:
$$
\int \frac{dy}{h(y)} = \int g(x)\,dx + c .
$$
This gives a relation between $x$ and $y$, which we solve for $y$ when possible.

The method reduces solving the equation to evaluating two indefinite integrals. The first integral is taken with respect to $y$ and the second with respect to $x$, and the constant is written only once.
:::

:::esempio{titolo="The equation y' = 2xy"}
We solve $y' = 2xy$ with the condition $y(0) = 1$. We have $h(y) = y$, which vanishes for $y = 0$, so $y = 0$ is a constant solution. For $y \neq 0$, separate the variables:
$$
\int \frac{dy}{y} = \int 2x\,dx
\qquad
\Longrightarrow
\qquad
\ln |y| = x^2 + c
\qquad
\Longrightarrow
\qquad
|y| = e^{c} \cdot e^{x^2} .
$$
The number $e^{c}$ is positive, and removing the absolute value gives $y = k\,e^{x^2}$ with $k \neq 0$. Setting $k = 0$ recovers the constant solution, so the general solution is $y = k\,e^{x^2}$ for any real $k$. The condition $y(0) = 1$ gives $k = 1$, so the solution of the initial value problem is $y = e^{x^2}$.
:::

:::esempio{titolo="A solution defined only on an interval"}
We solve the problem $y' = y^2$, $y(0) = 1$. The initial condition has $y_0 = 1 \neq 0$, so the constant solution $y = 0$ does not satisfy it. Separating the variables gives
$$
\int \frac{dy}{y^2} = \int dx
\qquad
\Longrightarrow
\qquad
-\frac{1}{y} = x + c .
$$
With $x = 0$ and $y = 1$ we find $c = -1$, so $-\dfrac{1}{y} = x - 1$, that is,
$$
y = \frac{1}{1 - x} .
$$
The function has a vertical asymptote at $x = 1$. The solution of the initial value problem is defined on $(-\infty, 1)$, the interval of its domain containing $x_0 = 0$, even though the equation $y' = y^2$ makes sense for every $x$.

::grafico{f="1/(1-x)" punti="0,1,pieno" asintoti="x=1" xmin=-4 xmax=2 ymin=-1 ymax=9 titolo="The solution of $y' = y^2$ with $y(0) = 1$ is $y = \dfrac{1}{1 - x}$, defined for $x < 1$"}

:::

:::attenzione
Dividing by $h(y)$ loses the constant solutions, which must be found separately. For the equation $y' = (y - 2)^2$, separation of variables gives $-\dfrac{1}{y - 2} = x + c$, that is, $y = 2 - \dfrac{1}{x + c}$, and no value of $c$ yields the constant function $y = 2$. Yet $y = 2$ is a solution because $h(2) = 0$, and it is the solution of the initial value problem with $y(0) = 2$.
:::

## First-order linear equations

:::definizione{#equazione-lineare-primo-ordine titolo="First-order linear equation"}
A first-order equation is **linear** if it can be written in the form
$$
y' + a(x)\,y = b(x) ,
$$
with $a$ and $b$ continuous functions on an interval $I$. The unknown function and its derivative occur only to the first power and are not multiplied by each other. The equation is **homogeneous** if $b(x) = 0$ for every $x$, and **nonhomogeneous** otherwise. For example, $y' + y = x$ and $y' - \dfrac{y}{x} = x^2$ are nonhomogeneous linear equations, whereas $y' = y^2$ is not linear because it contains $y^2$.
:::

:::teorema{#formula-lineare-primo-ordine titolo="General solution of a first-order linear equation"}
Let $a$ and $b$ be continuous on the interval $I$ and let $A(x)$ be an antiderivative of $a(x)$. The general solution of $y' + a(x)\,y = b(x)$ on $I$ is
$$
y = e^{-A(x)} \left( \int b(x)\,e^{A(x)}\,dx + c \right) ,
\qquad
c \in \mathbb{R} .
$$
For the homogeneous equation, with $b(x) = 0$, the formula reduces to $y = c\,e^{-A(x)}$.

To obtain the formula, multiply the equation by $e^{A(x)}$. The left-hand side becomes $y'\,e^{A(x)} + a(x)\,e^{A(x)}\,y$, the derivative of the product $y\,e^{A(x)}$, so $y\,e^{A(x)}$ is an antiderivative of $b(x)\,e^{A(x)}$. Dividing by $e^{A(x)}$ gives $y$. For example, for $y' + 2y = 0$ we have $A(x) = 2x$, and the general solution is $y = c\,e^{-2x}$.
:::

:::esempio{titolo="The equation y' + y = x"}
We solve the problem $y' + y = x$, $y(0) = 0$. We have $a(x) = 1$ and $b(x) = x$, so $A(x) = x$. Integration by parts gives
$$
\int x\,e^{x}\,dx = x\,e^{x} - \int e^{x}\,dx = (x - 1)\,e^{x} ,
$$
and the general solution is
$$
y = e^{-x} \Big( (x - 1)\,e^{x} + c \Big) = x - 1 + c\,e^{-x} .
$$
The condition $y(0) = 0$ gives $-1 + c = 0$, that is, $c = 1$, and the solution is $y = x - 1 + e^{-x}$. As $x \to +\infty$, the term $e^{-x}$ approaches $0$, so the line $y = x - 1$ is a slant asymptote of the solution.

::grafico{f="x-1+exp(-x);x-1" punti="0,0,pieno" xmin=-2 xmax=6 ymin=-3 ymax=6 legenda="y = x - 1 + e^{-x};y = x - 1" titolo="The solution of $y' + y = x$ with $y(0) = 0$ approaches the slant asymptote $y = x - 1$ as $x \to +\infty$"}

:::

:::esempio{titolo="An equation with a variable coefficient"}
We solve $y' - \dfrac{y}{x} = x^2$ for $x > 0$. We have $a(x) = -\dfrac{1}{x}$, so $A(x) = -\ln x$, and
$$
e^{A(x)} = e^{-\ln x} = \frac{1}{x} ,
\qquad
e^{-A(x)} = x .
$$
Since $\displaystyle\int x^2 \cdot \frac{1}{x}\,dx = \int x\,dx = \frac{x^2}{2}$, the general solution is
$$
y = x \left( \frac{x^2}{2} + c \right) = \frac{x^3}{2} + c\,x .
$$
:::

:::osservazione{#coefficienti-costanti-primo-ordine titolo="Equations with constant coefficients"}
When $a$ and $b$ are constants, with $a \neq 0$, the equation $y' + a\,y = b$ has general solution
$$
y = \frac{b}{a} + c\,e^{-a x} .
$$
The constant function $y = \dfrac{b}{a}$ is a solution because its derivative is zero and $a \cdot \dfrac{b}{a} = b$. If $a > 0$, every solution approaches $\dfrac{b}{a}$ as $x \to +\infty$ because $e^{-ax}$ approaches $0$. For example, the solutions of $y' + 3y = 6$ are $y = 2 + c\,e^{-3x}$, and all approach $2$. Equations of this type describe a charging capacitor, a cooling object, and a body falling with viscous drag.
:::

## Homogeneous second-order linear equations

:::definizione{#equazione-lineare-secondo-ordine titolo="Second-order linear equation with constant coefficients"}
A **second-order linear equation with constant coefficients** is an equation of the form
$$
a\,y'' + b\,y' + c\,y = r(x) ,
$$
where $a$, $b$, and $c$ are real numbers with $a \neq 0$, and $r$ is a continuous function called the **forcing term**. We assume $a > 0$, which is always possible by changing the sign of every term. The equation is **homogeneous** if $r(x) = 0$ for every $x$. For example, $y'' - y' - 2y = 0$ is homogeneous, whereas $y'' + 4y = 3\sin x$ is not.
:::

:::teorema{#sovrapposizione titolo="Linear combinations of solutions"}
If $y_1$ and $y_2$ are solutions of the homogeneous equation $a\,y'' + b\,y' + c\,y = 0$, then $c_1 y_1 + c_2 y_2$ is also a solution for any choice of constants $c_1$ and $c_2$.

Indeed, the derivative of a linear combination is the same linear combination of the derivatives, so substituting $c_1 y_1 + c_2 y_2$ into the left-hand side gives $c_1\,(a\,y_1'' + b\,y_1' + c\,y_1) + c_2\,(a\,y_2'' + b\,y_2' + c\,y_2) = c_1 \cdot 0 + c_2 \cdot 0 = 0$. For example, $\sin x$ and $\cos x$ are solutions of $y'' + y = 0$, so $2\sin x - 5\cos x$ is also a solution. It can be shown that if neither of the two functions $y_1$ and $y_2$ is a multiple of the other, the combinations $c_1 y_1 + c_2 y_2$ give *all* solutions and thus form the general solution.
:::

:::definizione{#equazione-caratteristica titolo="Characteristic equation"}
We seek solutions of the homogeneous equation of the form $y = e^{\lambda x}$, where $\lambda$ is a number to be determined. Since $y' = \lambda\,e^{\lambda x}$ and $y'' = \lambda^2 e^{\lambda x}$, substitution gives
$$
e^{\lambda x} \left( a\lambda^2 + b\lambda + c \right) = 0 .
$$
The factor $e^{\lambda x}$ is always positive, so $y = e^{\lambda x}$ is a solution if and only if $\lambda$ satisfies the **characteristic equation**
$$
a\lambda^2 + b\lambda + c = 0 ,
$$
with discriminant $\Delta = b^2 - 4ac$. To write the characteristic equation, replace $y''$ by $\lambda^2$, $y'$ by $\lambda$, and $y$ by $1$. For $y'' - y' - 2y = 0$ the characteristic equation is $\lambda^2 - \lambda - 2 = 0$, whose roots are $\lambda = 2$ and $\lambda = -1$. Thus $e^{2x}$ and $e^{-x}$ are solutions.
:::

:::teorema{#soluzioni-omogenea titolo="General solution of the homogeneous equation"}
The general solution of $a\,y'' + b\,y' + c\,y = 0$, with $a > 0$, depends on the sign of the discriminant $\Delta$ of the characteristic equation.

- If $\Delta > 0$, the characteristic equation has two distinct real roots $\lambda_1$ and $\lambda_2$, and
$$
y = c_1\,e^{\lambda_1 x} + c_2\,e^{\lambda_2 x} .
$$
- If $\Delta = 0$, the characteristic equation has a double root $\lambda = -\dfrac{b}{2a}$, and
$$
y = (c_1 + c_2\,x)\,e^{\lambda x} .
$$
- If $\Delta < 0$, set $\alpha = -\dfrac{b}{2a}$ and $\beta = \dfrac{\sqrt{-\Delta}}{2a}$. Then
$$
y = e^{\alpha x} \left( c_1 \cos \beta x + c_2 \sin \beta x \right) .
$$
Those familiar with complex numbers will recognize $\alpha \pm i\beta$ as the complex roots of the characteristic equation.

By this theorem, solving the differential equation reduces to solving a quadratic equation. For example, the general solution of $y'' - y' - 2y = 0$ is $y = c_1\,e^{2x} + c_2\,e^{-x}$. The full proof is covered at the university level.
:::

:::esempio{titolo="The cases of zero and negative discriminants"}
For $y'' - 4y' + 4y = 0$, the characteristic equation is $\lambda^2 - 4\lambda + 4 = (\lambda - 2)^2 = 0$, with $\Delta = 0$ and double root $\lambda = 2$. The general solution is $y = (c_1 + c_2\,x)\,e^{2x}$.

For $y'' + 2y' + 5y = 0$, the characteristic equation is $\lambda^2 + 2\lambda + 5 = 0$, with $\Delta = 4 - 20 = -16$. Thus $\alpha = -\dfrac{2}{2} = -1$ and $\beta = \dfrac{\sqrt{16}}{2} = 2$, and the general solution is
$$
y = e^{-x} \left( c_1 \cos 2x + c_2 \sin 2x \right) .
$$
The conditions $y(0) = 2$ and $y'(0) = 0$ give $c_1 = 2$. The derivative is $y' = e^{-x} \big( (2c_2 - c_1) \cos 2x - (2c_1 + c_2) \sin 2x \big)$, so $y'(0) = 2c_2 - c_1 = 0$ and $c_2 = 1$. The solution $y = e^{-x} \left( 2\cos 2x + \sin 2x \right)$ oscillates between two bounds that approach each other over time, $-\sqrt{5}\,e^{-x}$ and $\sqrt{5}\,e^{-x}$, so its amplitude decreases.

::grafico{f="exp(-x)*(2*cos(2*x)+sin(2*x));sqrt(5)*exp(-x)" punti="0,2,pieno" xmin=0 xmax=5 ymin=-1 ymax=3 legenda="y = e^{-x}(2\cos 2x + \sin 2x);y = \sqrt{5}\,e^{-x}" titolo="The solution of $y'' + 2y' + 5y = 0$ with $y(0) = 2$ and $y'(0) = 0$ oscillates below the curve $y = \sqrt{5}\,e^{-x}$"}

:::

:::osservazione{#caso-delta-nullo titolo="Why the factor x appears when the discriminant is zero"}
If $\Delta = 0$, the exponential method gives only one solution, $e^{\lambda x}$. We can verify that $y = x\,e^{\lambda x}$ is also a solution. Its derivatives are $y' = (1 + \lambda x)\,e^{\lambda x}$ and $y'' = (2\lambda + \lambda^2 x)\,e^{\lambda x}$, and substitution gives
$$
a\,y'' + b\,y' + c\,y = e^{\lambda x} \Big( x \left( a\lambda^2 + b\lambda + c \right) + (2a\lambda + b) \Big) .
$$
The first term is zero because $\lambda$ satisfies the characteristic equation, and the second term is zero because $\lambda = -\dfrac{b}{2a}$. Thus for $y'' - 4y' + 4y = 0$ we have the solution $x\,e^{2x}$ in addition to $e^{2x}$.
:::

## Nonhomogeneous second-order linear equations

:::teorema{#soluzione-non-omogenea titolo="General solution of a nonhomogeneous equation"}
Let $\bar{y}$ be a particular solution of the nonhomogeneous equation $a\,y'' + b\,y' + c\,y = r(x)$. Then the general solution of the nonhomogeneous equation is
$$
y = y_0 + \bar{y} ,
$$
where $y_0$ is the general solution of the associated homogeneous equation $a\,y'' + b\,y' + c\,y = 0$.

Indeed, if $y$ is any solution, substituting the difference $y - \bar{y}$ into the left-hand side gives $r(x) - r(x) = 0$, so the difference is a solution of the homogeneous equation. For example, the function $\bar{y} = 1$ solves $y'' + y = 1$, and the homogeneous equation $y'' + y = 0$ has general solution $c_1 \cos x + c_2 \sin x$. Thus the general solution of $y'' + y = 1$ is $y = c_1 \cos x + c_2 \sin x + 1$.
:::

:::teorema{#metodo-somiglianza titolo="Method of undetermined coefficients"}
When the forcing term $r(x)$ is a polynomial, an exponential, or a trigonometric function, we seek a particular solution $\bar{y}$ of the same type, with coefficients to be determined by substitution into the equation.

| $r(x)$ | Trial form for $\bar{y}$ | Special case |
| --- | --- | --- |
| polynomial of degree $n$ | polynomial of degree $n$ | if $c = 0$ and $b \neq 0$, a polynomial of degree $n$ multiplied by $x$ |
| $k\,e^{\mu x}$ | $A\,e^{\mu x}$ | if $\mu$ satisfies the characteristic equation, $A\,x\,e^{\mu x}$ ($\Delta > 0$) or $A\,x^2 e^{\mu x}$ ($\Delta = 0$) |
| $p \cos \omega x + q \sin \omega x$ | $A \cos \omega x + B \sin \omega x$ | if $b = 0$ and $\omega^2 = \dfrac{c}{a}$, the same expression multiplied by $x$ |

The last column lists the cases in which the trial function already solves the homogeneous equation and therefore cannot produce the forcing term. If the forcing term is a sum of terms of the types shown, find a particular solution for each term and add the results.
:::

:::esempio{titolo="Polynomial and exponential forcing terms"}
Consider the equation $y'' - y' - 2y = r(x)$, whose associated homogeneous equation has general solution $c_1\,e^{2x} + c_2\,e^{-x}$.

- For $r(x) = 4x$ we try $\bar{y} = Ax + B$. Since $\bar{y}' = A$ and $\bar{y}'' = 0$, we get $-A - 2Ax - 2B = 4x$. Equating the coefficients of $x$ gives $-2A = 4$, that is, $A = -2$, and equating the constant terms gives $-A - 2B = 0$, that is, $B = 1$. Thus $\bar{y} = -2x + 1$.
- For $r(x) = 6\,e^{x}$ we try $\bar{y} = A\,e^{x}$. The derivatives are both equal to $A\,e^{x}$, so $A - A - 2A = 6$ and $A = -3$, that is, $\bar{y} = -3\,e^{x}$.
- For $r(x) = 3\,e^{2x}$ the number $\mu = 2$ satisfies the characteristic equation, so we try $\bar{y} = A\,x\,e^{2x}$. We have $\bar{y}' = A\,(1 + 2x)\,e^{2x}$ and $\bar{y}'' = A\,(4 + 4x)\,e^{2x}$, and substitution gives $A\,e^{2x} \big( 4 + 4x - 1 - 2x - 2x \big) = 3A\,e^{2x}$. The condition $3A = 3$ implies $A = 1$, so $\bar{y} = x\,e^{2x}$.

In the first case the general solution is $y = c_1\,e^{2x} + c_2\,e^{-x} - 2x + 1$.
:::

:::esempio{titolo="Trigonometric forcing term"}
For $y'' + 4y = 3\sin x$ we try $\bar{y} = A \cos x + B \sin x$. Since $\bar{y}'' = -A \cos x - B \sin x$, we obtain
$$
3A \cos x + 3B \sin x = 3 \sin x ,
$$
so $A = 0$ and $B = 1$. The particular solution is $\bar{y} = \sin x$, and the general solution is $y = c_1 \cos 2x + c_2 \sin 2x + \sin x$.
:::

:::attenzione
When the forcing term solves the homogeneous equation, a trial function of the same type does not give a particular solution. For $y'' + 4y = 4\cos 2x$ we have $b = 0$ and $\omega^2 = 4 = \dfrac{c}{a}$. Substituting $A \cos 2x + B \sin 2x$ into the left-hand side gives $0$, and no values of $A$ and $B$ yield $4 \cos 2x$. We therefore try $\bar{y} = x\,(A \cos 2x + B \sin 2x)$, and substitution gives $-4A \sin 2x + 4B \cos 2x = 4 \cos 2x$. Thus $A = 0$, $B = 1$, and $\bar{y} = x \sin 2x$, a function that oscillates with increasing amplitude. In physics this phenomenon is called **resonance**.
:::

## Growth, decay, and cooling

:::definizione{#decadimento-radioattivo titolo="Radioactive decay"}
In a sample of radioactive material, the number of nuclei that decay per unit time is proportional to the number $N(t)$ of nuclei present. Therefore $N(t)$ satisfies the equation
$$
N'(t) = -k\,N(t) ,
$$
where $k > 0$ is the **decay constant**. This is a homogeneous linear equation, and with the condition $N(0) = N_0$ its solution is $N(t) = N_0\,e^{-kt}$. The **half-life** $T$ is the time it takes for the number of nuclei to fall by half. The condition $e^{-kT} = \dfrac{1}{2}$ gives
$$
T = \frac{\ln 2}{k} .
$$
The same law holds for the mass of the sample, which is proportional to the number of nuclei. For an isotope with $T = 8$ days and initial mass $8\,\mathrm{g}$, we have $k = \dfrac{\ln 2}{8}$ and $m(t) = 8\,e^{-\frac{\ln 2}{8} t} = 8 \cdot 2^{-\frac{t}{8}}$. After $24$ days, that is, three half-lives, $8 \cdot 2^{-3} = 1\,\mathrm{g}$ remains.

::grafico{f="8*exp(-log(2)*x/8)" punti="0,8,pieno;8,4,pieno;16,2,pieno;24,1,pieno" segmenti="8,0,8,4;16,0,16,2;24,0,24,1" xmin=0 xmax=40 ymin=-1 ymax=9 nomi="t,m" legenda="m = 8 \cdot 2^{-\frac{t}{8}}" titolo="The mass of an isotope with a half-life of $8$ days falls by half every $8$ days"}

:::

:::definizione{#crescita-popolazione titolo="Population growth"}
In the **Malthusian model**, the rate of growth of a population is proportional to the number $P(t)$ of individuals, that is, $P'(t) = k\,P(t)$ with $k > 0$. The solution with $P(0) = P_0$ is $P(t) = P_0\,e^{kt}$, which grows without bound. For example, a colony of $500$ bacteria that doubles every $2$ hours has $k = \dfrac{\ln 2}{2}$ and $P(t) = 500 \cdot 2^{\frac{t}{2}}$.

In the **logistic model**, the environment can support at most $M$ individuals, and growth slows as $P$ approaches $M$:
$$
P'(t) = k\,P(t) \left( 1 - \frac{P(t)}{M} \right) .
$$
This equation is separable. Decomposing $\dfrac{M}{P\,(M - P)} = \dfrac{1}{P} + \dfrac{1}{M - P}$ as in the integration of rational functions gives the solution with $P(0) = P_0$, $0 < P_0 < M$:
$$
P(t) = \frac{M}{1 + \dfrac{M - P_0}{P_0}\,e^{-kt}} .
$$
As $t \to +\infty$, the exponential approaches $0$, so $P(t)$ approaches $M$. The constant solutions $P = 0$ and $P = M$ correspond to an absent population and to a population that has already reached its maximum size.

::grafico{f="10/(1+9*exp(-x/2))" punti="0,1,pieno" asintoti="y=10" xmin=0 xmax=20 ymin=-2 ymax=12 nomi="t,P" legenda="P = \dfrac{10}{1 + 9e^{-\frac{t}{2}}}" titolo="Logistic solution with $M = 10$, $P_0 = 1$, and $k = \dfrac{1}{2}$, approaching the maximum value $M = 10$"}

:::

:::osservazione{#legge-raffreddamento titolo="Newton's law of cooling"}
An object at temperature $T(t)$ in an environment at constant temperature $T_a$ cools or warms at a rate proportional to the temperature difference:
$$
T'(t) = -k\,\big( T(t) - T_a \big) ,
\qquad
k > 0 .
$$
The function $u(t) = T(t) - T_a$ has derivative $u' = T'$, so it satisfies $u' = -k\,u$, and $u(t) = u(0)\,e^{-kt}$. Therefore
$$
T(t) = T_a + \big( T(0) - T_a \big)\,e^{-kt} ,
$$
and the temperature approaches that of the environment. For example, a cup at $90\,^{\circ}\mathrm{C}$ in a room at $20\,^{\circ}\mathrm{C}$ has $T(t) = 20 + 70\,e^{-kt}$.
:::

## RC circuits and simple harmonic motion

:::definizione{#circuito-rc titolo="Charging a capacitor in an RC circuit"}
An initially uncharged capacitor of capacitance $C$ is connected to a source of electromotive force $E$ through a resistor of resistance $R$. Let $q(t)$ be the charge on the plates. The current is $i(t) = q'(t)$, as shown in the chapter on derivatives. By Kirchhoff's loop rule, the electromotive force equals the sum of the potential differences across the resistor and the capacitor, so
$$
R\,q'(t) + \frac{q(t)}{C} = E .
$$
This is a linear equation with constant coefficients. Dividing by $R$ gives $q' + \dfrac{1}{RC}\,q = \dfrac{E}{R}$, and with the condition $q(0) = 0$ we find
$$
q(t) = CE \left( 1 - e^{-\frac{t}{RC}} \right) ,
\qquad
i(t) = \frac{E}{R}\,e^{-\frac{t}{RC}} .
$$
The product $\tau = RC$ is called the **time constant** of the circuit. For $R = 1000\,\Omega$, $C = 2\,\mathrm{mF}$, and $E = 6\,\mathrm{V}$, we have $\tau = 2\,\mathrm{s}$ and $CE = 12\,\mathrm{mC}$, so $q(t) = 12 \left( 1 - e^{-\frac{t}{2}} \right)$ millicoulombs. The charge approaches its final value $12\,\mathrm{mC}$, and after a time $\tau$ it has reached the fraction $1 - e^{-1} \approx 63\%$ of that value.

::grafico{f="12*(1-exp(-x/2))" asintoti="y=12" punti="2,7.59,pieno" segmenti="2,0,2,7.59" xmin=0 xmax=10 ymin=-2 ymax=14 nomi="t,q" legenda="q = 12\left(1 - e^{-\frac{t}{2}}\right)" titolo="Capacitor charge with $\tau = RC = 2\,\mathrm{s}$. At time $t = \tau$ the charge is about $63\%$ of the final value $12\,\mathrm{mC}$"}

:::

:::osservazione{#attrito-viscoso titolo="Capacitor discharge and falling with viscous drag"}
If the capacitor has initial charge $Q_0$ and discharges through the resistor with no source connected, the equation becomes $R\,q' + \dfrac{q}{C} = 0$ and its solution is $q(t) = Q_0\,e^{-\frac{t}{RC}}$, which obeys the same law as radioactive decay.

An object of mass $m$ falling through a fluid is subject to its weight $mg$ and a drag force $-\gamma\,v$ proportional to its velocity. Newton's second law gives $m\,v' = mg - \gamma\,v$, a linear equation with constant coefficients in $v$. By the observation on constant-coefficient equations, the velocity approaches the **terminal velocity** $v_L = \dfrac{mg}{\gamma}$, and with $v(0) = 0$ we have $v(t) = v_L \left( 1 - e^{-\frac{\gamma}{m} t} \right)$.
:::

:::definizione{#moto-armonico titolo="Simple harmonic motion"}
An object of mass $m$ attached to a spring with spring constant $k$ moves along the $x$-axis without friction. Its position $x$ is measured from the equilibrium position $x = 0$. The spring force is $-k\,x$, and Newton's second law gives $m\,x''(t) = -k\,x(t)$. Setting $\omega = \sqrt{\dfrac{k}{m}}$ gives the equation of **simple harmonic motion**
$$
x''(t) + \omega^2 x(t) = 0 .
$$
The characteristic equation $\lambda^2 + \omega^2 = 0$ has $\Delta = -4\omega^2 < 0$, with $\alpha = 0$ and $\beta = \omega$, so the position as a function of time is
$$
x(t) = c_1 \cos \omega t + c_2 \sin \omega t .
$$
This is a periodic function with period $T = \dfrac{2\pi}{\omega}$. It can also be written in the form $x(t) = A \cos(\omega t + \varphi)$, with **amplitude** $A = \sqrt{c_1^2 + c_2^2}$. The initial position and velocity determine the constants because $x(0) = c_1$ and $x'(0) = \omega\,c_2$.

For example, with $m = 0.5\,\mathrm{kg}$ and $k = 8\,\mathrm{N/m}$ we have $\omega = 4\,\mathrm{rad/s}$ and $T = \dfrac{\pi}{2}\,\mathrm{s}$. If $x(0) = 2\,\mathrm{cm}$ and $x'(0) = 8\,\mathrm{cm/s}$, then $c_1 = 2$ and $c_2 = \dfrac{8}{4} = 2$, that is, $x(t) = 2 \cos 4t + 2 \sin 4t$, with amplitude $A = \sqrt{8} = 2\sqrt{2}\,\mathrm{cm}$.

::grafico{f="2*cos(4*x)+2*sin(4*x)" punti="0,2,pieno" segmenti="0,2.83,4,2.83;0,-2.83,4,-2.83" xmin=0 xmax=4 ymin=-4 ymax=4 nomi="t,x" legenda="x = 2\cos 4t + 2\sin 4t" titolo="Simple harmonic motion with $\omega = 4\,\mathrm{rad/s}$, period $T = \dfrac{\pi}{2}\,\mathrm{s}$, and amplitude $2\sqrt{2}\,\mathrm{cm}$"}

:::

:::osservazione{#oscillatore-smorzato titolo="Damped and forced oscillations"}
If a viscous drag force $-\gamma\,x'$ also acts on the object, the equation becomes $m\,x'' + \gamma\,x' + k\,x = 0$. When the drag is small, the discriminant $\gamma^2 - 4mk$ is negative and the solution has the form $e^{\alpha t} \left( c_1 \cos \beta t + c_2 \sin \beta t \right)$ with $\alpha = -\dfrac{\gamma}{2m} < 0$. The object oscillates with an amplitude that decreases over time, as in the solution of $y'' + 2y' + 5y = 0$ in the negative-discriminant case. If instead there is no friction and an external periodic force $F \cos \omega t$ acts on the object at the same angular frequency $\omega$ as the spring, the nonhomogeneous equation has solutions with increasing amplitude, as in the example of resonance.
:::
