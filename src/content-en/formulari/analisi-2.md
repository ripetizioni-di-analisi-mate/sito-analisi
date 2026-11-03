---
titolo: "Multivariable Calculus formula sheet"
sommario: "The formulas of Multivariable Calculus (Mathematical Analysis 2) with their hypotheses: limits and derivatives in several variables, the implicit function theorem, Lagrange multipliers, line, double, triple and surface integrals, Green, Gauss and Stokes, power series and Fourier series."
descrizione: "Multivariable Calculus formula sheet (free PDF): partial derivatives, Hessian, Lagrange multipliers, double and triple integrals, Green, Gauss, Stokes, Fourier."
---

## Limits and continuity in two variables

The proofs and the examples are in the chapter [Functions of several variables](/en/analisi-2/funzioni-di-piu-variabili/teoria).

:::formula{#norma-e-distanza titolo="Norm, distance and neighborhood"}
$$
\lVert (x, y) \rVert = \sqrt{x^2 + y^2},
\qquad
d(P, Q) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}
$$
$$
B(P_0, r) = \{ P : \lVert P - P_0 \rVert < r \}
$$
The formulas hold for $P = (x_1, y_1)$, $Q = (x_2, y_2)$ and $r > 0$. In $\mathbb{R}^n$ the norm is the square root of the sum of the squares of the $n$ components.
:::

