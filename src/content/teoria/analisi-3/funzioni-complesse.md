---
titolo: "Analisi complessa: funzioni olomorfe e logaritmo"
sommario: "Derivata complessa, condizioni di Cauchy-Riemann, funzioni armoniche, esponenziale, logaritmo e trasformazioni conformi."
---

## Funzioni e limiti nel piano complesso

:::definizione{#dominio-complesso titolo="Funzione di variabile complessa"}
Una funzione $f:\Omega\subseteq\mathbb C\to\mathbb C$ si scrive $f(z)=u(x,y)+iv(x,y)$, con $z=x+iy$. Le funzioni $u,v$ sono le componenti reale e immaginaria. Il limite complesso $f(z)\to L$ richiede la convergenza lungo ogni avvicinamento a $z_0$ nel dominio. Poiché $|a+ib|^2=a^2+b^2$, ciò equivale alla convergenza delle due componenti reali.

Per $f(z)=z^2$ si ha $u=x^2-y^2$, $v=2xy$. Il dominio è $\mathbb C$ e la funzione è continua, perché le componenti sono polinomi.
:::

## Derivata complessa e olomorfia

:::definizione{#derivata-complessa titolo="Derivata e funzione olomorfa"}
Per $\Omega$ aperto e $z_0\in\Omega$, la **derivata complessa** è
$$
f'(z_0)=\lim_{h\to0,\ h\in\mathbb C}\frac{f(z_0+h)-f(z_0)}h.
$$
Il rapporto deve avere lo stesso limite per incrementi reali, immaginari e di ogni altra direzione. La funzione è **olomorfa** su $\Omega$ se è derivabile in ogni suo punto; è intera se è olomorfa su $\mathbb C$. Per $z^2$ il rapporto è $2z_0+h$, quindi $f'(z_0)=2z_0$. Somma, prodotto, quoziente e composizione si derivano con le regole usuali, nei punti in cui le espressioni sono definite.
:::

:::attenzione
Per $f(z)=\overline z$ il rapporto è $\dfrac{\overline h}h$. Vale $1$ sugli incrementi reali e $-1$ su quelli immaginari puri. Quindi la coniugazione, pur essendo continua, non è derivabile in alcun punto.
:::

## Condizioni di Cauchy-Riemann

::::teorema{#cauchy-riemann titolo="Condizioni di Cauchy-Riemann"}
Se $f=u+iv$ è derivabile in $z_0$, le derivate parziali soddisfano
$$
u_x=v_y,\qquad u_y=-v_x.
$$
Viceversa, se $u,v$ sono differenziabili come funzioni reali in $z_0$ e soddisfano queste equazioni, $f$ è derivabile e $f'(z_0)=u_x(z_0)+iv_x(z_0)$. In particolare, componenti $C^1$ che verificano le equazioni su un aperto definiscono una funzione olomorfa.

:::dimostrazione
Con incrementi reali il rapporto tende a $u_x+iv_x$; con incrementi immaginari tende a $v_y-iu_y$. L'uguaglianza dà le equazioni. Viceversa, la differenziabilità reale e le equazioni danno
$$
f(z_0+h)-f(z_0)=(u_x+iv_x)h+o(|h|).
$$
Dividendo per $h$, il resto tende a zero.
:::
::::

:::esempio{titolo="Derivabilità soltanto nell'origine"}
Per $f(z)=|z|^2$ si ha $u=x^2+y^2$, $v=0$. Le equazioni richiedono $x=y=0$. Nell'origine $\dfrac{|h|^2}h=\overline h\to0$. Quindi $f'(0)=0$, ma $f$ non è olomorfa su alcun aperto non vuoto.
:::

## Esponenziale e funzioni trigonometriche

:::definizione{#esponenziale-complesso titolo="Esponenziale complesso"}
La serie $e^z=\sum_{n=0}^{\infty}\dfrac{z^n}{n!}$ converge su tutto $\mathbb C$ e si deriva termine a termine. Vale
$$
e^{x+iy}=e^x(\cos y+i\sin y),\qquad (e^z)'=e^z.
$$
Quindi l'esponenziale è intero, non si annulla e ha periodo $2\pi i$. Le definizioni
$$
\sin z=\frac{e^{iz}-e^{-iz}}{2i},\qquad
\cos z=\frac{e^{iz}+e^{-iz}}2
$$
danno funzioni intere con le usuali formule di derivazione. Per $w\ne0$, tutte le soluzioni di $e^z=w$ sono $\log|w|+i(\theta+2k\pi)$, dove $\theta$ è un argomento di $w$ e $k\in\mathbb Z$.
:::

## Logaritmo e potenze complesse

:::definizione{#logaritmo titolo="Ramo del logaritmo"}
Un ramo olomorfo del logaritmo su un aperto $\Omega$ che esclude zero è una funzione $L$ olomorfa con $e^{L(z)}=z$. La determinazione principale è
$$
\operatorname{Log}z=\log|z|+i\operatorname{Arg}z,\qquad -\pi<\operatorname{Arg}z<\pi,
$$
sul dominio $\mathbb C\setminus(-\infty,0]$, e ha derivata $\dfrac1z$. Su un dominio semplicemente connesso che esclude zero esiste un ramo; su tutto $\mathbb C\setminus\{0\}$ un ramo olomorfo globale non esiste. Fissato $L$, si definisce $z^\alpha=e^{\alpha L(z)}$, con derivata $\alpha e^{(\alpha-1)L(z)}$.

La radice principale di $i$ è $e^{i\pi/4}$; le due soluzioni di $w^2=i$ sono $e^{i\pi/4}$ e $-e^{i\pi/4}$.
:::

:::attenzione
Per $z=w=e^{3\pi i/4}$, la somma dei logaritmi principali è $\dfrac{3\pi i}2$, mentre il logaritmo principale del prodotto è $-\dfrac{\pi i}2$. La formula per il logaritmo di un prodotto richiede compatibilità degli argomenti.
:::

## Funzioni armoniche e coniugate

:::teorema{#armoniche titolo="Coniugate armoniche"}
Le componenti di una funzione olomorfa sono lisce e armoniche, cioè $\Delta u=u_{xx}+u_{yy}=0$ e $\Delta v=0$. Ciò segue dalle condizioni di Cauchy-Riemann e dall'uguaglianza delle derivate miste. Se $u\in C^2(\Omega)$ è armonica e $\Omega$ è semplicemente connesso, esiste una coniugata $v$, unica a meno di una costante reale, con $u+iv$ olomorfa.

Per $u=x^2-y^2$, da $v_y=u_x=2x$ segue $v=2xy+C(x)$. L'altra equazione dà $v_x=-u_y=2y$, quindi $C'=0$ e $v=2xy+C$.
:::

## Trasformazioni conformi

:::teorema{#conformi titolo="Conformità locale e trasformazioni di Möbius"}
Se $f$ è olomorfa e $f'(z_0)\ne0$, il differenziale è una rotazione di angolo $\arg f'(z_0)$ e una dilatazione di fattore $|f'(z_0)|$. La funzione conserva localmente gli angoli orientati ed è localmente invertibile.

Una trasformazione di Möbius $f(z)=\dfrac{az+b}{cz+d}$, con $ad-bc\ne0$, ha derivata $\dfrac{ad-bc}{(cz+d)^2}$ ed è conforme dove è definita. Per $f(z)=\dfrac{z-i}{z+i}$ si ha $|f(z)|<1$ esattamente quando $\operatorname{Im}z>0$, perché $|z-i|<|z+i|$ equivale a $y>0$.
:::
