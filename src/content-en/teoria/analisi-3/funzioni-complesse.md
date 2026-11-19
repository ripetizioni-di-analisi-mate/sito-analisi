---
titolo: "Complex analysis: holomorphic functions and the logarithm"
sommario: "The complex derivative, the Cauchy–Riemann equations, harmonic functions, the exponential, the logarithm, and conformal maps."
---

## Functions and limits in the complex plane

:::definizione{#dominio-complesso titolo="Function of a complex variable"}
A function $f:\Omega\subseteq\mathbb C\to\mathbb C$ can be written as $f(z)=u(x,y)+iv(x,y)$, where $z=x+iy$. The functions $u,v$ are its real and imaginary parts. Let $z_0$ be an accumulation point of $\Omega$. The function has limit $L$ at $z_0$ if, for every $\varepsilon>0$, there is a $\delta>0$ such that $|f(z)-L|<\varepsilon$ for every point $z$ in the domain satisfying $0<|z-z_0|<\delta$. The modulus measures distance in the plane, so the same neighborhood must work for every direction of approach. Since $|a+ib|^2=a^2+b^2$, this is equivalent to convergence of both real-valued components.

For $f(z)=z^2$, we have $u=x^2-y^2$ and $v=2xy$. The domain is $\mathbb C$, and the function is continuous because its components are polynomials.
:::

:::esempio{titolo="A limit that depends on the path"}
Consider $f(z)=\dfrac{\overline z}{z}$ for $z\ne0$. Writing $z=re^{i\theta}$ gives $f(z)=e^{-2i\theta}$. On the positive real axis the quotient equals $1$. On the positive imaginary axis the argument of $z$ is $\dfrac{\pi}{2}$, so the quotient equals $-1$. Both paths approach the origin and give different values, so the limit does not exist. The limit exists along each ray, and the modulus of $f$ is always one. To decide whether the limit exists in the plane, we must also compare the arguments, which locate the values on the unit circle.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.5 xmax=3 ymin=-1.4 ymax=3 vettori="2.4,0,0.5,0;0,2.4,0,0.5" punti="0,0,vuoto" etichette="1.6,-0.45,f = 1;0.65,1.8,f = −1" titolo="Two directions of approach to the origin along which the ratio of a complex conjugate to the original number takes different values"}
:::

:::osservazione
Checking a finite number of paths is insufficient to establish a limit. One can instead bound the modulus of the difference by a quantity that tends to zero and depends only on the distance. For example, if $g(z)=\dfrac{x^2y}{x^2+y^2}$ for $z\ne0$, then $|g(z)|\le |y|\le |z|$, since the ratio of $x^2$ to $x^2+y^2$ is at most one. The bound holds for every approach, so the limit is zero.
:::

:::esempio{titolo="Extending a quotient by continuity"}
Consider $f(z)=\dfrac{z^3-1}{z-1}$ for $z\ne1$. Factoring the numerator gives $f(z)=z^2+z+1$ on the domain, so the limit at $1$ equals $3$. We can also obtain a direct estimate. Indeed, $f(z)-3=(z-1)(z+2)$, and in the disk centered at $1$ with radius one we have $|z+2|\le |z-1|+3<4$. Hence $|f(z)-3|<4|z-1|$, and we may take $\delta=\min\left(1,\dfrac{\varepsilon}{4}\right)$. The value $f(1)=3$ is the unique choice that makes the function continuous, because continuity requires the value at the point to equal the limit.
:::

:::attenzione
Even checking the limit along *every* straight line can leave the question open. Let $F(x+iy)=\dfrac{x^2y}{x^4+y^2}$ away from the origin. On the vertical line the function is zero. Along $y=mx$ with $m\ne0$, the expression reduces to $\dfrac{mx}{x^2+m^2}$, which tends to zero. For $m=0$ the numerator vanishes. Along the parabola $y=x^2$, however, the quotient equals $\dfrac12$ for every $x\ne0$. Along this parabola the two terms in the denominator have the same magnitude, since $y^2=x^4$. The limit in the plane therefore does not exist.
:::

## Complex differentiability and holomorphic functions

