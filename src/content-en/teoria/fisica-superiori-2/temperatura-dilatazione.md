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

:::esempio{#taratura-termometro titolo="Calibrating a sensor with two references"}
A sensor returns a value $r$ in scale divisions. Between two reference temperatures, assume the reading follows the affine relation $r=at_C+b$. To determine $a$ and $b$, let the sensor reach equilibrium in each bath, then record the temperature and reading as a pair.

| Bath or sample | Temperature (°C) | Reading (div.) |
| --- | ---: | ---: |
| Cold reference | 0 | 6 |
| Hot reference | 100 | 86 |
| Sample | to be found | 46 |

The cold reference sets $b=6$. The two reference readings differ by $86-6=80$ divisions over $100$ degrees, so $a=0.80$ divisions per degree. To find the sample temperature, first subtract the constant term from the sample reading and then divide by the slope.
$$
t_C=\dfrac{46-6}{0.80}=50.
$$
The sample is at $50\,{}^\circ\mathrm C$. The value of $r$ is halfway between $6$ and $86$, so the corresponding point lies halfway between the two reference temperatures. A third measurement at a known temperature within the interval can test whether the affine model suits the instrument. Taking a difference of readings removes $b$ and retains the factor $a$.
::grafico{f="0.8*x+6" xmin=-7 xmax=108 ymin=0 ymax=95 punti="0,6,pieno;50,46,pieno;100,86,pieno" segmenti="0,46,50,46;50,0,50,46" nomi="t_C (°C),r (div.)" titolo="The reading of 46 is halfway between the references and corresponds to 50 °C"}
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
At $20\,{}^\circ\mathrm C$ a rod measures $1.0000\,\mathrm m$. At $70\,{}^\circ\mathrm C$ it measures $1.0006\,\mathrm m$. Therefore $\Delta T=50\,\mathrm K$ and $\Delta L=0.0006\,\mathrm m$. Dividing the fractional expansion by the temperature interval gives
$$
\alpha\simeq \frac{0.0006\,\mathrm m}{1.0000\,\mathrm m\cdot50\,\mathrm K}
=1.2\cdot10^{-5}\,\mathrm{K^{-1}}.
$$
If the instrument resolves only whole millimetres, the two lengths are separated by less than one scale division. To estimate the coefficient accurately, the experiment can use a longer rod or a device that resolves smaller changes.

::grafico{f="0.012*x" punti="50,0.6,pieno,A" xmin=-14 xmax=56 ymin=-0.2 ymax=0.9 nomi="ΔT (K),ΔL (mm)" titolo="The slope is 0.012 mm per kelvin. Divide it by the initial length in millimetres to obtain the coefficient."}
:::

:::esempio{#tratti-temperature titolo="A rod with two temperature zones"}
A free rod consists of two sections of the same material with $\alpha=2\cdot10^{-5}\,\mathrm{K^{-1}}$. The first section is $0.60\,\mathrm m$ long and warms uniformly by $40\,\mathrm K$. The second is $1.40\,\mathrm m$ long and warms by $10\,\mathrm K$. In this model the transition region between the two sections is negligible. The lengths add in series, so add their individual extensions.
$$
\begin{aligned}
\Delta L
&\simeq \alpha\big[(0.60\,\mathrm m)(40\,\mathrm K)
                 +(1.40\,\mathrm m)(10\,\mathrm K)\big]\\[6pt]
&=0.00076\,\mathrm m=0.76\,\mathrm{mm}.
\end{aligned}
$$
The expression in brackets is $38\,\mathrm{m\,K}$. Dividing it by the total length of $2.00\,\mathrm m$ gives a length-weighted mean temperature rise of $19\,\mathrm K$. The two sections have different lengths, so the simple mean of $40$ and $10\,\mathrm K$ would give them equal weight and overestimate the extension.
::grafico{linee="0,40 0.6,40;0.6,10 2,10" segmenti="0.6,0,0.6,40" punti="0,40,pieno;2,10,pieno" xmin=0 xmax=2.2 ymin=0 ymax=47 nomi="x (m),ΔT (K)" etichette="0.06,43,Section 1;0.95,14,Section 2;0.56,2.5,0.60 m" titolo="The hotter section is also shorter. The mean takes the length of each section into account"}
:::

:::esempio{#coefficiente-intervallo titolo="Comparing two intervals for the same material"}
A free rod is $2.00\,\mathrm m$ long at $20\,{}^\circ\mathrm C$ and extends by $0.40\,\mathrm{mm}$ between $20$ and $40\,{}^\circ\mathrm C$. Between $40$ and $80\,{}^\circ\mathrm C$ it extends by another $0.96\,\mathrm{mm}$. Refer both changes to the same initial length. The mean slope is $0.020\,\mathrm{mm/K}$ in the first interval and $0.024\,\mathrm{mm/K}$ in the second. Dividing by $2000\,\mathrm{mm}$ gives mean coefficients of $1.0\cdot10^{-5}\,\mathrm{K^{-1}}$ and $1.2\cdot10^{-5}\,\mathrm{K^{-1}}$.

The two increases add to $1.36\,\mathrm{mm}$. Extending the first slope across all $60\,\mathrm K$ would give $1.20\,\mathrm{mm}$. Compare the difference of $0.16\,\mathrm{mm}$ with the measurement uncertainty. If that difference is appreciable relative to the uncertainty, the data require different slopes for the two intervals. A mean slope determined from two points describes the interval between those points. Using it elsewhere requires checking that the material behaves similarly there.
:::

:::osservazione{#variazione-relativa titolo="From relative change to a measured change"}
Two free rods of the same material undergoing the same temperature change share the relative change $\alpha\Delta T$. Multiplying by the initial length converts the fraction to an actual change. For example, a relative change of $0.1\%$ gives $0.50\,\mathrm{mm}$ for $0.50\,\mathrm m$, and $2.00\,\mathrm{mm}$ for $2.00\,\mathrm m$. The extensions differ by a factor of four, which also equals the ratio of the lengths. The percentage isolates the response of the material from the dimensions of the sample.
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

:::esempio{#giunto-due-barre titolo="A gap that narrows from both sides"}
Two collinear rods are fixed only at their outer ends. A gap of $1.60\,\mathrm{mm}$ separates their inner ends. The left rod is $1.50\,\mathrm m$ long with $\alpha_s=2.0\cdot10^{-5}\,\mathrm{K^{-1}}$. The right rod is $1.00\,\mathrm m$ long with $\alpha_d=1.0\cdot10^{-5}\,\mathrm{K^{-1}}$. If both warm by $\Delta T$, the two displacements point towards one another while the gap is open. Their sum is $0.040\,\mathrm{mm}$ per kelvin. Subtract this sum from the initial width. The ends first touch at
$$
\Delta T\simeq\dfrac{1.60\,\mathrm{mm}}{0.040\,\mathrm{mm/K}}=40\,\mathrm K.
$$
At that temperature the left rod advances by $1.20\,\mathrm{mm}$ and the right rod by $0.40\,\mathrm{mm}$. The point of contact is therefore closer to the right side of the original gap. After contact the model describes only how the rods would expand if free. Finding the forces requires data about the rods and their constraints.
::grafico{linee="0,1.6 40,0" xmin=0 xmax=45 ymin=0 ymax=2 punti="0,1.6,pieno;40,0,pieno" segmenti="20,0,20,0.8" nomi="ΔT (K),gap (mm)" titolo="The plotted segment ends at the first contact between the two rod ends"}
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

:::osservazione{#direzioni-distinte titolo="When two directions change differently"}
The factor $2$ in area expansion applies when the relative changes in both directions are equal. If a rectangle aligned with two directions in a crystal grows by a fraction $\varepsilon_x$ along one side and $\varepsilon_y$ along the other, its area changes according to
$$
\dfrac{\Delta A}{A_0}=(1+\varepsilon_x)(1+\varepsilon_y)-1
=\varepsilon_x+\varepsilon_y+\varepsilon_x\varepsilon_y .
$$
For $\varepsilon_x=0.002$ and $\varepsilon_y=0.001$, the result is $0.003002$. To first order it is $0.003$, or $0.3\%$. The difference between the two results is the product of the two small relative increases. If one direction were constrained to remain at a fixed length, its contribution would be zero. Use the strains the constraints allow and consider each side separately when the directions differ.
:::

## Liquids and apparent expansion

:::osservazione{#apparente titolo="The container expands as well"}
For a liquid we use the volume expansion coefficient $\beta$. At constant pressure and over an interval in which $\beta$ is approximately constant, the model is $\Delta V\simeq\beta V_0\Delta T$. Assume the liquid initially fills a volume $V_0$ up to the mark and that container and liquid undergo the same temperature change. The capacity up to the mark also changes. If the container is free to expand, the difference between the liquid volume and the capacity up to the mark, expressed as a volume to first order, is
$$
\Delta V_{\mathrm{app}}\simeq
(\beta_{\mathrm{liq}}-\beta_{\mathrm{rec}})V_0\Delta T.
$$
We subtract the changes because the reference level in the container shifts. If the two coefficients are equal, the level indicated stays the same even though the volumes have changed.
:::

:::esempio{titolo="A liquid in a graduated container"}
For $V_0=200\,\mathrm{mL}$, $\Delta T=40\,\mathrm K$, $\beta_{\mathrm{liq}}=7\cdot10^{-4}\,\mathrm{K^{-1}}$ and $\beta_{\mathrm{rec}}=3\cdot10^{-5}\,\mathrm{K^{-1}}$, the liquid expands by $5.6\,\mathrm{mL}$. The container expands by $0.24\,\mathrm{mL}$ up to its original mark. The difference observed is therefore $5.36\,\mathrm{mL}$. The graph shows the physical change, the container change and the apparent change as three lines of different slope.

::grafico{f="0.14*x;0.006*x;0.134*x" punti="40,5.6,pieno;40,0.24,pieno" segmenti="40,0.24,40,5.6" xmin=0 xmax=48 ymin=-1.05 ymax=7 nomi=",ΔV (mL)" etichette="42,-.85,ΔT (K)" legenda="\mathrm{liquid};\mathrm{container};\mathrm{apparent}" titolo="At 40 K the changes are 5.6 mL for the liquid and 0.24 mL for the container. The apparent expansion curve gives their difference."}
:::

:::esempio{#trabocco titolo="When the liquid reaches the rim"}
A container initially holds up to $102\,\mathrm{mL}$ and contains $100\,\mathrm{mL}$ of liquid. After warming by $40\,\mathrm K$, its capacity increases by $0.40\,\mathrm{mL}$. At that temperature the original liquid would occupy $103.60\,\mathrm{mL}$ if all of it remained in the container. The warm container holds $102.40\,\mathrm{mL}$, so the overflow volume at the final temperature is $1.20\,\mathrm{mL}$.

Compare the two volumes at the final temperature because the initial capacity up to the rim and the liquid's initial volume differ. The same calculation starts from the initial spare capacity of $2\,\mathrm{mL}$. Reaching the rim requires filling that space and another $0.40\,\mathrm{mL}$ created by the expansion of the container. Of the $3.60\,\mathrm{mL}$ of free liquid expansion, $1.20\,\mathrm{mL}$ is left beyond the rim.
::grafico{f="100+0.09*x;102+0.01*x" xmin=0 xmax=46 ymin=99 ymax=105 punti="25,102.25,pieno;40,103.6,pieno;40,102.4,pieno" segmenti="40,102.4,40,103.6" nomi="ΔT (K),V (mL)" legenda="\text{liquid without losses};\text{capacity up to rim}" titolo="At the intersection the liquid first reaches the rim. At 40 K the vertical difference is 1.20 mL"}
:::

:::attenzione{#acqua-anomala titolo="The range from 0 to 4 °C"}
At atmospheric pressure liquid water contracts when heated from $0\,{}^\circ\mathrm C$ to about $4\,{}^\circ\mathrm C$. Since the mass stays constant, the density $\rho=\dfrac mV$ increases. Above $4\,{}^\circ\mathrm C$, the density decreases again as the temperature increases. A single positive constant coefficient cannot describe both ranges.
:::

:::osservazione{#modello-acqua titolo="Choosing the interval for a coefficient"}
For liquid water at atmospheric pressure, a coefficient estimated from $1$ to $3\,{}^\circ\mathrm C$ is negative. From $5$ to $8\,{}^\circ\mathrm C$, the estimated coefficient is positive. Measuring only the endpoints of an interval that crosses $4\,{}^\circ\mathrm C$ gives the overall change. An intermediate measurement near $4\,{}^\circ\mathrm C$ reveals the reversal. The vertical axis has no numerical scale. The two slopes show only how the sign of the volume change differs.
::grafico{assi=0 unicolore=1 curve="t,(t-4)^2/5+1.1,0,8" xmin=-1 xmax=9 ymin=0 ymax=6 vettori="0,0.6,8.7,0.6,;0,0.6,0,5.4," punti="4,1.1,pieno" segmenti="4,.6,4,1.1" etichette="4.1,.34,4 °C;5.35,.33,temperature;0.17,5.2,volume" titolo="Qualitative volume of a fixed mass of liquid water at atmospheric pressure"}
:::
