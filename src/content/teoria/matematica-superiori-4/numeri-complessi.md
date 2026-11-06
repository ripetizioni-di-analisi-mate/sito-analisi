---
titolo: Numeri complessi
sommario: Forma algebrica e trigonometrica, piano di Gauss, modulo e argomento, operazioni, formula di De Moivre, radici ed equazioni.
---

## Unità immaginaria e forma algebrica

:::definizione{#algebrica titolo="Numero complesso"}
L'**unità immaginaria** $i$ soddisfa $i^2=-1$. Un **numero complesso** si scrive $z=a+bi$, con $a,b\in\mathbb R$. Il numero $a$ è la parte reale, $b$ è la parte immaginaria e si scrive $\operatorname{Re}z=a$, $\operatorname{Im}z=b$. La parte immaginaria è il coefficiente reale di $i$.

Due numeri complessi sono uguali se e solo se coincidono le rispettive parti reali e immaginarie. Per esempio $2+3i=u+(v-1)i$ equivale a $u=2$, $v=4$. I reali si identificano con i numeri complessi di parte immaginaria nulla. L'insieme dei complessi si indica con $\mathbb C$.
:::

## Operazioni e potenze di i

:::teorema{#operazioni titolo="Somma e prodotto"}
Si sommano separatamente le parti reali e immaginarie. Per il prodotto si applica la distributività e si sostituisce $i^2=-1$.
$$
\begin{aligned}
(a+bi)+(c+di)&=(a+c)+(b+d)i,\\
(a+bi)(c+di)&=(ac-bd)+(ad+bc)i.
\end{aligned}
$$
Per esempio $(2+3i)(1-2i)=2-4i+3i-6i^2=8-i$. Le potenze di $i$ si ripetono con periodo $4$, perché $i^0=1$, $i^1=i$, $i^2=-1$, $i^3=-i$, $i^4=1$. Per calcolare $i^{27}$ si considera il resto di $27$ nella divisione per $4$, che è $3$, quindi $i^{27}=-i$.
:::

## Coniugato e divisione

:::definizione{#coniugato titolo="Coniugato"}
Il **coniugato** di $z=a+bi$ è $\overline z=a-bi$. Si ha $z\overline z=a^2+b^2$, quindi per $z\neq0$
$$
\frac1z=\frac{\overline z}{a^2+b^2}.
$$
Per dividere due complessi si moltiplicano numeratore e denominatore per il coniugato del denominatore. Per esempio
$$
\frac{3+i}{1-i}=\frac{(3+i)(1+i)}{(1-i)(1+i)}
=\frac{2+4i}{2}=1+2i.
$$
Il denominatore reale ottenuto è positivo quando il divisore è diverso da zero.
:::

## Piano di Gauss e modulo

:::definizione{#modulo titolo="Rappresentazione geometrica"}
Nel **piano di Gauss**, $z=a+bi$ si rappresenta con il punto $(a,b)$. Il **modulo** è la distanza dall'origine, quindi $|z|=\sqrt{a^2+b^2}$. Il coniugato è il punto simmetrico rispetto all'asse reale. Per esempio $|3-4i|=5$.

La distanza tra due punti complessi $z$ e $w$ è $|z-w|$. L'equazione $|z-z_0|=r$, con $r>0$, rappresenta una circonferenza di centro $z_0$ e raggio $r$. Per $|z-(1+i)|=2$ il centro è $(1,1)$ e il raggio è $2$.

::grafico{vettori="0,0,3,4,z;0,0,3,-4,coniugato" punti="3,4,pieno;3,-4,pieno" xmin=-1 xmax=6 ymin=-5 ymax=5 uguale=1 nomi="Re,Im" titolo="I numeri $3+4i$ e $3-4i$ hanno lo stesso modulo"}
:::

## Argomento e forma trigonometrica

:::definizione{#trigonometrica titolo="Modulo e argomento"}
Per $z\neq0$ si chiama **argomento** un angolo $\theta$ che il vettore $(a,b)$ forma con il semiasse reale positivo. Tutti gli argomenti differiscono per multipli di $2\pi$. Con $r=|z|>0$ si scrive
$$
z=r(\cos\theta+i\sin\theta),\qquad a=r\cos\theta,\quad b=r\sin\theta.
$$
Il numero $0$ ha modulo $0$ e argomento non definito. Per $z=-1+i\sqrt3$ il modulo è $2$ e un argomento è $\dfrac{2\pi}{3}$, perché il punto è nel secondo quadrante. La sola uguaglianza $\tan\theta=\dfrac ba$ non determina il quadrante e richiede $a\neq0$.

::grafico{curve="2*cos(t),2*sin(t),0,6.283185307" vettori="0,0,-1,1.732050808,z" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" titolo="Modulo $2$ e argomento $\dfrac{2\pi}{3}$ di $-1+i\sqrt3$"}
:::

## Prodotti, quozienti e potenze

::::teorema{#demoivre titolo="Forma trigonometrica delle operazioni"}
Se $z=r(\cos\theta+i\sin\theta)$ e $w=s(\cos\varphi+i\sin\varphi)$ sono diversi da zero, il prodotto ha modulo $rs$ e argomento $\theta+\varphi$; il quoziente ha modulo $\dfrac rs$ e argomento $\theta-\varphi$. Per ogni intero $n$ vale la **formula di De Moivre**
$$
z^n=r^n(\cos n\theta+i\sin n\theta).
$$
Per $n=0$ si ottiene $1$; per $n<0$ si usa il reciproco.

:::dimostrazione
Moltiplicando le due forme trigonometriche, le parti reale e immaginaria diventano le formule di addizione di coseno e seno. Si ottiene quindi la regola del prodotto. Ripetendola $n$ volte segue la formula per $n>0$. La regola del reciproco la estende agli interi negativi.
:::
::::

:::esempio
Poiché $1+i=\sqrt2\left(\cos\dfrac\pi4+i\sin\dfrac\pi4\right)$, si ha
$$
(1+i)^6=8\left(\cos\frac{3\pi}{2}+i\sin\frac{3\pi}{2}\right)=-8i.
$$
Il modulo viene elevato alla sesta e l'argomento moltiplicato per $6$.
:::

## Radici n-esime

:::teorema{#radici titolo="Radici di un numero complesso"}
Sia $z=r(\cos\theta+i\sin\theta)\neq0$ e $n\geq1$ intero. L'equazione $w^n=z$ ha esattamente $n$ radici distinte
$$
w_k=\sqrt[n]r\left(\cos\frac{\theta+2k\pi}{n}+i\sin\frac{\theta+2k\pi}{n}\right),
\quad k=0,1,\ldots,n-1.
$$
Esse hanno lo stesso modulo e argomenti distanziati di $\dfrac{2\pi}{n}$, quindi sono i vertici di un poligono regolare per $n\geq3$. Le radici cubiche di $8$ sono $2$, $-1+i\sqrt3$ e $-1-i\sqrt3$. Elevandole al cubo si ritrova $8$.

::grafico{curve="2*cos(t),2*sin(t),0,6.283185307" punti="2,0,pieno;-1,1.732050808,pieno;-1,-1.732050808,pieno" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" titolo="Le tre radici cubiche di $8$"}
:::

## Equazioni e luoghi geometrici

:::teorema{#equazioni titolo="Equazioni quadratiche a coefficienti reali"}
Per $az^2+bz+c=0$, con $a\neq0$ reale e discriminante $\Delta=b^2-4ac<0$, le soluzioni sono
$$
z=\frac{-b\pm i\sqrt{-\Delta}}{2a}.
$$
Per esempio $z^2-2z+5=0$ ha $\Delta=-16$ e radici $1\pm2i$. Esse sono coniugate, come accade per le radici non reali di ogni polinomio a coefficienti reali.
:::

:::esempio
Se $z=x+iy$, l'equazione $|z-1|=|z+1|$ equivale a $(x-1)^2+y^2=(x+1)^2+y^2$, da cui $x=0$. Il luogo è l'asse immaginario, formato dai punti equidistanti da $(1,0)$ e $(-1,0)$. Elevare al quadrato conserva l'equivalenza perché entrambi i moduli sono non negativi.
:::