:::formula{#condizioni-dominio titolo="Conditions for the natural domain"}
| Expression | Condition |
| --- | --- |
| $\dfrac{A}{B}$ | $B \neq 0$ |
| $\sqrt[2k]{A}$ | $A \geq 0$ |
| $\ln A$ | $A > 0$ |
| $\arcsin A$, $\arccos A$ | $-1 \leq A \leq 1$ |

The conditions present in the expression of $f(x, y)$ must be satisfied together, therefore they are collected in a system.
:::

:::formula{#teorema-delle-restrizioni titolo="Restriction theorem"}
$$
\lim_{(x, y) \to P_0} f(x, y) = L
\implies
\lim_{t \to t_0} f(\gamma(t)) = L
$$
The implication holds for every curve $\gamma$ in the domain with $\gamma(t) \to P_0$ and $\gamma(t) \neq P_0$ as $t \to t_0$. Therefore, if two restrictions have different limits, the limit of $f$ does not exist. At the origin the most used restrictions are $f(x, mx)$, $f(0, y)$ and $f(x, x^2)$.
:::

:::formula{#confronto-due-variabili titolo="Squeeze theorem"}
$$
|f(x, y) - L| \leq g(x, y),
\qquad
\lim_{(x, y) \to P_0} g(x, y) = 0
\implies
\lim_{(x, y) \to P_0} f(x, y) = L
$$
The inequality must hold in a neighborhood of $P_0$, except at most $P_0$ itself. The theorem is used to prove that a limit exists.
:::

:::formula{#maggiorazioni-utili titolo="Useful bounds"}
$$
|x| \leq \sqrt{x^2 + y^2},
\qquad
x^2 \leq x^2 + y^2,
\qquad
|xy| \leq \frac{x^2 + y^2}{2}
$$
$$
0 \leq \frac{x^2}{x^2 + y^2} \leq 1,
\qquad
|\sin t| \leq |t|,
\qquad
|\sin t| \leq 1
$$
They hold for every $(x, y)$ and every real $t$, the quotient for $(x, y) \neq (0, 0)$, and they also hold with $y$ in place of $x$.
:::

:::formula{#limitata-per-infinitesima titolo="Bounded times infinitesimal"}
$$
|f(x, y)| \leq C,
\qquad
\lim_{(x, y) \to P_0} g(x, y) = 0
\implies
\lim_{(x, y) \to P_0} f(x, y)\, g(x, y) = 0
$$
The bound $|f| \leq C$ must hold in a neighborhood of $P_0$. The sine and cosine of any argument are bounded, and so are the quotients $\dfrac{x^2}{x^2 + y^2}$ and $\dfrac{xy}{x^2 + y^2}$.
:::

:::formula{#coordinate-polari-limiti titolo="Limits in polar coordinates"}
$$
x = x_0 + \rho \cos\theta,
\qquad
y = y_0 + \rho \sin\theta,
\qquad
\rho > 0, \ \theta \in [0, 2\pi)
$$
$$
\begin{cases}
|f(x_0 + \rho \cos\theta,\, y_0 + \rho \sin\theta) - L| \leq g(\rho) \ \text{ for every } \theta \\[4pt]
g(\rho) \to 0 \ \text{ as } \rho \to 0^+
\end{cases}
\implies
\lim_{(x, y) \to P_0} f(x, y) = L
$$
The function $g(\rho)$ must be **independent of** $\theta$. With $P_0 = (0, 0)$ one has $x^2 + y^2 = \rho^2$.
:::

:::formula{#limiti-notevoli-due-variabili titolo="Standard limits with an infinitesimal argument"}
$$
\begin{aligned}
\lim_{(x, y) \to P_0} \frac{\sin g(x, y)}{g(x, y)} &= 1,
\qquad
\lim_{(x, y) \to P_0} \frac{1 - \cos g(x, y)}{g(x, y)^2} = \frac{1}{2} \\[6pt]
\lim_{(x, y) \to P_0} \frac{\ln\bigl(1 + g(x, y)\bigr)}{g(x, y)} &= 1,
\qquad
\lim_{(x, y) \to P_0} \frac{e^{g(x, y)} - 1}{g(x, y)} = 1
\end{aligned}
$$
They hold if $g(x, y) \to 0$ as $(x, y) \to P_0$ and $g(x, y) \neq 0$ in a neighborhood of $P_0$ with $P_0$ removed. At the origin the typical argument is $g = x^2 + y^2$.
:::

:::formula{#continuita-e-prolungamento titolo="Continuity and continuous extension"}
$$
f \text{ continuous at } P_0 \iff \lim_{(x, y) \to P_0} f(x, y) = f(P_0)
$$
The definition holds for $P_0$ in the domain and an accumulation point of the domain. Polynomials and elementary functions are continuous on their domain, and so are sums, products, quotients with nonzero denominator and compositions of continuous functions. If $P_0$ does not belong to the domain and the limit exists, is finite and equals $L$, the function is extended by continuity by setting $\tilde{f}(P_0) = L$.
:::

:::attenzione
The restrictions along straight lines can all have the same limit even when the limit does not exist. For $f(x, y) = \dfrac{x^2 y}{x^4 + y^2}$ at the origin one has $f(x, mx) = \dfrac{mx}{x^2 + m^2} \to 0$ for every $m$ and $f(0, y) = 0$, while $f(x, x^2) = \dfrac{1}{2}$ for every $x \neq 0$. Therefore the limit does not exist.
:::

## Partial derivatives, differentiability and tangent plane

The complete statements and the proofs are in the chapter [Differential calculus in several variables](/en/analisi-2/calcolo-differenziale/teoria).

:::formula{#derivate-parziali titolo="Partial derivatives"}
$$
\begin{aligned}
f_x(x_0, y_0) &= \lim_{t \to 0} \frac{f(x_0 + t,\, y_0) - f(x_0, y_0)}{t} \\[6pt]
f_y(x_0, y_0) &= \lim_{t \to 0} \frac{f(x_0,\, y_0 + t) - f(x_0, y_0)}{t}
\end{aligned}
$$
The derivatives exist if the limits exist and are finite, with $(x_0, y_0)$ interior to the domain. In the computation of $f_x$ the variable $y$ is treated as a constant. At the junction points of a piecewise-defined function the definition is used.
:::

:::formula{#gradiente titolo="Gradient"}
$$
\nabla f(x_0, y_0) = \bigl( f_x(x_0, y_0),\; f_y(x_0, y_0) \bigr),
\qquad
\nabla f = (f_x,\, f_y,\, f_z) \ \text{ in } \mathbb{R}^3
$$
The gradient is defined at the points where $f$ has partial derivatives.
:::

:::formula{#differenziabilita titolo="Differentiability"}
$$
\lim_{(h, k) \to (0, 0)} \frac{f(x_0 + h,\, y_0 + k) - f(x_0, y_0) - f_x(x_0, y_0)\, h - f_y(x_0, y_0)\, k}{\sqrt{h^2 + k^2}} = 0
$$
$$
f(x_0 + h,\, y_0 + k) = f(x_0, y_0) + f_x\, h + f_y\, k + o\bigl(\sqrt{h^2 + k^2}\bigr)
$$
The two formulations are equivalent and require that $f$ have partial derivatives at $(x_0, y_0)$. The differential is the linear map $(h, k) \mapsto f_x(x_0, y_0)\, h + f_y(x_0, y_0)\, k$.
:::

:::formula{#differenziale-totale titolo="Total differential theorem"}
$$
f_x,\ f_y \ \text{continuous at } (x_0, y_0)
\implies
f \ \text{differentiable at } (x_0, y_0)
$$
The partial derivatives must exist in a neighborhood of the point. In particular a function of class $C^1(A)$ is differentiable at every point of the open set $A$.
:::

:::formula{#schema-implicazioni titolo="Scheme of implications"}
$$
C^1 \implies \text{differentiable} \implies \text{continuous},
\qquad
\text{differentiable} \implies \text{has partial derivatives}
$$
None of the implications can be reversed. A function discontinuous at a point is therefore not differentiable at that point.
:::

:::formula{#piano-tangente-grafico titolo="Tangent plane to the graph"}
$$
z = f(x_0, y_0) + f_x(x_0, y_0)\,(x - x_0) + f_y(x_0, y_0)\,(y - y_0)
$$
The equation represents the tangent plane to the graph at the point $\bigl(x_0, y_0, f(x_0, y_0)\bigr)$ if $f$ is differentiable at $(x_0, y_0)$. A normal vector to the plane is $\bigl(f_x(x_0, y_0),\, f_y(x_0, y_0),\, -1\bigr)$.
:::

## Directional derivative, chain rule and Taylor's formula

The formulas are proved in the chapter [Differential calculus in several variables](/en/analisi-2/calcolo-differenziale/teoria).

:::formula{#derivata-direzionale titolo="Directional derivative"}
$$
D_{\mathbf{v}} f(x_0, y_0) = \lim_{t \to 0} \frac{f(x_0 + t v_1,\, y_0 + t v_2) - f(x_0, y_0)}{t}
$$
The vector $\mathbf{v} = (v_1, v_2)$ is a unit vector, that is, $v_1^2 + v_2^2 = 1$. If the direction is assigned by a vector $\mathbf{w}$ of arbitrary length, one uses $\mathbf{v} = \dfrac{\mathbf{w}}{|\mathbf{w}|}$.
:::

:::formula{#formula-del-gradiente titolo="Gradient formula"}
$$
D_{\mathbf{v}} f(x_0, y_0) = \nabla f(x_0, y_0) \cdot \mathbf{v} = f_x(x_0, y_0)\, v_1 + f_y(x_0, y_0)\, v_2
$$
The formula holds if $f$ is **differentiable** at $(x_0, y_0)$. At the other points the directional derivative is computed with the definition.
:::

:::formula{#direzione-massima-crescita titolo="Direction of steepest ascent"}
$$
\max_{|\mathbf{v}| = 1} D_{\mathbf{v}} f(x_0, y_0) = |\nabla f(x_0, y_0)|,
\qquad
\mathbf{v} = \frac{\nabla f(x_0, y_0)}{|\nabla f(x_0, y_0)|}
$$
It holds for $f$ differentiable with $\nabla f(x_0, y_0) \neq (0, 0)$. The minimum value $-|\nabla f(x_0, y_0)|$ is attained along the opposite unit vector; along the directions orthogonal to the gradient the directional derivative is zero, hence the gradient is orthogonal to the level curve through the point.
:::

:::formula{#regola-della-catena titolo="Chain rule with one parameter"}
$$
\frac{d}{dt} f\bigl(x(t), y(t)\bigr) = f_x\bigl(x(t), y(t)\bigr)\, x'(t) + f_y\bigl(x(t), y(t)\bigr)\, y'(t)
$$
It holds if $x(t)$ and $y(t)$ are differentiable at $t$ and $f$ is differentiable at the point $\bigl(x(t), y(t)\bigr)$. In vector form the derivative is $\nabla f\bigl(x(t), y(t)\bigr) \cdot \bigl(x'(t), y'(t)\bigr)$.
:::

:::formula{#regola-della-catena-due-parametri titolo="Chain rule with two parameters"}
$$
\frac{\partial F}{\partial s} = f_x\, \frac{\partial x}{\partial s} + f_y\, \frac{\partial y}{\partial s},
\qquad
\frac{\partial F}{\partial t} = f_x\, \frac{\partial x}{\partial t} + f_y\, \frac{\partial y}{\partial t}
$$
They hold for $F(s, t) = f\bigl(x(s, t), y(s, t)\bigr)$, with $f$ differentiable and $x$, $y$ having partial derivatives; the derivatives of $f$ are evaluated at $\bigl(x(s, t), y(s, t)\bigr)$.
:::

:::formula{#teorema-di-schwarz titolo="Second derivatives and Schwarz's theorem"}
$$
f_{xy} = \frac{\partial}{\partial y} f_x,
\qquad
f_{yx} = \frac{\partial}{\partial x} f_y,
\qquad
f_{xy}(x_0, y_0) = f_{yx}(x_0, y_0)
$$
The equality of the mixed derivatives holds if $f_{xy}$ and $f_{yx}$ exist in a neighborhood of $(x_0, y_0)$ and are continuous at the point, in particular for every $f$ of class $C^2$.
:::

:::formula{#matrice-hessiana titolo="Hessian matrix"}
$$
H_f(x_0, y_0) =
\begin{pmatrix}
f_{xx}(x_0, y_0) & f_{xy}(x_0, y_0) \\[4pt]
f_{yx}(x_0, y_0) & f_{yy}(x_0, y_0)
\end{pmatrix},
\qquad
\det H_f = f_{xx} f_{yy} - f_{xy}^2
$$
For $f$ of class $C^2$ the matrix is symmetric, by Schwarz's theorem, and the formula for the determinant uses $f_{xy} = f_{yx}$.
:::

:::formula{#formula-di-taylor-secondo-ordine titolo="Second-order Taylor formula"}
$$
\begin{aligned}
f(x_0 + h,\, y_0 + k) ={}& f(x_0, y_0) + f_x(x_0, y_0)\, h + f_y(x_0, y_0)\, k \\[6pt]
&+ \frac{1}{2} \Bigl( f_{xx}(x_0, y_0)\, h^2 + 2 f_{xy}(x_0, y_0)\, h k + f_{yy}(x_0, y_0)\, k^2 \Bigr) \\[6pt]
&+ o\bigl(h^2 + k^2\bigr)
\end{aligned}
$$
It holds for $f$ of class $C^2$ in a neighborhood of $(x_0, y_0)$ and for $(h, k) \to (0, 0)$, with $h = x - x_0$ and $k = y - y_0$. The second-degree term is $\dfrac{1}{2}\, (h, k)\, H_f(x_0, y_0)\, (h, k)^{T}$.
:::

## Implicit functions and the implicit function theorem

The proofs and the examples are in the chapter [Implicit functions](/en/analisi-2/funzioni-implicite/teoria).

:::formula{#teorema-di-dini titolo="Implicit function theorem in two variables"}
$$
\begin{cases}
F(x_0, y_0) = 0 \\[4pt]
F_y(x_0, y_0) \neq 0
\end{cases}
\implies
\varphi'(x) = -\,\frac{F_x(x, \varphi(x))}{F_y(x, \varphi(x))}
$$
It holds for $F$ of class $C^1$ on an open set containing $(x_0, y_0)$. Under the hypotheses there exist a neighborhood $I$ of $x_0$, a neighborhood $J$ of $y_0$ and a unique function $\varphi : I \to J$ of class $C^1$ with $\varphi(x_0) = y_0$ and $F(x, \varphi(x)) = 0$ for every $x \in I$; in particular $\varphi'(x_0) = -\dfrac{F_x(x_0, y_0)}{F_y(x_0, y_0)}$.
:::

:::formula{#dini-scambio-variabili titolo="Implicit function of the variable y"}
$$
\begin{cases}
F(x_0, y_0) = 0 \\[4pt]
F_x(x_0, y_0) \neq 0
\end{cases}
\implies
\psi'(y) = -\,\frac{F_y(\psi(y), y)}{F_x(\psi(y), y)}
$$
In this case near the point the curve $F = 0$ is the graph of $x = \psi(y)$. At the points where $F_x$ and $F_y$ are both zero the theorem does not apply in either form, and the points are called singular.
:::

:::formula{#derivata-seconda-implicita titolo="Second derivative of the implicit function"}
$$
\varphi''(x) = -\,\frac{F_{xx} F_y^2 - 2 F_{xy} F_x F_y + F_{yy} F_x^2}{F_y^3}
$$
It holds for $F$ of class $C^2$ under the hypotheses of the implicit function theorem, with all the partial derivatives evaluated at $(x, \varphi(x))$. The same result is obtained by differentiating twice the identity $F(x, \varphi(x)) = 0$.
:::

:::formula{#punti-stazionari-implicita titolo="Stationary points of the implicit function"}
$$
\varphi'(x_0) = 0 \iff F_x(x_0, y_0) = 0,
\qquad
\varphi''(x_0) = -\,\frac{F_{xx}(x_0, y_0)}{F_y(x_0, y_0)}
$$
They hold for $F$ of class $C^2$, $F(x_0, y_0) = 0$ and $F_y(x_0, y_0) \neq 0$; the second formula holds at the points with $F_x(x_0, y_0) = 0$. If $\varphi''(x_0) < 0$, the point $x_0$ is a local maximum point for $\varphi$; if $\varphi''(x_0) > 0$, it is a local minimum point.
:::

:::formula{#retta-tangente-implicita titolo="Tangent line to a level curve"}
$$
F_x(x_0, y_0)\,(x - x_0) + F_y(x_0, y_0)\,(y - y_0) = 0
$$
It holds for $F$ of class $C^1$ with $F(x_0, y_0) = 0$ and $\nabla F(x_0, y_0) \neq (0, 0)$. The gradient $\nabla F(x_0, y_0)$ is orthogonal to the curve; if $F_y(x_0, y_0) = 0$, the line is vertical.
:::

:::formula{#teorema-di-dini-tre-variabili titolo="Implicit function theorem in three variables"}
$$
\begin{cases}
F(x_0, y_0, z_0) = 0 \\[4pt]
F_z(x_0, y_0, z_0) \neq 0
\end{cases}
\implies
g_x = -\,\frac{F_x}{F_z},
\qquad
g_y = -\,\frac{F_y}{F_z}
$$
It holds for $F$ of class $C^1$. Near $(x_0, y_0, z_0)$ the surface $F = 0$ is the graph of a function $z = g(x, y)$ of class $C^1$ with $g(x_0, y_0) = z_0$, and the derivatives of $F$ are evaluated at $(x, y, g(x, y))$.
:::

:::formula{#piano-tangente-superficie-livello titolo="Tangent plane to a level surface"}
$$
F_x(P_0)\,(x - x_0) + F_y(P_0)\,(y - y_0) + F_z(P_0)\,(z - z_0) = 0
$$
It holds for $F$ of class $C^1$ with $F(P_0) = 0$ and $\nabla F(P_0) \neq (0, 0, 0)$, where $P_0 = (x_0, y_0, z_0)$. The gradient $\nabla F(P_0)$ is the normal vector to the surface.
:::

:::formula{#dini-per-sistemi titolo="Implicit function theorem for systems"}
$$
\frac{\partial(F, G)}{\partial(y, z)}(P_0)
= \det \begin{pmatrix} F_y & F_z \\ G_y & G_z \end{pmatrix}(P_0) \neq 0
$$
$$
\begin{cases}
F_x + F_y\, y'(x) + F_z\, z'(x) = 0 \\[4pt]
G_x + G_y\, y'(x) + G_z\, z'(x) = 0
\end{cases}
$$
If $F$ and $G$ are of class $C^1$, $P_0$ solves the system $F = 0$, $G = 0$ and the Jacobian determinant is nonzero, near $P_0$ the system defines $y = y(x)$ and $z = z(x)$ of class $C^1$. The derivatives $y'(x_0)$ and $z'(x_0)$ solve the linear system in the unknowns $y'$ and $z'$, with the derivatives of $F$ and $G$ evaluated at $P_0$.
:::

## Unconstrained and constrained maxima and minima

The methods and the complete examples are in the chapter [Unconstrained and constrained maxima and minima](/en/analisi-2/massimi-e-minimi/teoria).

:::formula{#punti-critici titolo="Critical points and Fermat's theorem"}
$$
\begin{cases}
f_x(x_0, y_0) = 0 \\[4pt]
f_y(x_0, y_0) = 0
\end{cases}
$$
If $(x_0, y_0)$ is a local extremum point interior to the domain and $f$ has partial derivatives there, the system is satisfied. The unconstrained extrema are therefore sought among the critical points and the interior points at which $f$ has no partial derivatives.
:::

:::formula{#criterio-della-hessiana titolo="Classification with the Hessian matrix"}
$$
\begin{aligned}
\det H > 0, \ f_{xx} > 0 &\implies \text{local minimum} \\[4pt]
\det H > 0, \ f_{xx} < 0 &\implies \text{local maximum} \\[4pt]
\det H < 0 &\implies \text{saddle point}
\end{aligned}
$$
It holds for $f$ of class $C^2$ at a critical point, with $H = H_f(x_0, y_0)$ and the derivatives evaluated at the point. If $\det H = 0$, the test is inconclusive.
:::

:::formula{#caso-degenere titolo="Degenerate Hessian: study of the sign"}
$$
\begin{aligned}
f(x, y) - f(x_0, y_0) \geq 0 \ \text{ near } (x_0, y_0) &\implies \text{local minimum} \\[4pt]
f(x, y) - f(x_0, y_0) \leq 0 \ \text{ near } (x_0, y_0) &\implies \text{local maximum}
\end{aligned}
$$
The direct study is used when $\det H = 0$. If in *every* neighborhood the difference takes both signs, the point is a saddle point; to prove it, two curves through the point along which the difference has opposite signs suffice.
:::

:::formula{#weierstrass-metodo-compatto titolo="Weierstrass's theorem and absolute extrema"}
$$
K \ \text{compact}, \ f \ \text{continuous on } K
\implies
f \ \text{attains an absolute maximum and an absolute minimum on } K
$$
A subset of $\mathbb{R}^n$ is compact if it is closed and bounded. The candidates are the interior critical points, the interior points at which $f$ has no partial derivatives and the extremum points of the restriction to the boundary, vertices included; the comparison of the values of $f$ at the candidates gives the maximum and the minimum.
:::

:::formula{#studio-della-frontiera titolo="Restriction to the boundary"}
$$
g(t) = f(x_0 + r\cos t,\; y_0 + r\sin t),
\qquad
t \in [0, 2\pi]
$$
It is the restriction of $f$ to the circle with center $(x_0, y_0)$ and radius $r$. On the segment $y = c$ with $x \in [a, b]$ the restriction is $g(x) = f(x, c)$, to be studied on $[a, b]$ with the endpoints of the interval among the candidates.
:::

:::formula{#moltiplicatori-di-lagrange titolo="Lagrange multipliers with one constraint"}
$$
\begin{cases}
f_x(x, y) = \lambda\, g_x(x, y) \\[4pt]
f_y(x, y) = \lambda\, g_y(x, y) \\[4pt]
g(x, y) = 0
\end{cases}
$$
It holds for $f$ and $g$ of class $C^1$. If $(x_0, y_0)$ is a constrained extremum point with $\nabla g(x_0, y_0) \neq (0, 0)$, there exists $\lambda$ such that $(x_0, y_0, \lambda)$ solves the system. If the constraint is compact, the maximum and the minimum are obtained by comparing the values of $f$ at the solutions and at the points of the constraint with $\nabla g = (0, 0)$.
:::

:::formula{#moltiplicatori-due-vincoli titolo="Lagrange multipliers with two constraints"}
$$
\begin{cases}
\nabla f(x, y, z) = \lambda\, \nabla g(x, y, z) + \mu\, \nabla h(x, y, z) \\[4pt]
g(x, y, z) = 0 \\[4pt]
h(x, y, z) = 0
\end{cases}
$$
It holds for $f$, $g$, $h$ of class $C^1$ at the points where $\nabla g$ and $\nabla h$ are linearly independent. The system has five equations in the unknowns $x$, $y$, $z$, $\lambda$, $\mu$.
:::

:::formula{#quadrato-della-distanza titolo="Distance from a point"}
$$
d^2 = (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2
$$
The square root is increasing, therefore the distance and its square have the same maximum and minimum points. In minimum distance problems one therefore optimizes $d^2$, which does not contain the root.
:::

:::attenzione
The points of the constraint where $\nabla g = (0, 0)$ do not appear among the solutions of the Lagrange system. With the constraint $g(x, y) = y^3 - x^2 = 0$ the function $f(x, y) = y$ has a constrained minimum at the origin, because on the constraint $y = x^{\frac{2}{3}} \geq 0$. At the origin the system requires $(0, 1) = \lambda\,(0, 0)$, which has no solution; the point must be added to the candidates.
:::

## Curves, length and line integrals

The definitions and the proofs are in the chapter [Curves and line integrals](/en/analisi-2/curve-e-integrali-di-linea/teoria).

:::formula{#curva-regolare titolo="Regular curve and unit tangent vector"}
$$
\gamma'(t) = \bigl(x'(t),\, y'(t),\, z'(t)\bigr) \neq \mathbf{0},
\qquad
T(t) = \frac{\gamma'(t)}{\lVert \gamma'(t) \rVert}
$$
The curve $\gamma : [a, b] \to \mathbb{R}^n$ is regular if it is of class $C^1$ and $\gamma'(t) \neq \mathbf{0}$ for every $t \in (a, b)$. It is piecewise regular if it is continuous and regular on each interval of a partition of $[a, b]$.
:::

:::formula{#retta-tangente-curva titolo="Tangent line to a parametric curve"}
$$
r(s) = \gamma(t_0) + s\, \gamma'(t_0),
\qquad
s \in \mathbb{R}
$$
It holds at the points with $\gamma'(t_0) \neq \mathbf{0}$. For a plane curve with $x'(t_0) \neq 0$ the slope of the tangent line is $\dfrac{y'(t_0)}{x'(t_0)}$.
:::

:::formula{#formula-della-lunghezza titolo="Length of a curve"}
$$
L(\gamma) = \int_a^b \lVert \gamma'(t) \rVert \, dt = \int_a^b \sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \, dt
$$
It holds for $\gamma$ piecewise regular; for a plane curve the term $z'(t)^2$ is absent. If the curve traverses the same arc several times, the formula adds up the lengths of the passages; for simple curves it gives the length of the trace.
:::

:::formula{#lunghezza-grafico-polare titolo="Length of a graph and of a polar curve"}
$$
L = \int_a^b \sqrt{1 + f'(x)^2} \, dx,
\qquad
L = \int_{\theta_1}^{\theta_2} \sqrt{\rho(\theta)^2 + \rho'(\theta)^2} \, d\theta
$$
The first formula holds for the graph of $f$ of class $C^1$ on $[a, b]$. The second holds for the curve $\rho = \rho(\theta)$, that is, $\gamma(\theta) = \bigl(\rho(\theta)\cos\theta,\, \rho(\theta)\sin\theta\bigr)$, with $\rho$ of class $C^1$.
:::

:::formula{#ascissa-curvilinea titolo="Arc length parameter"}
$$
s(t) = \int_a^t \lVert \gamma'(\tau) \rVert \, d\tau,
\qquad
ds = \lVert \gamma'(t) \rVert \, dt
$$
For $\gamma$ regular the function $s$ is strictly increasing from $[a, b]$ onto $[0, L(\gamma)]$. The quantity $ds$ is the length element of line integrals.
:::

:::formula{#parametrizzazioni-curve titolo="Recurring parametrizations"}
$$
\begin{aligned}
\text{segment from } P \text{ to } Q \qquad & \gamma(t) = P + t\,(Q - P), \quad t \in [0, 1] \\[4pt]
\text{circle} \qquad & \gamma(t) = (x_0 + r\cos t,\; y_0 + r\sin t), \quad t \in [0, 2\pi] \\[4pt]
\text{ellipse} \qquad & \gamma(t) = (a\cos t,\; b\sin t), \quad t \in [0, 2\pi] \\[4pt]
\text{helix} \qquad & \gamma(t) = (\cos t,\; \sin t,\; t), \quad \lVert \gamma'(t) \rVert = \sqrt{2}
\end{aligned}
$$
The circle and the ellipse are traversed counterclockwise as $t$ increases; the circle has $\lVert \gamma'(t) \rVert = r$.
:::

:::formula{#integrale-prima-specie titolo="Line integral of the first kind"}
$$
\int_\gamma f \, ds = \int_a^b f(\gamma(t))\, \lVert \gamma'(t) \rVert \, dt
$$
It holds for $\gamma$ regular and $f$ continuous on the trace; for a piecewise regular curve the contributions of the pieces are added. The value depends neither on the parametrization nor on the direction of traversal, and for $f = 1$ it is the length.
:::

:::formula{#massa-baricentro-filo titolo="Mass and center of mass of a wire"}
$$
m = \int_\gamma \delta \, ds,
\qquad
\bar{x} = \frac{1}{m} \int_\gamma x\, \delta \, ds,
\qquad
\bar{y} = \frac{1}{m} \int_\gamma y\, \delta \, ds
$$
The linear density $\delta \geq 0$ is continuous on the trace; in space $\bar{z}$ is added. For a homogeneous wire $\bar{x} = \dfrac{1}{L} \displaystyle\int_\gamma x \, ds$; if the wire is homogeneous and the trace is symmetric with respect to a line, the center of mass belongs to that line.
:::

:::formula{#integrale-seconda-specie titolo="Line integral of the second kind"}
$$
\int_\gamma F \cdot d\gamma = \int_a^b F(\gamma(t)) \cdot \gamma'(t) \, dt
= \int_a^b \bigl( F_1(\gamma(t))\, x'(t) + F_2(\gamma(t))\, y'(t) \bigr) \, dt
$$
It holds for $\gamma$ regular and $F = (F_1, F_2)$ continuous on the trace; in space $F_3(\gamma(t))\, z'(t)$ is added. With differential forms the integral is written $\displaystyle\int_\gamma F_1 \, dx + F_2 \, dy$; if $F$ is a force field, the integral is the work.
:::

:::formula{#orientazione-integrali-linea titolo="Line integrals and orientation"}
$$
\int_{-\gamma} f \, ds = \int_\gamma f \, ds,
\qquad
\int_{-\gamma} F \cdot d\gamma = -\int_\gamma F \cdot d\gamma
$$
The opposite curve is $(-\gamma)(t) = \gamma(a + b - t)$ with $t \in [a, b]$. The integral of the second kind therefore depends on the direction of traversal indicated in the exercise.
:::

## Conservative fields, potential and Green's theorem

The statements with the proofs are in the chapter [Vector fields and Green's theorem](/en/analisi-2/campi-vettoriali/teoria).

:::formula{#campo-conservativo titolo="Conservative field and potential"}
$$
\nabla U = F,
\qquad
U_x = F_1, \quad U_y = F_2, \quad U_z = F_3
$$
The field $F$ is continuous on a connected open set $A$ and the potential $U$ is of class $C^1$ on $A$; in the plane the third equality is absent. Two potentials of the same field on $A$ differ by a constant.
:::

:::formula{#lavoro-campo-conservativo titolo="Work of a conservative field"}
$$
\int_\gamma F \cdot d\gamma = U(Q) - U(P),
\qquad
\oint_\gamma F \cdot d\gamma = 0 \ \text{ if } \gamma \text{ is closed}
$$
It holds for $F = \nabla U$ on $A$ and $\gamma$ piecewise regular in $A$ from $P$ to $Q$. Therefore, if the circulation of $F$ along a closed curve contained in $A$ is different from zero, $F$ is not conservative on $A$.
:::

:::formula{#campo-irrotazionale titolo="Irrotational field"}
$$
\frac{\partial F_1}{\partial y} = \frac{\partial F_2}{\partial x} \ \text{ in } A,
\qquad
\operatorname{curl} F = (0, 0, 0) \ \text{ in } A \subseteq \mathbb{R}^3
$$
For $F$ of class $C^1$ the condition is *necessary* for $F$ to be conservative. If the cross derivatives are different, the field is therefore not conservative.
:::

:::formula{#criterio-campi-conservativi titolo="Criterion for conservative fields"}
$$
\begin{cases}
F \ \text{of class } C^1 \text{ and irrotational in } A \\[4pt]
A \ \text{simply connected}
\end{cases}
\implies
F \ \text{conservative in } A
$$
Simply connected sets are $\mathbb{R}^2$, $\mathbb{R}^3$, convex sets, half-planes and $\mathbb{R}^3$ with a point removed. Not simply connected are $\mathbb{R}^2 \setminus \{(0, 0)\}$, annuli and $\mathbb{R}^3$ with a line removed.
:::

:::formula{#potenziale-integrazione-successiva titolo="Potential by successive integration"}
$$
U(x, y) = \int F_1(x, y) \, dx + c(y),
\qquad
c'(y) = F_2(x, y) - \frac{\partial}{\partial y} \int F_1(x, y) \, dx
$$
The antiderivative in $x$ is computed with $y$ fixed. If the field is conservative, the right-hand side of the equation for $c'(y)$ depends only on $y$; integrating in $y$ gives $c(y)$ up to a constant.
:::

:::formula{#potenziale-spezzata titolo="Potential as work along a polygonal path"}
$$
U(x, y) = \int_{x_0}^{x} F_1(t, y_0) \, dt + \int_{y_0}^{y} F_2(x, t) \, dt
$$
$$
U(x, y, z) = \int_{x_0}^{x} F_1(t, y_0, z_0) \, dt + \int_{y_0}^{y} F_2(x, t, z_0) \, dt + \int_{z_0}^{z} F_3(x, y, t) \, dt
$$
They hold for $F$ conservative on an open set containing the polygonal path from $(x_0, y_0)$ to $(x, y)$ with sides parallel to the axes, in space from $(x_0, y_0, z_0)$ to $(x, y, z)$. Often the starting point is the origin.
:::

:::formula{#teorema-di-green titolo="Green's theorem"}
$$
\oint_{\partial D} F_1 \, dx + F_2 \, dy
= \iint_D \left( \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right) dx \, dy
$$
It holds for $D$ a regular domain with boundary $\partial D$ piecewise regular and positively oriented, and for $F = (F_1, F_2)$ of class $C^1$ on an open set containing $D$. The boundary is positively oriented if it leaves $D$ on its left: counterclockwise on the outer boundary, clockwise on the boundaries of the holes.
:::

:::formula{#area-con-green titolo="Area with Green's formula"}
$$
\operatorname{area}(D)
= \oint_{\partial D} x \, dy
= -\oint_{\partial D} y \, dx
= \frac{1}{2} \oint_{\partial D} (x \, dy - y \, dx)
$$
They hold for $D$ a regular domain with positively oriented boundary. For the ellipse $r(t) = (a\cos t,\, b\sin t)$, $t \in [0, 2\pi]$, the third formula gives $\pi a b$.
:::

:::attenzione
An irrotational field on an open set that is not simply connected may fail to be conservative. The field $F(x, y) = \left( \dfrac{-y}{x^2 + y^2},\, \dfrac{x}{x^2 + y^2} \right)$ is irrotational on $\mathbb{R}^2 \setminus \{(0, 0)\}$, but its circulation along the unit circle traversed counterclockwise equals $2\pi$. Therefore the field is not conservative on $\mathbb{R}^2 \setminus \{(0, 0)\}$; on the half-plane $x > 0$ a potential is $\arctan \dfrac{y}{x}$.
:::

## Double and triple integrals and reduction formulas

The proofs and the examples are in the chapter [Double and triple integrals](/en/analisi-2/integrali-doppi-e-tripli/teoria).

:::formula{#teorema-di-fubini titolo="Fubini's theorem on rectangles"}
$$
\iint_{[a, b] \times [c, d]} f(x, y)\, dx\, dy
= \int_a^b \left( \int_c^d f(x, y)\, dy \right) dx
= \int_c^d \left( \int_a^b f(x, y)\, dx \right) dy
$$
It holds for $f$ continuous on the rectangle. The two orders of integration give the same value.
:::

:::formula{#variabili-separate titolo="Functions with separated variables"}
$$
\iint_{[a, b] \times [c, d]} g(x)\, h(y)\, dx\, dy
= \left( \int_a^b g(x)\, dx \right) \left( \int_c^d h(y)\, dy \right)
$$
It holds for $g$ continuous on $[a, b]$ and $h$ continuous on $[c, d]$, *only* on rectangular domains. The same holds for three factors on a rectangular box.
:::

:::formula{#riduzione-domini-normali titolo="Reduction formulas on normal domains"}
$$
D = \left\{ (x, y) :
\begin{cases}
a \leq x \leq b \\
g_1(x) \leq y \leq g_2(x)
\end{cases}
\right\}
\implies
\iint_D f\, dx\, dy = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y)\, dy \right) dx
$$
$$
D = \left\{ (x, y) :
\begin{cases}
c \leq y \leq d \\
h_1(y) \leq x \leq h_2(y)
\end{cases}
\right\}
\implies
\iint_D f\, dx\, dy = \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y)\, dx \right) dy
$$
They hold for $f$ continuous on $D$ and continuous functions $g_1 \leq g_2$, $h_1 \leq h_2$. The outer variable ranges over a fixed interval.
:::

:::formula{#scambio-ordine titolo="Changing the order of integration"}
$$
\int_0^1 \left( \int_x^1 f(x, y)\, dy \right) dx
= \int_0^1 \left( \int_0^y f(x, y)\, dx \right) dy
$$
The two formulations describe the same triangle with vertices $(0, 0)$, $(0, 1)$, $(1, 1)$, normal with respect to both axes. In the general case one draws the domain and describes it with respect to the other axis.
:::

:::formula{#proprieta-integrale titolo="Linearity, additivity and monotonicity"}
$$
\iint_{D_1 \cup D_2} f = \iint_{D_1} f + \iint_{D_2} f,
\qquad
\left| \iint_D f \right| \leq \iint_D |f|
$$
Additivity holds if $D_1$ and $D_2$ have no common interior points. The integral is linear, and if $f \leq g$ on $D$ then $\displaystyle\iint_D f \leq \iint_D g$.
:::

:::formula{#simmetrie titolo="Symmetries of the domain"}
$$
f(-x, y) = -f(x, y) \implies \iint_D f \, dx\, dy = 0,
\qquad
f(-x, y) = f(x, y) \implies \iint_D f \, dx\, dy = 2 \iint_{D^+} f \, dx\, dy
$$
They hold for $f$ continuous on $D$ symmetric with respect to the $y$-axis, with $D^+$ the part of $D$ where $x \geq 0$. Exchanging $x$ and $y$ gives the formulas for domains symmetric with respect to the $x$-axis; in triple integrals the analogous formulas hold with respect to the coordinate planes.
:::

:::formula{#integrazione-per-fili titolo="Integration by vertical lines"}
$$
\iiint_E f\, dx\, dy\, dz
= \iint_D \left( \int_{\alpha(x, y)}^{\beta(x, y)} f(x, y, z)\, dz \right) dx\, dy
$$
It holds for $E = \{ (x, y, z) : (x, y) \in D, \ \alpha(x, y) \leq z \leq \beta(x, y) \}$, with $\alpha \leq \beta$ continuous on $D$ and $f$ continuous on $E$. It is used for solids lying between two graphs.
:::

:::formula{#integrazione-per-strati titolo="Integration by slices"}
$$
\iiint_E f\, dx\, dy\, dz = \int_a^b \left( \iint_{E_z} f(x, y, z)\, dx\, dy \right) dz,
\qquad
\iiint_E g(z)\, dx\, dy\, dz = \int_a^b g(z)\, \operatorname{Area}(E_z)\, dz
$$
They hold for $E$ lying between the planes $z = a$ and $z = b$, with $E_z$ the cross section at height $z$ and the integrands continuous. The second formula is used when the function depends only on $z$.
:::

## Changes of variables and the Jacobian

The formulas are explained, with the proofs and the examples, in the chapter [Double and triple integrals](/en/analisi-2/integrali-doppi-e-tripli/teoria).

:::formula{#cambiamento-di-variabili titolo="Change of variables"}
$$
\iint_D f(x, y)\, dx\, dy
= \iint_{D'} f\bigl( x(u, v),\, y(u, v) \bigr)\, |J(u, v)|\, du\, dv,
\qquad
J = \det
\begin{pmatrix}
\dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} \\[10pt]
\dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v}
\end{pmatrix}
$$
It holds for $\Phi(u, v) = \bigl(x(u, v), y(u, v)\bigr)$ of class $C^1$, injective in the interior of $D'$, with $J \neq 0$ in the interior of $D'$, $D = \Phi(D')$ and $f$ continuous on $D$. In triple integrals $J$ is the determinant of the $3 \times 3$ matrix of the partial derivatives.
:::

:::formula{#jacobiano-inverso titolo="Jacobian of the inverse transformation"}
$$
\det \frac{\partial(x, y)}{\partial(u, v)} = \frac{1}{\det \dfrac{\partial(u, v)}{\partial(x, y)}}
$$
It holds when the new variables are assigned as $u = u(x, y)$, $v = v(x, y)$ and the determinant in the denominator is nonzero. For $u = xy$ and $v = \dfrac{y}{x}$ in the first quadrant one obtains $dx\, dy = \dfrac{du\, dv}{2v}$.
:::

:::formula{#trasformazioni-lineari titolo="Linear transformations"}
$$
u = a_1 x + b_1 y,
\quad
v = a_2 x + b_2 y
\implies
dx\, dy = \frac{du\, dv}{|a_1 b_2 - a_2 b_1|}
$$
It holds for $a_1 b_2 - a_2 b_1 \neq 0$. A parallelogram with sides on the lines along which $u$ or $v$ is constant becomes a rectangle in the $uv$-plane.
:::

:::formula{#coordinate-polari titolo="Polar coordinates"}
$$
x = \rho \cos\theta,
\qquad
y = \rho \sin\theta,
\qquad
dx\, dy = \rho \, d\rho\, d\theta
$$
They hold for $\rho \geq 0$ and $\theta \in [0, 2\pi)$, with $x^2 + y^2 = \rho^2$. The disk centered at the origin with radius $R$ becomes $0 \leq \rho \leq R$, $0 \leq \theta \leq 2\pi$; the annulus with radii $R_1 < R_2$ becomes $R_1 \leq \rho \leq R_2$. Centered at $(x_0, y_0)$ they are written $x = x_0 + \rho\cos\theta$, $y = y_0 + \rho\sin\theta$, with the same Jacobian.
:::

:::formula{#coordinate-ellittiche titolo="Elliptic coordinates"}
$$
x = a \rho \cos\theta,
\qquad
y = b \rho \sin\theta,
\qquad
dx\, dy = a b \rho \, d\rho\, d\theta
$$
They hold for $a, b > 0$, $\rho \geq 0$ and $\theta \in [0, 2\pi)$. The ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} \leq 1$ becomes $0 \leq \rho \leq 1$, $0 \leq \theta \leq 2\pi$, and its area is $\pi a b$.
:::

:::formula{#coordinate-cilindriche titolo="Cylindrical coordinates"}
$$
x = \rho \cos\theta,
\qquad
y = \rho \sin\theta,
\qquad
z = z,
\qquad
dx\, dy\, dz = \rho \, d\rho\, d\theta\, dz
$$
They hold for $\rho \geq 0$ and $\theta \in [0, 2\pi)$. They are used for solids with the $z$-axis as axis of symmetry: the cylinder $x^2 + y^2 \leq R^2$, $0 \leq z \leq h$ becomes a rectangular box and the cone $z = \sqrt{x^2 + y^2}$ has equation $z = \rho$.
:::

:::formula{#coordinate-sferiche titolo="Spherical coordinates"}
$$
x = r \sin\varphi \cos\theta,
\quad
y = r \sin\varphi \sin\theta,
\quad
z = r \cos\varphi,
\qquad
dx\, dy\, dz = r^2 \sin\varphi \, dr\, d\varphi\, d\theta
$$
They hold for $r \geq 0$, $\varphi \in [0, \pi]$ the colatitude measured from the positive $z$ half-axis and $\theta \in [0, 2\pi)$, with $x^2 + y^2 + z^2 = r^2$. The ball of radius $R$ becomes $0 \leq r \leq R$, $0 \leq \varphi \leq \pi$, $0 \leq \theta \leq 2\pi$; the half ball with $z \geq 0$ has $0 \leq \varphi \leq \dfrac{\pi}{2}$.
:::

:::attenzione
The area element in polar coordinates contains the factor $\rho$ of the Jacobian. For the disk of radius $R$ one has $\displaystyle\int_0^{2\pi} \int_0^R \rho \, d\rho \, d\theta = \pi R^2$; without the factor $\rho$ one would obtain $2\pi R$, which is the length of the circle.
:::

## Areas, volumes, masses and centers of mass

The definitions and computation examples are in the chapter [Double and triple integrals](/en/analisi-2/integrali-doppi-e-tripli/teoria).

:::formula{#area-e-volume titolo="Area and volume as integrals"}
$$
\operatorname{Area}(D) = \iint_D dx\, dy,
\qquad
\operatorname{Vol}(E) = \iiint_E dx\, dy\, dz,
\qquad
\operatorname{Vol} = \iint_D \bigl( f(x, y) - g(x, y) \bigr)\, dx\, dy
$$
The third formula gives the volume of the solid lying between the graphs of $g$ and $f$ over $D$, with $g \leq f$ continuous. For $g = 0$ and $f \geq 0$ it is the volume under the graph of $f$.
:::

:::formula{#massa-baricentro-lamina titolo="Mass and center of mass of a lamina"}
$$
m = \iint_D \delta \, dx\, dy,
\qquad
\bar{x} = \frac{1}{m} \iint_D x\, \delta \, dx\, dy,
\qquad
\bar{y} = \frac{1}{m} \iint_D y\, \delta \, dx\, dy
$$
The surface density $\delta(x, y) \geq 0$ is continuous on $D$. If the lamina is homogeneous, $\delta$ cancels and $\bar{x} = \dfrac{1}{\operatorname{Area}(D)} \displaystyle\iint_D x\, dx\, dy$; if the lamina is homogeneous and $D$ is symmetric with respect to a line, the center of mass belongs to that line.
:::

:::formula{#massa-baricentro-solido titolo="Mass and center of mass of a solid"}
$$
m = \iiint_E \delta \, dx\, dy\, dz,
\qquad
\bar{z} = \frac{1}{m} \iiint_E z\, \delta \, dx\, dy\, dz
$$
The density $\delta(x, y, z) \geq 0$ is continuous on $E$; the coordinates $\bar{x}$ and $\bar{y}$ are written in the same way with $x$ and $y$ in place of $z$.
:::

:::formula{#volumi-notevoli titolo="Standard volumes"}
| Solid | Volume |
| --- | --- |
| ball of radius $R$ | $\dfrac{4}{3} \pi R^3$ |
| cylinder of radius $R$ and height $h$ | $\pi R^2 h$ |
| cone of radius $R$ and height $h$ | $\dfrac{1}{3} \pi R^2 h$ |
| ellipsoid with semi-axes $a$, $b$, $c$ | $\dfrac{4}{3} \pi a b c$ |
| $x^2 + y^2 \leq z \leq h$ | $\dfrac{1}{2} \pi h^2$ |

The values are obtained with spherical and cylindrical coordinates, with integration by slices and, for the ellipsoid, with the transformation $x = a u$, $y = b v$, $z = c w$, whose Jacobian is $abc$.
:::

## Parametric surfaces and surface integrals

The proofs are in the chapter [Surfaces, flux and the theorems of Gauss and Stokes](/en/analisi-2/superfici-e-flussi/teoria).

:::formula{#vettore-normale titolo="Normal vector and regular surface"}
$$
\mathbf{N}(u, v) = \mathbf{r}_u(u, v) \wedge \mathbf{r}_v(u, v),
\qquad
\mathbf{n} = \frac{\mathbf{N}}{\lVert \mathbf{N} \rVert}
$$
They hold for $\mathbf{r} : D \to \mathbb{R}^3$ of class $C^1$. The surface is regular if $\mathbf{r}$ is injective at the interior points of $D$ and $\mathbf{N} \neq \mathbf{0}$ at the interior points of $D$.
:::

:::formula{#prodotto-vettoriale titolo="Cross product"}
$$
\mathbf{r}_u \wedge \mathbf{r}_v =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[4pt]
x_u & y_u & z_u \\[4pt]
x_v & y_v & z_v
\end{vmatrix}
= \bigl( y_u z_v - z_u y_v,\;\; z_u x_v - x_u z_v,\;\; x_u y_v - y_u x_v \bigr)
$$
The resulting vector is orthogonal to $\mathbf{r}_u$ and to $\mathbf{r}_v$, and its norm is the area of the parallelogram having them as sides.
:::

:::formula{#piano-tangente-superficie titolo="Tangent plane to a parametric surface"}
$$
N_1\, (x - x_0) + N_2\, (y - y_0) + N_3\, (z - z_0) = 0
$$
It holds at the point $P_0 = \mathbf{r}(u_0, v_0) = (x_0, y_0, z_0)$, with $(u_0, v_0)$ interior to $D$ and $\mathbf{N}(u_0, v_0) = (N_1, N_2, N_3) \neq \mathbf{0}$.
:::

:::formula{#superficie-cartesiana titolo="Cartesian surface"}
$$
\mathbf{r}(x, y) = \bigl( x,\, y,\, f(x, y) \bigr),
\qquad
\mathbf{N} = \bigl( -f_x,\, -f_y,\, 1 \bigr),
\qquad
\lVert \mathbf{N} \rVert = \sqrt{1 + f_x^2 + f_y^2}
$$
It holds for $f$ of class $C^1$ on $D$. The surface is always regular and $\mathbf{N}$ points upward.
:::

:::formula{#sfera-e-cilindro titolo="Parametrizations of the sphere and the cylinder"}
$$
\begin{aligned}
\mathbf{r}(\varphi, \theta) &= \bigl( R \sin\varphi \cos\theta,\; R \sin\varphi \sin\theta,\; R \cos\varphi \bigr),
\qquad \lVert \mathbf{N} \rVert = R^2 \sin\varphi \\[6pt]
\mathbf{r}(\theta, t) &= \bigl( R \cos\theta,\; R \sin\theta,\; t \bigr),
\qquad \mathbf{N} = (R\cos\theta,\; R\sin\theta,\; 0)
\end{aligned}
$$
For the sphere of radius $R$ one has $(\varphi, \theta) \in [0, \pi] \times [0, 2\pi]$ and $\mathbf{N} = \mathbf{r}_\varphi \wedge \mathbf{r}_\theta = R \sin\varphi \; \mathbf{r}(\varphi, \theta)$, which points outward. For the cylinder $x^2 + y^2 = R^2$ one has $(\theta, t) \in [0, 2\pi] \times [0, h]$ and $\mathbf{N} = \mathbf{r}_\theta \wedge \mathbf{r}_t$ points outward.
:::

:::formula{#area-di-una-superficie titolo="Area of a surface"}
$$
\operatorname{Area}(\Sigma) = \iint_D \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv,
\qquad
d\sigma = \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv
$$
It holds for $\Sigma = \mathbf{r}(D)$ regular; the value does not depend on the parametrization. The quantity $d\sigma$ is the area element.
:::

:::formula{#area-superficie-cartesiana titolo="Area of a Cartesian surface"}
$$
\operatorname{Area}(\Sigma) = \iint_D \sqrt{1 + f_x^2 + f_y^2} \; dx \, dy
$$
It holds for the graph of $f$ of class $C^1$ on $D$. For the paraboloid $z = x^2 + y^2$ over the unit disk one obtains $\dfrac{\pi}{6} \bigl( 5\sqrt{5} - 1 \bigr)$.
:::

:::formula{#area-superficie-di-rotazione titolo="Area of a surface of revolution"}
$$
\operatorname{Area}(\Sigma) = 2\pi \int_a^b g(t) \, \sqrt{g'(t)^2 + h'(t)^2} \; dt
$$
$\Sigma$ is obtained by rotating through one full turn about the $z$-axis the regular curve $x = g(t)$, $z = h(t)$, $t \in [a, b]$, of the half-plane $y = 0$, with $g \geq 0$ and $g$, $h$ of class $C^1$.
:::

:::formula{#aree-notevoli titolo="Standard areas"}
| Surface | Area |
| --- | --- |
| sphere of radius $R$ | $4 \pi R^2$ |
| spherical cap of height $h$ | $2 \pi R h$ |
| lateral surface of the cylinder | $2 \pi R h$ |
| lateral surface of the cone | $\pi R \sqrt{R^2 + h^2}$ |

$R$ is the radius of the sphere, of the cylinder and of the base of the cone, $h$ the height of the cap, of the cylinder and of the cone.
:::

:::formula{#integrale-di-superficie titolo="Surface integral"}
$$
\iint_\Sigma f \, d\sigma = \iint_D f\bigl( \mathbf{r}(u, v) \bigr) \, \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv
$$
It holds for $\Sigma = \mathbf{r}(D)$ regular and $f$ continuous on $\Sigma$. For $f = 1$ one obtains the area; if $f$ is a surface density, the integral is the mass of the surface.
:::

## Flux, divergence and curl, theorems of Gauss and Stokes

The statements and the proofs of the theorems are in the chapter [Surfaces, flux and the theorems of Gauss and Stokes](/en/analisi-2/superfici-e-flussi/teoria).

:::formula{#flusso titolo="Flux of a vector field"}
$$
\Phi_\Sigma(\mathbf{F}) = \iint_\Sigma \mathbf{F} \cdot \mathbf{n} \; d\sigma
= \iint_D \mathbf{F}\bigl( \mathbf{r}(u, v) \bigr) \cdot \bigl( \mathbf{r}_u \wedge \mathbf{r}_v \bigr) \, du \, dv
$$
It holds for $\Sigma$ regular, oriented by $\mathbf{n}$, and $\mathbf{F}$ continuous on an open set containing $\Sigma$. The second equality holds if $\mathbf{r}_u \wedge \mathbf{r}_v$ has the direction of $\mathbf{n}$; with the opposite direction the flux changes sign.
:::

:::formula{#flusso-superficie-cartesiana titolo="Flux through a Cartesian surface"}
$$
\Phi_\Sigma(\mathbf{F}) = \iint_D \bigl( -F_1\, f_x - F_2\, f_y + F_3 \bigr) \, dx \, dy
$$
It holds for the graph of $f$ of class $C^1$ on $D$ oriented upward, with the components of $\mathbf{F}$ evaluated at $(x, y, f(x, y))$. With the downward orientation the flux changes sign.
:::

:::formula{#divergenza titolo="Divergence"}
$$
\operatorname{div} \mathbf{F} = \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z}
$$
It is defined for $\mathbf{F}$ of class $C^1$. The field is solenoidal if $\operatorname{div} \mathbf{F} = 0$; for $\mathbf{F} = (x, y, z)$ one has $\operatorname{div} \mathbf{F} = 3$.
:::

:::formula{#rotore titolo="Curl"}
$$
\operatorname{curl} \mathbf{F} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[4pt]
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\[6pt]
F_1 & F_2 & F_3
\end{vmatrix}
=
\left( \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z},\;
\frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x},\;
\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right)
$$
It is defined for $\mathbf{F}$ of class $C^1$. For a plane field $(F_1, F_2, 0)$ with components independent of $z$ only the third component remains.
:::

:::formula{#proprieta-divergenza-rotore titolo="Identities for divergence and curl"}
$$
\operatorname{curl} (\nabla f) = \mathbf{0},
\qquad
\operatorname{div} (\operatorname{curl} \mathbf{F}) = 0
$$
They hold for $f$ and $\mathbf{F}$ of class $C^2$ on an open subset of $\mathbb{R}^3$. Every gradient field is therefore irrotational, and every curl is solenoidal.
:::

:::formula{#teorema-della-divergenza titolo="Divergence theorem (Gauss)"}
$$
\iint_{\partial V} \mathbf{F} \cdot \mathbf{n} \; d\sigma
= \iiint_V \operatorname{div} \mathbf{F} \; dx \, dy \, dz
$$
It holds for $V$ a regular domain in space with boundary oriented by the **outward** unit normal and $\mathbf{F}$ of class $C^1$ on an open set containing $V$. For $\mathbf{F} = (x, y, z)$ the outward flux is $3 \operatorname{Vol}(V)$.
:::

:::formula{#chiusura-superficie titolo="Flux through an open surface"}
$$
\Phi_\Sigma(\mathbf{F}) = \iiint_V \operatorname{div} \mathbf{F} \; dx \, dy \, dz - \Phi_{\Sigma'}(\mathbf{F})
$$
It holds when the auxiliary surface $\Sigma'$ closes $\Sigma$, that is, $\Sigma \cup \Sigma'$ is the boundary of the regular domain $V$, with both surfaces oriented by the outward normal to $V$. Usually $\Sigma'$ is a flat disk.
:::

:::formula{#teorema-di-stokes titolo="Stokes' theorem"}
$$
\oint_{\partial\Sigma} \mathbf{F} \cdot d\mathbf{r}
= \iint_\Sigma \operatorname{curl} \mathbf{F} \cdot \mathbf{n} \; d\sigma
$$
It holds for $\Sigma$ regular and oriented, with boundary $\partial\Sigma$ closed, piecewise regular and coherently oriented, and for $\mathbf{F}$ of class $C^1$ on an open set containing $\Sigma$. The orientation is coherent if an observer standing as $\mathbf{n}$ who walks along the boundary has the surface on his left; for a graph oriented upward the boundary is traversed counterclockwise when seen from above.
:::

## Sequences and series of functions

The proofs and the counterexamples are in the chapter [Sequences and series of functions](/en/analisi-2/successioni-e-serie-di-funzioni/teoria).

:::formula{#convergenza-puntuale titolo="Pointwise convergence"}
$$
\lim_{n \to +\infty} f_n(x) = f(x) \qquad \text{for every } x \in A
$$
The limit is computed for fixed $x$, with the methods for limits of sequences, distinguishing cases when the expression requires it. The function $f$ is the candidate limit for uniform convergence.
:::

:::formula{#criterio-del-sup titolo="Uniform convergence and the sup criterion"}
$$
f_n \to f \ \text{uniformly on } A
\iff
M_n = \sup_{x \in A} |f_n(x) - f(x)| \xrightarrow[n \to +\infty]{} 0
$$
The value $M_n$ is usually found by studying the derivative of $f_n - f$ on $A$. Uniform convergence implies pointwise convergence, and the answer depends on the set $A$.
:::

:::formula{#continuita-limite-uniforme titolo="Continuity of the uniform limit"}
$$
f_n \ \text{continuous on } A, \ f_n \to f \ \text{uniformly on } A
\implies
f \ \text{continuous on } A
$$
Therefore, if the pointwise limit of continuous functions is discontinuous, the convergence is not uniform.
:::

:::formula{#scambio-limite-integrale titolo="Passing to the limit under the integral sign"}
$$
\lim_{n \to +\infty} \int_a^b f_n(x)\,dx = \int_a^b f(x)\,dx,
\qquad
\left| \int_a^b f_n - \int_a^b f \right| \leq (b - a)\, M_n
$$
It holds for $f_n$ continuous on $[a, b]$ with $f_n \to f$ uniformly on $[a, b]$.
:::

:::formula{#derivazione-per-successioni titolo="Differentiation of sequences"}
$$
\begin{cases}
f_n(x_0) \ \text{converges for at least one } x_0 \in [a, b] \\[4pt]
f_n' \to g \ \text{uniformly on } [a, b]
\end{cases}
\implies
\left( \lim_{n \to +\infty} f_n \right)' = \lim_{n \to +\infty} f_n'
$$
It holds for $f_n \in C^1([a, b])$. Under the hypotheses $f_n$ converges uniformly on $[a, b]$ to a function $f$ of class $C^1$ with $f' = g$.
:::

:::formula{#convergenza-uniforme-serie titolo="Series of functions: partial sums and remainder"}
$$
s_N(x) = \sum_{n=1}^{N} f_n(x),
\qquad
\sup_{x \in A} \left| \sum_{n = N+1}^{\infty} f_n(x) \right| \xrightarrow[N \to +\infty]{} 0
$$
The series converges pointwise at $x$ if the numerical series $\sum f_n(x)$ converges. The condition on the remainder is equivalent to uniform convergence on $A$.
:::

:::formula{#criterio-di-weierstrass titolo="Total convergence (Weierstrass M-test)"}
$$
\begin{cases}
|f_n(x)| \leq M_n \ \text{ for every } x \in A \\[4pt]
\displaystyle\sum_{n=1}^{\infty} M_n \ \text{ converges}
\end{cases}
\implies
\sum_{n=1}^{\infty} f_n \ \text{converges totally, hence uniformly, on } A
$$
The sharpest choice is $M_n = \sup_A |f_n|$. The chain total $\implies$ uniform $\implies$ pointwise holds, and total convergence also implies absolute convergence at every point of $A$.
:::

:::formula{#serie-di-confronto titolo="Numerical series for comparison"}
$$
\sum_{n=1}^{\infty} \frac{1}{n^p} \ \text{converges} \iff p > 1,
\qquad
\sum_{n=0}^{\infty} q^n = \frac{1}{1 - q} \ \text{ for } |q| < 1
$$
These are the series used most often for the sequence $M_n$ of total convergence.
:::

:::formula{#resto-di-leibniz titolo="Remainder of an alternating series"}
$$
\left| \sum_{n=1}^{\infty} (-1)^n a_n - \sum_{n=1}^{N} (-1)^n a_n \right| \leq a_{N+1}
$$
It holds for $(a_n)$ decreasing with $a_n \to 0$. If $a_n = a_n(x)$ and $\sup_A a_{N+1}(x) \to 0$, the series converges uniformly on $A$ even when the convergence is not total.
:::

:::formula{#teoremi-termine-a-termine titolo="Continuity, term-by-term integration and differentiation"}
$$
\int_a^b \sum_{n=1}^{\infty} f_n(x)\,dx = \sum_{n=1}^{\infty} \int_a^b f_n(x)\,dx,
\qquad
\left( \sum_{n=1}^{\infty} f_n \right)' = \sum_{n=1}^{\infty} f_n'
$$
If the $f_n$ are continuous and the series converges uniformly on $[a, b]$, the sum is continuous and the first equality holds. The second holds for $f_n \in C^1([a, b])$ if $\sum f_n(x_0)$ converges at at least one point and $\sum f_n'$ converges uniformly on $[a, b]$, usually totally.
:::

:::attenzione
Pointwise convergence does not preserve continuity. The functions $f_n(x) = x^n$ are continuous on $[0, 1]$ and converge pointwise to the function equal to $0$ on $[0, 1)$ and to $1$ at $x = 1$, which is discontinuous. On $[0, 1)$ one has $\sup x^n = 1$ for every $n$, hence the convergence is not uniform; on $[0, a]$ with $0 < a < 1$ one has $M_n = a^n \to 0$ and the convergence is uniform.
:::

## Power series and radius of convergence

The proofs of the theorems on the radius are in the chapter [Power series and Taylor series](/en/analisi-2/serie-di-potenze/teoria).

:::formula{#teorema-del-raggio titolo="Radius and set of convergence"}
$$
\begin{aligned}
|x - x_0| < R &\implies \sum_{n=0}^{\infty} a_n (x - x_0)^n \ \text{converges absolutely} \\[4pt]
|x - x_0| > R &\implies \sum_{n=0}^{\infty} a_n (x - x_0)^n \ \text{does not converge}
\end{aligned}
$$
$$
(x_0 - R,\; x_0 + R) \subseteq E \subseteq [x_0 - R,\; x_0 + R]
$$
The radius $R \in [0, +\infty]$ exists for every power series; the inclusions for the set of convergence $E$ hold for $0 < R < +\infty$. At the points $x_0 \pm R$ the theorem gives no information and the two numerical series are studied separately.
:::

:::formula{#calcolo-raggio-rapporto titolo="Radius with the ratio test"}
$$
\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_n|} = \ell
\implies
R = \frac{1}{\ell}
$$
It holds for $a_n \neq 0$ eventually and $\ell \in [0, +\infty]$, with $R = +\infty$ if $\ell = 0$ and $R = 0$ if $\ell = +\infty$. For $\displaystyle\sum \frac{x^n}{n!}$ one has $\ell = 0$, hence $R = +\infty$.
:::

:::formula{#calcolo-raggio-radice titolo="Radius with the root test"}
$$
\lim_{n \to \infty} \sqrt[n]{|a_n|} = \ell
\implies
R = \frac{1}{\ell}
$$
It holds with the same conventions as the ratio test. It is used when $a_n$ is an $n$-th power: for $a_n = \left( \dfrac{n}{2n + 1} \right)^{n}$ one has $\ell = \dfrac{1}{2}$, hence $R = 2$.
:::

:::formula{#serie-lacunari titolo="Lacunary series"}
$$
\sum_{n=0}^{\infty} a_n x^{kn} = \sum_{n=0}^{\infty} a_n t^n,
\qquad
t = x^k,
\qquad
R = \sqrt[k]{R_t}
$$
$R$ is the radius of the series in $x$, $R_t$ that of the series in $t$ and $k \geq 2$ is an integer. The ratio and root formulas on the coefficients do not apply to the series in $x$, which has infinitely many zero coefficients. For $\displaystyle\sum \frac{x^{2n}}{4^n}$ one has $R_t = 4$, hence $R = 2$.
:::

:::formula{#comportamento-agli-estremi titolo="Behavior at the endpoints"}
$$
\begin{aligned}
\sum_{n=1}^{\infty} x^n: &\quad E = (-1, 1) \\[4pt]
\sum_{n=1}^{\infty} \frac{x^n}{n}: &\quad E = [-1, 1) \\[4pt]
\sum_{n=1}^{\infty} \frac{x^n}{n^2}: &\quad E = [-1, 1]
\end{aligned}
$$
The three series have radius $1$. At $x = x_0 \pm R$ the numerical series is studied with the comparison test, the limit comparison test and the Leibniz test.
:::

:::formula{#proprieta-della-somma titolo="Properties of the sum"}
$$
f(x) = \sum_{n=0}^{\infty} a_n (x - x_0)^n \ \text{ is continuous on } (x_0 - R,\; x_0 + R)
$$
It holds for $R > 0$, because for *every* $0 < r < R$ the series converges totally on $[x_0 - r, x_0 + r]$. If $R < +\infty$ and the series converges at $x_0 + R$, by Abel's theorem $\displaystyle\lim_{x \to (x_0 + R)^-} f(x) = \sum_{n=0}^{\infty} a_n R^n$; the same holds at $x_0 - R$.
:::

:::formula{#derivazione-integrazione-potenze titolo="Term-by-term differentiation and integration"}
$$
f'(x) = \sum_{n=1}^{\infty} n\, a_n (x - x_0)^{n-1},
\qquad
\int_{x_0}^{x} f(t)\, dt = \sum_{n=0}^{\infty} \frac{a_n}{n + 1} (x - x_0)^{n+1}
$$
They hold for every $x \in (x_0 - R,\, x_0 + R)$ with $R > 0$. The two series have the same radius $R$ as the original series, and $f$ is of class $C^\infty$ on the open interval.
:::

## Taylor series expansions

Taylor series and their validity are treated in the chapter [Power series and Taylor series](/en/analisi-2/serie-di-potenze/teoria).

:::formula{#serie-di-taylor titolo="Taylor series and uniqueness of the expansion"}
$$
\sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n,
\qquad
f(x) = \sum_{n=0}^{\infty} a_n (x - x_0)^n \implies a_n = \frac{f^{(n)}(x_0)}{n!}
$$
The series is defined for $f$ of class $C^\infty$ near $x_0$; for $x_0 = 0$ it is called the Maclaurin series. The implication holds if the expansion is valid on an interval $(x_0 - \delta, x_0 + \delta)$ with $\delta > 0$; therefore every expansion obtained from known expansions is the Taylor series of the function.
:::

:::formula{#criterio-di-sviluppabilita titolo="Criterion for expandability"}
$$
|f^{(n)}(x)| \leq M L^n \ \text{ for every } n \text{ and every } x \in I
\implies
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n \ \text{ on } I
$$
It holds for $f$ of class $C^\infty$ on the interval $I$ centered at $x_0$ and constants $M, L > 0$. The expansion holds *if and only if* the remainder $f(x) - T_n(x)$ tends to $0$ as $n \to \infty$.
:::

:::formula{#sviluppi-esponenziale-seno-coseno titolo="Exponential, sine and cosine"}
$$
\begin{aligned}
e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots \\[6pt]
\sin x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots \\[6pt]
\cos x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n}}{(2n)!} = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots
\end{aligned}
$$
The three expansions hold for every $x \in \mathbb{R}$.
:::

:::formula{#sviluppi-serie-geometrica titolo="Geometric series and related expansions"}
$$
\frac{1}{1 - x} = \sum_{n=0}^{\infty} x^n,
\qquad
\frac{1}{1 + x} = \sum_{n=0}^{\infty} (-1)^n x^n,
\qquad
\frac{1}{1 + x^2} = \sum_{n=0}^{\infty} (-1)^n x^{2n}
$$
The three expansions hold for $-1 < x < 1$.
:::

:::formula{#sviluppi-logaritmo-arcotangente titolo="Logarithm and arctangent"}
$$
\begin{aligned}
\ln(1 + x) &= \sum_{n=1}^{\infty} \frac{(-1)^{n+1} \, x^n}{n} && -1 < x \leq 1 \\[6pt]
-\ln(1 - x) &= \sum_{n=1}^{\infty} \frac{x^n}{n} && -1 \leq x < 1 \\[6pt]
\arctan x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n+1}}{2n+1} && -1 \leq x \leq 1 \\[6pt]
\ln \frac{1 + x}{1 - x} &= 2 \sum_{n=0}^{\infty} \frac{x^{2n+1}}{2n+1} && -1 < x < 1
\end{aligned}
$$
The included endpoints follow from Abel's theorem; in particular $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2$ and $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} = \frac{\pi}{4}$.
:::

:::formula{#serie-binomiale titolo="Binomial series"}
$$
(1 + x)^{\alpha} = \sum_{n=0}^{\infty} \binom{\alpha}{n} x^n,
\qquad
\binom{\alpha}{n} = \frac{\alpha (\alpha - 1) \cdots (\alpha - n + 1)}{n!},
\qquad
\binom{\alpha}{0} = 1
$$
$$
\sqrt{1 + x} = 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} - \cdots,
\qquad
\frac{1}{\sqrt{1 + x}} = 1 - \frac{x}{2} + \frac{3x^2}{8} - \frac{5x^3}{16} + \cdots
$$
The expansion holds for $-1 < x < 1$ and $\alpha \in \mathbb{R}$. For $\alpha \in \mathbb{N}$ the sum is finite and coincides with the binomial theorem, valid for every $x$.
:::

:::formula{#sviluppi-per-sostituzione titolo="Expansions by substitution"}
$$
g(t) = \sum_{n=0}^{\infty} a_n t^n \ \text{ for } |t| < R
\implies
g(c\,x^k) = \sum_{n=0}^{\infty} a_n c^n x^{kn} \ \text{ for } |c\, x^k| < R
$$
It holds for $c \neq 0$ and $k \geq 1$ an integer; the region of validity is obtained by imposing on the substituted expression the condition of the original expansion. For example $e^{-x^2} = \displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{n!}$ for every $x \in \mathbb{R}$.
:::

:::formula{#sviluppi-centrati titolo="Expansions centered at a point other than the origin"}
$$
\begin{aligned}
e^x &= \sum_{n=0}^{\infty} \frac{e^{x_0}}{n!} (x - x_0)^n && x \in \mathbb{R} \\[6pt]
\frac{1}{x} &= \sum_{n=0}^{\infty} \frac{(-1)^n}{x_0^{n+1}} (x - x_0)^n && |x - x_0| < x_0 \\[6pt]
\ln x &= \ln x_0 + \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n\, x_0^n} (x - x_0)^n && 0 < x \leq 2 x_0
\end{aligned}
$$
The last two hold for $x_0 > 0$. They are obtained from the expansions at $0$ with the substitution $t = \dfrac{x - x_0}{x_0}$, or with $t = x - x_0$ for the exponential.
:::

:::formula{#somme-serie-numeriche titolo="Sums obtained by differentiation"}
$$
\sum_{n=1}^{\infty} n\, x^{n-1} = \frac{1}{(1 - x)^2},
\qquad
\sum_{n=1}^{\infty} n\, x^{n} = \frac{x}{(1 - x)^2},
\qquad
\sum_{n=1}^{\infty} n^2 x^{n} = \frac{x (1 + x)}{(1 - x)^3}
$$
They hold for $-1 < x < 1$. A numerical series with terms of this form is summed by substituting the value of $x$: for $x = \dfrac{1}{2}$ one obtains $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n} = 2$ and $\displaystyle\sum_{n=1}^{\infty} \frac{n^2}{2^n} = 6$.
:::

## Fourier series

The proofs and the examples are in the chapter [Fourier series](/en/analisi-2/serie-di-fourier/teoria).

:::formula{#coefficienti-di-fourier titolo="Fourier coefficients and Fourier series"}
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\, dx \quad (n \geq 0),
\qquad
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx)\, dx \quad (n \geq 1)
$$
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr)
$$
They hold for $f$ of period $2\pi$, integrable on $[-\pi, \pi]$. The term $\dfrac{a_0}{2}$ is the mean of $f$ over a period; the integral can be computed over any interval of length $2\pi$.
:::

:::formula{#serie-di-coseni-e-di-seni titolo="Even functions and odd functions"}
$$
\begin{aligned}
f \ \text{even} &\implies b_n = 0, \quad a_n = \frac{2}{\pi} \int_0^{\pi} f(x) \cos(nx)\, dx \\[6pt]
f \ \text{odd} &\implies a_n = 0, \quad b_n = \frac{2}{\pi} \int_0^{\pi} f(x) \sin(nx)\, dx
\end{aligned}
$$
For an even function the series contains only cosines, for an odd function only sines. If $f$ is modified at finitely many points, the coefficients remain the same.
:::

:::formula{#ortogonalita titolo="Orthogonality of the trigonometric system"}
$$
\begin{gathered}
\int_{-\pi}^{\pi} \cos(nx) \cos(mx)\, dx = \int_{-\pi}^{\pi} \sin(nx) \sin(mx)\, dx = 0 \quad (n \neq m) \\[6pt]
\int_{-\pi}^{\pi} \cos^2(nx)\, dx = \int_{-\pi}^{\pi} \sin^2(nx)\, dx = \pi,
\qquad
\int_{-\pi}^{\pi} \sin(nx) \cos(mx)\, dx = 0
\end{gathered}
$$
They hold for every pair of integers $n, m \geq 1$; moreover $\displaystyle\int_{-\pi}^{\pi} \cos(nx)\, dx = \int_{-\pi}^{\pi} \sin(nx)\, dx = 0$.
:::

:::formula{#integrali-coefficienti titolo="Recurring integrals in the coefficients"}
$$
\begin{aligned}
\int x \cos(nx)\, dx &= \frac{x \sin(nx)}{n} + \frac{\cos(nx)}{n^2} + c \\[6pt]
\int x \sin(nx)\, dx &= -\frac{x \cos(nx)}{n} + \frac{\sin(nx)}{n^2} + c \\[6pt]
\cos(n\pi) &= (-1)^n, \qquad \sin(n\pi) = 0
\end{aligned}
$$
The antiderivatives hold for $n \geq 1$ an integer and are obtained by integration by parts; the values at $n\pi$ hold for every integer $n$.
:::

:::formula{#convergenza-puntuale-fourier titolo="Pointwise convergence"}
$$
\frac{a_0}{2} + \sum_{n=1}^{\infty} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr) = \frac{f(x^+) + f(x^-)}{2}
$$
It holds at every $x \in \mathbb{R}$ for $f$ of period $2\pi$ and piecewise smooth. At the points of continuity the sum is $f(x)$; at the jump points it is the average of the one-sided limits, and for the extension of a function given on $[-\pi, \pi)$ the jumps may be located at $\pm\pi$.
:::

:::formula{#convergenza-uniforme-fourier titolo="Uniform convergence"}
$$
\sum_{n=1}^{\infty} \bigl( |a_n| + |b_n| \bigr) \ \text{converges},
\qquad
|a_n \cos(nx) + b_n \sin(nx)| \leq |a_n| + |b_n|
$$
They hold for $f$ of period $2\pi$, **continuous on** $\mathbb{R}$ and piecewise smooth. By the Weierstrass M-test the series then converges totally, hence uniformly, to $f$ on $\mathbb{R}$. For a function given on $[-\pi, \pi]$ the continuity of the extension requires $f(-\pi) = f(\pi)$.
:::

:::formula{#uguaglianza-di-parseval titolo="Parseval's identity"}
$$
\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)^2\, dx
= \frac{a_0^2}{2} + \sum_{n=1}^{\infty} \bigl( a_n^2 + b_n^2 \bigr)
$$
It holds for $f$ of period $2\pi$ with square integrable on $[-\pi, \pi]$. It is used to sum numerical series with the squares of the coefficients.
:::

:::formula{#periodo-generico titolo="Period 2L"}
$$
a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\!\left( \frac{n\pi x}{L} \right) dx,
\qquad
b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\!\left( \frac{n\pi x}{L} \right) dx
$$
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\!\left( \frac{n\pi x}{L} \right) + b_n \sin\!\left( \frac{n\pi x}{L} \right) \right)
$$
They hold for $f$ of period $2L$, with $L > 0$, integrable on $[-L, L]$. The convergence theorems and the formulas for even and odd functions remain valid; in Parseval's identity the left-hand side becomes $\dfrac{1}{L} \displaystyle\int_{-L}^{L} f(x)^2\, dx$.
:::

:::formula{#sviluppi-fourier-notevoli titolo="Standard Fourier expansions"}
$$
\begin{aligned}
x &\sim \sum_{n=1}^{\infty} \frac{2\,(-1)^{n+1}}{n} \sin(nx) && x \in [-\pi, \pi) \\[6pt]
x^2 &\sim \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4\,(-1)^{n}}{n^2} \cos(nx) && x \in [-\pi, \pi] \\[6pt]
|x| &\sim \frac{\pi}{2} - \frac{4}{\pi} \sum_{k=0}^{\infty} \frac{\cos\bigl((2k+1)x\bigr)}{(2k+1)^2} && x \in [-\pi, \pi] \\[6pt]
q(x) &\sim \frac{4}{\pi} \sum_{k=0}^{\infty} \frac{\sin\bigl((2k+1)x\bigr)}{2k+1} && x \in [-\pi, \pi)
\end{aligned}
$$
The expansions refer to the $2\pi$-periodic extensions of the functions indicated. In the last line $q$ is the square wave, equal to $-1$ on $[-\pi, 0)$ and to $1$ on $[0, \pi)$; its coefficients are $b_n = \dfrac{2\bigl(1 - (-1)^n\bigr)}{n\pi}$.
:::

:::formula{#somme-con-fourier titolo="Sums of numerical series"}
$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6},
\qquad
\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2} = \frac{\pi^2}{12},
\qquad
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^2} = \frac{\pi^2}{8},
\qquad
\sum_{n=1}^{\infty} \frac{1}{n^4} = \frac{\pi^4}{90}
$$
The first three are obtained from the pointwise convergence of the expansions of $x^2$ at $x = \pi$ and at $x = 0$ and of $|x|$ at $x = 0$; the fourth from Parseval's identity for $x^2$.
:::

:::attenzione
If $f$ has a jump point, the Fourier series does not converge uniformly on $\mathbb{R}$, because the partial sums are continuous and the uniform limit of continuous functions is continuous. For the extension of $f(x) = x$ from $[-\pi, \pi)$ the one-sided limits at $x = \pi$ are $\pi$ and $-\pi$, and the series at $x = \pi$ converges to the average $0$; the convergence is therefore only pointwise.
:::