:::definizione{#derivata-complessa titolo="The derivative and holomorphic functions"}
For an open set $\Omega$ and a point $z_0\in\Omega$, the **complex derivative** is
$$
f'(z_0)=\lim_{h\to0,\ h\in\mathbb C}\frac{f(z_0+h)-f(z_0)}h.
$$
The quotient must have the same limit for real increments, imaginary increments, and increments in every other direction. The function is **holomorphic** on $\Omega$ if it is complex differentiable at every point of that set. It is entire if it is holomorphic on $\mathbb C$. For $z^2$ the quotient is $2z_0+h$, so $f'(z_0)=2z_0$. The usual sum and product rules apply wherever both functions are differentiable. For a quotient, the denominator must also be nonzero. For a composition, the inner function must be differentiable at the given point and the outer function at its image.
:::

:::attenzione
For $f(z)=\overline z$ the quotient is $\dfrac{\overline h}h$. Its value is $1$ for real increments and $-1$ for purely imaginary increments. Thus complex conjugation is continuous but nowhere complex differentiable.
:::

:::osservazione
When the derivative exists, we can write $f(z_0+h)-f(z_0)=f'(z_0)h+o(|h|)$ for small increments. The linear part is therefore multiplication by a single complex number, regardless of the direction of $h$. For $f(z)=z^2$ at $z_0=1+i$, the factor is $2+2i$. To first order a positive real increment gives a vector pointing northeast. A positive imaginary increment gives a vector pointing northwest. The second vector is the first rotated through a right angle, just as for the original increments.

::grafico{uguale=1 nomi="Re,Im" xmin=-3.5 xmax=3.5 ymin=-1.2 ymax=3.5 vettori="0,0,2,2;0,0,-2,2" etichette="2.4,2.25,Df(1);-2.4,2.5,Df(i)" titolo="The differential of $z^2$ at $1+i$ maps the two coordinate directions to perpendicular vectors of equal length"}
:::

:::osservazione
A real differential is a linear map on vectors in the plane. Denote this map by $T$. Then $T(1)$ and $T(i)$ are the images of the two basis vectors. Any increment $h=x+iy$ can be expressed in terms of $h$ and its conjugate, since $x=\dfrac{h+\overline h}{2}$ and $y=\dfrac{h-\overline h}{2i}$. It follows that
$$
T(h)=Ah+B\overline h,\qquad
A=\frac{T(1)-iT(i)}2,\qquad
B=\frac{T(1)+iT(i)}2.
$$
Dividing the linear part of the increment by $h$ gives a quotient containing the term $B\dfrac{\overline h}{h}$. On the real axis this term equals $B$, and on the imaginary axis it equals $-B$. Thus, when the real differential exists, the complex derivative exists precisely when $B=0$, in which case it equals $A$. This characterization distinguishes a real-linear map from multiplication by a complex number.
:::

:::esempio{titolo="Different scale factors along the coordinate axes"}
For $f(x+iy)=x+2iy$ the real differential is the function itself. We obtain $T(1)=1$ and $T(i)=2i$, so $A=\dfrac32$ and $B=-\dfrac12$. The difference quotient equals $1$ in the real direction and $2$ in the imaginary direction. Thus the function is differentiable everywhere as a real map and nowhere complex differentiable.
:::

## The Cauchy–Riemann equations

::::teorema{#cauchy-riemann titolo="Cauchy–Riemann equations"}
If $f=u+iv$ is complex differentiable at $z_0$, its partial derivatives satisfy
$$
u_x=v_y,\qquad u_y=-v_x.
$$
Conversely, if $u,v$ are differentiable as real functions at $z_0$ and satisfy these equations there, then $f$ is complex differentiable and $f'(z_0)=u_x(z_0)+iv_x(z_0)$. In particular, $C^1$ components that satisfy the equations on an open set define a holomorphic function.

:::dimostrazione
With real increments, the quotient tends to $u_x+iv_x$. With imaginary increments, it tends to $v_y-iu_y$. Equating the two limits gives the equations. Conversely, real differentiability and the equations give
$$
f(z_0+h)-f(z_0)=(u_x+iv_x)h+o(|h|).
$$
After division by $h$, the remainder tends to zero.
:::
::::

:::esempio{titolo="Differentiability only at the origin"}
For $f(z)=|z|^2$ we have $u=x^2+y^2$ and $v=0$. The equations require $x=y=0$. At the origin, $\dfrac{|h|^2}h=\overline h\to0$. Hence $f'(0)=0$, yet $f$ is not holomorphic on any nonempty open set.
:::

:::esempio{titolo="Checking the equations for a complex quotient"}
For $f(z)=\dfrac1z$ with $z\ne0$, set $r^2=x^2+y^2$. Then $u=\dfrac{x}{r^2}$ and $v=-\dfrac{y}{r^2}$. The components are of class $C^1$ on the open set where the denominator is positive. The quotient rule gives
$$
\begin{aligned}
u_x&=\frac{y^2-x^2}{r^4}=v_y,\\
u_y&=-\frac{2xy}{r^4}=-v_x .
\end{aligned}
$$
The calculation holds throughout the punctured plane. The quotient rule gives the derivative $f'(z)=-\dfrac1{z^2}$. Indeed, the numerator of $u_x+iv_x$ is $y^2-x^2+2ixy$, which equals $-\overline z^2$. Rewriting $-\dfrac1{z^2}$ in terms of the conjugate gives the same simplification.
:::

:::attenzione
If the partial derivatives exist and satisfy both equations at a point, real differentiability still needs to be checked. Define $f(0)=0$ and, away from the origin, $f(z)=\dfrac{x^2y}{x^2+y^2}$. The function vanishes on both axes, so all the partial derivatives of its two components are zero at the origin. For $z=t(1+i)$ with $t\ne0$, however, we have $f(z)=\dfrac t2$, and the difference quotient is $\dfrac1{2(1+i)}$. The quotients along the axes are zero, so there is no complex derivative at the origin. The bound $|f(z)|\le |z|$ nevertheless shows that the function is continuous there.
:::

:::esempio{titolo="A derivative that exists at just one point"}
Let $f(z)=z+\overline z^2$. The components are real polynomials, so the function is real differentiable throughout the plane. At $z_0$, subtract the value of the function and expand the square of the conjugate. This gives
$$
\frac{f(z_0+h)-f(z_0)}h
=1+2\overline{z_0}\frac{\overline h}{h}
+\frac{\overline h^2}{h}.
$$
The last term has modulus $|h|$ and tends to zero. The middle term has opposite limits along the two axes unless $z_0=0$. The derivative therefore exists only at the origin and equals $1$. There the linear part of the increment is precisely $h$, because the conjugate term is of second order. Even a nonzero derivative at one point is therefore insufficient to establish holomorphicity in a neighborhood of that point.
:::

## Exponential and trigonometric functions

:::definizione{#esponenziale-complesso titolo="The complex exponential"}
The series $e^z=\sum_{n=0}^{\infty}\dfrac{z^n}{n!}$ converges throughout $\mathbb C$ and can be differentiated term by term. We have
$$
e^{x+iy}=e^x(\cos y+i\sin y),\qquad (e^z)'=e^z.
$$
Thus the exponential is entire, never vanishes, and has period $2\pi i$. The definitions
$$
\sin z=\frac{e^{iz}-e^{-iz}}{2i},\qquad
\cos z=\frac{e^{iz}+e^{-iz}}2
$$
give entire functions with the usual derivative formulas. For $w\ne0$, all solutions of $e^z=w$ are $\log|w|+i(\theta+2k\pi)$, where $\theta$ is an argument of $w$ and $k\in\mathbb Z$.
:::

:::osservazione
On the line $x=c$, the modulus of $e^{c+iy}$ remains equal to $e^c$ and its polar angle increases with $y$. The image is therefore a circle traced counterclockwise, with one revolution for every interval of length $2\pi$. On the line $y=c$ the argument stays fixed. As $x$ increases, the image point moves outward along the ray at angle $c$. These two images explain why the modulus of the exponential determines the real part of the exponent, whereas the argument determines the imaginary part up to whole turns.

::grafico{uguale=1 nomi="Re,Im" xmin=-3 xmax=3.5 ymin=-3 ymax=3.5 curve="2*cos(t),2*sin(t),0,6.283185307179586" vettori="0,0,2.45,2.45" punti="2,0,pieno,2;0,2,pieno,2i" titolo="The image of the line $\operatorname{Re}z=\log 2$ is the circle of radius $2$. The image of the line $\operatorname{Im}z=\dfrac{\pi}{4}$ is a ray"}
:::

:::esempio{titolo="Zeros of the complex sine"}
The equation $\sin z=0$ is equivalent to $e^{iz}=e^{-iz}$ and hence to $e^{2iz}=1$. Writing $z=x+iy$ gives $|e^{2iz}|=e^{-2y}$. The modulus is one only when $y=0$. This leaves the real equation $2x=2k\pi$, which gives $z=k\pi$ with $k\in\mathbb Z$. The same calculation applies to $e^{2iz}=w$ with $w\ne0$ and $|w|\ne1$. In that case the modulus first determines $y$, and the argument then determines $x$.
:::

:::esempio{titolo="A cosine value outside its real range"}
Solve $\cos z=2$. Set $w=e^{iz}$. Then $w\ne0$, and the equation becomes $w+w^{-1}=4$. Multiplying by $w$ gives $w^2-4w+1=0$. The roots $2+\sqrt3$ and $2-\sqrt3$ are both positive, and their product is one. For $z=x+iy$, the number $e^{iz}=e^{-y}e^{ix}$ is positive real only if $x=2k\pi$, where $k$ is an integer. Comparing moduli gives $e^{-y}=2+\sqrt3$ or $e^{-y}=2-\sqrt3$. Since the two values are reciprocals, the corresponding values of $y$ have opposite signs. We obtain
$$
z=2k\pi\pm i\log(2+\sqrt3),\qquad k\in\mathbb Z.
$$
The imaginary term allows the cosine to take the required value. Indeed, if $a=\log(2+\sqrt3)$, the exponential formula gives $\cos(ia)=\dfrac{e^a+e^{-a}}2=2$.
:::

## The logarithm and complex powers

:::definizione{#logaritmo titolo="A branch of the logarithm"}
A holomorphic branch of the logarithm on an open set $\Omega$ that excludes zero is a holomorphic function $L$ satisfying $e^{L(z)}=z$. The principal branch is
$$
\operatorname{Log}z=\log|z|+i\operatorname{Arg}z,\qquad -\pi<\operatorname{Arg}z<\pi,
$$
on the domain $\mathbb C\setminus(-\infty,0]$, and its derivative is $\dfrac1z$. A branch exists on any simply connected domain that excludes zero. There is no global holomorphic branch on all of $\mathbb C\setminus\{0\}$. Once $L$ has been chosen, we define $z^\alpha=e^{\alpha L(z)}$, whose derivative is $\alpha e^{(\alpha-1)L(z)}$.

The principal square root of $i$ is $e^{\frac{i\pi}{4}}$. The two solutions of $w^2=i$ are $e^{\frac{i\pi}{4}}$ and $-e^{\frac{i\pi}{4}}$.
:::

:::attenzione
For $z=w=e^{\frac{3\pi i}{4}}$ the sum of the principal logarithms is $\dfrac{3\pi i}2$, whereas the principal logarithm of the product is $-\dfrac{\pi i}2$. The logarithm-of-a-product formula requires compatible choices of argument.
:::

:::osservazione
Along the cut for the principal logarithm, approaching a nonzero point from opposite sides gives different limiting arguments. For example, as $z\to-2$ from above, the argument tends to $\pi$. From below it tends to $-\pi$. The real part tends to $\log 2$ in both cases, so the jump between the two limiting values of the logarithm is $2\pi i$. A different cut gives another branch. For the branch with $0<\arg z<2\pi$, the nonnegative real axis is excluded.

::grafico{uguale=1 nomi="Re,Im" xmin=-4 xmax=2.5 ymin=-2.2 ymax=2.2 linee="-4,0 0,0" punti="0,0,vuoto;-2,0,vuoto" vettori="-2,1.7,-2,0.32;-2,-1.7,-2,-0.32" etichette="-1.35,1.4,Arg → π;-1.3,-1.4,Arg → −π" titolo="Approaching $-2$ from opposite sides of the principal branch cut gives different limiting arguments"}
:::

:::esempio{titolo="The principal square root"}
For $z=re^{i\theta}$ with $-\pi<\theta<\pi$, the principal square root is $\sqrt r e^{\frac{i\theta}{2}}$. Its argument lies strictly between $-\dfrac{\pi}{2}$ and $\dfrac{\pi}{2}$, so its real part is positive. If $w$ is in the right half-plane, then $w^2$ belongs to the domain of the principal branch. The principal square root halves the argument of $w^2$, recovering precisely the argument of $w$. Squaring on the right half-plane and taking the principal square root are therefore inverse operations.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.5 xmax=2.5 ymin=-2.5 ymax=2.5 curve="2*cos(t),2*sin(t),-1.5707963267948966,1.5707963267948966" punti="0,2,vuoto;0,-2,vuoto;2,0,pieno" titolo="The principal square roots of the points of modulus $4$ trace the right semicircle of radius $2$, with both endpoints excluded"}
:::

:::osservazione
Following the unit circle shows what prevents a global logarithm from existing. If $L$ were a branch on the entire punctured plane, then $\operatorname{Im}L(e^{it})-t$ would be an integer multiple of $2\pi$. It would depend continuously on $t$ and hence would be constant on $[0,2\pi]$. But the point $e^{it}$ is the same at the two endpoints, so the values of $\operatorname{Im}L(e^{it})$ would have to agree. Constancy would instead force them to differ by $2\pi$.
:::

:::esempio{titolo="A local branch around a point on the cut"}
In the disk $|z+2|<1$ we can construct a logarithm even around the point $-2$, which is excluded from the domain of the principal branch. Indeed, $\dfrac z{-2}$ belongs to the disk centered at $1$ with radius $\dfrac12$, which lies in the right half-plane. We therefore define
$$
L(z)=\log 2+i\pi+\operatorname{Log}\left(\frac z{-2}\right).
$$
Since $e^{\log 2+i\pi}=-2$ and $e^{\operatorname{Log}(\dfrac z{-2})}=\dfrac z{-2}$, the product equals $z$. The function $L$ is therefore a holomorphic branch on the disk. At $-2$ its value is $\log 2+i\pi$. To compare it with the principal branch, consider $-2+\dfrac i2$ and $-2-\dfrac i2$. At the first point the argument of $\dfrac z{-2}$ is $-\arctan\left(\dfrac14\right)$, and the resulting angle is already the principal argument. At the second point it is $\arctan\left(\dfrac14\right)$, so the resulting angle exceeds $\pi$. Subtracting $2\pi i$ gives the principal value there. This explains how the local branch can cross the cut of the principal branch.
:::

:::osservazione
For any holomorphic branch $L$, differentiating the identity $e^{L(z)}=z$ gives $e^{L(z)}L'(z)=1$ and therefore $L'(z)=\dfrac1z$. On a connected open set, two branches $L_1$ and $L_2$ differ by a constant because the derivative of their difference vanishes. The exponential of this constant equals one, so the difference is an integer multiple of $2\pi i$. The value of the branch at one point therefore determines it throughout the connected domain.

The effect of this choice on a power depends on the exponent. If the branch increases by $2\pi i$, the power with exponent $\alpha$ is multiplied by $e^{2\pi i\alpha}$. For an integer exponent the factor is one. For $\alpha=\dfrac13$, the branches $L$, $L+2\pi i$, and $L+4\pi i$ give the three distinct cube roots.
:::

## Harmonic functions and their conjugates

::::teorema{#armoniche titolo="Harmonic conjugates"}
The real and imaginary parts of a holomorphic function are harmonic. If $u\in C^2(\Omega)$ is harmonic and $\Omega$ is a simply connected open set, then there is a harmonic conjugate $v$, unique up to a real additive constant, such that $u+iv$ is holomorphic.

:::dimostrazione
If $f=u+iv$ is holomorphic, its local Taylor expansion ensures that its components have continuous second derivatives. Differentiating the Cauchy–Riemann equations gives
$$
\begin{aligned}
u_{xx}+u_{yy}&=v_{yx}-v_{xy}=0,\\
v_{xx}+v_{yy}&=-u_{yx}+u_{xy}=0.
\end{aligned}
$$
The mixed partial derivatives agree by continuity of the second derivatives, so both components are harmonic.

Conversely, if $u$ is harmonic, the real differential form $\omega=-u_y\,dx+u_x\,dy$ is closed because $\partial_y(-u_y)=-u_{yy}=u_{xx}=\partial_xu_x$. Its coefficients are of class $C^1$ and the domain is simply connected, so the theorem on closed forms guarantees that $\omega$ has a potential $v$. The identities $v_x=-u_y$ and $v_y=u_x$ give the Cauchy–Riemann equations. Since $u$ and $v$ have continuous partial derivatives, $u+iv$ is holomorphic. Two potentials differ by a constant on a connected domain, proving uniqueness up to an additive constant.
:::
::::

:::esempio{titolo="The harmonic conjugate of the real part of the squaring map"}
For $u=x^2-y^2$, the equation $v_y=u_x=2x$ determines $v=2xy+C(x)$. The other equation gives $v_x=-u_y=2y$, so $C'=0$ and $v=2xy+C$. The condition $v(0,0)=0$ selects $C=0$ and recovers the imaginary part of $z^2$.
:::

:::osservazione
Simple connectivity ensures that the integral of $-u_y\,dx+u_x\,dy$ between two points depends only on its endpoints. For $u(z)=\log|z|$ on the punctured plane, one can find a harmonic conjugate on every disk that avoids zero. A global conjugate would require the integral of the form around a loop about the origin to vanish, whereas its integral around the unit circle is $2\pi$.
:::

:::esempio{titolo="Reconstructing a complex polynomial from its real part"}
Let $u(x,y)=x^3-3xy^2+2y$ on the plane. We have $u_{xx}=6x$ and $u_{yy}=-6x$, so $u$ is harmonic. Integrating the condition $v_y=u_x=3x^2-3y^2$ with respect to $y$ gives
$$
v(x,y)=3x^2y-y^3+C(x).
$$
The term $C(x)$ may depend on $x$ because $x$ is held fixed during integration. The second equation requires $v_x=-u_y=6xy-2$. Since $v_x=6xy+C'(x)$, it follows that $C'(x)=-2$. With the normalization $v(0,0)=0$ we obtain $C(x)=-2x$.

The two components obtained in this way are those of $z^3-2iz$. Indeed, the cube contributes $x^3-3xy^2$ to the real part and $3x^2y-y^3$ to the imaginary part, while $-2iz$ adds $2y$ to the former and $-2x$ to the latter. We can therefore read the complex derivative directly from the polynomial. In this case it is $3z^2-2i$.
:::

:::esempio{titolo="Level curves of the two components"}
For $z^2=u+iv$, the curves $u=0$ are the diagonals $y=x$ and $y=-x$. The curves $v=0$ are the two axes. The zero level sets of the two components meet at the origin, where both gradients and the complex derivative vanish. At points where $f'\ne0$, the Cauchy–Riemann equations imply that the two gradients are perpendicular. The tangents to the level curves are also perpendicular there. For example, at $(1,1)$ the tangent to $u=0$ has slope $1$, and the tangent to $v=2$ has slope $-1$.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.7 xmax=3.1 ymin=-2.7 ymax=3.1 f="x;-x" curve="t,1/t,0.35,2.9" punti="1,1,pieno,P" titolo="The diagonals form the level set $u=0$ of $z^2$. The arc in the first quadrant is one branch of the level set $v=2$. The two curves meet at right angles at $P=(1,1)$"}
:::

## Conformal maps

::::teorema{#conformi titolo="Local conformality and Möbius transformations"}
If $f$ is holomorphic and $f'(z_0)\ne0$, its differential is a rotation through the angle $\arg f'(z_0)$ combined with scaling by a factor of $|f'(z_0)|$. The function locally preserves oriented angles and is locally invertible. A Möbius transformation $f(z)=\dfrac{az+b}{cz+d}$ with $ad-bc\ne0$ is conformal wherever $cz+d\ne0$.

:::dimostrazione
The differential of $f$ at $z_0$ acts by multiplication by $\lambda=f'(z_0)$. Since $\lambda\ne0$, the polar form $\lambda=|\lambda|e^{i\theta}$ gives the stated scaling and rotation. If two differentiable curves pass through $z_0$ with nonzero velocities $v_1,v_2$, the oriented angle between their tangents is the argument of $\dfrac{v_2}{v_1}$ modulo $2\pi$. The velocities of the image curves are $\lambda v_1$ and $\lambda v_2$, so the quotient that determines the angle is unchanged. The differential is invertible, so the inverse function theorem gives local invertibility.

For a Möbius transformation, the quotient rule applies wherever the denominator is nonzero and gives
$$
\begin{aligned}
f'(z)&=\frac{a(cz+d)-c(az+b)}{(cz+d)^2}\\
&=\frac{ad-bc}{(cz+d)^2}.
\end{aligned}
$$
The hypothesis $ad-bc\ne0$ therefore ensures that the derivative is nonzero throughout the domain.
:::
::::

:::esempio{titolo="From the upper half-plane to the unit disk"}
The map $w=\dfrac{z-i}{z+i}$ sends $i$ to the origin, and the point $-i$ is excluded from its domain. The real axis consists of the points equidistant from $i$ and $-i$, so their images lie on the unit circle. Above the real axis, the distance to $i$ is smaller than the distance to $-i$, so the image has modulus less than one. To see that the image is the whole disk, solve for $z$ to obtain $z=i\dfrac{1+w}{1-w}$. For $|w|<1$ this expression has imaginary part $\dfrac{1-|w|^2}{|1-w|^2}>0$, so the original point belongs to the required half-plane.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.7 xmax=3.4 ymin=-2.6 ymax=3.2 punti="0,1,pieno,i;0,-1,vuoto,−i;2,0,pieno,A;1,1.7,pieno,B" segmenti="0,1,2,0;0,-1,2,0;0,1,1,1.7;0,-1,1,1.7" titolo="The real point $A$ is equidistant from $i$ and $-i$. The point $B$ in the upper half-plane is closer to $i$"}
:::

:::attenzione
The hypothesis $f'(z_0)\ne0$ is necessary for the local conformality criterion to apply. At zero, $z^2$ sends a ray of angle $\theta$ to a ray of angle $2\theta$. For example, the angle between the positive real axis and the ray with argument $\dfrac{\pi}{4}$ changes from $\dfrac{\pi}{4}$ to $\dfrac{\pi}{2}$. Moreover, $z$ and $-z$ have the same image, so the squaring map is not injective on any disk around the origin.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.1 xmax=3.1 ymin=-1.1 ymax=3.1 vettori="0,0,2.5,0;0,0,1.75,1.75;0,0,0,2.5" etichette="1.7,2.2,π/4;0.55,2.5,π/2" titolo="At zero, squaring preserves the positive real axis and maps the direction at angle $\dfrac{\pi}{4}$ to the vertical direction"}
:::

::::teorema{#jacobiano-complesso titolo="The Jacobian and the local area scale factor"}
If $f$ is holomorphic and $f'(z_0)=a+ib$, the determinant of the real Jacobian matrix of $f$ at $z_0$ is $a^2+b^2=|f'(z_0)|^2$. If this determinant is positive, the local inverse is holomorphic and its derivative at the image point is $\dfrac{1}{f'(z_0)}$.

:::dimostrazione
By the Cauchy–Riemann equations, the two columns of the differential are $(a,b)$ and $(-b,a)$. The determinant is therefore $a^2+b^2$. When this number is positive, the real inverse function theorem gives a differentiable inverse between two neighborhoods. The differential of the inverse is the inverse of multiplication by $a+ib$, so it acts by multiplication by the reciprocal complex number. The same property holds on a smaller neighborhood because $f'$ is continuous and remains nonzero. The inverse is therefore holomorphic on that neighborhood.
:::
::::

:::esempio{titolo="The area of a square after rotation and scaling"}
For $f(z)=iz+z$ the differential is the function itself. The square with vertices $0,1,1+i,i$ has area one. The images of these vertices are $0,1+i,2i,-1+i$. The diagonals of the image square have length two, so its area is two. This number equals $|1+i|^2$. For a nonlinear function, the corresponding calculation with the differential gives the leading term of the change in area near a point where the derivative is nonzero.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.65 xmax=1.65 ymin=-0.65 ymax=2.45 poligoni="0,0 1,1 0,2 -1,1" linee="0,0 1,0 1,1 0,1 0,0" punti="0,0,pieno;1,1,pieno;0,2,pieno;-1,1,pieno" titolo="The outline shows the unit square. Its image is the shaded square of area two"}
:::

:::esempio{titolo="Inversion maps a line to a circle"}
Consider $w=\dfrac1z$ and write $w=p+iq$, with $p,q$ real. The inverse is $z=\dfrac1w$. Since the real part of $\dfrac1w$ is $\dfrac{p}{p^2+q^2}$, the image of the line $\operatorname{Re}z=2$ consists of the points $w\ne0$ satisfying $p=2(p^2+q^2)$. Completing the square gives
$$
\left(p-\frac14\right)^2+q^2=\frac1{16}.
$$
This is the circle with center $\dfrac14$ on the real axis and radius $\dfrac14$, with the origin removed. Indeed, $w=0$ satisfies the equation obtained after multiplication by $p^2+q^2$, but the inverse is defined only for $w\ne0$. The point $z=2$ lies on the line and maps to $w=\dfrac12$, the rightmost point of the circle.

The same calculation determines the image of the half-plane $\operatorname{Re}z>2$. The inequality becomes $p>2(p^2+q^2)$, so the left-hand side of the circle equation is less than $\dfrac1{16}$. The resulting open disk already excludes the origin, which lies on its boundary. Every point of the disk therefore has a preimage in the required half-plane.
:::
