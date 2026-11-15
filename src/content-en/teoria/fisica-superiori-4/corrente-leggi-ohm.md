---
titolo: Electric current, Ohm’s laws, and Joule heating
sommario: Current magnitude and direction, resistance, temperature, electric power,
  measurement, and energy use.
---

## Magnitude and direction of current

:::definizione{#corrente titolo="Charge crossing a cross section"}
The cross section of a wire is the transverse surface crossed by the carriers. Choose a positive direction along the conductor and let $\Delta q$ be the signed net charge crossing the section during time $\Delta t$. A positive charge traveling in the chosen direction contributes positively. A negative charge moving in the same direction contributes negatively. The **average current** is

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

## Resistivity, length, and cross-sectional area

:::teorema{#resistivita titolo="Resistance of a uniform conductor"}
At fixed temperature, a uniform homogeneous wire of length $L$ and cross-sectional area $A$ has

$$
R=\rho\frac{L}{A}.
$$

**Resistivity** $\rho$ describes the material and is measured in $\Omega\,\mathrm{m}$. Doubling the length at the same material and cross section doubles the resistance. Doubling a circular wire's diameter instead quadruples $A=\dfrac{\pi d^2}{4}$ and reduces resistance to one quarter.

If the wire stretches at constant volume $\mathcal V=LA$ and its resistivity stays the same, the cross section decreases. Substituting $A=\dfrac{\mathcal V}{L}$ gives $R=\rho\dfrac{L^2}{\mathcal V}$. Under these assumptions, doubling the length quadruples the resistance because both the numerator and the denominator in the original law change.
:::

:::esempio{titolo="Converting the cross-sectional area of a wire"}
A wire of resistivity $1.7\cdot10^{-8}\,\Omega\,\mathrm{m}$ is $10\,\mathrm{m}$ long and has cross-sectional area $1.0\,\mathrm{mm^2}$. Since $1\,\mathrm{mm}=10^{-3}\,\mathrm{m}$, square the conversion factor to get $1\,\mathrm{mm^2}=10^{-6}\,\mathrm{m^2}$.

$$
R=\frac{1.7\cdot10^{-8}\cdot10}{1.0\cdot10^{-6}}\,\Omega=0.17\,\Omega.
$$

To design a wire of the same cross section with $R=0.34\,\Omega$, solve for $L$ and obtain $20\,\mathrm{m}$. This agrees with doubling the resistance at fixed material and cross section.
:::

## Resistance and temperature

:::teorema{#temperatura-resistenza titolo="A linear model near a reference temperature"}
For many metals, over a limited interval around a reference temperature $T_0$, resistance can be approximated by

$$
R(T)=R_0[1+\alpha(T-T_0)].
$$

$R_0$ is resistance measured at $T_0$, and $\alpha$ is the temperature coefficient referred to that value. The product $\alpha(T-T_0)$ is the relative change in resistance and is dimensionless. A difference of $50\,{}^\circ\mathrm{C}$ is also $50\,\mathrm{K}$. The $273.15$ offset between the absolute and Celsius scales cancels when subtracting temperatures.

For $R_0=10\,\Omega$ at $20\,{}^\circ\mathrm{C}$, $\alpha=4.0\cdot10^{-3}\,\mathrm{K^{-1}}$, and a final temperature of $70\,{}^\circ\mathrm{C}$, the factor is $1+0.004\cdot50=1.20$ and $R=12\,\Omega$. At fixed voltage, current falls to $\dfrac{10}{12}$ of its original value. Current falls by about $17\%$ while resistance rises by $20\%$, because current is inversely proportional to resistance.

::grafico{f="10*(1+0.004*(x-20))" xmin=20 xmax=100 ymin=9 ymax=14 nomi="T,R (Ω)" punti="20,10,pieno;70,12,pieno" titolo="Temperature in degrees Celsius. The line describes the range in which the model applies."}
:::

:::attenzione
Use the linear model where $\alpha$ remains approximately constant. If extrapolating it gives negative resistance for a passive metallic wire, that result shows the extrapolation is physically invalid. Other materials can have resistance that decreases with temperature. The sign and valid range come from material data and measurement conditions.
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

::grafico{f="36/x;0.25*x" xmin=6 xmax=30 ymin=0 ymax=9 nomi="R,P (W)" legenda="V=6\,\mathrm{V};I=0.50\,\mathrm{A}" punti="12,3,pieno;24,1.5,pieno;24,6,pieno" titolo="Resistance in ohms. At R = 12 Ω the curves meet. At R = 24 Ω they give different powers."}
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

## Sources and measuring instruments

:::definizione{#misure titolo="Ammeter, voltmeter, and ideal source"}
An ideal voltage source maintains the specified potential difference at its terminals in the model. Current depends on the load. A $12\,\Omega$ resistor connected to a $6\,\mathrm{V}$ source draws $0.50\,\mathrm{A}$, while a $24\,\Omega$ resistor draws $0.25\,\mathrm{A}$. The source transfers energy to the circuit. In steady state, the same charge enters and leaves the resistor during the interval considered.

An **ammeter** is inserted in series by opening the branch path, so the charge that flows in the branch also flows through the meter. An ideal ammeter has zero resistance and therefore zero voltage drop across it. A **voltmeter** connects to the two nodes that define the voltage, so it is in parallel with the component. Its ideal resistance is infinite, so there is no current through the measurement branch.

A real voltmeter with resistance comparable to the load adds a branch carrying appreciable current. A much larger input resistance reduces the disturbance. Circuit combinations and Kirchhoff's laws allow a quantitative treatment of these situations in the chapter on circuits.
:::
