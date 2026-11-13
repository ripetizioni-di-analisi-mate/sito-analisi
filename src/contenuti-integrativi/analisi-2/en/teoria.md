## Linear systems of differential equations

:::definizione{#sistema-lineare-costante titolo="Homogeneous linear system with constant coefficients"}
In the system $Y'=AY$, $Y(x)$ is the vector of unknown functions and $A$ is the constant coefficient matrix. The initial value problem specifies the initial vector $Y(x_0)=Y_0$. If $Av=\lambda v$, with $v\neq 0$, then $Y(x)=e^{\lambda(x-x_0)}v$ is a solution, because differentiating the exponential factor is equivalent to multiplying the vector $v$ by $A$.
:::

:::teorema{#sistema-per-diagonalizzazione titolo="Solving a linear system by diagonalization"}
If $A=PDP^{-1}$ with $D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$, the columns of $P$ form a basis of eigenvectors. Setting $Z=P^{-1}Y$ gives $Z'=DZ$, so each coordinate satisfies $z_i'=\lambda_i z_i$. With $Z_0=P^{-1}Y_0$, the solution is obtained from $z_i(x)=e^{\lambda_i(x-x_0)}(Z_0)_i$ and $Y(x)=PZ(x)$. The initial coordinates must be expressed in the eigenvector basis before applying the exponentials.
:::

:::esempio{titolo="Arbitrary initial conditions in two dimensions"}
For $A=\begin{pmatrix}3&1\\1&3\end{pmatrix}$, the eigenvectors $(1,1)$ and $(1,-1)$ have eigenvalues $4$ and $2$. If $Y(0)=(a,b)$, write
$$
(a,b)=\frac{a+b}{2}(1,1)+\frac{a-b}{2}(1,-1).
$$
Multiplying the two components by their corresponding exponentials gives
$$
Y(x)=\frac{a+b}{2}e^{4x}(1,1)+\frac{a-b}{2}e^{2x}(1,-1).
$$
:::

## Matrix exponential

:::definizione{#esponenziale-di-matrice titolo="Matrix exponential"}
For a square matrix $A$, define
$$
e^{tA}=I+tA+\frac{t^2A^2}{2!}+\cdots.
$$
The series converges for every $t\in\mathbb R$. Differentiating it term by term gives $(e^{tA})'=Ae^{tA}$, with $e^{0A}=I$. Therefore the solution to the initial value problem is $Y(x)=e^{(x-x_0)A}Y_0$. The columns of $e^{tA}$ are obtained by solving the system with the standard basis vectors as initial conditions.
:::

:::teorema{#calcolo-esponenziale-matrice titolo="Computing the matrix exponential"}
If $A=PDP^{-1}$ with $D$ diagonal, then for every $k\ge 0$ we have $A^k=PD^kP^{-1}$. Substituting into the series gives
$$
e^{tA}=P\,\operatorname{diag}(e^{t\lambda_1},\dots,e^{t\lambda_n})\,P^{-1}.
$$
If $A=\lambda I+N$ and $N^2=0$, the two summands commute and the series for $e^{tN}$ stops at $I+tN$. Hence $e^{tA}=e^{t\lambda}(I+tN)$, even when there is no eigenvector basis.
:::
