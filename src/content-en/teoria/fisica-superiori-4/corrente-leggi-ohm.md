---
titolo: Electric current, Ohm’s laws, and Joule heating
sommario: Current magnitude and direction, resistance, temperature, electric power,
  measurement, and energy use.
---

## Magnitude and direction of current

:::definizione{#corrente titolo="Charge crossing a cross section"}
Consider a cross section of the wire, choose a positive direction along the conductor, and let $\Delta q$ be the signed net charge crossing the section during time $\Delta t$. A positive charge traveling in the chosen direction contributes positively. A negative charge moving in the same direction contributes negatively. The **average current** is

$$
I_{\mathrm{avg}}=\frac{\Delta q}{\Delta t},\qquad 1\,\mathrm{A}=1\,\mathrm{C/s}.
$$

An ampere measures coulombs per second. If current is constant, $\Delta q=I\Delta t$. For example, $0.50\,\mathrm{A}$ for one minute corresponds to $30\,\mathrm{C}$. Current concerns passage through the section during a measurement. Charge present in the metal at a particular instant is a different quantity.

**Conventional current** points in the direction positive charges would move. In a metal wire the electrons are negatively charged, so their average drift is opposite to that direction. Reversing the reference direction reverses the assigned sign of $I$ while the physical flow across the section stays the same.
:::

:::esempio{titolo="Current that changes during the measurement"}
A current is $1.2\,\mathrm{A}$ for $5\,\mathrm{s}$ and $0.30\,\mathrm{A}$ for the next $15\,\mathrm{s}$, always in the same direction. Find total charge by adding the charge that passes in each interval.

$$
\Delta q=(1.2\cdot 5+0.30\cdot 15)\,\mathrm{C}=10.5\,\mathrm{C},\qquad I_{\mathrm{avg}}=\frac{10.5}{20}\,\mathrm{A}=0.525\,\mathrm{A}.
$$

The second interval lasts three times as long as the first, so it carries more weight in the average. If the current in the second interval runs in the opposite direction, the $4.5\,\mathrm{C}$ term gets a negative sign and the net charge is $1.5\,\mathrm{C}$. The total magnitude of charge transported in both directions is still $10.5\,\mathrm{C}$.

::grafico{f="0" area="1.2;0;0;5|0.3;0;5;20" xmin=0 xmax=20 ymin=0 ymax=1.5 nomi="t,I" punti="5,1.2,pieno;20,0.3,pieno" titolo="Time in seconds and current in amperes. The area under the graph is the charge: $6.0\,\mathrm{C}$ in the first interval and $4.5\,\mathrm{C}$ in the second."}
:::

:::attenzione
The sign of $I$ depends on the chosen positive direction and on the net charge, and not on the sign of the carriers. If $3.0\cdot10^{18}$ electrons per second cross the section from right to left, the negative charge going left is equivalent to positive charge going right. With the positive direction from left to right,

$$
I=\frac{3.0\cdot10^{18}\cdot1.60\cdot10^{-19}\,\mathrm{C}}{1\,\mathrm{s}}=+0.48\,\mathrm{A}.
$$

With the opposite positive direction the same physical flow would give $-0.48\,\mathrm{A}$.
:::

:::esempio{titolo="How many electrons per second"}
Each electron carries a charge of magnitude $e=1.60\cdot10^{-19}\,\mathrm{C}$, so the number of electrons crossing the section in time $\Delta t$ is $N=\dfrac{|I|\Delta t}{e}$. For $I=1.0\,\mathrm{A}$ and $\Delta t=1\,\mathrm{s}$

$$
N=\frac{1.0\cdot1}{1.60\cdot10^{-19}}=6.25\cdot10^{18}.
$$

One ampere therefore corresponds to the passage of about $6.25$ billion billion electrons per second. Since the available carriers are extremely numerous, the drift of each one can be very slow.
:::

## Charge carriers and drift speed

:::teorema{#deriva titolo="Current carried by one type of charge"}
In a uniform section with one carrier type, let $n$ be the number of carriers per unit volume, $q$ the charge of each carrier, $A$ the cross-sectional area, and $v_d$ the drift speed. In time $\Delta t$, drift brings through the section the carriers contained on average in a volume $Av_d\Delta t$. Multiplying by $n|q|$ gives the magnitude of the charge transferred. Dividing by time yields

$$
|I|=n|q|Av_d.
$$

Number density $n$ is measured in $\mathrm{m^{-3}}$ and area in $\mathrm{m^2}$. Multiplication by $v_d$ gives the number of carriers passing per second. Random electron motion contributes in both directions. Drift driven by the electric field determines the net result.
:::

:::esempio{titolo="Order of magnitude of drift"}
Consider $n=8.0\cdot10^{28}\,\mathrm{m^{-3}}$, $|q|=1.60\cdot10^{-19}\,\mathrm{C}$, $A=1.0\,\mathrm{mm^2}=1.0\cdot10^{-6}\,\mathrm{m^2}$, and $I=1.0\,\mathrm{A}$. Drift speed follows by solving for $v_d$.

$$
v_d=\frac{I}{n|q|A}=\frac{1.0}{8.0\cdot10^{28}\cdot1.60\cdot10^{-19}\cdot10^{-6}}\,\mathrm{m/s}\simeq7.81\cdot10^{-5}\,\mathrm{m/s}.
$$

In one second the mean drift distance is therefore about $0.078\,\mathrm{mm}$. The circuit's rapid response when a switch closes is due to propagation of a change in the electromagnetic field through the circuit. Electrons already near the device take part in the drift.
:::

:::esempio{titolo="Time to travel one meter"}
With the drift speed $7.81\cdot10^{-5}\,\mathrm{m/s}$ of the $1.0\,\mathrm{mm^2}$ wire carrying $1.0\,\mathrm{A}$, an electron advancing at constant speed travels $1.0\,\mathrm{m}$ in

$$
t=\frac{1.0\,\mathrm{m}}{7.81\cdot10^{-5}\,\mathrm{m/s}}\simeq1.28\cdot10^{4}\,\mathrm{s},
$$

that is, about $3.6\,\mathrm{h}$. If the current in the same wire doubles, $v_d$ doubles, because it is proportional to $I$ when $n$ and $A$ are fixed, and the time is halved.
:::

:::attenzione
The drift speed is much smaller than the speed of thermal agitation. In the classical model of a free-electron gas at $300\,\mathrm K$ the root-mean-square speed is

$$
v=\sqrt{\frac{3k_BT}{m_e}}=\sqrt{\frac{3\cdot1.38\cdot10^{-23}\cdot300}{9.11\cdot10^{-31}}}\,\mathrm{m/s}\simeq1.2\cdot10^{5}\,\mathrm{m/s}.
$$

The drift of $7.8\cdot10^{-5}\,\mathrm{m/s}$ is about $10^{-9}$ times this value. Thermal motion has random directions and zero net charge across the section, so only the drift contributes to $I$.
:::

## Resistance and current–voltage characteristics

:::teorema{#ohm titolo="An ohmic conductor under fixed conditions"}
A component is **ohmic** over a measurement range if the voltage across it is proportional to current while its conditions, particularly temperature, stay fixed. We write $V$ for the voltage drop in the direction of conventional current through a resistor.

$$
V=RI,\qquad 1\,\Omega=1\,\mathrm{V/A}.
$$

If the horizontal axis is $I$ and the vertical axis is $V$, the line has slope $R$. For any two points, divide the vertical change by the horizontal change. Swapping the axes gives $I$ as a function of $V$ with slope $\dfrac{1}{R}$ in $\mathrm{A/V}$. The units identify which ratio the graph gives.
:::

:::esempio{titolo="The same resistors plotted both ways"}
For the $2\,\Omega$ resistor, at $I=1\,\mathrm{A}$ we have $V=2\,\mathrm{V}$, while at $I=2\,\mathrm{A}$ we have $V=4\,\mathrm{V}$. On the graph of $V$ versus $I$, the slope is $\dfrac{4-2}{2-1}\,\mathrm{V/A}=2\,\Omega$. For $R=4\,\Omega$ the slope is twice as large. With the axes swapped, at $V=4\,\mathrm{V}$ the first resistor draws $2\,\mathrm{A}$ and the second $1\,\mathrm{A}$. The steeper line now represents the smaller resistance.

::grafico{f="2*x;4*x" xmin=0 xmax=3 ymin=0 ymax=13 nomi="I,V" legenda="R=2\,\Omega; R=4\,\Omega" punti="1,2,pieno;2,4,pieno" titolo="Voltage in volts and current in amperes. Slope gives resistance."}

::grafico{f="x/2;x/4" xmin=0 xmax=8 ymin=0 ymax=5 nomi="V,I" legenda="R=2\,\Omega; R=4\,\Omega" punti="4,2,pieno;4,1,pieno" titolo="Current in amperes and voltage in volts. Slope is the reciprocal of resistance."}
:::

:::attenzione
The ratio $\dfrac{V}{I}$ can be measured at one point on any characteristic where $I\neq0$. Testing Ohm's law requires checking that it remains constant over the range. A component that draws $0.10\,\mathrm{A}$ at $2\,\mathrm{V}$ and $0.15\,\mathrm{A}$ at $4\,\mathrm{V}$ gives ratios of $20\,\Omega$ and about $26.7\,\Omega$. If measurement conditions are the same, a single constant resistance cannot describe both points. A filament that heats up can produce precisely this kind of change in slope.
:::

:::osservazione
A component is ohmic if the characteristic with $I$ on the vertical axis and $V$ on the horizontal axis is a straight line through the origin. The characteristic of the component in the previous warning is a curve whose slope decreases as $V$ grows. The line through the origin and the first point would give $0.20\,\mathrm{A}$ at $4\,\mathrm{V}$, against the $0.15\,\mathrm{A}$ measured.

::grafico{f="100*(x/2)^0.585;50*x" xmin=0 xmax=6 ymin=0 ymax=400 nomi="V,I (mA)" legenda="\mathrm{non-ohmic\ component};R=20\,\Omega" punti="2,100,pieno;4,150,pieno" titolo="Voltage in volts and current in milliamperes. The curve departs from the line of a $20\,\Omega$ resistor starting from the common point."}
:::

## Resistivity, length, and cross-sectional area

:::teorema{#resistivita titolo="Second law of Ohm"}
At fixed temperature, for a uniform homogeneous wire of length $L$ and cross-sectional area $A$,

$$
R=\rho\frac{L}{A}.
$$

**Resistivity** $\rho$ describes the material and is measured in $\Omega\,\mathrm{m}$. Doubling the length at the same material and cross section doubles the resistance. Doubling a circular wire's diameter instead quadruples $A=\dfrac{\pi d^2}{4}$ and reduces resistance to one quarter.

If the wire stretches at constant volume $\mathcal V=LA$ and its resistivity stays the same, the cross section decreases. Substituting $A=\dfrac{\mathcal V}{L}$ gives $R=\rho\dfrac{L^2}{\mathcal V}$. Under these assumptions, doubling the length quadruples the resistance because both the numerator and the denominator in the original law change.
:::

::::teorema{#filo-tratti titolo="Resistance and wire dimensions"}
Consider a homogeneous wire of length $L=NL_1$ and cross section $A=MA_1$, with $N$ and $M$ integers, at fixed temperature. Every wire of length $L_1$ and cross section $A_1$ of the same material has the same resistance $R_1$ and obeys Ohm's law. Then the resistance of the large wire is

$$
R=\frac{N}{M}R_1=\rho\frac{L}{A},\qquad \rho=\frac{R_1A_1}{L_1}.
$$

The constant $\rho$ is the same for all wires of the material, because $R_1$, $A_1$, and $L_1$ refer to any wire of that material. This relation predicts the resistance of a wire whose dimensions differ from those measured. Pieces of $10\,\mathrm{m}$ and $1.0\,\mathrm{mm^2}$ with $R_1=0.17\,\Omega$ give, for $L=30\,\mathrm{m}$ and $A=2.0\,\mathrm{mm^2}$, $N=3$, $M=2$, and $R=\dfrac{3}{2}\cdot0.17\,\Omega=0.255\,\Omega$. For non-integer ratios $\dfrac{L}{L_1}$ and $\dfrac{A}{A_1}$ the formula is confirmed by measurements.

:::dimostrazione
Build the large wire from wires identical to the reference one, first one after another for the length and then side by side for the cross section.

For the length, place $N$ pieces in a row. Charge does not accumulate at the contact points, so the same current $I$ passes through every piece. The voltage across the wire is the sum of the voltages of the single pieces, because the potential difference between the ends is the sum of the potential differences between consecutive points. Each piece has voltage $R_1I$, so $V=NR_1I$ and the resistance of the row is $\dfrac{V}{I}=NR_1$.

For the cross section, place $M$ identical rows side by side, each of resistance $NR_1$, with their ends connected together. The $M$ rows have the same ends, so they have the same voltage $V$ and in each of them the current is $\dfrac{V}{NR_1}$. At the connection points charge is conserved, so the total current is the sum

$$
I=M\frac{V}{NR_1},\qquad R=\frac{V}{I}=\frac{N}{M}R_1.
$$

Substituting $N=\dfrac{L}{L_1}$ and $M=\dfrac{A}{A_1}$ we obtain

$$
R=\frac{R_1A_1}{L_1}\cdot\frac{L}{A}=\rho\frac{L}{A}.
$$
:::
::::

:::esempio{titolo="From diameter to resistance"}
A copper wire with $\rho=1.7\cdot10^{-8}\,\Omega\,\mathrm{m}$ is $5.0\,\mathrm{m}$ long and has diameter $1.0\,\mathrm{mm}$. The area of the circular cross section is $A=\dfrac{\pi d^2}{4}=\pi\,(0.50\cdot10^{-3}\,\mathrm{m})^2=7.85\cdot10^{-7}\,\mathrm{m^2}$, so

$$
R=\rho\frac{L}{A}=\frac{1.7\cdot10^{-8}\cdot5.0}{7.85\cdot10^{-7}}\,\Omega=0.108\,\Omega.
$$

With diameter $2.0\,\mathrm{mm}$ the area becomes four times as large and $R=0.027\,\Omega$. An aluminum wire with $\rho=2.8\cdot10^{-8}\,\Omega\,\mathrm{m}$, $10\,\mathrm{m}$ long and with cross section $1.0\,\mathrm{mm^2}=1.0\cdot10^{-6}\,\mathrm{m^2}$, has $R=0.28\,\Omega$, against $0.17\,\Omega$ for copper with the same dimensions.

::grafico{f="21.65*x;5.411*x" xmin=0 xmax=10 ymin=0 ymax=250 nomi="L,R (mΩ)" legenda="d=1.0\,\mathrm{mm};d=2.0\,\mathrm{mm}" punti="5,108.2,pieno;5,27.1,pieno" titolo="Length in meters and resistance in milliohms for two copper wires. At equal length the resistance is inversely proportional to the square of the diameter."}
:::

:::osservazione
The resistivities at $20\,{}^\circ\mathrm{C}$ of some conductors are:

- copper $1.7\cdot10^{-8}\,\Omega\,\mathrm{m}$;
- aluminum $2.8\cdot10^{-8}\,\Omega\,\mathrm{m}$;
- tungsten $5.6\cdot10^{-8}\,\Omega\,\mathrm{m}$;
- nickel-chromium (alloy) $1.1\cdot10^{-6}\,\Omega\,\mathrm{m}$.

A nickel-chromium wire has a resistance about $65$ times that of a copper wire with the same dimensions, because $\dfrac{1.1\cdot10^{-6}}{1.7\cdot10^{-8}}\simeq65$. For this reason alloys of this type are used in heating elements. To obtain $30\,\Omega$ with cross section $0.50\,\mathrm{mm^2}$, about $14\,\mathrm{m}$ of nickel-chromium is enough, while about $880\,\mathrm{m}$ of copper would be needed.
:::

:::attenzione
Resistance and resistivity are different quantities, with different units. Resistivity is a property of the material at a given temperature, while resistance also depends on shape. Two copper wires of $1.0\,\mathrm{mm^2}$, $1.0\,\mathrm{m}$ and $10\,\mathrm{m}$ long, have the same $\rho=1.7\cdot10^{-8}\,\Omega\,\mathrm{m}$ and resistances $0.017\,\Omega$ and $0.17\,\Omega$.
:::

:::esempio{titolo="Converting the cross-sectional area of a wire"}
A wire of resistivity $1.7\cdot10^{-8}\,\Omega\,\mathrm{m}$ is $10\,\mathrm{m}$ long and has cross-sectional area $1.0\,\mathrm{mm^2}$. Since $1\,\mathrm{mm}=10^{-3}\,\mathrm{m}$, square the conversion factor to get $1\,\mathrm{mm^2}=10^{-6}\,\mathrm{m^2}$.

$$
R=\frac{1.7\cdot10^{-8}\cdot10}{1.0\cdot10^{-6}}\,\Omega=0.17\,\Omega.
$$

To design a wire of the same cross section with $R=0.34\,\Omega$, solve for $L$ and obtain $20\,\mathrm{m}$. This check agrees with doubling the resistance at fixed material and cross section.
:::

## Resistance and temperature

:::teorema{#temperatura-resistenza titolo="A linear model near a reference temperature"}
For many metals, over a limited interval around a reference temperature $T_0$, resistance can be approximated by

$$
R(T)=R_0[1+\alpha(T-T_0)].
$$

$R_0$ is resistance measured at $T_0$, and $\alpha$ is the temperature coefficient referred to that value. The product $\alpha(T-T_0)$ is the relative change in resistance and is dimensionless. A difference of $50\,{}^\circ\mathrm{C}$ is also $50\,\mathrm{K}$. The $273.15$ offset between the absolute and Celsius scales cancels when subtracting temperatures.

For $R_0=10\,\Omega$ at $20\,{}^\circ\mathrm{C}$, $\alpha=4.0\cdot10^{-3}\,\mathrm{K^{-1}}$, and a final temperature of $70\,{}^\circ\mathrm{C}$, the factor is $1+0.004\cdot50=1.20$ and $R=12\,\Omega$. At fixed voltage, current falls to $\dfrac{10}{12}$ of its original value. Current falls by about $17\%$ while resistance rises by $20\%$, because current is inversely proportional to resistance.

::grafico{f="10*(1+0.004*(x-20))" xmin=0 xmax=100 ymin=0 ymax=14 nomi="T,R (Ω)" punti="20,10,pieno;70,12,pieno" titolo="Temperature in degrees Celsius. The line describes the range in which the model applies."}
:::

:::attenzione
The linear model applies where $\alpha$ remains approximately constant. With $R_0=10\,\Omega$ at $20\,{}^\circ\mathrm{C}$ and $\alpha=4.0\cdot10^{-3}\,\mathrm{K^{-1}}$, the law would give $R=0$ at $T=20-\dfrac{1}{4.0\cdot10^{-3}}=-230\,{}^\circ\mathrm{C}$ and negative values below that. A negative resistance has no meaning for a passive wire, so at those temperatures the model is not applicable. Some materials, such as semiconductors, also have a resistance that decreases as temperature grows.
:::

:::esempio{titolo="Resistance thermometer"}
A platinum resistance thermometer has $R_0=100\,\Omega$ at $T_0=0\,{}^\circ\mathrm{C}$ and $\alpha=3.85\cdot10^{-3}\,\mathrm{K^{-1}}$ referred to $T_0$. At $100\,{}^\circ\mathrm{C}$ the resistance is $R=100\,(1+3.85\cdot10^{-3}\cdot100)\,\Omega=138.5\,\Omega$. If the measurement gives $R=118\,\Omega$, solve the linear law for the temperature:

$$
T=T_0+\frac{1}{\alpha}\left(\frac{R}{R_0}-1\right)=\frac{1}{3.85\cdot10^{-3}}\cdot0.18\,{}^\circ\mathrm{C}\simeq46.8\,{}^\circ\mathrm{C}.
$$

:::

## Electrical power and Joule heating

:::teorema{#joule titolo="Power absorbed by a resistor"}
In the direction of current through the resistor, each coulomb crosses a potential drop $V$ and transfers $V$ joules per coulomb. In a time $\Delta t$, charge $\Delta q$ passes. Since the energy transferred is $V\Delta q$, the power is

$$
P=\frac{V\Delta q}{\Delta t}=VI.
$$

For an ohmic resistor we can substitute $V=RI$ or $I=\dfrac{V}{R}$, giving

$$
P=RI^2=\frac{V^2}{R}.
$$

Power is energy transferred per unit time, in watts. In the resistor, electrical energy becomes internal energy and is then partly or fully released as heat, depending on the conditions.
:::

:::esempio{titolo="A replacement under two different conditions"}
A $12\,\Omega$ resistor at $6\,\mathrm{V}$ draws $0.50\,\mathrm{A}$ and dissipates $3\,\mathrm{W}$. Increase the resistance to $24\,\Omega$. If an ideal source maintains $6\,\mathrm{V}$, current falls to $0.25\,\mathrm{A}$ and power becomes $1.5\,\mathrm{W}$. If instead a source maintains $0.50\,\mathrm{A}$, the voltage drop rises to $12\,\mathrm{V}$ and power becomes $6\,\mathrm{W}$. The comparison therefore depends on which quantity is held constant.

::grafico{f="36/x;0.25*x" xmin=0 xmax=30 ymin=0 ymax=9 nomi="R,P (W)" legenda="V=6\,\mathrm{V};I=0.50\,\mathrm{A}" punti="12,3,pieno;24,1.5,pieno;24,6,pieno" titolo="Resistance in ohms. At $R=12\,\Omega$ the curves meet. At $R=24\,\Omega$ they give different powers."}
:::

:::esempio{titolo="Resistance of a lit bulb"}
A bulb is marked $60\,\mathrm{W}$ and $230\,\mathrm{V}$. Under rated conditions, the relations $P=VI$ and $P=\dfrac{V^2}{R}$ give

$$
I=\frac{P}{V}=\frac{60}{230}\,\mathrm{A}=0.261\,\mathrm{A},\qquad R=\frac{V^2}{P}=\frac{230^2}{60}\,\Omega\simeq882\,\Omega.
$$

This is the resistance of the lit filament. When cold, the filament has a much smaller resistance, because the resistance of a metal grows with temperature.
:::

:::esempio{titolo="Heat dissipated in cables"}
A copper wire $10\,\mathrm{m}$ long with cross section $1.0\,\mathrm{mm^2}$ has $R=0.17\,\Omega$. Carrying $10\,\mathrm{A}$ it dissipates

$$
P=RI^2=0.17\cdot10^2\,\mathrm{W}=17\,\mathrm{W}.
$$

With cross section $2.5\,\mathrm{mm^2}$ the resistance is $R=\dfrac{1.7\cdot10^{-8}\cdot10}{2.5\cdot10^{-6}}\,\Omega=0.068\,\Omega$ and the dissipated power falls to $6.8\,\mathrm{W}$. At equal current the power is proportional to $R$. Cables intended for larger currents therefore have a larger cross section.

::grafico{f="0.17*x^2;0.068*x^2" xmin=0 xmax=16 ymin=0 ymax=45 nomi="I,P (W)" legenda="A=1.0\,\mathrm{mm^2};A=2.5\,\mathrm{mm^2}" punti="10,17,pieno;10,6.8,pieno" titolo="Current in amperes. The dissipated power grows with the square of the current."}
:::

## Energy, kilowatt-hours, and efficiency

:::definizione{#energia-consumo titolo="Energy transferred over an interval"}
At constant power, the energy transferred during $\Delta t$ is $E=P\Delta t$. For a device that changes power during use, add the energies for the individual intervals or multiply average power by the total time.

$$
1\,\mathrm{kWh}=1000\,\mathrm{W}\cdot3600\,\mathrm{s}=3.6\cdot10^6\,\mathrm{J}.
$$

A $1.5\,\mathrm{kW}$ device running for $2\,\mathrm{h}$ takes in $3\,\mathrm{kWh}$, equal to $1.08\cdot10^7\,\mathrm{J}$. A kilowatt tells how fast energy is transferred, while a kilowatt-hour tells how much has been transferred. For a unit cost in euros per kilowatt-hour, multiply the unit cost by the energy in $\mathrm{kWh}$.
:::

:::esempio{titolo="Useful heat during heating"}
A $1000\,\mathrm{W}$ heater transfers a fraction $\eta=0.80$ of the electrical energy it draws to the water. We need to heat $1.0\,\mathrm{kg}$ of water by $20\,\mathrm{K}$ with specific heat $4180\,\mathrm{J/(kg\,K)}$. Useful power is $\eta P=800\,\mathrm{W}$, so divide the required heat by $800\,\mathrm{J/s}$.

$$
\Delta t=\frac{mc\Delta T}{\eta P}=\frac{1.0\cdot4180\cdot20}{0.80\cdot1000}\,\mathrm{s}\simeq105\,\mathrm{s}.
$$

Using $1000\,\mathrm{J/s}$ in the denominator would give about $84\,\mathrm{s}$ and assume all the electrical energy reaches the water. For the same heating goal, losses increase the time required.
:::

:::esempio{titolo="Energy cost of an oven"}
With an assumed cost of $0.25\,€/\mathrm{kWh}$, a $2.0\,\mathrm{kW}$ oven running for $90\,\mathrm{min}$, that is, $1.5\,\mathrm{h}$, takes in

$$
E=2.0\cdot1.5\,\mathrm{kWh}=3.0\,\mathrm{kWh},
$$

and the cost is $3.0\cdot0.25\,€=0.75\,€$.
:::

:::attenzione
A device of $2\,\mathrm{kW}$ running for $30\,\mathrm{min}$ and one of $1\,\mathrm{kW}$ running for $1\,\mathrm{h}$ take in the same energy, $1\,\mathrm{kWh}$, even though their powers differ.
:::

## Sources and measuring instruments

:::definizione{#misure titolo="Ammeter, voltmeter, and ideal source"}
An ideal voltage source maintains the specified potential difference at its terminals in the model. Current depends on the load. A $12\,\Omega$ resistor connected to a $6\,\mathrm{V}$ source draws $0.50\,\mathrm{A}$, while a $24\,\Omega$ resistor draws $0.25\,\mathrm{A}$. The source transfers energy to the circuit. In steady state, the same charge enters and leaves the resistor during the interval considered.

An **ammeter** is inserted in series by opening the branch path, so the charge that flows in the branch also flows through the meter. An ideal ammeter has zero resistance and therefore zero voltage drop across it. A **voltmeter** connects to the two nodes that define the voltage, so it is in parallel with the component. Its ideal resistance is infinite, so there is no current through the measurement branch.

A real voltmeter with resistance comparable to the load adds a branch carrying appreciable current. A much larger input resistance reduces the disturbance. Circuit combinations and Kirchhoff's laws allow a quantitative treatment of these situations in the chapter on circuits.
:::

:::esempio{titolo="Ammeter with internal resistance"}
An ideal $6.0\,\mathrm{V}$ source supplies a $12\,\Omega$ resistor. Without instruments the current is $\dfrac{6.0}{12}\,\mathrm{A}=0.50\,\mathrm{A}$. A real ammeter with internal resistance $r_A=0.50\,\Omega$, inserted in series, adds its resistance to that of the resistor, as for pieces of wire in series:

$$
I=\frac{6.0}{12+0.50}\,\mathrm{A}=0.48\,\mathrm{A}.
$$

The instrument reads $0.48\,\mathrm{A}$ instead of $0.50\,\mathrm{A}$, with relative error $\dfrac{0.50-0.48}{0.50}=4\%$. The voltmeter in parallel with the resistor reads $V=0.48\cdot12\,\mathrm{V}=5.76\,\mathrm{V}$. If its internal resistance is $1.0\,\mathrm{M\Omega}$, a current of $\dfrac{5.76}{1.0\cdot10^{6}}\,\mathrm{A}=5.8\,\mu\mathrm{A}$ passes in its branch, negligible compared with $0.48\,\mathrm{A}$.

::schema{riferimento=0 linee="0,1.48 0,3 1.4,3;2.6,3 7,3 7,2.12;7,0.88 7,0 0,0 0,1.16;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;1.4,2.64 2.6,2.64 2.6,3.36 1.4,3.36 1.4,2.64;6.73,0.88 7.27,0.88 7.27,2.12 6.73,2.12 6.73,0.88;4.5,3 4.5,2.12;4.5,0.88 4.5,0;3.9,0.88 5.1,0.88 5.1,2.12 3.9,2.12 3.9,0.88" punti="4.5,3,,pieno;4.5,0,,pieno" etichette="0.9,1.32,6 V;2,3,A;4.5,1.5,V;7.9,1.5,12 Ω" titolo="The ammeter is in series with the resistor, the voltmeter is connected to the same nodes"}
:::

## Current density and the local form of Ohm's law

:::definizione{#densita-corrente titolo="Current density"}
In a wire of cross section $A$ carrying a uniform current $I$ perpendicular to the section, the **current density** is

$$
J=\frac{I}{A},\qquad [J]=\mathrm{A/m^2}.
$$

It measures how much current passes per unit area. At equal $I$ it is smaller in the wire with the larger cross section. In a $1.0\,\mathrm{mm^2}$ wire with $1.0\,\mathrm{A}$ it is $J=\dfrac{1.0}{1.0\cdot10^{-6}}\,\mathrm{A/m^2}=1.0\cdot10^{6}\,\mathrm{A/m^2}$. From the relation $|I|=n|q|Av_d$ we obtain $J=n|q|v_d$.
:::

:::richiamo{titolo="Potential difference in a uniform field"}
Hypothesis: the electric field is uniform, of magnitude $E$, and two points are at distance $L$ along the direction of the field. Thesis: the voltage between the two points is $V=EL$.
:::

::::teorema{#ohm-locale titolo="Ohm's law in local form"}
In a straight section of homogeneous wire, with constant cross section and resistivity $\rho$, at constant temperature and carrying steady current, the electric field is uniform and has magnitude

$$
E=\rho J,\qquad v_d=\frac{E}{\rho\, n|q|}.
$$

The field is the quantity acting on each carrier, while $V=RI$ concerns the whole wire. In the $1.0\,\mathrm{mm^2}$ copper wire with $1.0\,\mathrm{A}$ we have $J=1.0\cdot10^{6}\,\mathrm{A/m^2}$ and $E=1.7\cdot10^{-8}\cdot1.0\cdot10^{6}\,\mathrm{V/m}=1.7\cdot10^{-2}\,\mathrm{V/m}$. Over $10\,\mathrm{m}$ the voltage is $EL=0.17\,\mathrm{V}$, equal to $RI=0.17\,\Omega\cdot1.0\,\mathrm{A}$. With $n=8.0\cdot10^{28}\,\mathrm{m^{-3}}$ the formula for $v_d$ gives $7.8\cdot10^{-5}\,\mathrm{m/s}$, the value of the example on drift.

:::dimostrazione
Write the voltage across the wire in two ways and equate them. The wire has length $L$ and cross section $A$.

By the recalled result, the voltage is $V=EL$. By Ohm's law and the second law of Ohm it is also

$$
V=RI=\rho\frac{L}{A}I.
$$

Equating the two expressions gives $EL=\rho\dfrac{L}{A}I$. Divide by $L\neq0$ and use $\dfrac{I}{A}=J$:

$$
E=\rho\frac{I}{A}=\rho J.
$$

Since $J=n|q|v_d$, we have $E=\rho\, n|q|v_d$ and, solving for $v_d$, we find $v_d=\dfrac{E}{\rho\, n|q|}$.
:::
::::

:::richiamo{titolo="Power absorbed by a resistor"}
Hypothesis: an ohmic resistor of resistance $R$ carries the current $I$. Thesis: the power absorbed is $P=RI^2$.
:::

::::teorema{#joule-locale titolo="Power dissipated per unit volume"}
In a homogeneous wire of resistivity $\rho$, with uniform current density $J$, the power dissipated per unit volume is

$$
p=\rho J^2=EJ.
$$

The formula makes it possible to compare the heating of wires of different dimensions through the current density alone. For the copper wire with $I=10\,\mathrm{A}$ and $A=1.0\,\mathrm{mm^2}$, $J=1.0\cdot10^{7}\,\mathrm{A/m^2}$ and $p=1.7\cdot10^{-8}\cdot(1.0\cdot10^{7})^2\,\mathrm{W/m^3}=1.7\cdot10^{6}\,\mathrm{W/m^3}$. The volume of $10\,\mathrm{m}$ of wire is $1.0\cdot10^{-5}\,\mathrm{m^3}$, so the total power is $17\,\mathrm{W}$, as in the calculation with $RI^2$.

:::dimostrazione
The wire has length $L$ and cross section $A$, so volume $\mathcal V=AL$. By the recalled result and the second law of Ohm the total power is

$$
P=RI^2=\rho\frac{L}{A}I^2.
$$

Substitute $I=JA$:

$$
P=\rho\frac{L}{A}J^2A^2=\rho J^2\,AL=\rho J^2\,\mathcal V.
$$

Dividing by the volume gives $p=\dfrac{P}{\mathcal V}=\rho J^2$. From the law in local form, $\rho J=E$, it also follows that $p=EJ$.
:::
::::

:::esempio{titolo="Current density in cables"}
In the $1.0\,\mathrm{mm^2}$ cable with $10\,\mathrm{A}$ we have $J=1.0\cdot10^{7}\,\mathrm{A/m^2}$. In the $2.5\,\mathrm{mm^2}$ cable with the same current $J=\dfrac{10}{2.5\cdot10^{-6}}\,\mathrm{A/m^2}=4.0\cdot10^{6}\,\mathrm{A/m^2}$ and $p=1.7\cdot10^{-8}\cdot(4.0\cdot10^{6})^2\,\mathrm{W/m^3}=2.7\cdot10^{5}\,\mathrm{W/m^3}$. The power per unit volume falls to less than one sixth, because it depends on the square of $J$.
:::
