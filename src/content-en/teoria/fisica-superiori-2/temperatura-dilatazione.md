---
titolo: "Temperature and thermal expansion"
sommario: "Thermal equilibrium, temperature scales, linear, area and volume expansion, and thermometer readings."
---

## Thermal equilibrium

:::definizione{#equilibrio titolo="Comparing thermal states"}
Two bodies can exchange energy when they are brought into contact through a wall that allows heat transfer. They are in **thermal equilibrium** when net heat transfer ceases and their temperatures are equal. If the system is insulated from its surroundings and the two bodies start at different temperatures, heat flows spontaneously from the hotter body to the cooler body.

The **zeroth law of thermodynamics** states that if two bodies are each in thermal equilibrium with the same third body, they are in thermal equilibrium with each other. This property makes it possible to compare two objects using a thermometer. The reading is meaningful once the instrument has reached equilibrium with the sample and its presence changes the sample temperature by a negligible amount. A large sensor placed in a small droplet can cool it considerably and measure the final temperature of the combined system.
:::

:::esempio{titolo="The reading approaches a steady value"}
A sensor initially at $20\,{}^\circ\mathrm C$ is immersed in a tank held at $40\,{}^\circ\mathrm C$. After a few seconds it reads $35\,{}^\circ\mathrm C$. The temperature difference is still $5\,\mathrm K$, so the sensor is receiving energy. If the tank stays at a constant temperature, the ideal reading approaches $40\,{}^\circ\mathrm C$.

::grafico{f="40-20*exp(-x/4)" punti="0,20,pieno" xmin=0 xmax=24 ymin=15 ymax=45 nomi="t (s),T (°C)" asintoti="y=40" titolo="One possible course of the reading. The line at 40 °C indicates the tank temperature."}
:::

:::osservazione
Temperature describes a thermal state and is measured in kelvins. Heat describes a transfer of energy and is measured in joules. A container at a higher temperature can transfer heat to one at a lower temperature even if it contains far less matter. Calculating how much energy is transferred requires other information, such as the masses and heat capacities.
:::

## Celsius and kelvin

:::definizione{#scale titolo="Absolute temperature"}
Let $t_C$ denote the numerical value of the temperature on the Celsius scale, expressed in degrees Celsius, and $T$ its value on the absolute scale, expressed in kelvins. The conversions between numerical values are
$$
T=t_C+273.15,\qquad t_C=T-273.15.
$$
The constant $273.15$ gives the difference between the two origins. For example, $0\,{}^\circ\mathrm C$ corresponds to $273.15\,\mathrm K$, while $0\,\mathrm K$ corresponds to $-273.15\,{}^\circ\mathrm C$. Absolute temperatures use the symbol $\mathrm K$ without a degree sign.
:::

::::teorema{#intervalli titolo="Equivalence of temperature intervals"}
An increase of one degree Celsius is an increase of one kelvin. Therefore, to calculate $\Delta T=T_f-T_i$ we can subtract the two values on the same scale. For example, a change from $-8\,{}^\circ\mathrm C$ to $12\,{}^\circ\mathrm C$ is $20\,\mathrm K$.

:::dimostrazione
Substituting the expressions for the absolute values gives
$$
\begin{aligned}
\Delta T&=(t_{C,f}+273.15)-(t_{C,i}+273.15)\\[6pt]
        &=t_{C,f}-t_{C,i}.
\end{aligned}
$$
The constant terms cancel. The equivalence applies to intervals, while the numerical values of the same temperature differ by $273.15$.
:::
::::

::grafico{f="x+273.15" punti="-20,253.15,pieno;0,273.15,pieno;20,293.15,pieno" xmin=-30 xmax=30 ymin=240 ymax=308 nomi="t_C (°C),T (K)" titolo="The marked points are spaced 20 units apart along both axes. The vertical intercept is 273.15 K."}

:::attenzione
A ratio of temperatures can have a physical meaning when the values are absolute. Changing from $10\,{}^\circ\mathrm C$ to $20\,{}^\circ\mathrm C$ increases the temperature by $10\,\mathrm K$. The ratio of the absolute values is $\dfrac{293.15}{283.15}\simeq1.035$, so the absolute temperature increases by about $3.5\%$.
:::

## Linear expansion

:::teorema{#lineare titolo="The change in length"}
Consider an unconstrained, uniform rod at the same temperature throughout. Let $L_0$ denote its initial length and $\Delta T$ the temperature change. For small deformations and an expansion coefficient $\alpha$ that is approximately constant over the interval, the change in length is
$$
\Delta L\simeq\alpha L_0\Delta T,\qquad L\simeq L_0(1+\alpha\Delta T).
$$
The coefficient $\alpha$ is the fractional change in length per kelvin. Its unit is $\mathrm{K^{-1}}$, since $\dfrac{\Delta L}{L_0}$ is dimensionless. If $\alpha>0$, cooling gives $\Delta T<0$ and produces contraction, with $\Delta L<0$. If the ends are fixed, the constraint can generate internal forces. The equation gives the change that the unconstrained rod would show at the same temperature.
:::

:::esempio{titolo="Finding the coefficient from two measurements"}
A rod is $1.0000\,\mathrm m$ long at $20\,{}^\circ\mathrm C$ and $1.0006\,\mathrm m$ long at $70\,{}^\circ\mathrm C$. Therefore $\Delta T=50\,\mathrm K$ and $\Delta L=0.0006\,\mathrm m$. Dividing the fractional expansion by the temperature interval gives
$$
\alpha\simeq \frac{0.0006\,\mathrm m}{1.0000\,\mathrm m\cdot50\,\mathrm K}
=1.2\cdot10^{-5}\,\mathrm{K^{-1}}.
$$
If the instrument resolves only whole millimetres, the two lengths are separated by less than one scale division. To estimate the coefficient accurately, the experiment can use a longer rod or a device that resolves smaller changes.

::grafico{f="0.012*x" punti="50,0.6,pieno,A" xmin=-10 xmax=65 ymin=-0.2 ymax=0.9 nomi="ΔT (K),ΔL (mm)" titolo="The slope is 0.012 mm per kelvin. Divide it by the initial length in millimetres to obtain the coefficient."}
:::

## An example of expansion

:::esempio{#esempio titolo="A metal rod"}
An unconstrained rod of length $2.00\,\mathrm m$ has $\alpha=12\cdot10^{-6}\,\mathrm{K^{-1}}$ and is warmed by $50\,\mathrm K$. Since the initial length is in metres, the product gives a change in metres. To compare it with the width of an expansion gap, we also express it in millimetres.
$$
\begin{aligned}
\Delta L&\simeq(12\cdot10^{-6})\cdot2.00\cdot50\,\mathrm m\\[6pt]
        &=0.0012\,\mathrm m=1.2\,\mathrm{mm},\\[6pt]
L&\simeq2.0012\,\mathrm m.
\end{aligned}
$$
The marked point on the graph has horizontal coordinate $50\,\mathrm K$ and vertical coordinate $1.2\,\mathrm{mm}$. Extending the line to $\Delta T=-25\,\mathrm K$ gives a contraction of $0.6\,\mathrm{mm}$. The estimate holds within the range over which the material's $\alpha$ is approximately constant.

::grafico{f="0.024*x" punti="50,1.2,pieno; -25,-0.6,pieno" xmin=-40 xmax=65 ymin=-1 ymax=2 nomi="ΔT (K),ΔL (mm)" titolo="For the rod in the example, the position relative to the origin indicates expansion or contraction."}
:::

:::esempio{titolo="Comparing the expansion with the available gap"}
If the same rod has a $0.96\,\mathrm{mm}$ gap in front of one end and the other end stays fixed, the gap closes when $\Delta L=0.96\,\mathrm{mm}$. The slope of the graph is $0.024\,\mathrm{mm/K}$, so the gap closes at $\Delta T\simeq\dfrac{0.96}{0.024}\,\mathrm K=40\,\mathrm K$. Beyond this change the body encounters a constraint and the free expansion model ceases to apply.
:::

## Areas, volumes and holes

::::teorema{#volume titolo="Expansion of an isotropic solid"}
An isotropic solid expands by the same factor in every direction. Set $\varepsilon=\alpha\Delta T$. Every length is multiplied by approximately $1+\varepsilon$. The initial area $A_0$ and initial volume $V_0$ change to first order according to
$$
\Delta A\simeq2\alpha A_0\Delta T,\qquad
\Delta V\simeq3\alpha V_0\Delta T.
$$
These equations require $|\varepsilon|\ll1$.

:::dimostrazione
Both sides of a rectangle are multiplied by $1+\varepsilon$. Its fractional area change is $(1+\varepsilon)^2-1=2\varepsilon+\varepsilon^2$. The product of the three dimensions of a rectangular block changes by $(1+\varepsilon)^3-1=3\varepsilon+3\varepsilon^2+\varepsilon^3$. For small deformations the quadratic and cubic terms are negligible compared with the linear ones. The factors $2$ and $3$ reflect the number of directions that contribute to the product.
:::
::::

::grafico{f="2*x;3*x" xmin=0 xmax=0.006 ymin=0 ymax=0.021 nomi="ε,ΔA/A₀ or ΔV/V₀" legenda="\Delta A/A_0 = 2\varepsilon;\Delta V/V_0 = 3\varepsilon" titolo="In the small-deformation model, the fractional volume change increases faster than the fractional area change."}

:::esempio{#foro titolo="A hole expands"}
A circular hole has diameter $20\,\mathrm{mm}$ in an unconstrained aluminium plate. With $\alpha=2.4\cdot10^{-5}\,\mathrm{K^{-1}}$ and $\Delta T=50\,\mathrm K$, its diameter increases by $0.024\,\mathrm{mm}$. All the distances between points on the rim are multiplied by the same factor, so the distance between two opposite points increases. We can imagine filling the hole with a disc made from the same material and apply the free expansion model to the disc.
:::

## Liquids and apparent expansion

:::osservazione{#apparente titolo="The container expands as well"}
For a liquid we use the volume expansion coefficient $\beta$. At constant pressure and over an interval in which $\beta$ is approximately constant, the model is $\Delta V\simeq\beta V_0\Delta T$. If the container is calibrated at the initial temperature, the volume corresponding to its reference mark changes with temperature. Over the same interval, the change in the volume of the liquid relative to that mark is
$$
\Delta V_{\mathrm{app}}\simeq
(\beta_{\mathrm{liq}}-\beta_{\mathrm{rec}})V_0\Delta T.
$$
We subtract the changes because the reference level in the container shifts. If the two coefficients are equal, the level indicated stays the same even though the volumes have changed.
:::

:::esempio{titolo="A liquid in a graduated container"}
For $V_0=200\,\mathrm{mL}$, $\Delta T=40\,\mathrm K$, $\beta_{\mathrm{liq}}=7\cdot10^{-4}\,\mathrm{K^{-1}}$ and $\beta_{\mathrm{rec}}=3\cdot10^{-5}\,\mathrm{K^{-1}}$, the liquid expands by $5.6\,\mathrm{mL}$. The container expands by $0.24\,\mathrm{mL}$ up to its original mark. The difference observed is therefore $5.36\,\mathrm{mL}$. The graph shows the physical change, the container change and the apparent change as three lines of different slope.

::grafico{f="0.14*x;0.006*x;0.134*x" punti="40,5.6,pieno,L;40,0.24,pieno,R;40,5.36,pieno,A" xmin=0 xmax=48 ymin=0 ymax=7 nomi="ΔT (K),ΔV (mL)" legenda="\mathrm{liquid};\mathrm{container};\mathrm{apparent}" titolo="At 40 K the difference between the vertical coordinates of L and R is equal to the apparent change marked A."}
:::

:::attenzione{#acqua-anomala titolo="The range from 0 to 4 °C"}
At atmospheric pressure liquid water contracts when heated from $0\,{}^\circ\mathrm C$ to about $4\,{}^\circ\mathrm C$. Since the mass stays constant, the density $\rho=\dfrac mV$ increases. Above $4\,{}^\circ\mathrm C$, the density decreases again as the temperature increases. A single positive constant coefficient cannot describe both ranges.
:::
