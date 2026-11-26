---
titolo: "Exponentials, logarithms, and their applications"
sommario: "Exponential and logarithmic functions, equations, and applications to pH, sound intensity, and half-life."
---

## Exponential growth and decay

:::definizione{#esponenziale titolo="Exponential function"}
Let $a$ be a positive real number other than one. The **exponential function** with base $a$ assigns the value $a^x$ to every real exponent $x$. The base stays fixed as the exponent varies. Its domain is $\mathbb R$ and its range is $(0,+\infty)$. Since $a^0=1$, the graph passes through $(0,1)$.

Increasing $x$ by one multiplies the value by $a$, since $a^{x+1}=a^x\cdot a$. If $a>1$, the function is strictly increasing. If $0<a<1$, it is strictly decreasing. In both cases the horizontal axis is an asymptote. The curve approaches zero as $x\to-\infty$ in the first case and as $x\to+\infty$ in the second.
:::

:::esempio{titolo="Powers of two and of one-half"}
For $x=-1,0,1,2$, the function $y=2^x$ takes the values $\dfrac12,1,2,4$, respectively. With the same exponents, the function $y=\left(\dfrac12\right)^x$ takes the values $2,1,\dfrac12,\dfrac14$. The second curve is the reflection of the first across the vertical axis, since $\left(\dfrac12\right)^x=2^{-x}$. A negative exponent therefore gives the reciprocal of the corresponding power. For example, the point $(1,2)$ on the first curve corresponds to the point $(-1,2)$ on the second.

::grafico{f="2^x;2^(-x)" xmin=-3 xmax=3 ymin=-1 ymax=6 punti="-1,2;0,1;1,2" legenda="y=2^x;y=\left(\dfrac12\right)^x" titolo="The two curves are reflections of each other across the vertical axis."}

:::

:::definizione{#fattore titolo="Factor of change per interval"}
A sequence of positive measurements has a **constant factor** $q>0$ if the ratio of each measurement to the preceding one is always $q$ over intervals of equal duration. If the initial measurement is $Q_0$, then after $n$ intervals we have $Q_n=Q_0q^n$. The factor $q$ is dimensionless because it is the ratio of two values of the same physical quantity. An increase of $12\%$ per interval corresponds to $q=1.12$. A decrease of $12\%$ corresponds to $q=0.88$.
:::

:::esempio{titolo="Percentage changes with different starting values"}
In a constant-factor model, a sensor loses $20\%$ of its sensitivity during each operating interval. After the first interval, $80\%$ of its initial sensitivity remains. The loss during the second interval is $20\%$ of the already reduced sensitivity. The fraction remaining after two intervals is therefore
$$
\frac{Q_2}{Q_0}
=\left(\frac45\right)^2
=\frac{16}{25}
=0.64.
$$
The overall loss is $36\%$. To find the factor over two intervals, multiply the two factors, since the second interval starts at the value reached at the end of the first.
:::

:::osservazione{titolo="Interpolation between successive measurements"}
A constant factor over whole intervals determines the sequence of measurements at their endpoints. To use it at an intermediate time, we must assume that the exponential model also applies to noninteger numbers of intervals. Let $\Delta t>0$ be the duration of one interval. In this case we write $Q(t)=Q_0q^{\frac{t}{\Delta t}}$. The ratio $\dfrac{t}{\Delta t}$ counts how many intervals have elapsed and is therefore dimensionless. If $Q_0=50$ and the quantity quadruples every two hours, the factor over one hour is $\sqrt4=2$. The continuous model thus predicts $100$ after one hour and $200$ after two hours. Without an assumption about the relationship between the measurements, the initial and final values alone are also consistent with a linear trend.
:::

## Logarithms, domain, and the inverse function

:::definizione{#logaritmo titolo="Logarithm to base a"}
For $a>0$, $a\ne1$, and $x>0$, the **logarithm** $\log_a x$ is the unique exponent $u$ such that $a^u=x$. The condition $x>0$ follows from the range of the exponential function. The base $a$ specifies which family of powers to use. The argument $x$ gives the number to be obtained. The result $u$ is the exponent.

For example, $\log_{10}1000=3$ since $10^3=1000$, whereas $\log_{10}(0.01)=-2$ since $10^{-2}=0.01$. The notation $\ln x$ denotes the logarithm to base $e$, where $e\approx2.718$. Both notations, with bases ten and $e$, occur in applications. Base ten is convenient for decimal scales. Base $e$ appears when a model is written using the natural exponential function.
:::

:::esempio{titolo="Finding the exponent"}
To calculate $\log_4\left(\dfrac18\right)$, it helps to express the base and the argument as powers of two. Setting $u$ equal to the result gives
$$
\begin{aligned}
4^u &= \frac18,\\[6pt]
2^{2u} &= 2^{-3},\\[6pt]
u &= -\frac32.
\end{aligned}
$$
The base two is greater than one, so equality of the powers requires equality of their exponents. A negative result is consistent with an argument less than one and a base greater than one.
:::

:::osservazione{#inverse titolo="Graphs of inverse functions"}
Passing from $y=a^x$ to $x=\log_a y$ interchanges the given quantity and the unknown. Thus, on the graph, a point $(x,y)$ on the exponential curve corresponds to the point $(y,x)$ on the logarithmic curve. The two graphs are reflections of each other across the line $y=x$. The point $(0,1)$ on the exponential curve corresponds to the point $(1,0)$ on the logarithmic curve. The horizontal asymptote of the exponential curve corresponds to the vertical asymptote $x=0$ of the logarithmic curve.

::grafico{f="2^x;log(x)/log(2);x" xmin=-2 xmax=5 ymin=-2 ymax=5 uguale=1 punti="0,1;1,0;1,2;2,1" legenda="y=2^x;y=\log_2 x;y=x" titolo="Reflection across the line bisecting the first quadrant interchanges the coordinates of each point."}

For $a>1$, the logarithm is increasing. It is negative for $0<x<1$, zero for $x=1$, and positive for $x>1$. For $0<a<1$, the logarithm is decreasing, so it is positive for $0<x<1$ and negative for $x>1$. For example, $\log_{\frac12}4=-2$ since $\left(\dfrac12\right)^{-2}=4$. The sign must therefore be determined from both the argument and the base.
:::

:::attenzione{titolo="Zero or negative arguments"}
Over the real numbers, the logarithms of zero and of negative numbers are undefined. For example, $\log_2(3-x)$ requires $3-x>0$, so $x<3$. For $x=4$, the argument is $-1$. No real power of two has this value.
:::

:::esempio{titolo="Ordering the arguments when the base is less than one"}
Consider the inequality $\log_{\frac12} x>2$. First require $x>0$. Since $\left(\dfrac12\right)^2=\dfrac14$, the right-hand side is $\log_{\frac12}\left(\dfrac14\right)$. The logarithmic function with base one-half is strictly decreasing. Its value is therefore greater than two when its argument is less than one-quarter. The two conditions that must hold simultaneously are
$$
\begin{cases}
x>0,\\
x<\frac14.
\end{cases}
$$
The argument $\dfrac18$ lies in this interval and its logarithm is three. The value $\dfrac12$ lies outside the interval and its logarithm is one. If the base were greater than one, the arguments would be ordered in the same direction as their logarithms.
:::

## Logarithm rules and change of base

::::teorema{#proprieta titolo="Logarithms of products, quotients, and powers"}
For $a>0$, $a\ne1$, $x>0$, $y>0$, and $r\in\mathbb R$, the following identities hold
$$
\begin{aligned}
\log_a(xy)&=\log_a x+\log_a y,\\[6pt]
\log_a\left(\frac{x}{y}\right)&=\log_a x-\log_a y,\\[6pt]
\log_a(x^r)&=r\log_a x.
\end{aligned}
$$
The three identities turn operations on positive quantities into operations on exponents. For example, in scientific notation they allow us to separate the contribution of a coefficient from that of a power of ten.

:::dimostrazione
Express the two arguments as powers of the same base. Let $u=\log_a x$ and $v=\log_a y$. By definition, $x=a^u$ and $y=a^v$. The rules for powers give
$$
xy=a^{u+v},\qquad \frac{x}{y}=a^{u-v},\qquad x^r=a^{ur}.
$$
For each positive argument, the logarithm to base $a$ gives the exponent of $a$ in the corresponding equation. Thus the results, in order, are $u+v$, $u-v$, and $ur$.
:::
::::

:::esempio{titolo="Separating the coefficient from the order of magnitude"}
Let $w=2\cdot10^{-3}$. The coefficient $2$ lies between $1$ and $10$. Since the base-ten logarithm is increasing, $\log_{10}2$ lies between $0$ and $1$. It follows that $\log_{10}w$ lies between $-3$ and $-2$. For a numerical calculation, given $\log_{10}2\approx0.301$, we obtain
$$
\begin{aligned}
\log_{10}w
&=\log_{10}2+\log_{10}(10^{-3})\\[6pt]
&\approx 0.301-3=-2.699.
\end{aligned}
$$
The estimate lies in the predicted interval. This estimate makes it possible to catch a sign error before using the result in a subsequent calculation.
:::

:::osservazione{#cambio-base titolo="Change of base"}
Let $a$ and $b$ be two positive bases other than one, and let $x>0$. Setting $u=\log_a x$ gives $a^u=x$. Take the logarithm to base $b$ of both sides and use the power rule. This gives
$$
u\log_b a=\log_b x,\qquad
\log_a x=\frac{\log_b x}{\log_b a}.
$$
Since $a\ne1$, the denominator is nonzero. For example,
$\log_8 4=\dfrac{\ln 4}{\ln 8}=\dfrac{2\ln 2}{3\ln 2}=\dfrac23$. The change-of-base formula also allows us to use a base available on a calculator, provided we use the same base in the numerator and denominator.
:::

::::teorema{#scambio-base titolo="Interchanging the base and the argument"}
Let $a$ and $b$ be two positive numbers other than one. Then
$$
\log_a b\cdot\log_b a=1,\qquad \log_a b=\frac{1}{\log_b a}.
$$
This relation is useful when the base and the argument of a known logarithm are interchanged. For example, $\log_8 2=\dfrac{1}{\log_2 8}=\dfrac13$, since $\log_2 8=3$. Similarly, given $\log_2 3\approx1.585$, we obtain $\log_3 2\approx0.631$.

:::dimostrazione
Apply the change-of-base formula to $\log_a b$, choosing $b$ as the new base. Since $\log_b b=1$, we obtain
$$
\log_a b=\frac{\log_b b}{\log_b a}=\frac{1}{\log_b a}.
$$
The denominator is nonzero because $a\ne1$. Multiplying both sides by $\log_b a$ gives the first equality.
:::
::::

:::attenzione{titolo="Sums inside a logarithm"}
The product rule does not apply to a sum of arguments. For example, $\log_{10}(1+9)=1$, whereas $\log_{10}1+\log_{10}9=\log_{10}9<1$. The first expression calls for the logarithm of ten. The second is the logarithm of the product of one and nine.
:::

:::esempio{titolo="Logarithm of a ratio of measurements"}
Two samples have masses $m_1=12\,\mathrm g$ and $m_2=3\,\mathrm g$. We want the base-two logarithm of their ratio. Since the units are the same, the ratio is the number four and its logarithm is two. To perform the same calculation with the second mass expressed in milligrams, first rewrite the first mass as $12000\,\mathrm{mg}$. The result is still two. In general, to take the logarithm of a measured quantity, we take the logarithm of its ratio to a reference value for the same quantity. This makes the result independent of the choice of unit, provided both values are converted.
:::

## Exponential and logarithmic equations

:::osservazione{#equazioni titolo="Isolating the power"}
For $a>0$, $a\ne1$, and $b>0$, the equation $a^x=b$ has the solution $x=\log_a b$. If $b$ is a recognizable power of $a$, we can equate the exponents. In other cases a logarithm still gives an exact solution. Before taking the logarithm, isolate the power, since the argument must be the ratio or positive quantity equal to that power.
:::

:::esempio{titolo="An unknown in the exponent"}
To solve $3\cdot2^{x-1}=15$, divide by three and take the base-two logarithm. We have
$$
\begin{aligned}
2^{x-1}&=5,\\[6pt]
x-1&=\log_2 5,\\[6pt]
x&=1+\log_2 5.
\end{aligned}
$$
Since $2^2<5<2^3$, we obtain $3<x<4$. This interval is consistent with the original problem because the left-hand side equals twelve for $x=3$ and twenty-four for $x=4$.

::grafico{f="3*2^(x-1);15" xmin=0 xmax=5 ymin=0 ymax=26 punti="3.321928,15" segmenti="3.321928,0,3.321928,15" legenda="y=3\cdot2^{x-1};y=15" titolo="The horizontal coordinate of the intersection is the solution of the equation."}

:::

:::esempio{titolo="Simultaneous conditions on the arguments"}
To solve $\log_2(x-2)+\log_2(x-4)=3$, both arguments must be positive. Therefore, $x>2$ and $x>4$ must hold simultaneously, so the domain is $(4,+\infty)$. On this domain the sum of the logarithms can be written as the logarithm of the product. It follows that
$$
\begin{aligned}
\log_2((x-2)(x-4))&=3,\\[6pt]
(x-2)(x-4)&=8,\\[6pt]
x^2-6x&=0,\\[6pt]
x(x-6)&=0.
\end{aligned}
$$
The algebraic roots are zero and six. Only six belongs to the domain. Indeed, for $x=6$ the arguments are four and two, so their logarithms are two and one, respectively. For $x=0$ the product is positive, but both factors are negative. This is why the condition on the product alone does not describe the domain of the original equation.
:::

:::esempio{titolo="Initial value and equilibrium level"}
For $t\ge0$, a quantity measured in arbitrary units follows the model $Q(t)=10+32e^{-kt}$, with $k>0$. If $Q(t)=18$, subtracting the equilibrium level of ten and dividing by thirty-two gives $e^{-kt}=\dfrac14$. Therefore, $t=\dfrac{\ln 4}{k}$. The part that decays exponentially is the excess above the equilibrium level, namely $Q(t)-10$. Since the exponential is positive at every finite time, the model gives values greater than ten. As time increases, the quantity approaches a threshold of exactly ten. We can establish this before attempting a calculation with logarithms.
:::

## pH and concentration

:::definizione{#ph titolo="pH and hydrogen ion activity"}
The **pH** is the negative of the base-ten logarithm of the hydrogen ion activity. The activity $a_{\mathrm{H^+}}>0$ is dimensionless. In exercises involving sufficiently dilute, approximately ideal aqueous solutions, we use the ratio of the molar concentration $c=[\mathrm{H_3O^+}]$ to the reference concentration $c^\circ=1\,\mathrm{mol/L}$. We have
$$
\mathrm{pH}=-\log_{10}a_{\mathrm{H^+}}
\approx -\log_{10}\left(\frac{c}{c^\circ}\right).
$$
The concentration has units, whereas the ratio $\dfrac{c}{c^\circ}$ is a pure number. For example, if $c=10^{-3}\,\mathrm{mol/L}$, the ratio is $10^{-3}$ and the pH is approximately three. The minus sign turns the negative exponent of the power of ten into a positive value on the pH scale.
:::

:::esempio{titolo="Estimating concentration from pH"}
In a dilute ideal solution with a pH of $5.30$, the base-ten logarithm of $\dfrac{c}{c^\circ}$ is approximately $-5.30$. Assuming $\log_{10}2\approx0.30$, we can write
$$
\begin{aligned}
c &\approx 10^{-5.30}c^\circ\\[6pt]
&\approx \frac{10^{-5}}{2}c^\circ\\[6pt]
&=5\cdot10^{-6}\,\mathrm{mol/L}.
\end{aligned}
$$
The power of ten splits into the product of $10^{-5}$ and $10^{-0.30}$. The second factor is approximately one-half. The resulting concentration therefore lies between $10^{-6}$ and $10^{-5}\,\mathrm{mol/L}$, as expected for a pH between five and six.
:::

:::osservazione{#confronto-ph titolo="Change in pH and the activity ratio"}
Let $a_1,a_2>0$ be the activities in two solutions. Subtracting the two pH values and using the logarithm of a quotient gives
$$
\begin{aligned}
\mathrm{pH}_2-\mathrm{pH}_1
&=-\log_{10}\left(\frac{a_2}{a_1}\right),\\[6pt]
\frac{a_2}{a_1}
&=10^{-(\mathrm{pH}_2-\mathrm{pH}_1)}.
\end{aligned}
$$
If the pH changes from four to six, the final activity is one-hundredth of the initial activity. In the dilute ideal solution approximation, approximately the same ratio holds for the hydronium concentrations. On the graph, the horizontal coordinate is $z=\log_{10}\left(\dfrac{c}{c^\circ}\right)$. Therefore each one-unit horizontal step corresponds to a factor of ten in concentration.

::grafico{f="-x" xmin=-8 xmax=0.8 ymin=0 ymax=8.7 nomi="z,pH" punti="-6,6;-4,4;-2,2" segmenti="-6,0,-6,6;-4,0,-4,4;-2,0,-2,2" legenda="\mathrm{pH}=-\log_{10}\left(\dfrac{c}{c^\circ}\right)" titolo="The horizontal axis shows the logarithm of the relative concentration."}

:::

:::attenzione{titolo="Averaging pH values"}
The arithmetic mean of the pH values differs from the pH of the arithmetic mean of the activities. For example, pH values of three and five correspond to activities of $10^{-3}$ and $10^{-5}$. Their arithmetic mean is $5.05\cdot10^{-4}$, which differs from the activity $10^{-4}$ corresponding to a pH of four. Calculating the pH of a mixture also requires chemical information that determines the concentration or activity after mixing.
:::

:::esempio{titolo="Dilution with a fixed amount of solute"}
In an idealized exercise, a dilute solution of a strong monoprotic acid is diluted from $20$ to $200\,\mathrm{mL}$ while the amount of solute remains constant. Assume complete dissociation and a negligible contribution from water even after dilution. Since the final volume is ten times the initial volume, the hydronium concentration falls to one-tenth of its initial value. If the initial pH is three, we obtain
$$
\mathrm{pH}_{\mathrm f}\approx 3-\log_{10}\left(\frac1{10}\right)=4.
$$
Here the assumptions about dissociation and water allow us to find the factor by which the hydronium concentration changes directly from the dilution factor. In other exercises the new pH also depends on chemical equilibria, so the volume factor alone is insufficient.
:::

## Sound intensity and decibels

:::definizione{#decibel titolo="Sound intensity level"}
Let $I>0$ be the sound intensity and $I_0>0$ the reference intensity, expressed in the same units. The **sound intensity level** is
$$
L=10\log_{10}\left(\frac{I}{I_0}\right)\,\mathrm{dB}.
$$
When $I$ is measured in $\mathrm{W/m^2}$, a conventional reference is $I_0=10^{-12}\,\mathrm{W/m^2}$. The ratio is dimensionless. If $I=I_0$, the ratio is one and the level is zero decibels. If $I$ is below the reference, the level is negative even though the intensity is positive. For example, $I=\dfrac{I_0}{10}$ corresponds to $-10\,\mathrm{dB}$.
:::

:::esempio{titolo="Levels relative to the same reference"}
Let $I_1$ and $I_2$ be two intensities and let $L_1=40\,\mathrm{dB}$ and $L_2=70\,\mathrm{dB}$ be the levels measured relative to the same $I_0$. The reference cancels in the difference of the logarithms. This gives
$$
\begin{aligned}
L_2-L_1
&=10\log_{10}\left(\frac{I_2}{I_1}\right)\,\mathrm{dB},\\[6pt]
30\,\mathrm{dB}
&=10\log_{10}\left(\frac{I_2}{I_1}\right)\,\mathrm{dB},\\[6pt]
\frac{I_2}{I_1}&=10^3.
\end{aligned}
$$
An increase of thirty decibels therefore corresponds to a thousandfold increase in intensity. If the levels were interchanged, the difference would be negative and the ratio of final to initial intensity would be one-thousandth.
:::

:::osservazione{#scala-sonora titolo="A scale for intensity ratios"}
Setting $z=\log_{10}\left(\dfrac{I}{I_0}\right)$ gives a level in decibels of $10z$. Thus two intensities that differ by a given factor produce the same difference in level regardless of the starting values. Going from $I_0$ to $10I_0$ raises the level by ten decibels. Going from $100I_0$ to $1000I_0$ also produces an increase of ten decibels.

::grafico{f="10*x" xmin=-0.6 xmax=4.8 ymin=0 ymax=49 nomi="z,L (dB)" punti="0,0;1,10;2,20;3,30;4,40" segmenti="1,0,1,10;2,0,2,20;3,0,3,30;4,0,4,40" legenda="L=10z\,\mathrm{dB}" titolo="Each unit increase in z corresponds to a tenfold increase in intensity."}

:::

:::esempio{titolo="Adding intensities"}
Suppose two incoherent sources each produce a level of $60\,\mathrm{dB}$ at the measurement point relative to the same reference. In this model the intensities add. Each is $I_0\,10^6$, so the total intensity is $2I_0\,10^6$. Given $\log_{10}2\approx0.301$, we find
$$
\begin{aligned}
L_{\mathrm{tot}}
&=10\log_{10}(2\cdot10^6)\,\mathrm{dB}\\[6pt]
&\approx 10(0.301+6)\,\mathrm{dB}\\[6pt]
&=63.01\,\mathrm{dB}.
\end{aligned}
$$
The contribution from the second source doubles the initial intensity and adds about three decibels. The intensities add under the assumption of incoherence stated in the problem.
:::

:::esempio{titolo="Distance and sound intensity level"}
In a model with no absorption or reflection, a point source radiates uniformly in all directions. The intensity at distance $r>0$ is proportional to $\dfrac{1}{r^2}$. If the measurement point moves from $r_1$ to $r_2=2r_1$, the ratio of the intensities is
$$
\begin{aligned}
\frac{I_2}{I_1}&=\left(\frac{r_1}{r_2}\right)^2=\frac14,\\[6pt]
\Delta L&=10\log_{10}\left(\frac14\right)\,\mathrm{dB}
=-20\log_{10}2\,\mathrm{dB}.
\end{aligned}
$$
Since $\log_{10}2\approx0.301$, the decrease is approximately $6.02\,\mathrm{dB}$. The coefficient of twenty in this expression comes from the square of the distance. The original formula for the ratio of intensities retains the coefficient of ten.
:::

## Decay and half-life

:::definizione{#dimezzamento titolo="Half-life in exponential decay"}
Let $N_0>0$ be the initial quantity, $t\ge0$ the elapsed time, and $k>0$ the decay constant. The model is $N(t)=N_0e^{-kt}$. The constant $k$ has units of inverse time, so the product $kt$ is dimensionless. The **half-life** $T_{\frac12}$ is the time it takes for the quantity to fall to half its value. Taking the natural logarithm of the ratio $\dfrac{N(T_{\frac12})}{N_0}$ gives
$$
e^{-kT_{\frac12}}=\frac12,\qquad
T_{\frac12}=\frac{\ln 2}{k}.
$$
The ratio $\dfrac{N(t+T_{\frac12})}{N(t)}=e^{-kT_{\frac12}}=\dfrac12$ holds for every $t\ge0$. The half-life is therefore the same even if we start timing after the initial instant.
:::

::::teorema{#frazione-residua titolo="Fraction remaining after a given time"}
In the model $N(t)=N_0e^{-kt}$, with $N_0>0$, $k>0$, and half-life $T_{\frac12}$, the following holds for every $t\ge0$
$$
\frac{N(t)}{N_0}=\left(\frac12\right)^{\frac{t}{T_{\frac12}}}.
$$
The exponent $\dfrac{t}{T_{\frac12}}$ counts elapsed half-lives, including fractional ones. This formula lets us solve a decay problem directly from $T_{\frac12}$, without calculating $k$. For example, with $T_{\frac12}=4\,\mathrm h$, the fraction of the initial quantity remaining after $12\,\mathrm h$ is $\left(\dfrac12\right)^3=\dfrac18$, and after $2\,\mathrm h$ it is $\left(\dfrac12\right)^{\frac12}=\dfrac{1}{\sqrt2}\approx0.71$.

:::dimostrazione
Express $k$ in terms of the half-life and rewrite $e^{-kt}$ as a power of one-half. The relation $T_{\frac12}=\dfrac{\ln 2}{k}$ gives $k=\dfrac{\ln 2}{T_{\frac12}}$. Therefore
$$
\begin{aligned}
\frac{N(t)}{N_0}=e^{-kt}&=e^{-\frac{t}{T_{\frac12}}\ln 2}\\[6pt]
&=\left(e^{\ln 2}\right)^{-\frac{t}{T_{\frac12}}}\\[6pt]
&=2^{-\frac{t}{T_{\frac12}}}\\[6pt]
&=\left(\frac12\right)^{\frac{t}{T_{\frac12}}}.
\end{aligned}
$$
The second step uses the rule for a power raised to a power. The third uses the equality $e^{\ln 2}=2$, which follows from the definition of the natural logarithm.
:::
::::

:::esempio{titolo="Quantity after equal time intervals"}
With an initial quantity of $80\,\mathrm{mg}$ and a half-life of $3\,\mathrm{h}$, the quantities at times $0$, $3$, $6$, and $9\,\mathrm{h}$ are $80$, $40$, $20$, and $10\,\mathrm{mg}$, respectively. The amount lost during each interval is half the amount present at its start. Therefore the absolute loss is $40\,\mathrm{mg}$ in the first interval, $20\,\mathrm{mg}$ in the second, and $10\,\mathrm{mg}$ in the third. Equal intervals give equal ratios.

::grafico{curve="t,80*2^(-t/3),0,9.5" xmin=-0.4 xmax=9.5 ymin=0 ymax=94 nomi="t,N (mg)" punti="0,80;3,40;6,20;9,10" segmenti="3,0,3,40;6,0,6,20;9,0,9,10" legenda="N(t)=80\cdot2^{-\frac{t}{3\,\mathrm{h}}}\,\mathrm{mg}" titolo="Time t is expressed in hours. Every three hours the remaining quantity is halved."}

:::

:::esempio{titolo="Time needed to reach a given fraction"}
With $T_{\frac12}=6\,\mathrm{h}$, the time required for the quantity to decrease to one-fifth of its initial value can be found from
$$
\begin{aligned}
\left(\frac12\right)^{\frac{t}{6\,\mathrm{h}}}&=\frac15,\\[6pt]
-\frac{t}{6\,\mathrm{h}}\ln 2&=-\ln 5,\\[6pt]
t&=\frac{\ln 5}{\ln 2}\cdot6\,\mathrm{h}\approx13.93\,\mathrm{h}.
\end{aligned}
$$
After two half-lives, one-quarter of the initial quantity remains. After three, one-eighth remains. Since one-fifth lies between one-eighth and one-quarter, the calculated time must lie between twelve and eighteen hours.
:::

:::esempio{titolo="Finding the decay constant from two measurements"}
Let $N(2\,\mathrm{h})=90\,\mathrm{mg}$ and $N(6\,\mathrm{h})=30\,\mathrm{mg}$, and assume exponential decay. Dividing the second measurement by the first eliminates the unknown $N_0$. The time to use in the ratio is the interval between the measurements, which is four hours. We have
$$
\begin{aligned}
e^{-k\cdot4\,\mathrm{h}}&=\frac{30}{90}=\frac13,\\[6pt]
k&=\frac{\ln 3}{4}\,\mathrm{h}^{-1},\\[6pt]
T_{\frac12}&=\frac{4\ln 2}{\ln 3}\,\mathrm{h}\approx2.52\,\mathrm{h}.
\end{aligned}
$$
The quantity falls to one-third of its value in four hours, so it must reach one-half sooner. After two half-lives, one-quarter would remain. Since one-third is greater than one-quarter, two half-lives together must last longer than four hours.
:::

## Identifying the model from a table

:::osservazione{#linearizzazione titolo="Constant ratios and a logarithmic plot"}
If the measurements $Q(t)>0$ follow $Q(t)=Q_0e^{\lambda t}$ with constant $\lambda$, then
$$
\ln\left(\frac{Q(t)}{Q_0}\right)=\lambda t.
$$
On a graph with time on the horizontal axis and the logarithm of the ratio on the vertical axis, the model therefore gives a straight line through the origin. Its slope $\lambda$ has units of inverse time. It is positive when the quantity increases and negative when it decreases. Measurements that lie on a straight line within experimental uncertainty are consistent with this law over the observed interval.

The numerical value of the slope depends on the unit of time. For example, a slope of $-0.6\,\mathrm{h}^{-1}$ is equivalent to $-0.01\,\mathrm{min}^{-1}$, since an hour contains sixty minutes. After two hours the logarithm of the ratio is $-0.6\cdot2=-1.2$. The same value is obtained by multiplying $-0.01$ by one hundred twenty minutes.
:::

:::esempio{titolo="Distinguishing differences from ratios"}
In model A the values at times $0$, $1$, and $2$ are $81$, $54$, and $36$. The successive differences are $-27$ and $-18$, while both ratios are $\dfrac23$. A constant-factor model consistent with these three data points predicts $24$ at time $3$. In model B the values at the same times are $81$, $66$, and $51$. Both differences are $-15$, while the ratios are different. A constant-difference model therefore predicts $36$ at time $3$.

::grafico{f="81*(2/3)^x;81-15*x" xmin=-0.4 xmax=3.6 ymin=0 ymax=95 punti="0,81;1,54;2,36;3,24;1,66;2,51;3,36" legenda="y=81\left(\dfrac23\right)^x;y=81-15x" titolo="For equally spaced measurements, the curve gives constant ratios and the straight line gives constant differences."}

The two models start at the same value, and both describe a decrease over the interval considered. The initial value and the direction of change are therefore insufficient to distinguish the two laws. Comparing the ratios and the differences also takes into account how far apart in time the measurements are.
:::

:::esempio{titolo="Slope between measurements taken at unequal intervals"}
Three positive measurements of a quantity are $4$, $12$, and $108$ at times of zero, one hour, and three hours, respectively. The time intervals are one and two hours, so consecutive ratios need not agree. To compare them, calculate the change in the logarithm per unit time.
$$
\begin{aligned}
\lambda_1&=\frac{\ln\left(\frac{12}{4}\right)}{1\,\mathrm h}=\ln 3\,\mathrm h^{-1},\\[6pt]
\lambda_2&=\frac{\ln\left(\frac{108}{12}\right)}{2\,\mathrm h}=\frac{\ln 9}{2}\,\mathrm h^{-1}=\ln 3\,\mathrm h^{-1}.
\end{aligned}
$$
The slopes are equal. The measurements are consistent with a model in which the quantity triples every hour. The second interval lasts two hours, so the factor is nine. Comparing the ratios directly would incorrectly attribute the effect of the different interval lengths to a change in rate.
:::

:::osservazione{titolo="Comparison with a later measurement"}
A slope estimated from two points gives a model that passes through both. A third measurement allows us to check the prediction. In the model from the example, the predicted measurement at two hours is $36$. If the observed measurement were $27$ with an uncertainty of one unit, the discrepancy would be too large to attribute to that uncertainty. The straight line on the logarithmic plot therefore provides a way to compare several measurements against a single rate.
:::
