---
titolo: Interference and diffraction of light
sommario: Phase differences determine Young's fringes, diffraction minima, and grating
  orders.
---

## Light as a wave

:::definizione{#luce-onda titolo="Frequency and wavelength"}
The **wavelength** is the distance between consecutive points with the same phase along the direction of propagation. Frequency $f$ is the number of oscillations per second. In a medium where light has phase speed $u$, we have $u=f\lambda$. In vacuum $u=c$ and the wavelength is denoted by $\lambda_0$.
$$
c=f\lambda_0,\qquad c=3.00\cdot10^8\,\mathrm{m/s}.
$$
Light with $\lambda_0=600\,\mathrm{nm}=6.00\cdot10^{-7}\,\mathrm m$ has $f=5.00\cdot10^{14}\,\mathrm{Hz}$. At a stationary interface the frequency remains the same. In a medium of index $n$, $u=\dfrac cn$, so $\lambda=\dfrac{\lambda_0}{n}$. At $n=1.50$ the light in this example has $\lambda=400\,\mathrm{nm}$.
:::

:::esempio{titolo="Frequencies of visible light"}
In vacuum the visible range runs from about $380\,\mathrm{nm}$ (violet) to about $750\,\mathrm{nm}$ (red). For $\lambda_0=750\,\mathrm{nm}$ we have $f=\dfrac{3.00\cdot10^8}{7.50\cdot10^{-7}}\,\mathrm{Hz}=4.00\cdot10^{14}\,\mathrm{Hz}$, and for $\lambda_0=380\,\mathrm{nm}$ we have $f=7.89\cdot10^{14}\,\mathrm{Hz}$. The frequency of violet is therefore almost twice that of red.
:::

:::attenzione
The color of light is associated with its frequency, which does not change at the interface. Red light with $\lambda_0=700\,\mathrm{nm}$ entering glass with $n=1.50$ has $\lambda=\dfrac{700}{1.50}\,\mathrm{nm}=467\,\mathrm{nm}$, a value that corresponds to blue in vacuum. The light in the glass remains red, because its frequency $f=4.29\cdot10^{14}\,\mathrm{Hz}$ is the same.
:::

:::osservazione
In the geometrical model, an opening produces an illuminated region determined by the ray paths. Light can also reach outside that region. The width of the opening relative to $\lambda$ determines how noticeable this spreading is. Finding the intensity distribution requires wave superposition and phase.
:::

## Superposition and coherence

:::definizione{#coerenza titolo="Coherent sources"}
Two waves are **coherent** if they maintain a stable phase difference during observation. Two independent lamps of the same nominal color generally have phases that vary independently. In Young's experiment, one source illuminates both slits, so a stable phase relationship can be obtained.

In the linear regime the electric fields add. For waves of the same frequency and polarization, the average intensity is proportional to the square of the resultant field amplitude. With individual intensities $I_1$ and $I_2$ and phase difference $\Delta\varphi$, this gives
$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\varphi.
$$
The cross term comes from squaring the sum of the fields. If the phase varies rapidly and randomly, the average cosine is zero, leaving $I_1+I_2$.
:::

::::teorema{#intensita-sovrapposizione titolo="Intensity of the superposition of two waves"}
Two waves of the same angular frequency $\omega$ and the same polarization arrive at a point, with fields $E_1=E_{01}\cos\omega t$ and $E_2=E_{02}\cos(\omega t+\Delta\varphi)$. The average intensity is proportional to the time average of $(E_1+E_2)^2$. With $I_1=k\dfrac{E_{01}^2}{2}$ and $I_2=k\dfrac{E_{02}^2}{2}$ the individual intensities, where $k$ is a constant of proportionality, we obtain
$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\varphi.
$$
With $I_1=I_2$ the intensity varies between $0$ and $4I_1$, because in phase the amplitude doubles and the intensity, proportional to its square, becomes four times as large.

:::dimostrazione
Expand the square of the sum:
$$
(E_1+E_2)^2=E_{01}^2\cos^2\omega t+E_{02}^2\cos^2(\omega t+\Delta\varphi)+2E_{01}E_{02}\cos\omega t\cos(\omega t+\Delta\varphi).
$$
Over one period the average of each $\cos^2$ is $\dfrac12$. For the third term we use $\cos\alpha\cos\beta=\dfrac12\left[\cos(\alpha-\beta)+\cos(\alpha+\beta)\right]$, so
$$
\cos\omega t\cos(\omega t+\Delta\varphi)=\frac12\left[\cos\Delta\varphi+\cos(2\omega t+\Delta\varphi)\right].
$$
The term $\cos(2\omega t+\Delta\varphi)$ has zero average over one period, hence the average of the product is $\dfrac12\cos\Delta\varphi$. The average of the square is
$$
\left\langle(E_1+E_2)^2\right\rangle=\frac{E_{01}^2}{2}+\frac{E_{02}^2}{2}+E_{01}E_{02}\cos\Delta\varphi.
$$
Multiplying by $k$, the first two terms become $I_1$ and $I_2$. From the definitions of $I_1$ and $I_2$ we have $E_{01}E_{02}=\dfrac{2}{k}\sqrt{I_1I_2}$, so the third term multiplied by $k$ equals $2\sqrt{I_1I_2}\cos\Delta\varphi$.
:::
::::

:::esempio{titolo="Dark fringes with unequal beam intensities"}
With $I_1=I_2=I_s$, the in-phase contributions have twice the amplitude and intensity $4I_s$. In antiphase the fields cancel. With $I_1=9\,\mathrm{W/m^2}$ and $I_2=4\,\mathrm{W/m^2}$, the amplitudes differ. The maximum is $(3+2)^2\,\mathrm{W/m^2}=25\,\mathrm{W/m^2}$ and the minimum is $(3-2)^2\,\mathrm{W/m^2}=1\,\mathrm{W/m^2}$. The minimum is still a darker region, but it has positive intensity. Interference redistributes intensity between bright and dark regions.
:::

:::osservazione
With $I_1=I_2=I_s$ we have $I=2I_s(1+\cos\Delta\varphi)=4I_s\cos^2\dfrac{\Delta\varphi}{2}$. Over an interval of $\Delta\varphi$ equal to $2\pi$ the average of $\cos\Delta\varphi$ is zero, so the average intensity is $2I_s$, that is, $I_1+I_2$. The maxima equal twice the average intensity and the minima are zero, so energy is redistributed between bright and dark regions and the total is conserved.
:::

## Path difference and phase

:::teorema{#cammino-fase titolo="Interference conditions"}
If the sources start in phase and the waves travel through the same medium, a path longer by $\lambda$ adds one whole cycle. A path difference $\delta$ therefore corresponds to
$$
\Delta\varphi=\frac{2\pi\delta}{\lambda}.
$$
A maximum occurs when $\delta=m\lambda$, with integer $m$. A minimum occurs when $\delta=\left(m+\dfrac12\right)\lambda$. For the minimum to have zero intensity, the field amplitudes must also match. With $\lambda=600\,\mathrm{nm}$ and $\delta=1.20\,\mathrm{\mu m}=1200\,\mathrm{nm}$, the phase difference is $4\pi$ and the waves are in phase. At $\delta=300\,\mathrm{nm}$, the phase difference is $\Delta\varphi=\pi$ and the waves are in antiphase.

::grafico{f="cos(x);cos(x+pi)" xmin=0 xmax=7 ymin=-1.5 ymax=1.5 nomi="φ,E" legenda="E=\cos\varphi;E=\cos(\varphi+\pi)" titolo="For waves in antiphase, every value of one wave matches the opposite value of the other."}
:::

:::esempio{titolo="Order of a point on the screen"}
Two coherent waves in phase with $\lambda=500\,\mathrm{nm}$ arrive at a point along paths that differ by $\delta=1.50\,\mathrm{\mu m}$. Since $\dfrac{\delta}{\lambda}=\dfrac{1500}{500}=3$, the point is a maximum of order $m=3$. With $\lambda=600\,\mathrm{nm}$ we have $\dfrac{\delta}{\lambda}=2.5$, so the same point is a minimum. The type of point depends on the ratio $\dfrac{\delta}{\lambda}$ and therefore on the color of the light.
:::

:::osservazione{#cammino-ottico titolo="Optical path length"}
Along segments of length $\ell_j$ and index $n_j$, the total number of cycles is the sum of $\dfrac{n_j\ell_j}{\lambda_0}$. The **optical path length** is the sum of the products $n_j\ell_j$. Compare the two optical path lengths and convert the difference to phase using the vacuum wavelength $\lambda_0$. If there is an initial phase difference, add it to the propagation phase difference.

A plate crossed at normal incidence, of index $1.50$ and thickness $600\,\mathrm{nm}$, replaces the same thickness of air. The optical path increases by $(1.50-1)\cdot600\,\mathrm{nm}=300\,\mathrm{nm}$. For light with $\lambda_0=600\,\mathrm{nm}$ this corresponds to a phase shift of $\pi$.
:::

:::esempio{titolo="Plate in front of one slit"}
In the Young setup with $\lambda=500\,\mathrm{nm}$, $L=2.0\,\mathrm m$, and $d=0.25\,\mathrm{mm}$, one slit is covered by a plate of index $1.50$ and thickness $2.0\,\mathrm{\mu m}$. The optical path of that branch increases by $(1.50-1)\cdot2.0\,\mathrm{\mu m}=1.0\,\mathrm{\mu m}$, that is, by $\dfrac{1.0\,\mathrm{\mu m}}{0.50\,\mathrm{\mu m}}=2$ wavelengths. The central maximum is now where the geometric path difference compensates this increase, that is, where $d\dfrac{y}{L}=1.0\,\mathrm{\mu m}$. We obtain
$$
y=\frac{1.0\cdot10^{-6}\cdot2.0}{0.25\cdot10^{-3}}\,\mathrm m=8.0\,\mathrm{mm},
$$
on the side of the covered slit. The fringe spacing is $\dfrac{\lambda L}{d}=4.0\,\mathrm{mm}$, so the pattern has shifted by two fringes.
:::

## Young's double slit

::::teorema{#young titolo="Positions of maxima and fringe spacing"}
Two narrow slits separated by $d$ are illuminated in phase. In the far field, the interference maxima satisfy $d\sin\theta_m=m\lambda$. The angle $\theta_m$ is measured from the normal to the slit plane. The screen is parallel to the slit plane at distance $L$, and coordinate $y$ is measured from the point where the normal through the center hits the screen. Screen geometry gives $y=L\tan\theta$. For small $\theta$, $\tan\theta\simeq\sin\theta$. This gives the position of the order-$m$ maximum and the **fringe spacing** $\Delta y$ between consecutive maxima.
$$
y_m\simeq\frac{m\lambda L}{d},\qquad
\Delta y\simeq\frac{\lambda L}{d}.
$$
The minima for two slits of equal amplitude satisfy $d\sin\theta=\left(m+\dfrac{1}{2}\right)\lambda$. The first positive minimum is therefore halfway between the center and the first off-center maximum in the small-angle model.

:::dimostrazione
Let $r_-$ and $r_+$ be the distances from the screen point to the slits at vertical coordinates $-\dfrac d2$ and $+\dfrac d2$. By the Pythagorean theorem, $r_-^2=L^2+\left(y+\dfrac d2\right)^2$ and $r_+^2=L^2+\left(y-\dfrac d2\right)^2$. Subtracting the squares gives
$$
r_- - r_+=\frac{r_-^2-r_+^2}{r_-+r_+}=\frac{2dy}{r_-+r_+}.
$$
In the far field both distances are close to $\sqrt{L^2+y^2}$. Thus $r_--r_+\simeq\dfrac{dy}{\sqrt{L^2+y^2}}=d\sin\theta$. Set $r_--r_+=m\lambda$. For small angles this gives $y_m\simeq\dfrac{m\lambda L}{d}$, and the difference between consecutive orders yields $\Delta y$.
:::
::::

:::esempio{titolo="Fringes on the screen"}
::grafico{assi=0 linee="0,-2.7 0,-1.45;0,-1.2 0,1.2;0,1.45 0,2.7;6,-2.7 6,3.25" segmenti="-0.6,0,6.2,0;0,0,6,2.25" vettori="0,1.325,6,2.25;0,-1.325,6,2.25" punti="6,0,pieno,O;6,2.25,pieno,P" etichette="-0.9,1.47,S₊;-0.9,-1.18,S₋;2.85,-0.48,L;6.2,0.9,y;4.45,2.95,screen" xmin=-1.15 xmax=7.35 ymin=-3 ymax=3.5 titolo="The paths from the two slits to P have different lengths. The diagram exaggerates the slit separation."}

With $\lambda=600\,\mathrm{nm}$, $L=2.0\,\mathrm m$, and $d=0.30\,\mathrm{mm}$, we obtain $\Delta y=4.0\,\mathrm{mm}$. The first off-center maxima are at $y=\pm4.0\,\mathrm{mm}$ and the first minima at $y\simeq\pm2.0\,\mathrm{mm}$. The ratio $\dfrac{|y|}{L}$ is of order $10^{-3}$, so the small-angle approximation agrees with the result.

::grafico{f="cos(pi*x)^2" xmin=-3 xmax=3 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="I/I_{\max}=\cos^2\left(\pi\dfrac{y}{\Delta y}\right)" punti="-1.5,0;-0.5,0;0.5,0;1.5,0" titolo="$u=\dfrac{y}{\Delta y}$ is the screen coordinate in units of fringe spacing. In the model with two narrow slits, the maxima are one fringe spacing apart. The first dark points lie halfway between the maxima."}
:::

:::esempio{titolo="White light"}
With $d=0.30\,\mathrm{mm}$ and $L=2.0\,\mathrm m$, the first off-center maximum falls at $y=\dfrac{\lambda L}{d}$. For violet ($400\,\mathrm{nm}$) we have $y=2.7\,\mathrm{mm}$ and for red ($700\,\mathrm{nm}$) $y=4.7\,\mathrm{mm}$. The central maximum has $\delta=0$ for every color, so at the center the light is white, while at the sides the maxima of the various colors are at different positions.

::grafico{f="cos(pi*x/2.667)^2;cos(pi*x/4.667)^2" xmin=-6 xmax=6 ymin=0 ymax=1.25 nomi="y,I/Imax" legenda="\lambda_0=400\,\mathrm{nm};\lambda_0=700\,\mathrm{nm}" titolo="The coordinate $y$ is in millimeters. The two curves share the maximum at the origin and have different periods $\dfrac{\lambda L}{d}$."}
:::

:::attenzione
The relation $y_m\simeq\dfrac{m\lambda L}{d}$ holds for small $\theta$. With $d=2.0\,\mathrm{\mu m}$ and $\lambda=500\,\mathrm{nm}$, the third order has $\sin\theta_3=0.75$, so $\theta_3=48.6^\circ$ and $y_3=L\tan\theta_3=1.13\,L$, whereas the formula would give $y_3=0.75\,L$.
:::

:::esempio{titolo="Measuring a wavelength"}
With $d=0.30\,\mathrm{mm}$ and $L=1.50\,\mathrm m$, ten consecutive fringe spacings occupy $24\,\mathrm{mm}$ on the screen. So $\Delta y=2.4\,\mathrm{mm}$ and from $\Delta y=\dfrac{\lambda L}{d}$ we obtain
$$
\lambda=\frac{\Delta y\,d}{L}=\frac{2.4\cdot10^{-3}\cdot0.30\cdot10^{-3}}{1.50}\,\mathrm m=4.8\cdot10^{-7}\,\mathrm m=480\,\mathrm{nm}.
$$
A reading error of $1\,\mathrm{mm}$ in the measured length affects the span of ten fringe spacings by about $4\%$ and a single fringe spacing by about $42\%$.
:::

## Single-slit diffraction

:::teorema{#diffrazione titolo="Positions of the minima"}
A slit of width $a$ is uniformly illuminated at normal incidence. In the far field the diffraction minima satisfy
$$
a\sin\theta_m=m\lambda,\qquad m=\pm1,\pm2,\ldots
$$
At the center all contributions arrive in phase, giving the main maximum. To see why the first minimum occurs, split the slit into two halves. Pair each point in the first half with a point in the second a distance $\dfrac a2$ away. In direction $\theta_1$ the waves differ in path by $\dfrac a2\sin\theta_1=\dfrac{\lambda}{2}$ and cancel. For positive order $m$, adjacent intervals can be paired among the $2m$ equal intervals across the slit. Their separation is $\dfrac{a}{2m}$, again giving a path difference of $\dfrac{\lambda}{2}$.

::grafico{assi=0 uguale=1 linee="0,-3 0,-2;0,2 0,3" segmenti="0,-2,0,2;0,1,0.8,-0.6;-0.82,-2,-0.82,2" vettori="0,-1,4.6,1.3;0,1,4.6,3.3" punti="0,-1,pieno,A;0,1,pieno,B;0.8,-0.6,pieno,H" etichette="-1.18,0,a;1.2,-0.65,Δs;2.35,3.45,first minimum" xmin=-1.55 xmax=5.35 ymin=-3.15 ymax=3.8 titolo="The waves emitted from A and B, separated by $\dfrac a2$, travel almost parallel. The projection AH represents the path difference $\Delta s=\dfrac a2\sin\theta_1$."}
:::

:::esempio{titolo="Second-order minimum"}
A slit of width $a=0.10\,\mathrm{mm}$ is illuminated with $\lambda=500\,\mathrm{nm}$. For $m=2$ we have
$$
\sin\theta_2=\frac{2\lambda}{a}=\frac{2\cdot5.0\cdot10^{-7}}{1.0\cdot10^{-4}}=0.010.
$$
The angle is small, so on a screen at $L=2.0\,\mathrm m$ the minimum is at $y_2\simeq L\sin\theta_2=20\,\mathrm{mm}$ from the center, twice $y_1=10\,\mathrm{mm}$.
:::

:::teorema{#massimo-centrale titolo="Width of the central maximum"}
In the far field at small angles, the first positive minimum is at $y_1\simeq\dfrac{\lambda L}{a}$. The central maximum runs from $-y_1$ to $+y_1$. Its width is therefore
$$
w\simeq\frac{2\lambda L}{a}.
$$
With $a=0.20\,\mathrm{mm}$, $\lambda=600\,\mathrm{nm}$, and $L=2.0\,\mathrm m$, we obtain $y_1=6.0\,\mathrm{mm}$ and $w=12\,\mathrm{mm}$. With distance and wavelength fixed, halving the opening doubles the width of the central pattern. At larger angles, when the first minimum is at finite distance, use $y_1=L\tan\left(\arcsin\left(\dfrac{\lambda}{a}\right)\right)$. If $\dfrac{\lambda}{a}\geq1$, the first minimum is at grazing incidence or absent, so a plane screen in front of the slit does not show it.

::grafico{f="(sin(pi*x)/(pi*x))^2" punti="-1,0,pieno;0,1,pieno;1,0,pieno" xmin=-3 xmax=3 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="I/I_{\max}" titolo="$u=\dfrac{y}{y_1}$ is the coordinate in units of the distance to the first minimum. The central maximum extends from the first negative minimum to the first positive minimum. The point at $y=0$ is the limit of the expression."}
:::

:::osservazione
Between two consecutive minima there is a side maximum of width $\dfrac{\lambda L}{a}$, that is, half the central maximum. The intensity of the side maxima is much smaller: the first is about $4.7\%$ of the central maximum and the second about $1.6\%$. About $90\%$ of the light passing through the slit reaches the central maximum.
:::

:::attenzione
The value $y_1=\dfrac{\lambda L}{a}$ is the distance of a minimum from the center. For $a=0.20\,\mathrm{mm}$, $\lambda=600\,\mathrm{nm}$, and $L=2.0\,\mathrm m$ we have $y_1=6.0\,\mathrm{mm}$, whereas the width of the central maximum is $w=12\,\mathrm{mm}$. If the width $w$ measured on the screen is used in place of $y_1$, the computed width $a$ comes out halved.
:::

:::esempio{titolo="First minimum at a large angle"}
With $a=1.0\,\mathrm{\mu m}$ and $\lambda=500\,\mathrm{nm}$ we have $\sin\theta_1=\dfrac{\lambda}{a}=0.50$, so $\theta_1=30^\circ$. On a screen at $L=2.0\,\mathrm m$ the first minimum is at $y_1=L\tan30^\circ=1.15\,\mathrm m$, whereas the small-angle formula would give $\dfrac{\lambda L}{a}=1.00\,\mathrm m$. The second minimum would require $\sin\theta_2=1$, so it does not appear on a plane screen.
:::

## Diffraction grating

:::teorema{#reticolo titolo="Grating maxima"}
A grating has many parallel slits with spacing $d$. The spacing is the distance between adjacent slits. At normal incidence, a principal maximum occurs when waves from adjacent slits arrive an integer number of cycles apart. Thus
$$
d\sin\theta_m=m\lambda.
$$

::grafico{assi=0 uguale=1 segmenti="0,0,4,0;0,1,0.433,0.25" vettori="0,0,3.6,2.078;0,1,3.6,3.078;0,2,3.6,4.078" punti="0,0,pieno,F₁;0,1,pieno,F₂;0,2,pieno,F₃;0.433,0.25,pieno,H" etichette="-0.45,0.5,d;1.7,0.15,θ;0.75,0.75,Δs" xmin=-1 xmax=4.2 ymin=-0.5 ymax=4.5 titolo="The waves leaving two adjacent slits in direction $\theta$ have path difference $\Delta s=d\sin\theta$, equal to the length of $F_1H$."}

Increasing the number of illuminated slits at fixed spacing makes more contributions add in phase at the maximum. Just away from that direction, the phase accumulated between distant slits reduces the sum. The principal maxima are narrower than for two slits.

A grating with $500$ lines per millimeter has $d=\dfrac{1}{500}\,\mathrm{mm}=2.0\,\mathrm{\mu m}$. With $\lambda=500\,\mathrm{nm}=0.50\,\mathrm{\mu m}$, $\sin\theta_1=0.25$, so $\theta_1\simeq14.5^\circ$. The $m=4$ order is grazing because $4\lambda=d$. Only $m=0,\pm1,\pm2,\pm3$ reach a plane screen in front of the grating. For $|m|\lambda>d$, the required sine would be greater than one in magnitude.

::grafico{f="cos(pi*x)^2;pow(sin(6*pi*(x+0.0000001))/(6*sin(pi*(x+0.0000001))),2)" xmin=-2 xmax=2 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="N=2;N=6" titolo="$u=\dfrac{d\sin\theta}{\lambda}$. The principal maxima are at the integers for every $N$. With $N=6$ they are narrower and five minima appear between two consecutive maxima."}
:::

:::attenzione
The angles of the principal maxima depend on $d$ and $\lambda$ and stay the same if more lines are illuminated. With $d=2.0\,\mathrm{\mu m}$ and $\lambda=500\,\mathrm{nm}$ the first maximum is at $14.5^\circ$ with both $N=100$ and $N=10\,000$ illuminated lines. With larger $N$ the maxima become narrower.
:::

:::esempio{titolo="Overlapping orders"}
On the same grating, two colors can have a maximum at the same angle if their products $m\lambda$ match. The third order for $\lambda=400\,\mathrm{nm}$ and the second order for $\lambda=600\,\mathrm{nm}$ both give $m\lambda=1200\,\mathrm{nm}$. With $d=2.0\,\mathrm{\mu m}$ they give $\sin\theta=0.60$ and reach the same points on the observation plane.
:::

:::esempio{titolo="White light on a grating"}
With $d=2.0\,\mathrm{\mu m}$ and light from $400\,\mathrm{nm}$ to $700\,\mathrm{nm}$, in the first order $\sin\theta$ runs from $0.20$ to $0.35$, that is, from $11.5^\circ$ to $20.5^\circ$. In the second order it runs from $0.40$ to $0.70$, that is, from $23.6^\circ$ to $44.4^\circ$. The first and second orders do not overlap, because $20.5^\circ<23.6^\circ$. The third order begins at $\sin\theta=0.60$, that is, at $36.9^\circ$, where the $600\,\mathrm{nm}$ light of the second order also falls, since $3\cdot400\,\mathrm{nm}=2\cdot600\,\mathrm{nm}$.
:::

::::teorema{#larghezza-massimi-reticolo titolo="Width of the grating maxima"}
A grating of $N$ identical lines, with $N$ even and spacing $d$, is illuminated at normal incidence with $\lambda$. Near the maximum of order $m$, at direction $\theta_m$ with $\cos\theta_m\neq0$, the first minimum lies at the angular distance
$$
\Delta\theta\simeq\frac{\lambda}{Nd\cos\theta_m}.
$$
With $d=2.0\,\mathrm{\mu m}$ and $N=10\,000$ illuminated lines, that is, $2.0\,\mathrm{cm}$ of grating, in the first order for $\lambda=500\,\mathrm{nm}$ we have $\theta_1=14.5^\circ$ and $\Delta\theta=\dfrac{5.0\cdot10^{-7}}{10^4\cdot2.0\cdot10^{-6}\cdot0.968}\,\mathrm{rad}=2.6\cdot10^{-5}\,\mathrm{rad}$.

:::dimostrazione
The wave amplitudes are equal. In a direction $\theta$ close to $\theta_m$ the phase difference between two adjacent lines is
$$
\frac{2\pi d\sin\theta}{\lambda}=2\pi m+\varepsilon,
$$
with $\varepsilon$ small. The term $2\pi m$ does not change the phase, so only $\varepsilon$ matters. Divide the grating into two halves of $\dfrac{N}{2}$ lines. Line $j$ of the first half and line $j+\dfrac{N}{2}$ of the second half have phase difference $\dfrac{N}{2}\varepsilon$. If $\dfrac{N}{2}\varepsilon=\pi$, the waves of each pair are in antiphase and the sum is zero. For smaller $\varepsilon$ the pairs are not yet in antiphase, so the first minimum occurs for $\varepsilon=\dfrac{2\pi}{N}$. From the definition of $\varepsilon$ it follows that
$$
\frac{2\pi d}{\lambda}\left(\sin\theta-\sin\theta_m\right)=\frac{2\pi}{N},
\qquad
\sin\theta-\sin\theta_m=\frac{\lambda}{Nd}.
$$
For small $\Delta\theta=\theta-\theta_m$ we have $\sin\theta-\sin\theta_m\simeq\Delta\theta\cos\theta_m$. Hence $\Delta\theta\simeq\dfrac{\lambda}{Nd\cos\theta_m}$.
:::
::::

:::richiamo{titolo="Width of the grating maxima"}
A grating of $N$ lines with spacing $d$, illuminated at normal incidence with light of wavelength $\lambda$, has around the maximum of order $m$ the first minimum at the angular distance $\Delta\theta\simeq\dfrac{\lambda}{Nd\cos\theta_m}$.
:::

::::teorema{#potere-risolutivo titolo="Resolving power of a grating"}
Two spectral lines of wavelengths $\lambda$ and $\lambda+\Delta\lambda$ are distinguishable in order $m$ of a grating with $N$ illuminated lines, according to the Rayleigh criterion, if
$$
mN\ge\frac{\lambda}{\Delta\lambda}.
$$
The sodium doublet ($589.0\,\mathrm{nm}$ and $589.6\,\mathrm{nm}$) has $\dfrac{\lambda}{\Delta\lambda}=\dfrac{589.0}{0.6}\simeq982$. In the first order at least $982$ illuminated lines are needed, in the second $491$ suffice.

:::dimostrazione
The order-$m$ maxima of the two wavelengths are given by $d\sin\theta_m=m\lambda$ and $d\sin\theta_m'=m(\lambda+\Delta\lambda)$. Subtracting gives $d\left(\sin\theta_m'-\sin\theta_m\right)=m\Delta\lambda$. With the same approximation as in the previous proof, the angular separation $\delta\theta=\theta_m'-\theta_m$ satisfies $\sin\theta_m'-\sin\theta_m\simeq\delta\theta\cos\theta_m$, so $\delta\theta=\dfrac{m\Delta\lambda}{d\cos\theta_m}$. According to the Rayleigh criterion the two maxima are distinguishable when the maximum of one line falls at least on the first minimum of the other, that is, if $\delta\theta\ge\Delta\theta$, with $\Delta\theta$ given in the box above. Then
$$
\frac{m\Delta\lambda}{d\cos\theta_m}\ge\frac{\lambda}{Nd\cos\theta_m},
$$
hence $mN\Delta\lambda\ge\lambda$ and therefore $mN\ge\dfrac{\lambda}{\Delta\lambda}$.
:::
::::

## Patterns and resolution

:::osservazione{titolo="Slit separation and individual slit width"}
The separation $d$ of a double slit sets the spacing of the interference fringes. The width $a$ of each slit determines the diffraction envelope. Increasing only $d$ packs the fringes closer together and leaves the envelope unchanged. Increasing only $a$ narrows the envelope and leaves the fringe-spacing formula unchanged.

For $d=3a$, the predicted interference maximum at $m=3$ coincides with the first diffraction minimum because $\dfrac{3\lambda}{d}=\dfrac{\lambda}{a}$. This gives a missing order. In the graph, the dashed curve shows the maximum intensity allowed by the envelope.

::grafico{f="(sin(pi*x/3)/(pi*x/3))^2*cos(pi*x)^2;(sin(pi*x/3)/(pi*x/3))^2" punti="-3,0;0,1;3,0" xmin=-4 xmax=4 ymin=0 ymax=1.15 nomi="u,I/Imax" legenda="I/I_{\max};\text{envelope}" titolo="$u=\dfrac{y}{\Delta y}$ is the screen coordinate in units of fringe spacing. At $d=3a$, the predicted maxima at order $m=\pm3$ vanish at the first minima of the envelope."}
:::

:::osservazione{#risoluzione titolo="Rayleigh criterion"}
A circular aperture of diameter $D$ forms a diffraction pattern even for a point source. For two incoherent sources with comparable images, the Rayleigh criterion sets a limiting separation where the maximum of one pattern falls at the first minimum of the other. For an ideal circular aperture, in radians, use
$$
\theta_{\min}\simeq1.22\frac{\lambda}{D}.
$$
With $\lambda=500\,\mathrm{nm}$ and $D=50\,\mathrm{mm}$, the value is about $1.22\cdot10^{-5}\,\mathrm{rad}$. Doubling the diameter halves the predicted limiting separation when diffraction is the dominant effect. The formula uses the circular aperture's diameter and the factor $1.22$. The condition $a\sin\theta=\lambda$ instead concerns the first minimum of a straight slit.
:::

:::esempio{titolo="Minimum separation for the naked eye"}
With $D=4.0\,\mathrm{mm}$ and $\lambda=550\,\mathrm{nm}$ we have
$$
\theta_{\min}=1.22\,\frac{550\cdot10^{-9}}{4.0\cdot10^{-3}}\,\mathrm{rad}=1.7\cdot10^{-4}\,\mathrm{rad}.
$$
If diffraction is the only limit, two bright points at $10\,\mathrm m$ are distinguishable when they are at least $10\,\mathrm m\cdot1.7\cdot10^{-4}=1.7\,\mathrm{mm}$ apart.

::grafico{f="pow(sin(pi*(x+0.0000001))/(pi*(x+0.0000001)),2);pow(sin(pi*(x-1+0.0000001))/(pi*(x-1+0.0000001)),2)" xmin=-3 xmax=4 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="\text{source 1};\text{source 2}" titolo="Two identical diffraction patterns with the maximum of the second at the first minimum of the first, as in the Rayleigh criterion. The profile is that of the straight slit, used as an illustration."}
:::
