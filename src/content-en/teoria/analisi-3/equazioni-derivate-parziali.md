---
titolo: "Partial differential equations"
sommario: "Classification, characteristics, separation of variables, the heat, wave, and Laplace equations, and weak formulations."
---

## Equations and their data

:::definizione{#classificazione titolo="Partial differential equation"}
A partial differential equation relates a function of several variables to its derivatives. It is linear if the side containing the unknown is a linear combination of the function and its derivatives, with given coefficients depending on the independent variables. In two variables, the principal part
$$
A u_{xx}+2B u_{xy}+C u_{yy}
$$
is elliptic if $B^2-AC<0$. It is parabolic if the discriminant is zero and the principal matrix has rank one, and hyperbolic if the discriminant is positive. The classification is made at each point separately. Where $A=B=C=0$, all second-order terms vanish. Laplace's equation is elliptic, the heat equation is parabolic, and the wave equation is hyperbolic.

The type is determined by the principal part, that is, by the coefficients of the highest-order derivatives. To formulate a problem, one must also specify the domain and the conditions. On an interval, the wave equation with fixed endpoints requires both an initial displacement and an initial velocity. The heat equation with prescribed endpoint temperatures requires an initial temperature distribution. The two equations have different orders in time.
:::

:::esempio{titolo="Classification in the presence of a mixed derivative"}
For $u_{xx}+4u_{xy}+u_{yy}=0$, the coefficient of the mixed derivative is $2B$, so $B=2$. It follows that $B^2-AC=4-1=3>0$ and the equation is hyperbolic. The symmetric matrix of the principal part is
$$
M=\begin{pmatrix}1&2\\2&1\end{pmatrix}.
$$
The vectors $(1,1)$ and $(1,-1)$ are eigenvectors with eigenvalues $3$ and $-1$. Each eigenvector gives the direction of a new axis. The change of axes is orthogonal and preserves lengths. Introduce the new coordinates $\xi=\dfrac{x+y}{\sqrt2}$ and $\eta=\dfrac{x-y}{\sqrt2}$, and write $v$ for the function in these coordinates. The chain rule gives
$$
u_{xx}+4u_{xy}+u_{yy}=3v_{\xi\xi}-v_{\eta\eta}.
$$
The transformed equation has one second derivative with a positive coefficient and one with a negative coefficient. The discriminant criterion detects the same difference in signs, since $\det M=AC-B^2$ is the product of the eigenvalues.

::grafico{uguale=1 nomi="x,y" xmin=-2.4 xmax=2.4 ymin=-2.4 ymax=2.4 vettori="0,0,1.6,1.6,λ=3;0,0,1.6,-1.6,λ=−1" titolo="In the example with a mixed derivative, the principal axes are the diagonals. The quadratic form is positive along the first and negative along the second."}

:::

:::osservazione
Classification is local when the coefficients depend on position. For $u_{xx}+x u_{yy}=0$, the discriminant is $-x$. The equation is elliptic for $x>0$, hyperbolic for $x<0$, and parabolic in the local sense on the line $x=0$, where the principal part has rank one and the equation changes type. In the heat equation, the first time derivative is necessary even though it does not appear in the matrix of second derivatives. It determines the evolution from the initial data.
:::

:::esempio{titolo="An operator in evolution form"}
For the heat equation in variables $x$ and $t$, the principal part of $u_t-\kappa u_{xx}=0$ contains only the second spatial derivative. Its discriminant is zero and its rank is one. The term $u_t$ determines how the function changes in time. For example, on the interval $(0,\pi)$ the profile $\sin x$ has second derivative $-\sin x$. If the solution is the product of this profile and a function of time, the derivative of that time-dependent function is proportional to its value. The initial data determine the constant of integration in the resulting first-order equation. For the wave equation, the same procedure gives a second-order equation, so the two initial conditions determine two constants.
:::

## Characteristics and transport

::::teorema{#trasporto titolo="The transport equation"}
On the real line, for $u_t+c u_x=0$ with constant velocity $c\in\mathbb R$ and initial condition $u(0,x)=f(x)$, with $f\in C^1(\mathbb R)$, the solution is
$$
u(t,x)=f(x-ct).
$$
Along the line joining $(0,x-ct)$ to $(t,x)$, the final value can be calculated from the initial data.

::grafico{nomi="x,t" xmin=-3 xmax=6 ymin=0 ymax=3.2 linee="-2,0 4,3;0,0 6,3;2,0 6,2" punti="0,0,pieno;4,2,pieno" segmenti="4,0,4,2" titolo="The characteristics for $c=2$ are parallel lines. To find $u(2,4)$, follow the line back to $t=0$ and read the initial value at $x_0=0$."}

If the source $g$ and its derivative $\partial_x g$ are continuous, the equation $u_t+cu_x=g(t,x)$ has the classical solution
$$
u(t,x)=f(x-ct)+\int_0^t g(s,x-c(t-s))\,ds.
$$
To prove both formulas, integrate the equation along the same line, accounting for the source at each point.

:::dimostrazione
Fix the endpoint $(t,x)$ and write $s$ for the time variable along the path. The spatial coordinate of the path is $x(s)=x-c(t-s)$, so $x'(s)=c$. The chain rule identifies the derivative of $s\mapsto u(s,x(s))$ with the left-hand side of the equation. When there is no source, the derivative is zero and the value is constant. With a source, the derivative equals $g(s,x(s))$. Integrating between $0$ and $t$ gives the formula, with the initial value evaluated at the point with spatial coordinate $x-ct$.

Every classical solution satisfies this formula, so it also proves uniqueness. For existence, the assumptions on $g$ and $\partial_x g$ ensure that the integral has continuous first derivatives. The time derivative gives the upper-endpoint term $g(t,x)$ and an integral in which $-c$ multiplies $\partial_x g$. The term $cu_x$ contains the same integral with the opposite sign. Their sum gives the source, and the value at $t=0$ agrees with $f$.
:::
::::

:::esempio{titolo="Contribution of a source along a characteristic"}
Let $u_t+2u_x=x$ and $u(0,x)=0$. To calculate $u(t,x)$, follow the characteristic ending at the specified point backward. At time $s$ its spatial coordinate is $x-2(t-s)$, so the source takes the value $x-2t+2s$ along the path. Integrating gives
$$
u(t,x)=\int_0^t(x-2t+2s)\,ds=tx-t^2.
$$
Indeed, $u_t=x-2t$ and $2u_x=2t$, so their sum is $x$. Using only the final value of the source throughout the integral would give $tx$, which does not satisfy the equation.
:::

:::esempio{titolo="Translation of Gaussian initial data"}
For velocity $c=2$ and initial data $f(x)=e^{-x^2}$, the solution without a source is $e^{-(x-2t)^2}$. The profile always has maximum value one, attained where $x-2t=0$. At the points $x=2t\pm d$ a distance $d$ from the maximum, its value is $e^{-d^2}$ at every time. Thus the profile changes position while retaining its height and width.

::grafico{f="exp(-x^2);exp(-(x-2)^2);exp(-(x-4)^2)" nomi="x,u" xmin=-2 xmax=6 ymin=0 ymax=1.17 punti="0,1,pieno;2,1,pieno;4,1,pieno" legenda="u(0,x);u(1,x);u(2,x)" titolo="For transport without a source at velocity $2$, the peak of the Gaussian initial profile is at $x=0$, $x=2$, and $x=4$ at times $0$, $1$, and $2$. The profile retains its shape."}

:::

:::osservazione
On the half-line $x>0$ with velocity $c>0$, a characteristic traced backward reaches $t=0$ only when $x\ge ct$. Otherwise, it reaches $x=0$ at time $t-\dfrac xc$. In the latter case its value is read from the prescribed inflow boundary data. If the initial data are $f$ and the inflow data are $h$, the two branches of the solution are $f(x-ct)$ and $h(t-\dfrac xc)$, respectively. Continuity across the line $x=ct$ requires $f(0)=h(0)$. Continuous first derivatives across the line also require $h'(0)=-c f'(0)$, since the time derivatives of the two branches there are $-c f'(0)$ and $h'(0)$. Initial and boundary data that agree in value can therefore produce a continuous solution with discontinuous derivatives. The direction of the characteristics determines where data must be specified.
:::

:::attenzione
Data prescribed at an outflow boundary would impose an additional condition on values arriving from the interior. On the positive half-line, for velocity $c=-1$, the characteristic ending at $(t,x)$ comes from the point with spatial coordinate $x+t$. The initial data therefore determine $u(t,x)=f(x+t)$ all the way to the boundary. The trace at $x=0$ is $f(t)$, and any prescribed boundary value must agree with it. For example, with initial data $f(x)=x$ the trace is $t$, even though the initial profile vanishes at the boundary.
:::

## Separation of variables

:::definizione{#separazione titolo="Eigenfunctions and boundary conditions"}
To seek solutions of a homogeneous linear equation, set $u(t,x)=T(t)X(x)$. On the interval $(0,L)$ with homogeneous Dirichlet conditions, the spatial problem is
$$
-X''=\lambda X,\qquad X(0)=X(L)=0.
$$
The nonzero solutions correspond to $\lambda_n=\left(\dfrac{n\pi}L\right)^2$ and $X_n(x)=\sin\left(\dfrac{n\pi x}L\right)$, with $n\ge1$. For $\lambda\le0$ the conditions force the zero solution, and for $\lambda>0$ they impose $\sqrt\lambda L=n\pi$.

Expand the initial data in this basis, with coefficients $b_n=\dfrac2L\int_0^L f(x)\sin\left(\dfrac{n\pi x}L\right)\,dx$. For data in $L^2$, the expansion converges in that norm. Termwise differentiation requires further bounds on the coefficients.
:::

:::osservazione
Multiply $-X''=\lambda X$ by $\overline X$ and integrate from $0$ to $L$. The boundary term vanishes because $X$ is zero at the endpoints, leaving
$$
\int_0^L |X'|^2\,dx=\lambda\int_0^L |X|^2\,dx.
$$
If $X$ is nonzero, the integral of $|X'|^2$ is positive, because a constant solution satisfying both boundary conditions would have to vanish. Hence $\lambda>0$. We can therefore solve the equation using sines and cosines. The condition at zero eliminates the cosine. The condition at $L$ selects the frequencies for which the sine vanishes there as well.

::grafico{f="sin(pi*x)+0*sqrt(x*(1-x));sin(2*pi*x)+0*sqrt(x*(1-x));sin(3*pi*x)+0*sqrt(x*(1-x))" nomi="x,X" xmin=0 xmax=1 ymin=-1.22 ymax=1.22 punti="0,0,pieno;1,0,pieno" legenda="\sin(\pi x);\sin(2\pi x);\sin(3\pi x)" titolo="On $[0,1]$ the first three Dirichlet eigenfunctions vanish at both endpoints. They have zero, one, and two interior nodes, respectively."}

:::

:::esempio{titolo="Nonhomogeneous boundary data"}
For the heat equation on $(0,L)$ with fixed temperatures $A$ on the left and $B$ on the right, set $w=u-p$, where $p(x)=A+(B-A)\dfrac{x}{L}$. The profile $p$ has zero second derivative and satisfies both boundary conditions. Thus $w$ satisfies the same equation with homogeneous boundary conditions and initial data $f-p$. After expanding $f-p$ in a sine series, add $p$ back. Separation of variables must be applied to the adjusted data, since each sine vanishes at the endpoints and a sum of regular heat modes retains that value.
:::

:::esempio{titolo="Eigenfunctions with zero derivative at the endpoints"}
If the endpoints of the interval are insulated, the homogeneous conditions are $X'(0)=X'(L)=0$. For $\lambda>0$, write $X$ as a combination of sine and cosine. The condition at zero eliminates the sine. The derivative of the cosine must also vanish at $L$, so the positive frequencies are again $\dfrac{n\pi}{L}$ with $n\ge1$. There is also the eigenvalue $\lambda=0$. In that case $X''=0$ and the conditions force the slope to be zero, leaving the constant functions. For $\lambda<0$, the integral identity obtained by integration by parts rules out nonzero solutions, since $X'=0$ makes the boundary term vanish. The constant mode has a constant time factor in the heat equation. This mode represents the initial mean, which is conserved because the flux through both endpoints is zero.
:::

## The heat equation

::::teorema{#calore titolo="The heat equation on an interval"}
For $u_t=\kappa u_{xx}$ with $\kappa>0$, $0<x<L$, $u(t,0)=u(t,L)=0$, and $u(0,x)=f(x)$, the solution for $f\in L^2(0,L)$ is
$$
u(t,x)=\sum_{n=1}^{\infty}b_n
e^{-\kappa\left(\frac{n\pi}L\right)^2t}
\sin\left(\frac{n\pi x}L\right).
$$
The series converges to the initial data in $L^2$ as $t\downarrow0$ and is smooth for $t>0$. Each mode satisfies $T_n'=-\kappa\lambda_nT_n$ and therefore decays exponentially. For $L=\pi$ and $f=\sin(2x)$ we obtain $e^{-4\kappa t}\sin(2x)$.

For a real classical solution sufficiently regular up to the endpoints, integration by parts gives
$$
\frac d{dt}\frac12\int_0^L u^2\,dx
=-\kappa\int_0^L u_x^2\,dx.
$$
The energy is nonincreasing. Applying the identity to the difference of two solutions with the same data gives uniqueness in the class of solutions for which the energy identity holds and the initial data are attained in norm.

:::dimostrazione
Separation of variables turns the equation into a sequence of scalar problems. Orthogonality of the sines determines the initial coefficient for each problem. At every strictly positive time, the exponential multiplies the Fourier coefficients by a factor that decays faster than any inverse power of the index. The coefficients of the initial data are bounded because their squares are summable. Each spatial or time derivative introduces at most a power of the index. Thus, for times bounded below by a positive constant, the resulting series converges uniformly and the equation can be verified term by term.

To check the initial condition, the squared norm of the difference between solution and data is the sum of the squared magnitudes of the difference coefficients multiplied by $\dfrac L2$. Each coefficient tends to zero, and its magnitude is bounded by that of the corresponding initial coefficient. The squared magnitudes of the initial coefficients are summable, so the norm of the difference tends to zero. For the energy identity, multiply the equation by $u$ and integrate by parts in space. The boundary term vanishes because $u$ is zero at both endpoints.
:::
::::

:::esempio{titolo="Two modes and the effect of frequency"}
On $(0,\pi)$ with $\kappa=1$ and initial data $f(x)=\sin x+\sin(3x)$, the coefficients are $b_1=b_3=1$. The solution is $e^{-t}\sin x+e^{-9t}\sin(3x)$. After time $t=\dfrac14$, the first coefficient is $e^{-\dfrac14}$ and the third is $e^{-\dfrac94}$. The ratio of the two amplitudes is $e^{-2}$. This difference explains why higher spatial frequencies are damped more rapidly. At $x=\dfrac\pi2$, the two modes have opposite initial values, so their sum there is zero at time zero. For $t>0$ we have $e^{-t}-e^{-9t}>0$ because the amplitude of the third mode is smaller than that of the first. The value at the center changes because the decay rates differ. The zeros of each individual component stay fixed.

::grafico{f="sin(x)+sin(3*x);exp(-0.25)*sin(x)+exp(-2.25)*sin(3*x);exp(-1)*sin(x)+exp(-9)*sin(3*x)" xmin=0 xmax=3.14159265 ymin=-0.45 ymax=2 nomi="x,u" legenda="u(0,x);u(\frac14,x);u(1,x)" titolo="For initial data $\sin x+\sin(3x)$, the profiles at times $0$, $\dfrac14$, and $1$ show the rapid decay of the third mode."}

:::

:::osservazione
The energy in the estimate is half the squared norm of the solution. The boundary flux does not contribute to the derivative of the energy because $u$ vanishes at the endpoints. For the single mode of frequency $n$, the energy equals $\dfrac L4 b_n^2 e^{-2\kappa\lambda_n t}$. The energy decay rate is twice the decay rate of the mode coefficient.
:::

:::osservazione
The decay of the entire solution with zero endpoint values can be estimated using only the smallest eigenvalue. Each mode satisfies $e^{-\kappa\lambda_nt}\le e^{-\kappa\lambda_1t}$. Parseval's identity then gives
$$
\|u(t,\cdot)\|_{L^2(0,L)}\le e^{-\kappa\lambda_1t}\|f\|_{L^2(0,L)}.
$$
If the first coefficient is zero, the eigenvalue of the lowest mode actually present can be used instead. For example, with initial data $\sin(2x)$ on $(0,\pi)$, the rate in the estimate is $4\kappa$. For insulated endpoints the constant mode has eigenvalue zero, so the exponential decay estimate applies to the difference between the solution and its mean.
:::

## The wave equation

::::teorema{#onde titolo="d'Alembert's formula and modes on an interval"}
On the real line, for $u_{tt}=c^2u_{xx}$ with $c>0$, $u(0,x)=f(x)$, and $u_t(0,x)=g(x)$, where $f\in C^2$ and $g\in C^1$,
$$
u(t,x)=\frac{f(x-ct)+f(x+ct)}2+
\frac1{2c}\int_{x-ct}^{x+ct}g(s)\,ds.
$$
The formula uses the initial displacement evaluated at two points and the initial velocity integrated between them.

::grafico{nomi="x,t" uguale=1 xmin=-4 xmax=4 ymin=0 ymax=3.6 poligoni="-3,0 3,0 0,3" linee="-3,0 0,3 3,0" punti="-3,0,pieno;3,0,pieno;0,3,pieno" titolo="For $c=1$, the value at $(x,t)=(0,3)$ depends on $f$ at the two endpoints $-3$ and $3$ and on $g$ throughout the interval $[-3,3]$."}

On an interval with fixed endpoints,
$$
u(t,x)=\sum_{n=1}^{\infty}
\left[a_n\cos(\omega_nt)+\frac{g_n}{\omega_n}\sin(\omega_nt)\right]
\sin\left(\frac{n\pi x}L\right),
\quad \omega_n=\frac{cn\pi}L,
$$
where $a_n,g_n$ are the Fourier coefficients of the initial displacement and velocity. For finite sums the formula gives a classical solution. If the initial displacement belongs to $H_0^1(0,L)$ and the velocity to $L^2(0,L)$, the series gives an energy solution. Its partial sums converge in $H_0^1$ and their time derivatives converge in $L^2$, uniformly on each compact time interval. Indeed, the energy of a tail of the expansion is bounded by the sum of the initial energies of its modes, which tends to zero by Parseval's identity. The equation holds in the weak sense as the limit of the equations for the partial sums.

The energy $\dfrac12\int_0^L(u_t^2+c^2u_x^2)\,dx$ is constant for real classical solutions with fixed endpoints.

:::dimostrazione
On the line, use the characteristic coordinates $\xi=x-ct$ and $\eta=x+ct$. The chain rule gives $u_{tt}-c^2u_{xx}=-4c^2v_{\xi\eta}$, where $v$ is the solution expressed in the new coordinates. Since $v_{\xi\eta}=0$, the derivative with respect to $\xi$ depends only on $\xi$. Integration gives the sum $F(\xi)+G(\eta)$. The initial displacement imposes $F+G=f$. The initial velocity imposes $-cF'+cG'=g$. Adding and subtracting the two relations for the derivatives gives $F'=\dfrac12 f'-\dfrac1{2c}g$ and $G'=\dfrac12 f'+\dfrac1{2c}g$. Choose the same starting point for the two antiderivatives of $g$. The remaining constants sum to zero because $F+G=f$. This leaves the integral of $g$ between the two characteristic endpoints.

On an interval, for each spatial mode of eigenvalue $\lambda_n$ the time coefficient satisfies the oscillator equation with angular frequency $c\sqrt{\lambda_n}$. Its value and its derivative at zero determine the cosine and sine factors, respectively. To obtain the energy balance on the interval, use the equation and integrate by parts in space.
:::
::::

:::esempio{titolo="The contribution of a nonzero initial velocity"}
With $f=0$, $g(x)=x$, and propagation speed $c>0$, d'Alembert's formula gives
$$
u(t,x)=\frac{(x+ct)^2-(x-ct)^2}{4c}=xt.
$$
This result satisfies $u_{tt}=c^2u_{xx}$ because both second derivatives vanish. It also satisfies $u(0,x)=0$ and $u_t(0,x)=x$. In the original expression the divisor $2c$ accounts for the width $2ct$ of the interval. More precisely, the integral of the initial velocity is the interval width times its mean value, which here is $x$.
:::

:::esempio{titolo="Two profiles traveling in opposite directions"}
For $c=1$, initial displacement $f(x)=e^{-x^2}$, and zero initial velocity, d'Alembert's formula gives the average of $e^{-(x-t)^2}$ and $e^{-(x+t)^2}$. The first Gaussian is centered at $t$ and the second at $-t$. As time increases, their centers move farther apart and each component retains its shape. At the origin the weighted sum equals $e^{-t^2}$ and decreases for $t>0$.

::grafico{f="exp(-x^2);0.5*(exp(-(x-2)^2)+exp(-(x+2)^2))" xmin=-5 xmax=5 ymin=0 ymax=1.16 nomi="x,u" legenda="u(0,x);u(2,x)" titolo="For the wave equation with $c=1$, Gaussian initial displacement, and zero initial velocity, the profile at time $2$ is the average of two Gaussians shifted in opposite directions."}

:::

:::osservazione
To obtain conservation of energy on the interval with fixed endpoints, differentiate with respect to time and integrate $c^2\int u_xu_{xt}\,dx$ by parts with respect to $x$. The boundary term vanishes because $u_t=0$ at the points where $u$ is fixed at zero for all times. The remaining integral cancels $\int u_tu_{tt}\,dx$ by the equation. Even when the mode passes through the configuration $u=0$, energy is conserved because at that instant all of it is in the term containing $u_t$.
:::

:::esempio{titolo="Propagation from a bounded interval"}
If the initial displacement and velocity vanish outside $[-a,a]$, the solution vanishes for $|x|>a+ct$ at time $t\ge0$. Indeed, the whole interval $[x-ct,x+ct]$ lies to the right of $a$ when $x>a+ct$, and to the left of $-a$ when $x<-a-ct$. In both regions the displacement values at the endpoints and the velocity contribution therefore vanish. If the interval intersects the support of $g$ while neither endpoint lies in the support of $f$, the initial velocity can produce a nonzero solution even though the direct contribution from the displacement vanishes.
:::

## Laplace's equation and Dirichlet problems

::::teorema{#laplace-edp titolo="Laplace's equation and uniqueness"}
A function $C^2$ is harmonic if $\Delta u=0$. On a bounded domain, a real harmonic function continuous up to the boundary has maximum and minimum over the closure equal to its maximum and minimum on the boundary. This principle gives uniqueness for the Dirichlet problem in this class of functions.

In the rectangle $0<x<\pi$, $0<y<H$, with boundary value $\sin(nx)$ on the top edge and zero on the remaining edges, fix an integer $n\ge1$. The solution is
$$
u(x,y)=\frac{\sinh(ny)}{\sinh(nH)}\sin(nx).
$$
Indeed, $u_{xx}=-n^2u$, $u_{yy}=n^2u$, and the boundary values agree with the prescribed data. In the unit disk, the boundary data $\cos(n\theta)$, with $n$ a positive integer, give $u(r,\theta)=r^n\cos(n\theta)$.

:::dimostrazione
To prove the maximum principle, add to $u$ a small quadratic function that makes the Laplacian strictly positive. In dimension $d$, the Laplacian of $u(x)+\varepsilon|x|^2$ equals $2d\varepsilon$. At an interior maximum, all pure second derivatives would be nonpositive, so their sum would also be nonpositive. The perturbed function must therefore attain its maximum on the boundary. Since the domain is bounded, the perturbation tends uniformly to zero as $\varepsilon\downarrow0$. This gives the maximum principle. Apply it to $-u$ to obtain the minimum principle. The difference between two solutions with the same data vanishes on the boundary, so both its maximum and its minimum are zero and the solutions coincide.
:::
::::

:::esempio{titolo="How sinusoidal boundary data extend into the domain"}
In the rectangle, homogeneous conditions on the sides select the sine modes. The data on the top edge select the mode $X(x)=\sin(nx)$. The elliptic equation gives $Y''=n^2Y$. The zero value on the bottom edge selects $\sinh(ny)$, and the prescribed value at the top determines the factor $\dfrac1{\sinh(nH)}$. If two modes are prescribed on the top edge, each acquires its own factor and their solutions add by linearity. For fixed $0<y<H$, the ratio $\dfrac{\sinh(ny)}{\sinh(nH)}$ decays exponentially in $n$. Thus high-frequency oscillations imposed on the top edge mainly affect points close to that edge.

::grafico{f="sinh(x)/sinh(1);sinh(3*x)/sinh(3)" xmin=0 xmax=1 ymin=0 ymax=1.15 nomi="y,Y" punti="0,0,pieno;1,1,pieno" legenda="\dfrac{\sinh y}{\sinh 1};\dfrac{\sinh(3y)}{\sinh 3}" titolo="In the rectangle of height $1$, the vertical factors of the first and third modes both equal $1$ at the top edge. The third decays more rapidly with distance into the rectangle."}

:::

:::esempio{titolo="Boundary data with two frequencies on a disk"}
Prescribe $1+2\cos\theta-\sin(3\theta)$ on the circle. The constant term extends as a constant function. In polar coordinates, for a nonconstant mode the Laplacian contains the second radial derivative, the first radial derivative divided by the radius, and the second angular derivative divided by the squared radius. For a mode of order $n$, the three terms cancel with radial factor $r^n$. For the given data this gives
$$
u(r,\theta)=1+2r\cos\theta-r^3\sin(3\theta).
$$
The third mode is regular even at the origin, because $r^3\sin(3\theta)$ is the imaginary part of $(x+iy)^3$, namely $3x^2y-y^3$. The resulting function is harmonic throughout the disk and takes the prescribed values on the circle.
:::

## Poisson's equation and weak solutions

:::definizione{#debole titolo="Weak derivatives and the space H¹"}
Let $\Omega$ be an open subset of $\mathbb R^d$ and let $u\in L^1_{\mathrm{loc}}(\Omega)$. A function $v\in L^1_{\mathrm{loc}}(\Omega)$ is the weak derivative $\partial_j u$ if
$$
\int_\Omega u\,\partial_j\varphi\,dx=-\int_\Omega v\varphi\,dx
\qquad\text{for every }\varphi\in C_c^\infty(\Omega).
$$
The space $H^1(\Omega)$ consists of functions $L^2$ whose first weak derivatives all belong to $L^2$. The squared norm is $\int(|u|^2+|\nabla u|^2)$. The space $H_0^1$ is the closure of the smooth compactly supported functions in this norm. For $-\,\Delta u=f$ with $f\in L^2(\Omega)$ and zero boundary data, the weak formulation seeks $u\in H_0^1(\Omega)$ such that
$$
\int_\Omega\nabla u\cdot\nabla v\,dx=\int_\Omega fv\,dx
\qquad \text{for every }v\in H_0^1(\Omega).
$$
This follows by multiplying the equation by a test function and integrating by parts. Only first derivatives of $u$ and of the test function enter the formulation.
:::

:::esempio{titolo="A function with a corner and a weak derivative"}
For $u(x)=|x|$ on $(-1,1)$, split the integral into two parts and integrate by parts on each. The outer boundary terms vanish because of the support of the test function. The terms at zero cancel because the one-sided values of $u$ agree. The weak derivative equals $-1$ to the left and $1$ to the right and belongs to $L^2(-1,1)$. Hence the function lies in $H^1(-1,1)$. Repeating the procedure on the derivative gives a contribution concentrated at zero, equal to twice the test function's value there. This cannot be represented by a function in $L^2$. Consequently, $u$ does not belong to $H^2(-1,1)$.

::grafico{f="abs(x)" nomi="x,u" xmin=-1 xmax=1 ymin=0 ymax=1.16 punti="0,0,pieno" vettori="-0.85,0.85,-0.45,0.45,−1;0.45,0.45,0.85,0.85,+1" titolo="The weak derivative of $|x|$ is $-1$ to the left and $1$ to the right. The single point where the classical derivative fails to exist does not prevent membership in $H^1$."}

:::

:::attenzione
A jump between the one-sided values produces an extra term on integration by parts. On $(-1,1)$, consider the indicator function of the interval $(0,1)$. Its classical derivative is zero on both open intervals separated by zero. For a test function, however, one obtains
$$
-\int_{-1}^{1}\mathbf1_{(0,1)}(x)\varphi'(x)\,dx=\varphi(0).
$$
This evaluation cannot be the integral of the product of $\varphi$ with a function in $L^2(-1,1)$. Indeed, choose test functions equal to one at zero, bounded in absolute value by one, with supports shrinking to zero. Their $L^2$ norms tend to zero, so their integrals against any function in $L^2$ would tend to zero by Cauchy–Schwarz. Yet evaluation at zero remains one. The indicator belongs to $L^2$. The evaluation term rules out membership in $H^1$. The same argument rules out a second derivative in $L^2$ for the absolute value function, since its first derivative jumps by two.
:::

## Existence and the energy method

::::teorema{#lax-milgram titolo="The Lax–Milgram theorem for Poisson's equation"}
On a real Hilbert space $H$, suppose a bilinear form $a$ is continuous and coercive, meaning that $|a(u,v)|\le C\|u\|\|v\|$ and $a(u,u)\ge\alpha\|u\|^2$ for some $C,\alpha>0$ and every $u,v\in H$. Then for every continuous linear functional $\ell$ on $H$ there exists a unique $u\in H$ satisfying $a(u,v)=\ell(v)$ for every $v\in H$.

On a bounded Lipschitz domain, the Poincaré inequality makes $\|\nabla u\|_2$ a norm equivalent to the $H^1$ norm on $H_0^1$. For $f\in L^2$, the form $a(u,v)=\int\nabla u\cdot\nabla v$ and the functional $\ell(v)=\int fv$ satisfy the hypotheses. The weak Poisson problem therefore has a unique solution, which minimizes the energy $\dfrac{1}{2}\int|\nabla u|^2-\int fu$.

:::dimostrazione
The Riesz representation theorem turns the bilinear form into an operator on $H$. For each $w\in H$, the functional $v\mapsto a(w,v)$ is continuous, so there is a unique $Tw\in H$ such that $(Tw,v)_H=a(w,v)$ for every $v$. Uniqueness of the representing vector makes $T$ linear. Continuity of the form gives $\|Tw\|\le C\|w\|$, while coercivity and Cauchy–Schwarz give
$$
\alpha\|w\|^2\le (Tw,w)_H\le\|Tw\|\|w\|.
$$
Consequently, $\|Tw\|\ge\alpha\|w\|$. This estimate implies that $T$ is injective and has closed range. Indeed, if $Tw_n$ converges, then $w_n$ is Cauchy and converges in $H$. By continuity of $T$, the limit of $Tw_n$ belongs to the range.

If $z$ is orthogonal to the range, then $(Tw,z)_H=0$ for every $w$. Choosing $w=z$ gives $a(z,z)=0$, so $z=0$ by coercivity. The range is closed and its orthogonal complement is zero, so the range equals $H$. Let $g$ be the Riesz representative of $\ell$. Surjectivity and injectivity of $T$ give a unique $u$ with $Tu=g$, that is, $a(u,v)=\ell(v)$ for every $v\in H$.

For Poisson's equation, apply the result to the complete space $H_0^1$ with the symmetric bilinear form defined by the inner product of the gradients. Cauchy–Schwarz and the Poincaré inequality give continuity of $a$ and $\ell$ and coercivity of $a$. For every $w\in H_0^1$, expanding $J(u+w)-J(u)$ gives
$$
\begin{aligned}
J(u+w)-J(u)&=a(u,w)-\ell(w)+\frac{1}{2}a(w,w), \\
&=\frac{1}{2}a(w,w).
\end{aligned}
$$
This equality uses the weak equation with test function $w$. The right-hand side is positive for $w\ne0$, so $u$ is the unique minimizer.
:::
::::

:::esempio{titolo="Uniqueness and the meaning of the energy minimum"}
If $u_1$ and $u_2$ solve the same weak problem, their difference $w$ satisfies $\int_\Omega \nabla w\cdot\nabla v=0$ for every $v\in H_0^1(\Omega)$. Choosing $v=w$ gives $\|\nabla w\|_2=0$. The Poincaré inequality therefore gives $\|w\|_2=0$, meaning that the two solutions agree almost everywhere. To understand the energy minimum, denote the functional by $J$ and compare $u$ with $u+w$. Expanding the square gives
$$
J(u+w)-J(u)=\frac12\int_\Omega|\nabla w|^2\,dx,
$$
because the linear term vanishes by the weak equation with $v=w$. The minimum is strict for every nonzero perturbation in $H_0^1$. In one dimension, for $f=2$ on $(0,1)$, the solution $u=x(1-x)$ vanishes at the endpoints and satisfies $-u''=2$. For the trial profile $\alpha u$, the energy is $\dfrac{\alpha^2}{6}-\dfrac\alpha3$. The minimum occurs at $\alpha=1$, in agreement with the general calculation.

::grafico{f="x^2/6-x/3" nomi="α,J" xmin=-0.55 xmax=2.55 ymin=-0.23 ymax=0.28 punti="1,-0.166667,pieno" segmenti="1,-0.166667,1,0" titolo="Among the profiles $\alpha x(1-x)$ for Poisson's equation with source $2$, the functional has its minimum at $\alpha=1$, where its value is $-\dfrac16$."}

:::

:::osservazione
On $(0,1)$, coercivity can be checked directly. For a smooth function with zero trace, the fundamental theorem of calculus gives $v(x)=\int_0^x v'(s)\,ds$. By Cauchy–Schwarz, $|v(x)|^2\le x\int_0^1|v'|^2$. Integrating with respect to $x$ gives $\|v\|_2^2\le\dfrac12\|v'\|_2^2$. By density, the inequality extends to $H_0^1(0,1)$. It follows that the form $\int u'v'$ controls the full norm, including the term that measures the function values. Without the zero trace condition, nonzero constants would have derivative zero. Thus it is the boundary condition that allows the derivative norm alone to be used in this problem.
:::

:::esempio{titolo="Affine boundary data and the weak formulation"}
On $(0,1)$, consider $-u''=1$ with $u(0)=1$ and $u(1)=2$. Subtract the affine function $p(x)=1+x$, which takes the two prescribed values. The difference $w=u-p$ has zero trace and satisfies the same equation because $p''=0$. In the weak formulation, the term $\int_0^1p'v'\,dx$ equals $v(1)-v(0)=0$ for test functions in $H_0^1(0,1)$. We can therefore apply the existence and uniqueness result to the difference $w$. Solving the second-order equation gives $w=\dfrac12x(1-x)$, and adding $p$ recovers $u$. The affine function reduces the problem to the space of functions with zero trace, a linear space suitable for the variational formulation.
:::

:::esempio{titolo="A jump in the source and matching conditions for the solution"}
Consider a piecewise constant source $f$ with a jump at $x=a$. A weak solution of $-u''=f$ can be found by integrating twice on each interval. Matching $u$ prevents a jump in the function, while matching $u'$ eliminates the interior terms in integration by parts. Indeed, the endpoint terms from the two intervals have opposite signs and give a coefficient proportional to the difference between the one-sided values of $u'$. If this difference were nonzero, there would be a source concentrated at $a$ in addition to the prescribed piecewise function. Thus a jump in $f$ allows a jump in curvature while the profile and its tangent remain continuous.
:::
