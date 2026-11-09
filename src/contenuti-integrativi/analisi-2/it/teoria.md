## Sistemi lineari di equazioni differenziali

:::definizione{#sistema-lineare-costante titolo="Sistema lineare omogeneo a coefficienti costanti"}
Nel sistema $Y'=AY$, $Y(x)$ è il vettore delle funzioni incognite e $A$ è la matrice costante dei coefficienti. Per il problema di Cauchy si assegna il vettore iniziale $Y(x_0)=Y_0$. Se $Av=\lambda v$, con $v\neq 0$, allora $Y(x)=e^{\lambda(x-x_0)}v$ è una soluzione, perché derivare il fattore esponenziale equivale a moltiplicare il vettore $v$ per $A$.
:::

:::teorema{#sistema-per-diagonalizzazione titolo="Risoluzione di un sistema lineare mediante diagonalizzazione"}
Se $A=PDP^{-1}$ con $D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$, le colonne di $P$ sono una base di autovettori. Ponendo $Z=P^{-1}Y$ si ottiene $Z'=DZ$, quindi ogni coordinata soddisfa $z_i'=\lambda_i z_i$. Con $Z_0=P^{-1}Y_0$, la soluzione si ricava da $z_i(x)=e^{\lambda_i(x-x_0)}(Z_0)_i$ e $Y(x)=PZ(x)$. Le coordinate iniziali vanno espresse nella base degli autovettori prima di applicare gli esponenziali.
:::

:::esempio{titolo="Condizioni iniziali arbitrarie in due dimensioni"}
Per $A=\begin{pmatrix}3&1\\1&3\end{pmatrix}$, gli autovettori $(1,1)$ e $(1,-1)$ hanno autovalori $4$ e $2$. Se $Y(0)=(a,b)$, si scrive
$$
(a,b)=\frac{a+b}{2}(1,1)+\frac{a-b}{2}(1,-1).
$$
Moltiplicando le due componenti per i rispettivi esponenziali si ottiene
$$
Y(x)=\frac{a+b}{2}e^{4x}(1,1)+\frac{a-b}{2}e^{2x}(1,-1).
$$
:::

## Esponenziale di matrice

:::definizione{#esponenziale-di-matrice titolo="Esponenziale di matrice"}
Per una matrice quadrata $A$ si definisce
$$
e^{tA}=I+tA+\frac{t^2A^2}{2!}+\cdots.
$$
La serie converge per ogni $t\in\mathbb R$. Derivandola termine a termine si ottiene $(e^{tA})'=Ae^{tA}$, con $e^{0A}=I$. Perciò la soluzione del problema di Cauchy è $Y(x)=e^{(x-x_0)A}Y_0$. Le colonne di $e^{tA}$ si ottengono risolvendo il sistema con i vettori della base canonica come condizioni iniziali.
:::

:::teorema{#calcolo-esponenziale-matrice titolo="Calcolo dell'esponenziale di una matrice"}
Se $A=PDP^{-1}$ con $D$ diagonale, per ogni $k\ge 0$ vale $A^k=PD^kP^{-1}$. Sostituendo nella serie si ottiene
$$
e^{tA}=P\,\operatorname{diag}(e^{t\lambda_1},\dots,e^{t\lambda_n})\,P^{-1}.
$$
Se $A=\lambda I+N$ e $N^2=0$, i due addendi commutano e la serie di $e^{tN}$ si ferma a $I+tN$. Quindi $e^{tA}=e^{t\lambda}(I+tN)$, anche quando manca una base di autovettori.
:::
