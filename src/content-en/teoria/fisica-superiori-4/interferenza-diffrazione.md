---
titolo: Interference and diffraction of light
sommario: Phase differences determine Young's fringes, diffraction minima, and grating
  orders.
---

## Light as a wave

:::definizione{#luce-onda titolo="Frequency and wavelength"}
The **wavelength** is the distance between consecutive points with the same phase along the direction of propagation. Frequency $f$ counts oscillations per second. In a medium where light has phase speed $u$, we have $u=f\lambda$. In vacuum $u=c$ and the wavelength is denoted by $\lambda_0$.
$$
c=f\lambda_0,\qquad c=3.00\cdot10^8\,\mathrm{m/s}.
$$
Light with $\lambda_0=600\,\mathrm{nm}=6.00\cdot10^{-7}\,\mathrm m$ has $f=5.00\cdot10^{14}\,\mathrm{Hz}$. At a stationary interface the frequency remains the same. In a medium of index $n$, $u=\dfrac cn$, so $\lambda=\dfrac{\lambda_0}{n}$. At $n=1.50$ the light in this example has $\lambda=400\,\mathrm{nm}$.
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

:::esempio{titolo="Dark fringes with unequal beam intensities"}
With $I_1=I_2=I_s$, the in-phase contributions have twice the amplitude and intensity $4I_s$. In antiphase the fields cancel. With $I_1=9\,\mathrm{W/m^2}$ and $I_2=4\,\mathrm{W/m^2}$, the amplitudes differ. The maximum is $(3+2)^2\,\mathrm{W/m^2}=25\,\mathrm{W/m^2}$ and the minimum is $(3-2)^2\,\mathrm{W/m^2}=1\,\mathrm{W/m^2}$. The minimum is still darker but has positive intensity. Interference redistributes intensity between bright and dark regions.
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

:::osservazione{#cammino-ottico titolo="Optical path length"}
Along segments of length $\ell_j$ and index $n_j$, the total number of cycles is the sum of $\dfrac{n_j\ell_j}{\lambda_0}$. The **optical path length** is the sum of the products $n_j\ell_j$. Compare the two optical path lengths and convert the difference to phase using the vacuum wavelength $\lambda_0$. If there is an initial phase difference, add it to the propagation phase difference.

A plate crossed at normal incidence, of index $1.50$ and thickness $600\,\mathrm{nm}$, replaces the same thickness of air. The optical path increases by $(1.50-1)\cdot600\,\mathrm{nm}=300\,\mathrm{nm}$. For light with $\lambda_0=600\,\mathrm{nm}$ this corresponds to a phase shift of $\pi$.
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

::grafico{f="cos(pi*x)^2" xmin=-3 xmax=3 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="I/I_{\max}=\cos^2\left(\pi\dfrac{y}{\Delta y}\right)" punti="-1.5,0;-0.5,0;0.5,0;1.5,0" titolo="$u=\dfrac{y}{\Delta y}$ is the screen coordinate in units of fringe spacing. In the model with two narrow slits, the maxima are one fringe spacing apart. The dark points lie halfway between the maxima."}
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

:::teorema{#massimo-centrale titolo="Width of the central maximum"}
In the far field at small angles, the first positive minimum is at $y_1\simeq\dfrac{\lambda L}{a}$. The central maximum runs from $-y_1$ to $+y_1$. Its width is therefore
$$
w\simeq\frac{2\lambda L}{a}.
$$
With $a=0.20\,\mathrm{mm}$, $\lambda=600\,\mathrm{nm}$, and $L=2.0\,\mathrm m$, we obtain $y_1=6.0\,\mathrm{mm}$ and $w=12\,\mathrm{mm}$. With distance and wavelength fixed, halving the opening doubles the width of the central pattern. At larger angles, when the first minimum is at finite distance, use $y_1=L\tan\left(\arcsin\left(\dfrac{\lambda}{a}\right)\right)$. If $\dfrac{\lambda}{a}\geq1$, the first minimum is at grazing incidence or absent, so a plane screen in front of the slit does not show it.

::grafico{f="(sin(pi*x)/(pi*x))^2" punti="-1,0,pieno;0,1,pieno;1,0,pieno" xmin=-3 xmax=3 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="I/I_{\max}" titolo="$u=\dfrac{y}{y_1}$ is the coordinate in units of the distance to the first minimum. The central maximum extends from the first negative minimum to the first positive minimum. The point at $y=0$ is the limit of the expression."}
:::

## Diffraction grating

:::teorema{#reticolo titolo="Grating maxima"}
A grating has many parallel slits with spacing $d$. The spacing is the distance between adjacent slits. At normal incidence, a principal maximum occurs when waves from adjacent slits arrive an integer number of cycles apart. Thus
$$
d\sin\theta_m=m\lambda.
$$
Increasing the number of illuminated slits at fixed spacing makes more contributions add in phase at the maximum. Just away from that direction, the phase accumulated between distant slits reduces the sum. The principal maxima are narrower than for two slits.

A grating with $500$ lines per millimeter has $d=\dfrac{1}{500}\,\mathrm{mm}=2.0\,\mathrm{\mu m}$. With $\lambda=500\,\mathrm{nm}=0.50\,\mathrm{\mu m}$, $\sin\theta_1=0.25$, so $\theta_1\simeq14.5^\circ$. The $m=4$ order is grazing because $4\lambda=d$. Only $m=0,\pm1,\pm2,\pm3$ reach a plane screen in front of the grating. For $|m|\lambda>d$, the required sine would be greater than one in magnitude.
:::

:::esempio{titolo="Overlapping orders"}
On the same grating, two colors can have a maximum at the same angle if their products $m\lambda$ match. The third order for $\lambda=400\,\mathrm{nm}$ and the second order for $\lambda=600\,\mathrm{nm}$ both give $m\lambda=1200\,\mathrm{nm}$. With $d=2.0\,\mathrm{\mu m}$ they give $\sin\theta=0.60$ and reach the same points on the observation plane.
:::

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
