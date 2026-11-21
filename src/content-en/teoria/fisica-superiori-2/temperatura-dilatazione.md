---
titolo: "Temperature and thermal expansion"
sommario: "Thermal equilibrium, temperature scales, linear, area and volume expansion, and thermometer readings."
---

## Thermal equilibrium

:::definizione{#equilibrio titolo="Comparing thermal states"}
The **temperature** of a body is the quantity that indicates how hot or cold the body is, and it is measured with a thermometer. **Heat** is the energy that passes from one body to another because the two have different temperatures. It is measured in joules ($\mathrm J$).

Two bodies exchange heat when they are in contact, or when they are separated by a wall that lets heat through, such as a metal sheet. A wall that does not let heat through is called **insulating**. A system is **isolated** when it exchanges no energy with its surroundings. If two bodies in an isolated system start at different temperatures, heat flows on its own, that is **spontaneously**, from the body at the higher temperature to the body at the lower temperature. The two bodies are in **thermal equilibrium** when net heat transfer ceases and their temperatures are equal. Between two bodies separated by an insulating wall no heat passes even if their temperatures differ, so in that case the absence of transfer does not indicate equal temperatures.

The **zeroth law of thermodynamics** states that if two bodies are each in thermal equilibrium with the same third body, then they are in thermal equilibrium with each other. In practice the third body is a thermometer. If a thermometer reads $36\,{}^\circ\mathrm C$ first in a cup and then in a bottle, the cup and the bottle therefore have the same temperature, even without being put in contact.

The body whose temperature is measured is called the **sample**. The thermometer reading is the temperature of the sample when two conditions hold. The thermometer has reached equilibrium with the sample. In addition, the thermometer exchanges so little heat that the temperature of the sample is left almost unchanged. This happens if the **heat capacity** of the thermometer, that is the energy needed to warm it by one degree, is small compared with that of the sample. A very heavy and colder **sensor**, that is an electronic thermometer, immersed in a small droplet takes an appreciable amount of heat from the droplet. It therefore cools the droplet and reads the final temperature of droplet and sensor together.
:::

:::esempio{titolo="The reading approaches a steady value"}
A sensor initially at $20\,{}^\circ\mathrm C$ is immersed in a tank held at $40\,{}^\circ\mathrm C$. After a few seconds it reads $35\,{}^\circ\mathrm C$. The difference between the temperature of the tank and that of the sensor is still $5$ degrees, that is $5\,\mathrm K$ (the kelvin, $\mathrm K$, is the unit of temperature of the International System of Units, and a difference of one degree Celsius equals one kelvin). The sensor is colder than the tank, so it is still receiving energy and its reading keeps rising. If the tank stays at a constant temperature, the ideal reading gets closer and closer to $40\,{}^\circ\mathrm C$.

In the graph the reading starts at $20\,{}^\circ\mathrm C$, rises more and more slowly and approaches the $40\,{}^\circ\mathrm C$ line. The tank value is recorded when the reading stops changing.

::grafico{f="40-20*exp(-x/4)" punti="0,20,pieno" xmin=0 xmax=24 ymin=15 ymax=45 nomi="t (s),T (°C)" asintoti="y=40" titolo="One possible course of the reading. The line at 40 °C indicates the tank temperature."}
:::

:::osservazione
Temperature describes the thermal state of a body and is measured in kelvins. Heat describes a transfer of energy and is measured in joules. A small piece of hot metal transfers heat to a pan of lukewarm water even though it contains far less matter, because the direction of the transfer depends only on the temperatures.

The **internal energy** of a body is the total energy of the particles that make it up. It depends on the temperature, but also on the mass and on the material. A bath and a cup of water at $40\,{}^\circ\mathrm C$ are in thermal equilibrium, yet the bath has a much larger internal energy, because it contains many more particles. Calculating how much energy is transferred therefore requires other information, such as the masses and heat capacities.
:::

## Celsius and kelvin

:::definizione{#scale titolo="Absolute temperature"}
On the **Celsius scale** zero is the temperature of melting ice and $100\,{}^\circ\mathrm C$ is approximately the temperature of boiling water, at atmospheric pressure. On the **absolute scale**, or Kelvin scale, the unit is the **kelvin** ($\mathrm K$) and zero is **absolute zero**, that is the lowest possible temperature. No body has a lower temperature, so a temperature in kelvins is never negative.

Let $t_C$ denote the numerical value of the temperature on the Celsius scale, expressed in degrees Celsius, and $T$ its value on the absolute scale, expressed in kelvins. The letter $C$ written below the line, called a **subscript**, refers to the Celsius scale. The conversions between numerical values are
$$
T=t_C+273.15,\qquad t_C=T-273.15.
$$
The constant $273.15$ is the distance between the two zeros. For example, $0\,{}^\circ\mathrm C$ corresponds to $273.15\,\mathrm K$, while $0\,\mathrm K$ corresponds to $-273.15\,{}^\circ\mathrm C$. Absolute temperatures are written with the symbol $\mathrm K$ without a degree sign, as in $300\,\mathrm K$.
:::

::::teorema{#intervalli titolo="Equivalence of temperature intervals"}
The **temperature change** is the final temperature minus the initial temperature, $\Delta T=T_f-T_i$. The Greek letter $\Delta$ (capital *delta*) indicates a change, and the subscripts $i$ and $f$ stand for initial and final. If $\Delta T>0$ the body warms up, if $\Delta T<0$ it cools down.

An increase of one degree Celsius is an increase of one kelvin. Therefore, to calculate $\Delta T$ we can subtract the two values in degrees Celsius or the two values in kelvins, provided both are on the same scale. For example, a change from $-8\,{}^\circ\mathrm C$ to $12\,{}^\circ\mathrm C$ is $12-(-8)=20\,\mathrm K$.

In the graph of $T$ against $t_C$ the marked points are $20$ apart horizontally and $20$ apart vertically. The line therefore has **slope** $1$ (the slope is the vertical increase divided by the horizontal increase) and meets the vertical axis at $273.15\,\mathrm K$.

:::dimostrazione
Write the two temperatures in kelvins using the conversion formula and subtract them:
$$
\begin{aligned}
\Delta T&=(t_{C,f}+273.15)-(t_{C,i}+273.15)\\[6pt]
        &=t_{C,f}-t_{C,i}.
\end{aligned}
$$
The number $273.15$ appears once with a plus sign and once with a minus sign, so the constant terms cancel. The equivalence therefore applies to intervals, while the numerical values of the same temperature differ by $273.15$.
:::
::::

::grafico{f="x+273.15" punti="-20,253.15,pieno;0,273.15,pieno;20,293.15,pieno" xmin=-30 xmax=30 ymin=240 ymax=308 nomi="t_C (°C),T (K)" titolo="The marked points are spaced 20 units apart along both axes. The vertical intercept is 273.15 K."}

:::attenzione
A ratio of temperatures has a physical meaning only if absolute values are used. Changing from $10\,{}^\circ\mathrm C$ to $20\,{}^\circ\mathrm C$ increases the temperature by $10\,\mathrm K$. The ratio $\dfrac{20}{10}=2$ would suggest that the temperature has doubled. In kelvins the two temperatures are $283.15\,\mathrm K$ and $293.15\,\mathrm K$, and the ratio of the two absolute values is $\dfrac{293.15}{283.15}\simeq1.035$ (the symbol $\simeq$ is read «approximately equal to»). The absolute temperature therefore increases by about $3.5\%$.
:::

:::esempio{#taratura-termometro titolo="Calibrating a sensor with two references"}
To **calibrate** an instrument means to associate the true value with each of its readings, using samples whose temperature is known. A sensor returns a value $r$ in **scale divisions**, that is in marks on its scale. Between two reference temperatures, assume the reading follows the affine relation $r=at_C+b$. The graph of an **affine** relation is a straight line, in which $a$ is the slope, that is the extra divisions per degree, and $b$ is the constant term, that is the reading at $0\,{}^\circ\mathrm C$. To determine $a$ and $b$, let the sensor reach equilibrium in each bath, then record the temperature and reading as a pair.

| Bath or sample | Temperature (°C) | Reading (div.) |
| --- | ---: | ---: |
| Cold reference | 0 | 6 |
| Hot reference | 100 | 86 |
| Sample | to be found | 46 |

The cold reference is at $0\,{}^\circ\mathrm C$. Substituting $t_C=0$ into the relation gives $r=b$, so $b=6$. Between the two references the reading rises by $86-6=80$ divisions while the temperature rises by $100$ degrees, so $a=\dfrac{80}{100}=0.80$ divisions per degree. To find the sample temperature, first subtract the constant term from the sample reading and then divide by the slope.
$$
t_C=\dfrac{46-6}{0.80}=50.
$$
The sample is at $50\,{}^\circ\mathrm C$. The value of $r$ is halfway between $6$ and $86$, so the corresponding point lies halfway between the two reference temperatures. A third measurement at a known temperature, taken within the interval, tests whether the instrument really follows a straight line.

Taking a difference of readings removes $b$ and retains the factor $a$. A change of $\Delta r$ divisions therefore corresponds to $\Delta T=\dfrac{\Delta r}{a}$. For the same reason a **zero error**, which shifts all readings by the same amount, does not change the differences. If a thermometer always reads $2\,{}^\circ\mathrm C$ above the true value, the readings $14\,{}^\circ\mathrm C$ and $23\,{}^\circ\mathrm C$ still correspond to a real increase of $9\,\mathrm K$. To correct a single reading, on the other hand, the error is removed, so the true temperature is $14-2=12\,{}^\circ\mathrm C$.
::grafico{f="0.8*x+6" xmin=-7 xmax=108 ymin=0 ymax=95 punti="0,6,pieno;50,46,pieno;100,86,pieno" segmenti="0,46,50,46;50,0,50,46" nomi="t_C (°C),r (div.)" titolo="The reading of 46 is halfway between the references and corresponds to 50 °C"}
:::

## Linear expansion

:::teorema{#lineare titolo="The change in length"}
When a body warms up, its dimensions usually increase. This phenomenon is called **thermal expansion**. Consider an **unconstrained** rod, that is one whose ends are not fixed, which is **uniform**, that is made of the same material at every point, and which has the same temperature throughout. Let $L_0$ denote its initial length (the subscript $0$ indicates the initial value) and $\Delta T$ the temperature change. For small deformations, that is when the rod changes length by a small fraction, and for an expansion coefficient $\alpha$ that is approximately constant over the interval, the change in length $\Delta L=L-L_0$ is
$$
\Delta L\simeq\alpha L_0\Delta T,\qquad L\simeq L_0(1+\alpha\Delta T).
$$
The Greek letter $\alpha$ (*alpha*) is the **linear expansion coefficient** of the material. The extension is therefore **directly proportional** both to $L_0$ and to $\Delta T$, that is it doubles if $L_0$ doubles or if $\Delta T$ doubles.

The **relative change** $\dfrac{\Delta L}{L_0}$ is the change divided by the initial length. Dividing the formula by $L_0$ gives $\dfrac{\Delta L}{L_0}\simeq\alpha\Delta T$, so the coefficient $\alpha$ is the relative change in length per kelvin. The relative change has no unit, because it is a ratio of two lengths. Therefore the unit of $\alpha$ is $\mathrm{K^{-1}}$, which is read «kelvin to the minus one» and means «per kelvin».

If $\alpha>0$, which is the most common case, cooling gives $\Delta T<0$ and produces contraction, with $\Delta L<0$. Some materials have $\alpha<0$ in certain temperature ranges, and in those ranges warming makes them shorter. If the ends are fixed, the **constraint**, that is whatever prevents movement, opposes the expansion and internal forces arise in the rod. The equation then gives the change that the unconstrained rod would show at the same temperature.
:::

:::esempio{titolo="Finding the coefficient from two measurements"}
At $20\,{}^\circ\mathrm C$ a rod measures $1.0000\,\mathrm m$. At $70\,{}^\circ\mathrm C$ it measures $1.0006\,\mathrm m$. Therefore $\Delta T=70-20=50\,\mathrm K$ and $\Delta L=1.0006-1.0000=0.0006\,\mathrm m$. Dividing the fractional expansion by the temperature interval gives
$$
\alpha\simeq \frac{0.0006\,\mathrm m}{1.0000\,\mathrm m\cdot50\,\mathrm K}
=1.2\cdot10^{-5}\,\mathrm{K^{-1}}.
$$
In the graph $\Delta L$ is in millimetres. The line passes through the origin and through point $A$, whose coordinates are $50\,\mathrm K$ and $0.6\,\mathrm{mm}$, so its slope is $\dfrac{0.6}{50}=0.012\,\mathrm{mm}$ per kelvin. This slope equals $\alpha L_0$, so $\alpha$ is obtained by dividing the slope by the initial length expressed in millimetres, $\dfrac{0.012}{1000}=1.2\cdot10^{-5}\,\mathrm{K^{-1}}$.

If the instrument resolves only whole millimetres, that is it has one-millimetre divisions, the two lengths are separated by less than one scale division and the instrument cannot distinguish them. To estimate the coefficient accurately, the experiment can use a longer rod, which extends more, or a device that resolves smaller changes.

::grafico{f="0.012*x" punti="50,0.6,pieno,A" xmin=-14 xmax=56 ymin=-0.2 ymax=0.9 nomi="ΔT (K),ΔL (mm)" titolo="The slope is 0.012 mm per kelvin. Divide it by the initial length in millimetres to obtain the coefficient."}
:::

:::esempio{#tratti-temperature titolo="A rod with two temperature zones"}
A free rod consists of two sections of the same material, with $\alpha=2\cdot10^{-5}\,\mathrm{K^{-1}}$, placed **in series**, that is one after the other along the same line. The first section is $0.60\,\mathrm m$ long and warms uniformly by $40\,\mathrm K$. The second is $1.40\,\mathrm m$ long and warms by $10\,\mathrm K$. In this model the transition region between the two sections is neglected. The total length is the sum of the lengths of the sections, so the total extension is the sum of their individual extensions. Factoring out the common factor $\alpha$ gives
$$
\begin{aligned}
\Delta L
&\simeq \alpha\big[(0.60\,\mathrm m)(40\,\mathrm K)
                 +(1.40\,\mathrm m)(10\,\mathrm K)\big]\\[6pt]
&=0.00076\,\mathrm m=0.76\,\mathrm{mm}.
\end{aligned}
$$
The sum $(0.60)(40)+(1.40)(10)$ equals $24+14=38\,\mathrm{m\,K}$. Dividing it by the total length of $2.00\,\mathrm m$ gives a length-weighted mean temperature rise of $19\,\mathrm K$, that is a mean in which each section counts in proportion to its length. The two sections have different lengths, so the simple mean of $40$ and $10\,\mathrm K$, which is $25\,\mathrm K$, would give them equal weight and overestimate the extension, bringing it to $1.00\,\mathrm{mm}$.
::grafico{linee="0,40 0.6,40;0.6,10 2,10" segmenti="0.6,0,0.6,40" punti="0,40,pieno;2,10,pieno" xmin=0 xmax=2.2 ymin=0 ymax=47 nomi="x (m),ΔT (K)" etichette="0.06,43,Section 1;0.95,14,Section 2;0.56,2.5,0.60 m" titolo="The hotter section is also shorter. The mean takes the length of each section into account"}
:::

:::esempio{#coefficiente-intervallo titolo="Comparing two intervals for the same material"}
A free rod is $2.00\,\mathrm m$ long at $20\,{}^\circ\mathrm C$ and extends by $0.40\,\mathrm{mm}$ between $20$ and $40\,{}^\circ\mathrm C$. Between $40$ and $80\,{}^\circ\mathrm C$ it extends by another $0.96\,\mathrm{mm}$. The **mean slope** over an interval is the extension divided by the temperature rise. Referring both changes to the same initial length, the mean slope is $\dfrac{0.40}{20}=0.020\,\mathrm{mm/K}$ in the first interval and $\dfrac{0.96}{40}=0.024\,\mathrm{mm/K}$ in the second. Dividing by $2000\,\mathrm{mm}$ gives mean coefficients of $1.0\cdot10^{-5}\,\mathrm{K^{-1}}$ and $1.2\cdot10^{-5}\,\mathrm{K^{-1}}$.

The two increases add to $1.36\,\mathrm{mm}$. Extending the first slope across all $60\,\mathrm K$ would give $0.020\cdot60=1.20\,\mathrm{mm}$. The difference of $0.16\,\mathrm{mm}$ is compared with the **uncertainty** of the measurements, that is the largest error the instrument can make. If that difference is appreciable relative to the uncertainty, the data require different slopes for the two intervals. In the same way, if the measured points of $\Delta L$ against $\Delta T$ form a curve, a single coefficient describes only narrow intervals well. A mean slope determined from two points describes the interval between those points. Using it elsewhere requires checking that the material behaves similarly there. If the displacement sensor has a zero error, the extension is the final reading minus the initial reading.
:::

:::osservazione{#variazione-relativa titolo="From relative change to a measured change"}
Two free rods of the same material undergoing the same temperature change share the relative change $\alpha\Delta T$. Multiplying by the initial length converts the fraction to an actual change. For example, a relative change of $0.1\%$, that is $0.001$, gives $0.001\cdot0.50\,\mathrm m=0.50\,\mathrm{mm}$ for $0.50\,\mathrm m$, and $2.00\,\mathrm{mm}$ for $2.00\,\mathrm m$. The ratio of the extensions is $\dfrac{2.00}{0.50}=4$, which equals the ratio of the lengths. The percentage therefore depends only on the material and on $\Delta T$, and not on the dimensions of the sample.
:::

## An example of expansion

:::esempio{#esempio titolo="A metal rod"}
An unconstrained rod of length $2.00\,\mathrm m$ has $\alpha=12\cdot10^{-6}\,\mathrm{K^{-1}}$ and is warmed by $50\,\mathrm K$. Since the initial length is in metres, the product gives a change in metres. To compare it with the width of an **expansion gap**, that is the space left free between the rod and an obstacle, we also express it in millimetres, multiplying by $1000$.
$$
\begin{aligned}
\Delta L&\simeq(12\cdot10^{-6})\cdot2.00\cdot50\,\mathrm m\\[6pt]
        &=0.0012\,\mathrm m=1.2\,\mathrm{mm},\\[6pt]
L&\simeq2.0012\,\mathrm m.
\end{aligned}
$$
The line in the graph has slope $\alpha L_0=12\cdot10^{-6}\cdot2000\,\mathrm{mm}=0.024\,\mathrm{mm}$ per kelvin. The point on the right has horizontal coordinate $50\,\mathrm K$ and vertical coordinate $1.2\,\mathrm{mm}$. Extending the line to $\Delta T=-25\,\mathrm K$, that is to cooling by $25\,\mathrm K$, gives $\Delta L=-0.6\,\mathrm{mm}$, which is a contraction of $0.6\,\mathrm{mm}$. Points above the horizontal axis indicate an extension, points below it a contraction. The estimate holds within the range over which the material's $\alpha$ is approximately constant.

::grafico{f="0.024*x" punti="50,1.2,pieno; -25,-0.6,pieno" xmin=-40 xmax=65 ymin=-1 ymax=2 nomi="ΔT (K),ΔL (mm)" titolo="For the rod in the example, the position relative to the origin indicates expansion or contraction."}
:::

:::esempio{titolo="Comparing the expansion with the available gap"}
If the same rod has a $0.96\,\mathrm{mm}$ gap in front of one end and the other end stays fixed, the gap closes when the extension equals its width, that is when $\Delta L=0.96\,\mathrm{mm}$. The slope of the graph is $0.024\,\mathrm{mm/K}$. The gap therefore closes at $\Delta T\simeq\dfrac{0.96}{0.024}\,\mathrm K=40\,\mathrm K$. Beyond this change the rod touches the obstacle and is no longer free, so the free expansion model ceases to apply.
:::

:::esempio{#giunto-due-barre titolo="A gap that narrows from both sides"}
Two **collinear** rods, that is rods lying along the same straight line, are fixed only at their outer ends. A gap of $1.60\,\mathrm{mm}$ separates their inner ends. The left rod is $1.50\,\mathrm m$ long with $\alpha_s=2.0\cdot10^{-5}\,\mathrm{K^{-1}}$. The right rod is $1.00\,\mathrm m$ long with $\alpha_d=1.0\cdot10^{-5}\,\mathrm{K^{-1}}$. If both warm by $\Delta T$, each extends towards the other while the gap is open. For each kelvin the left rod advances by $2.0\cdot10^{-5}\cdot1500\,\mathrm{mm}=0.030\,\mathrm{mm}$ and the right rod by $1.0\cdot10^{-5}\cdot1000\,\mathrm{mm}=0.010\,\mathrm{mm}$. The sum of the two displacements is therefore $0.040\,\mathrm{mm}$ per kelvin, which is how much the gap narrows for each kelvin. The ends first touch when the narrowing equals the initial width, that is at
$$
\Delta T\simeq\dfrac{1.60\,\mathrm{mm}}{0.040\,\mathrm{mm/K}}=40\,\mathrm K.
$$
At that temperature the left rod advances by $0.030\cdot40=1.20\,\mathrm{mm}$ and the right rod by $0.010\cdot40=0.40\,\mathrm{mm}$. The point of contact is therefore closer to the right side of the original gap. In the graph the width of the gap falls along a straight line to zero, which it reaches at $40\,\mathrm K$. After contact the model describes only how the rods would expand if free. Finding the forces requires data about the rods and their constraints.
::grafico{linee="0,1.6 40,0" xmin=0 xmax=45 ymin=0 ymax=2 punti="0,1.6,pieno;40,0,pieno" segmenti="20,0,20,0.8" nomi="ΔT (K),gap (mm)" titolo="The plotted segment ends at the first contact between the two rod ends"}
:::

## Areas, volumes and holes

::::teorema{#volume titolo="Expansion of an isotropic solid"}
A solid is **isotropic** when it expands by the same factor in every direction. Setting $\varepsilon=\alpha\Delta T$ (the Greek letter $\varepsilon$ is read *epsilon*), $\varepsilon$ is the relative change of every length, and every length is multiplied by approximately $1+\varepsilon$. The initial area $A_0$ and initial volume $V_0$ change to first approximation according to
$$
\Delta A\simeq2\alpha A_0\Delta T,\qquad
\Delta V\simeq3\alpha V_0\Delta T.
$$
The number $2\alpha$ is called the area expansion coefficient. The number $3\alpha$ is called the **volume expansion coefficient** and is denoted by $\beta$ (*beta*), so for an isotropic solid $\beta\simeq3\alpha$ and $\alpha\simeq\dfrac{\beta}{3}$. For $\alpha=2.0\cdot10^{-5}\,\mathrm{K^{-1}}$ the area coefficient is $4.0\cdot10^{-5}\,\mathrm{K^{-1}}$ and $\beta\simeq6.0\cdot10^{-5}\,\mathrm{K^{-1}}$.

These equations require $|\varepsilon|\ll1$, that is the **absolute value** of $\varepsilon$, its value without sign, must be much smaller than $1$. In the graph of the relative changes against $\varepsilon$ the volume line has slope $3$ and rises faster than the area line, which has slope $2$.

:::dimostrazione
Consider a rectangle of area $A_0$. Both sides of the rectangle are multiplied by $1+\varepsilon$, so the area is multiplied by $(1+\varepsilon)^2$. The fractional area change is therefore
$$
(1+\varepsilon)^2-1=1+2\varepsilon+\varepsilon^2-1=2\varepsilon+\varepsilon^2.
$$
The product of the three dimensions of a rectangular block is multiplied by $(1+\varepsilon)^3=1+3\varepsilon+3\varepsilon^2+\varepsilon^3$, so it changes instead by $(1+\varepsilon)^3-1=3\varepsilon+3\varepsilon^2+\varepsilon^3$. For small deformations the quadratic and cubic terms are negligible compared with the linear ones. For example, with $\varepsilon=0.001$ we have $\varepsilon^2=0.000001$. Keeping only the terms with $\varepsilon$ to the first power, that is **to first order**, leaves $2\varepsilon$ and $3\varepsilon$. The factors $2$ and $3$ correspond to the number of directions that contribute to the product, two for area and three for volume.
:::
::::

::grafico{f="2*x;3*x" xmin=0 xmax=0.006 ymin=0 ymax=0.021 nomi="ε,ΔA/A₀ or ΔV/V₀" legenda="\Delta A/A_0 = 2\varepsilon;\Delta V/V_0 = 3\varepsilon" titolo="In the small-deformation model, the fractional volume change increases faster than the fractional area change."}

:::esempio{#foro titolo="A hole expands"}
A circular hole has diameter $20\,\mathrm{mm}$ in an unconstrained aluminium plate, that is a plate free of constraints. With $\alpha=2.4\cdot10^{-5}\,\mathrm{K^{-1}}$ and $\Delta T=50\,\mathrm K$, its diameter increases by $2.4\cdot10^{-5}\cdot20\cdot50\,\mathrm{mm}=0.024\,\mathrm{mm}$. All the distances between points on the rim are multiplied by the same factor $1+\varepsilon$, so the distance between two diametrically opposite points increases and the hole gets wider. We can imagine filling the hole with a disc made from the same material and apply the free expansion model to the disc, because the edge of the disc coincides with the rim of the hole.

For the same reason the hole keeps its shape. An elliptical hole remains an ellipse with the same proportions. When the plate is warmed, a pin that would barely fit into the hole therefore passes through more easily.
:::

:::osservazione{#direzioni-distinte titolo="When two directions change differently"}
The factor $2$ in area expansion applies when the relative changes in both directions are equal. In a **crystal** the atoms are arranged in regular rows, and in some crystals the expansion differs along different directions. If a rectangle aligned with two directions in a crystal grows by a fraction $\varepsilon_x$ along one side and $\varepsilon_y$ along the other, its area changes according to
$$
\dfrac{\Delta A}{A_0}=(1+\varepsilon_x)(1+\varepsilon_y)-1
=\varepsilon_x+\varepsilon_y+\varepsilon_x\varepsilon_y .
$$
For $\varepsilon_x=0.002$ and $\varepsilon_y=0.001$, the result is $1.002\cdot1.001-1=0.003002$. To first order it is $\varepsilon_x+\varepsilon_y=0.003$, or $0.3\%$. The difference between the two results is the product of the two small relative increases, $0.002\cdot0.001=0.000002$.

If one direction were constrained to remain at a fixed length, its contribution would be zero. For example, a rectangular block that extends by the fraction $\varepsilon$ in one direction only, with the other two fixed, changes its volume by the fraction $\varepsilon$. Therefore the strains the constraints allow are used and, when the directions differ, each side is considered separately.
:::

## Liquids and apparent expansion

:::osservazione{#apparente titolo="The container expands as well"}
A liquid takes the shape of its container, so for a liquid only the change in volume is studied and the volume expansion coefficient $\beta$ is used. At constant pressure and over an interval in which $\beta$ is approximately constant, the model is $\Delta V\simeq\beta V_0\Delta T$. **Pressure** is the force the liquid experiences per unit area, and here it stays at atmospheric pressure.

The container has a **mark**, that is a line on its wall, and the **capacity up to the mark** is the internal volume below that line. Assume the liquid initially fills a volume $V_0$ up to the mark and that container and liquid undergo the same temperature change. The liquid increases by $\beta_{\mathrm{liq}}V_0\Delta T$. The container also expands, so the capacity up to the mark also changes, by $\beta_{\mathrm{rec}}V_0\Delta T$. The subscripts «liq» and «rec» stand for liquid and container (from the Italian *recipiente*). If the container is free to expand, the difference between the liquid volume and the capacity up to the mark, expressed as a volume to first order, is called the **apparent expansion**:
$$
\Delta V_{\mathrm{app}}\simeq
(\beta_{\mathrm{liq}}-\beta_{\mathrm{rec}})V_0\Delta T.
$$
We subtract the changes because the reference level in the container shifts. The difference $\beta_{\mathrm{liq}}-\beta_{\mathrm{rec}}$ is called the apparent coefficient $\beta_{\mathrm{app}}$. For an isotropic container with linear coefficient $\alpha_{\mathrm{rec}}$ we have $\beta_{\mathrm{rec}}\simeq3\alpha_{\mathrm{rec}}$.

If the two coefficients are equal, the level indicated stays the same even though the volumes have changed. If $\beta_{\mathrm{rec}}$ is greater than $\beta_{\mathrm{liq}}$, the liquid level falls below the mark. In a liquid thermometer $\beta_{\mathrm{liq}}$ is greater than $\beta_{\mathrm{rec}}$, so the apparent expansion is positive and the column rises when the thermometer warms up.
:::

:::esempio{titolo="A liquid in a graduated container"}
For $V_0=200\,\mathrm{mL}$, $\Delta T=40\,\mathrm K$, $\beta_{\mathrm{liq}}=7\cdot10^{-4}\,\mathrm{K^{-1}}$ and $\beta_{\mathrm{rec}}=3\cdot10^{-5}\,\mathrm{K^{-1}}$ we calculate the two changes and their difference.
$$
\begin{aligned}
\Delta V_{\mathrm{liq}}&\simeq(7\cdot10^{-4})\cdot200\cdot40\,\mathrm{mL}=5.6\,\mathrm{mL}\\[6pt]
\Delta V_{\mathrm{rec}}&\simeq(3\cdot10^{-5})\cdot200\cdot40\,\mathrm{mL}=0.24\,\mathrm{mL}\\[6pt]
\Delta V_{\mathrm{app}}&\simeq(5.6-0.24)\,\mathrm{mL}=5.36\,\mathrm{mL}.
\end{aligned}
$$
The liquid expands by $5.6\,\mathrm{mL}$. The container expands by $0.24\,\mathrm{mL}$ up to its original mark. The difference observed is therefore $5.36\,\mathrm{mL}$. The graph shows the true change of the liquid, the container change and the apparent change as three lines through the origin with different slopes. At $40\,\mathrm K$ the vertical segment between the liquid point and the container point measures the apparent expansion.

::grafico{f="0.14*x;0.006*x;0.134*x" punti="40,5.6,pieno;40,0.24,pieno" segmenti="40,0.24,40,5.6" xmin=0 xmax=48 ymin=-1.05 ymax=7 nomi=",ΔV (mL)" etichette="42,-.85,ΔT (K)" legenda="\mathrm{liquid};\mathrm{container};\mathrm{apparent}" titolo="At 40 K the changes are 5.6 mL for the liquid and 0.24 mL for the container. The apparent expansion curve gives their difference."}
:::

:::esempio{#trabocco titolo="When the liquid reaches the rim"}
A container has an initial capacity of $102\,\mathrm{mL}$ up to the **rim**, that is up to its top edge, and contains $100\,\mathrm{mL}$ of liquid. There are therefore $2\,\mathrm{mL}$ of spare space. After warming by $40\,\mathrm K$, its capacity increases by $0.40\,\mathrm{mL}$ and becomes $102.40\,\mathrm{mL}$. The liquid would grow by $3.60\,\mathrm{mL}$, so at that temperature it would occupy $103.60\,\mathrm{mL}$ if all of it remained in the container. The volume that **overflows**, that is that spills over the rim, measured at the final temperature, is therefore $103.60-102.40=1.20\,\mathrm{mL}$.

The two volumes are compared directly at the final temperature because the initial capacity up to the rim and the liquid's initial volume differ. The same calculation can start from the initial spare capacity of $2\,\mathrm{mL}$. To reach the rim the liquid must fill that space and another $0.40\,\mathrm{mL}$ created by the expansion of the container, that is $2.40\,\mathrm{mL}$ in all. Of the $3.60\,\mathrm{mL}$ of free liquid expansion, $3.60-2.40=1.20\,\mathrm{mL}$ is left beyond the rim. The lines in the graph rise by $0.09$ and by $0.01\,\mathrm{mL}$ per kelvin, so they meet after $\dfrac{2}{0.09-0.01}=25\,\mathrm K$, at $102.25\,\mathrm{mL}$, and from then on the liquid overflows.
::grafico{f="100+0.09*x;102+0.01*x" xmin=0 xmax=46 ymin=99 ymax=105 punti="25,102.25,pieno;40,103.6,pieno;40,102.4,pieno" segmenti="40,102.4,40,103.6" nomi="ΔT (K),V (mL)" legenda="\text{liquid without losses};\text{capacity up to rim}" titolo="At the intersection the liquid first reaches the rim. At 40 K the vertical difference is 1.20 mL"}
:::

:::attenzione{#acqua-anomala titolo="The range from 0 to 4 °C"}
At atmospheric pressure liquid water contracts when heated from $0\,{}^\circ\mathrm C$ to about $4\,{}^\circ\mathrm C$, that is its volume decreases. **Density** is mass divided by volume, $\rho=\dfrac mV$ (the Greek letter $\rho$ is read *rho*). Since the mass stays constant and the volume decreases, the density increases. Above $4\,{}^\circ\mathrm C$ water expands and the density decreases again as the temperature increases. At about $4\,{}^\circ\mathrm C$ the volume of a fixed mass of water is therefore at its minimum and the density at its maximum. A single positive constant coefficient cannot describe both ranges.
:::

:::osservazione{#modello-acqua titolo="Choosing the interval for a coefficient"}
For liquid water at atmospheric pressure the volume decreases from $1$ to $3\,{}^\circ\mathrm C$, so a coefficient estimated over that interval is negative. From $5$ to $8\,{}^\circ\mathrm C$ the volume increases and the estimated coefficient is positive. Measuring only the endpoints of an interval that crosses $4\,{}^\circ\mathrm C$ gives the overall change. For example, the volume at $2\,{}^\circ\mathrm C$ and that at $6\,{}^\circ\mathrm C$ turn out almost equal, even though between the two temperatures the volume first falls and then rises again. An intermediate measurement near $4\,{}^\circ\mathrm C$, instead, reveals the reversal. In the graph the vertical axis has no numerical scale. The curve falls to its minimum at $4\,{}^\circ\mathrm C$ and then rises again, and the two slopes show only how the sign of the volume change differs.
::grafico{assi=0 unicolore=1 curve="t,(t-4)^2/5+1.1,0,8" xmin=-1 xmax=9 ymin=0 ymax=6 vettori="0,0.6,8.7,0.6,;0,0.6,0,5.4," punti="4,1.1,pieno" segmenti="4,.6,4,1.1" etichette="4.1,.34,4 °C;5.35,.33,temperature;0.17,5.2,volume" titolo="Qualitative volume of a fixed mass of liquid water at atmospheric pressure"}
:::
