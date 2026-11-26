---
titolo: Electromagnetic induction
sommario: How a change in magnetic flux produces an electromotive force and a current in a circuit, how to calculate the average and instantaneous emf using Faraday’s law, how to determine the direction of the induced current using Lenz’s law, the emf of a moving rod and its energy balance, eddy currents, and the induced electric field.
---

## Faraday’s experiments

:::osservazione{#esperienza-magnete-bobina titolo="A magnet and a coil"}
A coil with many turns is connected to a galvanometer, an instrument that detects very small currents and indicates their direction. There is no power source in the circuit. Faraday made the following observations.

- When a bar magnet approaches the coil, the galvanometer needle deflects, so a current flows in the circuit.
- When the magnet is at rest, even inside the coil, the current is zero.
- When the magnet moves away, the current flows in the opposite direction.
- The faster the magnet moves, the stronger the current.

The same thing happens if the magnet remains at rest and the coil moves. Thus the *relative* motion of the magnet and coil determines whether the field at the coil changes with time.

::grafico{assi=0 uguale=1 poligoni="0.4,-0.35 1.6,-0.35 1.6,0.35 0.4,0.35;1.6,-0.35 2.8,-0.35 2.8,0.35 1.6,0.35" linee="4.140,0.000 4.137,0.195 4.129,0.383 4.116,0.556 4.099,0.707 4.078,0.831 4.054,0.924 4.027,0.981 4.000,1.000 3.973,0.981 3.946,0.924 3.922,0.831 3.901,0.707 3.884,0.556 3.871,0.383 3.863,0.195 3.860,0.000 3.863,-0.195 3.871,-0.383 3.884,-0.556 3.901,-0.707 3.922,-0.831 3.946,-0.924 3.973,-0.981 4.000,-1.000 4.027,-0.981 4.054,-0.924 4.078,-0.831 4.099,-0.707 4.116,-0.556 4.129,-0.383 4.137,-0.195 4.140,-0.000;4.440,0.000 4.437,0.195 4.429,0.383 4.416,0.556 4.399,0.707 4.378,0.831 4.354,0.924 4.327,0.981 4.300,1.000 4.273,0.981 4.246,0.924 4.222,0.831 4.201,0.707 4.184,0.556 4.171,0.383 4.163,0.195 4.160,0.000 4.163,-0.195 4.171,-0.383 4.184,-0.556 4.201,-0.707 4.222,-0.831 4.246,-0.924 4.273,-0.981 4.300,-1.000 4.327,-0.981 4.354,-0.924 4.378,-0.831 4.399,-0.707 4.416,-0.556 4.429,-0.383 4.437,-0.195 4.440,-0.000;4.740,0.000 4.737,0.195 4.729,0.383 4.716,0.556 4.699,0.707 4.678,0.831 4.654,0.924 4.627,0.981 4.600,1.000 4.573,0.981 4.546,0.924 4.522,0.831 4.501,0.707 4.484,0.556 4.471,0.383 4.463,0.195 4.460,0.000 4.463,-0.195 4.471,-0.383 4.484,-0.556 4.501,-0.707 4.522,-0.831 4.546,-0.924 4.573,-0.981 4.600,-1.000 4.627,-0.981 4.654,-0.924 4.678,-0.831 4.699,-0.707 4.716,-0.556 4.729,-0.383 4.737,-0.195 4.740,-0.000;5.040,0.000 5.037,0.195 5.029,0.383 5.016,0.556 4.999,0.707 4.978,0.831 4.954,0.924 4.927,0.981 4.900,1.000 4.873,0.981 4.846,0.924 4.822,0.831 4.801,0.707 4.784,0.556 4.771,0.383 4.763,0.195 4.760,0.000 4.763,-0.195 4.771,-0.383 4.784,-0.556 4.801,-0.707 4.822,-0.831 4.846,-0.924 4.873,-0.981 4.900,-1.000 4.927,-0.981 4.954,-0.924 4.978,-0.831 4.999,-0.707 5.016,-0.556 5.029,-0.383 5.037,-0.195 5.040,-0.000;4.000,-1.000 4.000,-2.200 4.100,-2.200;4.800,-2.200 4.900,-2.200 4.900,-1.000;4.800,-2.200 4.793,-2.132 4.773,-2.066 4.741,-2.006 4.697,-1.953 4.644,-1.909 4.584,-1.877 4.518,-1.857 4.450,-1.850 4.382,-1.857 4.316,-1.877 4.256,-1.909 4.203,-1.953 4.159,-2.006 4.127,-2.066 4.107,-2.132 4.100,-2.200 4.107,-2.268 4.127,-2.334 4.159,-2.394 4.203,-2.447 4.256,-2.491 4.316,-2.523 4.382,-2.543 4.450,-2.550 4.518,-2.543 4.584,-2.523 4.644,-2.491 4.697,-2.447 4.741,-2.394 4.773,-2.334 4.793,-2.268 4.800,-2.200" vettori="1.6,0.8,3.0,0.8,v;4.45,-2.2,4.65,-2.0" etichette="0.85,-0.12,S;2.05,-0.12,N;4.33,-2.95,G;4.2,1.35,coil" xmin=0 xmax=5.6 ymin=-3.2 ymax=1.7 titolo="The magnet approaches the coil with velocity $\vec{v}$. As long as the magnet is moving, the galvanometer $G$ connected to the coil detects a current"}

:::

:::osservazione{#esperienza-due-circuiti titolo="Two coupled circuits"}
Faraday wound two coils around the same iron ring. The first coil, called the **primary circuit**, was connected to a battery through a switch. The second, called the **secondary circuit**, was connected only to a galvanometer. The two circuits are electrically isolated from each other.

- When the switch closes, the galvanometer in the secondary circuit registers a brief current, which then drops to zero.
- As long as a steady current flows in the primary circuit, the current in the secondary circuit is zero.
- When the switch opens, the galvanometer again registers a brief current, this time in the opposite direction.

The current in the primary circuit produces a magnetic field that also passes through the secondary circuit. A current flows in the secondary circuit only while the primary current, and hence its field, is changing. Thus a current is generated in a circuit whenever the magnetic field passing through it changes, whether a magnet moves or a nearby current changes.
:::

:::definizione{#corrente-indotta titolo="Induced current and induced emf"}
The phenomenon Faraday observed is called **electromagnetic induction**. The current that flows in the circuit without a power source is called an **induced current**. The electromotive force that produces it is called the **induced electromotive force** (induced emf), denoted by $\mathcal{E}$. If the circuit has total resistance $R$, Ohm’s law gives the induced current as
$$
i = \frac{\mathcal{E}}{R} .
$$
If the circuit is open, the current is zero, but the potential difference measured across the gap equals the induced emf. For example, an induced emf of $0.60\,\mathrm{V}$ in a circuit with resistance $3.0\,\mathrm{\Omega}$ produces a current of $\dfrac{0.60}{3.0}\,\mathrm{A} = 0.20\,\mathrm{A}$.
:::

## Magnetic flux linkage

:::richiamo{titolo="Magnetic flux through a flat surface"}
Suppose a flat surface of area $S$ is in a uniform magnetic field $\vec{B}$, and $\theta$ is the angle between $\vec{B}$ and the unit vector $\hat{n}$ normal to the surface. The magnetic flux is then $\Phi(\vec{B}) = B S \cos\theta$. Its unit is the weber, with $1\,\mathrm{Wb} = 1\,\mathrm{T\cdot m^2}$. See the chapter on sources of magnetic fields.
:::

:::definizione{#flusso-concatenato titolo="Flux linkage for a loop and a coil"}
The **flux linkage** of a single loop is the magnetic flux through the surface bounded by the loop. It is denoted by $\Phi_B$. For a flat loop of area $S$ in a uniform field,
$$
\Phi_B = B S \cos\theta .
$$
A **coil** consists of $N$ identical turns, each threaded by the same field. The flux linkage of the coil is the sum of the fluxes through the individual turns, so it is $N$ times the flux through one turn:
$$
\Phi_B = N B S \cos\theta .
$$
The induced emf depends on the flux linkage. For a square loop of side $10\,\mathrm{cm}$ in a field of $0.40\,\mathrm{T}$, with $\theta = 60^\circ$, the flux is $\Phi_B = 0.40 \cdot 0.010 \cdot \cos 60^\circ\,\mathrm{Wb} = 2.0 \cdot 10^{-3}\,\mathrm{Wb}$. For a coil of $250$ circular turns of radius $2.0\,\mathrm{cm}$ perpendicular to a field of $0.12\,\mathrm{T}$, the angle is $\theta = 0^\circ$ and
$$
\Phi_B = 250 \cdot 0.12 \cdot \pi \cdot 0.020^2\,\mathrm{Wb} \approx 3.8 \cdot 10^{-2}\,\mathrm{Wb} .
$$

::grafico{assi=0 uguale=1 unicolore=1 poligoni="1.849,2.207 4.101,0.907 4.151,0.993 1.899,2.293" vettori="-0.4,0.4,1.2,0.4;-0.4,1.4,1.2,1.4,B;-0.4,2.4,1.2,2.4;-0.4,3.4,1.2,3.4;3.0,1.6,3.7,2.812,n̂" segmenti="3.0,1.6,4.6,1.6" punti="3.0,1.6,pieno" etichette="3.75,1.75,θ;1.55,2.6,loop" xmin=-0.7 xmax=5 ymin=0 ymax=3.8 titolo="A loop viewed edge-on in a uniform field $\vec{B}$. Its flux linkage is $B S \cos\theta$, where $\theta$ is the angle between $\vec{B}$ and the normal $\hat{n}$. Here $\theta = 60^\circ$"}

:::

:::attenzione{#angolo-normale}
The angle $\theta$ in the formula is the angle between the field and the *normal* to the loop, not the angle between the field and the plane of the loop. If the plane of a loop makes an angle of $30^\circ$ with a field of $0.50\,\mathrm{T}$, its normal makes an angle of $60^\circ$ with the field. With area $0.020\,\mathrm{m^2}$, the flux is therefore $0.50 \cdot 0.020 \cdot \cos 60^\circ\,\mathrm{Wb} = 5.0 \cdot 10^{-3}\,\mathrm{Wb}$. Using $\cos 30^\circ$ by mistake would give $8.7 \cdot 10^{-3}\,\mathrm{Wb}$.
:::

:::osservazione{#modi-variare-flusso titolo="Ways to change the flux"}
The expression $\Phi_B = N B S \cos\theta$ contains three quantities that can change over time. Each corresponds to a way of producing an induced current.

- The field magnitude $B$ changes when a magnet moves closer or farther away, or when the current in a nearby circuit changes.
- The circuit area $S$ changes when one side of the circuit moves, as when a rod slides along two rails.
- The angle $\theta$ changes when the loop rotates in the field, as in the alternator studied in the chapter on alternating current.

Each of Faraday’s experiments falls into one of these categories, and Faraday’s law describes them all with a single formula.
:::

## Faraday’s law of induction

:::teorema{#legge-faraday-neumann titolo="Faraday’s law of induction"}
This is an experimental law. If the flux linkage of a circuit changes by $\Delta\Phi_B$ over the time interval $\Delta t$, the change induces an emf in the circuit with average value
$$
\mathcal{E}_m = -\frac{\Delta\Phi_B}{\Delta t} .
$$
The emf depends only on the *rate* at which the flux changes, so a large, constant flux gives zero emf. Lenz’s law explains the minus sign. Faraday’s law can be used to calculate the emf whenever the flux is known. For example, a coil of $100$ turns, each of area $40\,\mathrm{cm^2}$, is perpendicular to a field that increases from $0.10\,\mathrm{T}$ to $0.50\,\mathrm{T}$ in $0.20\,\mathrm{s}$. The change in flux linkage is
$$
\Delta\Phi_B = 100 \cdot 40 \cdot 10^{-4} \cdot (0.50 - 0.10)\,\mathrm{Wb} = 0.16\,\mathrm{Wb} ,
$$
so the magnitude of the average emf is $\dfrac{0.16}{0.20}\,\mathrm{V} = 0.80\,\mathrm{V}$. If the coil forms a closed circuit of total resistance $4.0\,\mathrm{\Omega}$, the average induced current is $0.20\,\mathrm{A}$.
:::

:::definizione{#fem-istantanea titolo="Instantaneous induced emf"}
To find the emf at an instant $t$, let the interval $\Delta t$ approach zero. The limit of the ratio $\dfrac{\Delta\Phi_B}{\Delta t}$ as $\Delta t \to 0$ is the derivative of the flux with respect to time, as discussed in the chapter on derivatives in fifth-year high school mathematics. The **instantaneous emf** is therefore
$$
\mathcal{E}(t) = -\frac{d\Phi_B}{dt} .
$$
If the flux changes uniformly, increasing or decreasing by the same amount in equal time intervals, the instantaneous emf is constant and equals the average emf. For example, suppose the flux linkage of a loop is $\Phi_B(t) = 2.0 \cdot 10^{-3}\,t^2$, with $\Phi_B$ in webers and $t$ in seconds. The derivative is $4.0 \cdot 10^{-3}\,t$, so
$$
\mathcal{E}(t) = -4.0 \cdot 10^{-3}\,t ,
\qquad
\mathcal{E}(3.0\,\mathrm{s}) = -1.2 \cdot 10^{-2}\,\mathrm{V} = -12\,\mathrm{mV} .
$$
In the same example, the average emf between $0$ and $3.0\,\mathrm{s}$ is $-\dfrac{18 \cdot 10^{-3}\,\mathrm{Wb}}{3.0\,\mathrm{s}} = -6.0\,\mathrm{mV}$. This differs from the instantaneous value because the flux does not change uniformly.

::grafico{f="(x>=0?1:NaN)*2*x^2;12*x-18;6*x" punti="3,18,pieno" segmenti="3,0,3,18" xmin=-0.5 xmax=4.5 ymin=-4 ymax=36 nomi="t,Φ" legenda="\Phi_B(t) = 2t^2;\text{tangent at } t = 3;\text{secant through } 0 \text{ and } 3" titolo="Flux $\Phi_B$ in $\mathrm{mWb}$ as a function of $t$ in $\mathrm{s}$. The instantaneous emf at $t = 3\,\mathrm{s}$ is the negative of the tangent line’s slope, giving $-12\,\mathrm{mV}$. The average emf between $0$ and $3\,\mathrm{s}$ is the negative of the secant line’s slope, giving $-6\,\mathrm{mV}$"}

:::

:::esempio{#lettura-grafico-flusso titolo="Reading the emf from a flux graph"}
The flux linkage of a loop increases uniformly from $0$ to $12\,\mathrm{mWb}$ between $t = 0$ and $t = 2\,\mathrm{s}$, remains constant until $t = 3\,\mathrm{s}$, and then returns uniformly to zero between $t = 3\,\mathrm{s}$ and $t = 4\,\mathrm{s}$. Each part of the graph is a straight line segment, so the emf is constant on each interval and can be found from the average emf:
$$
\mathcal{E} =
\begin{cases}
-\dfrac{12\,\mathrm{mWb}}{2\,\mathrm{s}} = -6\,\mathrm{mV} & \text{if } 0 < t < 2\,\mathrm{s} \\[10pt]
0 & \text{if } 2\,\mathrm{s} < t < 3\,\mathrm{s} \\[10pt]
-\dfrac{-12\,\mathrm{mWb}}{1\,\mathrm{s}} = 12\,\mathrm{mV} & \text{if } 3\,\mathrm{s} < t < 4\,\mathrm{s}
\end{cases}
$$
The emf changes sign when the flux goes from increasing to decreasing. Its magnitude is twice as large on the last interval because the flux changes by the same amount in half the time. Where the flux is constant, the emf is zero even though the flux is $12\,\mathrm{mWb}$.

::grafico{f="x<0?NaN:(x<=2?6*x:(x<=3?12:(x<=4?12-12*(x-3):0)))" xmin=-0.5 xmax=5 ymin=-2 ymax=14 nomi="t,Φ" legenda="\Phi_B(t)" titolo="Flux linkage $\Phi_B$ in $\mathrm{mWb}$ as a function of time $t$ in $\mathrm{s}$. The emf is $-6\,\mathrm{mV}$ on the first interval, $0$ on the second, and $12\,\mathrm{mV}$ on the third"}

:::

## Lenz’s law

:::teorema{#legge-di-lenz titolo="Lenz’s law"}
This is an experimental law. The induced current flows in a direction such that the magnetic field it produces opposes the **change** in flux that generated the current.

Lenz’s law explains the minus sign in Faraday’s law. With this sign included, the relation is also called the **Faraday–Neumann–Lenz law**. To determine the direction of the induced current, proceed in three steps:

1. Determine whether the flux linkage is increasing or decreasing.
2. Infer the direction of the induced field inside the circuit. It opposes the external field if the flux is increasing and points in the same direction if the flux is decreasing.
3. Use the right-hand rule to find the direction of the current that produces this field.

For example, a loop lies in the plane of the page in a field that points out of the page ($\odot$) and is increasing. The outward flux is increasing, so the induced field inside the loop points into the page ($\otimes$). With the right thumb pointing into the page, the fingers curl clockwise, so the induced current flows **clockwise**.

The sign of the emf is defined relative to the normal $\hat{n}$ chosen to calculate the flux. A positive emf drives a current in the direction that, by the right-hand rule, produces a field aligned with $\hat{n}$. A negative emf drives the current in the opposite direction. In this example, with $\hat{n}$ pointing out of the page, the flux increases, so the emf is negative and the current produces a field into the page.
:::

:::esempio{#magnete-anello titolo="A magnet approaching a ring"}
The north pole of a magnet approaches a conducting ring along the axis of the ring. The magnet’s field points away from its north pole, so it passes through the ring in the direction away from the magnet. The flux increases as the magnet gets closer. By Lenz’s law, the induced field inside the ring points toward the magnet. Viewed from the magnet’s side of the ring, the induced field points toward the observer. By the right-hand rule, the current therefore flows counterclockwise. The side of the ring facing the magnet then acts as a north pole and repels the approaching magnet.

::grafico{assi=0 uguale=1 poligoni="0.2,-0.3 1.2,-0.3 1.2,0.3 0.2,0.3;1.2,-0.3 2.2,-0.3 2.2,0.3 1.2,0.3" linee="4.110,0.000 4.108,0.250 4.102,0.494 4.093,0.726 4.079,0.940 4.063,1.131 4.044,1.294 4.023,1.426 3.999,1.522 3.975,1.580 3.950,1.600 3.925,1.580 3.901,1.522 3.877,1.426 3.856,1.294 3.837,1.131 3.821,0.940 3.807,0.726 3.798,0.494 3.792,0.250 3.790,0.000 3.792,-0.250 3.798,-0.494 3.807,-0.726 3.821,-0.940 3.837,-1.131 3.856,-1.294 3.877,-1.426 3.901,-1.522 3.925,-1.580 3.950,-1.600 3.975,-1.580 3.999,-1.522 4.023,-1.426 4.044,-1.294 4.063,-1.131 4.079,-0.940 4.093,-0.726 4.102,-0.494 4.108,-0.250 4.110,-0.000" vettori="1.2,0.75,2.4,0.75,v;2.6,0,3.5,0,B;4.6,-0.45,3.4,-0.45,B′" etichette="0.6,-0.1,S;1.6,-0.1,N;3.2,1.5,N;4.45,1.5,S" xmin=0 xmax=5.6 ymin=-2.2 ymax=2.2 titolo="The magnet’s north pole approaches the ring. The magnet’s field $\vec{B}$ passes through the ring and its flux increases, so the induced field $\vec{B}\,'$ points toward the magnet and the side of the ring nearest the magnet becomes a north pole"}

:::

:::osservazione{#lenz-energia titolo="Lenz’s law and conservation of energy"}
Lenz’s law follows from conservation of energy. In the magnet-and-ring example, the induced current repels the magnet. The person pushing the magnet therefore does positive work against this force. That work becomes the electrical energy of the induced current and is converted to heat in the ring. If the induced current flowed in the opposite direction, the ring would attract the magnet. The magnet would accelerate, the flux would change more rapidly, and the current would grow stronger. Both kinetic and electrical energy would be gained without any external work, violating conservation of energy.
:::

:::attenzione{#lenz-variazione}
The induced field opposes the *change* in flux, rather than the external field itself. When the flux decreases, the induced field points in the same direction as the external field. If the outward field in the example of the loop in the plane of the page decreases, the outward flux decreases. The induced field inside the loop then points out of the page, and the current flows counterclockwise.
:::

## Induced current and charge passing through a circuit

:::teorema{#corrente-indotta-flusso titolo="Induced current and flux"}
In a circuit of total resistance $R$ whose flux linkage is changing, the induced current is
$$
i = \frac{\mathcal{E}}{R} = -\frac{1}{R}\,\frac{d\Phi_B}{dt} .
$$
This relation follows from Ohm’s law and Faraday’s law with Lenz’s sign convention. It assumes that the magnetic field produced by the induced current is negligible compared with the external field. The induced current is proportional to the rate of change of the flux and lasts only as long as the flux is changing. If an induced emf of $12\,\mathrm{mV}$ acts in a loop of resistance $0.040\,\mathrm{\Omega}$, the induced current is $\dfrac{12 \cdot 10^{-3}}{0.040}\,\mathrm{A} = 0.30\,\mathrm{A}$.
:::

::::teorema{#carica-indotta titolo="Charge passing through a circuit"}
Let $R$ be the total resistance of a circuit, and let $\Delta\Phi_B$ be the change in its flux linkage during a time interval in which the flux changes in only one direction, either increasing throughout or decreasing throughout. The magnitude of the charge that passes through a cross section of the circuit during that interval is
$$
q = \frac{|\Delta\Phi_B|}{R} .
$$

The charge depends only on the change in flux and is independent of the time taken. A slow change produces a small current for a long time, while a rapid change produces a large current for a short time. The product is the same. For example, a circular loop of radius $4.0\,\mathrm{cm}$ and resistance $0.050\,\mathrm{\Omega}$ is perpendicular to a field of $0.30\,\mathrm{T}$ and is pulled out of the field. The flux goes from $0.30 \cdot \pi \cdot 0.040^2\,\mathrm{Wb} \approx 1.51 \cdot 10^{-3}\,\mathrm{Wb}$ to zero, so
$$
q = \frac{1.51 \cdot 10^{-3}}{0.050}\,\mathrm{C} \approx 3.0 \cdot 10^{-2}\,\mathrm{C} ,
$$
regardless of how quickly the loop is removed. The magnetic field can thus be determined by measuring the charge.

:::dimostrazione
The idea is to divide the time interval into many short intervals and add up the charges that pass through the circuit during each one.

Divide the interval into intervals $\Delta t_1$, $\Delta t_2$, … so short that the current can be treated as constant during each one. During the first interval the flux changes by $\Delta\Phi_1$, so Faraday’s law with Lenz’s sign convention gives a current of $i_1 = -\dfrac{\Delta\Phi_1}{R\,\Delta t_1}$. The charge passing through the circuit during that interval is the current multiplied by the time:
$$
q_1 = i_1\,\Delta t_1 = -\frac{\Delta\Phi_1}{R\,\Delta t_1} \cdot \Delta t_1 = -\frac{\Delta\Phi_1}{R} .
$$
The same holds for every interval, so the total charge is
$$
q_1 + q_2 + \ldots = -\frac{\Delta\Phi_1 + \Delta\Phi_2 + \ldots}{R} = -\frac{\Delta\Phi_B}{R} ,
$$
because the changes in flux over the individual intervals add up to the total change $\Delta\Phi_B$. The flux changes in only one direction, so the charges $q_1$, $q_2$, … all have the same sign and charge always flows in the same direction. The magnitude of the charge is therefore $\dfrac{|\Delta\Phi_B|}{R}$.
:::
::::

## Motional emf

:::richiamo{titolo="The Lorentz force"}
A charge $q$ moving with velocity $\vec{v}$ in a magnetic field $\vec{B}$ experiences the force $\vec{F} = q\,\vec{v} \times \vec{B}$, of magnitude $|q|\,v B \sin\alpha$, where $\alpha$ is the angle between $\vec{v}$ and $\vec{B}$. A straight wire of length $\ell$ carrying current $I$ experiences the force $\vec{F} = I\,\vec{\ell} \times \vec{B}$. See the chapter on magnetic fields and the Lorentz force.
:::

::::teorema{#fem-cinetica titolo="Emf across a moving rod"}
A conducting rod of length $\ell$ moves with constant velocity $\vec{v}$ in a uniform magnetic field $\vec{B}$. The rod, $\vec{v}$, and $\vec{B}$ are mutually perpendicular. The emf induced between the ends of the rod is then
$$
\mathcal{E} = B \ell v .
$$
This is called **motional emf** (or kinetic emf) because it is due to the motion of the conductor. If the rod slides on two conducting rails connected by a resistor $R$, the current in the circuit is $I = \dfrac{B \ell v}{R}$. For example, a rod of length $25\,\mathrm{cm}$ moving at $4.0\,\mathrm{m/s}$ in a field of $0.60\,\mathrm{T}$ has an emf of $0.60 \cdot 0.25 \cdot 4.0\,\mathrm{V} = 0.60\,\mathrm{V}$ across its ends. With $R = 1.5\,\mathrm{\Omega}$, the current is $0.40\,\mathrm{A}$.

::grafico{assi=0 uguale=1 linee="0,2.4 7,2.4;0,0 7,0;0,2.4 0,1.9 0.3,1.8 -0.3,1.6 0.3,1.4 -0.3,1.2 0.3,1.0 -0.3,0.8 0.3,0.6 0,0.5 0,0" poligoni="3.92,-0.3 4.08,-0.3 4.08,2.7 3.92,2.7" vettori="4.2,1.8,5.4,1.8,v;3.8,0.6,2.6,0.6,F;2.8,2.7,1.6,2.7,i;4.25,0.9,4.25,1.5" etichette="-0.8,1.2,R;1.2,1.7,⊗;2.4,1.7,⊗;1.2,0.7,⊗;5.6,0.6,⊗;6.4,1.7,⊗;6.4,0.6,⊗;4.4,1.15,i;4.15,-0.45,ℓ;6.4,2.8,B ⊗" xmin=-1.2 xmax=7.2 ymin=-0.8 ymax=3.2 titolo="A rod on two rails in a field $\vec{B}$ directed into the page ($\otimes$). The rod moves to the right, the induced current flows up the rod and counterclockwise around the circuit, and the magnetic force $\vec{F}$ on the rod points to the left"}

:::dimostrazione
The emf can be calculated in two ways, both of which give the same result.

*Using the Lorentz force.* The conduction electrons and the ions in the rod move with the rod at velocity $\vec{v}$. A charge $q$ in the rod therefore experiences the **Lorentz force** $q\,\vec{v} \times \vec{B}$. Since $\vec{v}$ and $\vec{B}$ are perpendicular, the magnitude of the force is $q v B$. The force is also perpendicular to both $\vec{v}$ and $\vec{B}$, so it acts along the rod. The emf is the work done on a charge as it travels from one end of the rod to the other, divided by the charge. The force is constant and parallel to the displacement $\ell$, so the work is $W = q v B\,\ell$ and
$$
\mathcal{E} = \frac{W}{q} = \frac{q v B\,\ell}{q} = B \ell v .
$$

*Using the change in flux.* Consider the circuit formed by the rod, the rails, and the resistor. Let $x$ be the distance from the rod to the resistor. The area of the circuit is $S = \ell x$, and the field is perpendicular to the circuit, so the flux linkage is $\Phi_B = B \ell x$. During the interval $\Delta t$ the rod travels a distance $\Delta x = v\,\Delta t$, and the flux changes by
$$
\Delta\Phi_B = B \ell\,\Delta x = B \ell v\,\Delta t .
$$
By **Faraday’s law** the magnitude of the emf is $\dfrac{\Delta\Phi_B}{\Delta t} = B \ell v$, in agreement with the first calculation.
:::
::::

:::osservazione{#verso-corrente-sbarretta titolo="Direction of the current in the rod"}
The direction of the induced current can be determined from either the Lorentz force or Lenz’s law. Both methods agree. In the figure the field points into the page and the rod moves to the right. By the right-hand rule, the product $\vec{v} \times \vec{B}$ points toward the top of the page, so positive charges are pushed upward and the current flows up the rod. To apply Lenz’s law, note that the circuit area increases, so the flux into the page increases. The induced field inside the circuit points out of the page, which is precisely the field produced by a counterclockwise current. Both methods give a current that flows up the rod and counterclockwise around the circuit.
:::

## Magnetic braking force and energy balance

::::teorema{#forza-frenante titolo="Magnetic braking force and energy balance"}
A rod of length $\ell$ slides with constant velocity $v$ along two rails connected by a resistor $R$, in a uniform field $\vec{B}$ perpendicular to the plane of the rails. The resistances of the rod and rails, as well as friction, are negligible. The rod experiences a magnetic force opposite to its velocity, of magnitude
$$
F = \frac{B^2 \ell^2 v}{R} ,
$$
and the power supplied by the external force that maintains the constant velocity equals the power dissipated in the resistor:
$$
P_{\text{mech}} = F v = R I^2 = P_{\text{diss}} .
$$
All the work done in pulling the rod is converted to electrical energy and then to heat in the resistor by Joule heating. With the values from the motional emf example, $B = 0.60\,\mathrm{T}$, $\ell = 0.25\,\mathrm{m}$, $v = 4.0\,\mathrm{m/s}$, and $R = 1.5\,\mathrm{\Omega}$, the current is $I = 0.40\,\mathrm{A}$ and
$$
F = I \ell B = 0.40 \cdot 0.25 \cdot 0.60\,\mathrm{N} = 0.060\,\mathrm{N} ,
\qquad
F v = 0.24\,\mathrm{W} ,
\qquad
R I^2 = 1.5 \cdot 0.40^2\,\mathrm{W} = 0.24\,\mathrm{W} .
$$

:::dimostrazione
From the result for the emf across a moving rod, the emf in the circuit is $B \ell v$, so the current is
$$
I = \frac{B \ell v}{R} .
$$
The rod acts as a wire of length $\ell$ carrying a current $I$ perpendicular to $\vec{B}$, so it experiences the magnetic force $I\,\vec{\ell} \times \vec{B}$, of magnitude
$$
F = I \ell B = \frac{B \ell v}{R} \cdot \ell B = \frac{B^2 \ell^2 v}{R} .
$$
By Lenz’s law, the force opposes the motion that increases the flux, so it points opposite to the velocity. In the diagram of the rod, the current flows upward and the field points into the page, so $\vec{\ell} \times \vec{B}$ points left while the rod moves right.

The velocity is constant, so by Newton’s first law the external force balances the magnetic force and has magnitude $F$. Its power is
$$
P_{\text{mech}} = F v = \frac{B^2 \ell^2 v^2}{R} .
$$
The power dissipated in the resistor is
$$
P_{\text{diss}} = R I^2 = R \cdot \frac{B^2 \ell^2 v^2}{R^2} = \frac{B^2 \ell^2 v^2}{R} ,
$$
which equals $P_{\text{mech}}$.
:::
::::

:::osservazione{#sbarretta-libera titolo="A freely moving rod and terminal speed"}
When the external force is removed, the only force left on the rod is the braking force, which opposes its velocity. The rod slows down and its kinetic energy is converted to heat in the resistor. For a rod of mass $50\,\mathrm{g}$ moving at $2.0\,\mathrm{m/s}$, the energy dissipated in the resistor by the time the rod stops is $\dfrac{1}{2} \cdot 0.050 \cdot 2.0^2\,\mathrm{J} = 0.10\,\mathrm{J}$.

If the rails are vertical and a rod of mass $m$ falls, its weight $mg$ is constant while the braking force increases with speed. The rod speeds up until the braking force balances its weight, then continues at constant speed. This **terminal speed** follows from the condition
$$
\frac{B^2 \ell^2 v_{\text{lim}}}{R} = m g
\qquad
\Longrightarrow
\qquad
v_{\text{lim}} = \frac{m g R}{B^2 \ell^2} .
$$
With $m = 10\,\mathrm{g}$, $R = 0.50\,\mathrm{\Omega}$, $B = 0.50\,\mathrm{T}$, and $\ell = 20\,\mathrm{cm}$, we obtain $v_{\text{lim}} = \dfrac{0.010 \cdot 9.81 \cdot 0.50}{0.50^2 \cdot 0.20^2}\,\mathrm{m/s} \approx 4.9\,\mathrm{m/s}$. At terminal speed the kinetic energy is constant, so the power supplied by gravity, $m g\,v_{\text{lim}} \approx 0.48\,\mathrm{W}$, is entirely dissipated in the resistor.
:::

## Eddy currents

:::definizione{#correnti-foucault titolo="Eddy currents"}
When a solid piece of metal moves through a magnetic field or is placed in a changing magnetic field, the magnetic flux changes through all the closed paths inside the metal. Induced currents then flow in closed paths within the metal. They are called **eddy currents**, or Foucault currents. By Lenz’s law, these currents oppose the change that generates them, and electrical resistance converts their energy to heat in the metal (Joule heating).

To estimate the current, consider a circular path of radius $3.0\,\mathrm{cm}$ inside a metal plate perpendicular to a field that increases by $2.0\,\mathrm{T}$ per second. Suppose the path has resistance $1.0 \cdot 10^{-3}\,\mathrm{\Omega}$. The emf around the path is
$$
\mathcal{E} = \pi \cdot 0.030^2 \cdot 2.0\,\mathrm{V} \approx 5.7 \cdot 10^{-3}\,\mathrm{V} ,
$$
so the current is about $5.7\,\mathrm{A}$ and the power dissipated is about $\dfrac{\left( 5.7 \cdot 10^{-3} \right)^2}{1.0 \cdot 10^{-3}}\,\mathrm{W} \approx 32\,\mathrm{mW}$. A solid piece of metal has very low resistance, so even a small emf produces large currents.
:::

:::osservazione{#applicazioni-foucault titolo="Magnetic brakes and induction cooktops"}
Eddy currents produce two effects, a braking force and heat. Each has a practical application.

- In the **magnetic brakes** used on trains, trucks, and amusement park rides, a metal disk or plate connected to the wheels passes between the poles of an electromagnet. By Lenz’s law, the eddy currents in the metal produce a force opposing the motion. The force is proportional to the speed, so the brake is effective at high speeds. The metal does not touch the electromagnet, so there are no brake pads to wear out.
- In **induction cooktops**, an alternating current in a coil beneath the cooking surface produces a magnetic field that changes many thousands of times per second. The field passes through the metal base of the pan, where eddy currents dissipate energy through Joule heating. The pan therefore heats up while the cooking surface remains nearly cool.

In devices where eddy currents waste energy, such as transformer cores, the iron is divided into thin sheets insulated from one another. This keeps the closed paths small and the currents weak.
:::

## Induced electric field

:::osservazione{#origine-campo-indotto titolo="What makes charges move in a stationary loop?"}
In a moving rod the Lorentz force produces the emf because the charges move with the rod. In a *stationary* loop threaded by a changing magnetic field, the charges are initially at rest, and the magnetic force on a stationary charge is zero. Yet the induced current shows that a force acts on the charges along the wire. It follows that the changing magnetic field produces an **electric field** that sets the charges in the loop in motion.
:::

:::definizione{#campo-elettrico-indotto titolo="Induced electric field"}
A magnetic field that changes over time generates an **induced electric field** in the surrounding space. This field exists even without the loop. The loop reveals its presence through the induced current. The emf around a closed path is the **circulation** of the electric field, that is, the sum of the contributions $\vec{E} \cdot \Delta\vec{\ell}$ along the path divided into short segments $\Delta\vec{\ell}$:
$$
\mathcal{E} = \Gamma(\vec{E}) = \sum \vec{E} \cdot \Delta\vec{\ell} .
$$
Faraday’s law with Lenz’s sign convention then becomes $\Gamma(\vec{E}) = -\dfrac{d\Phi_B}{dt}$. It holds for any closed path, even in the absence of conductors. The induced electric field lines form **closed loops** around the region where the magnetic field is changing.

The field can be calculated readily in the case with the greatest symmetry. In a circular region, the magnetic field is uniform and perpendicular to the page, and it changes at a rate $\dfrac{dB}{dt}$. The induced electric field lines are circles concentric with the region. On a circle of radius $r$ inside the region, the field has constant magnitude and is tangent to the circle. The circulation is therefore $E \cdot 2\pi r$, and the flux through the disk is $B\,\pi r^2$. Equating the magnitudes gives
$$
E \cdot 2\pi r = \pi r^2\,\frac{dB}{dt}
\qquad
\Longrightarrow
\qquad
E = \frac{r}{2}\,\frac{dB}{dt} .
$$
For $r = 5.0\,\mathrm{cm}$ and $\dfrac{dB}{dt} = 0.20\,\mathrm{T/s}$, the induced field has magnitude $\dfrac{0.050}{2} \cdot 0.20\,\mathrm{V/m} = 5.0 \cdot 10^{-3}\,\mathrm{V/m}$.

::grafico{assi=0 uguale=1 unicolore=1 linee="1.000,0.000 0.991,0.131 0.966,0.259 0.924,0.383 0.866,0.500 0.793,0.609 0.707,0.707 0.609,0.793 0.500,0.866 0.383,0.924 0.259,0.966 0.131,0.991 0.000,1.000 -0.131,0.991 -0.259,0.966 -0.383,0.924 -0.500,0.866 -0.609,0.793 -0.707,0.707 -0.793,0.609 -0.866,0.500 -0.924,0.383 -0.966,0.259 -0.991,0.131 -1.000,0.000 -0.991,-0.131 -0.966,-0.259 -0.924,-0.383 -0.866,-0.500 -0.793,-0.609 -0.707,-0.707 -0.609,-0.793 -0.500,-0.866 -0.383,-0.924 -0.259,-0.966 -0.131,-0.991 -0.000,-1.000 0.131,-0.991 0.259,-0.966 0.383,-0.924 0.500,-0.866 0.609,-0.793 0.707,-0.707 0.793,-0.609 0.866,-0.500 0.924,-0.383 0.966,-0.259 0.991,-0.131 1.000,-0.000;2.000,0.000 1.983,0.261 1.932,0.518 1.848,0.765 1.732,1.000 1.587,1.218 1.414,1.414 1.218,1.587 1.000,1.732 0.765,1.848 0.518,1.932 0.261,1.983 0.000,2.000 -0.261,1.983 -0.518,1.932 -0.765,1.848 -1.000,1.732 -1.218,1.587 -1.414,1.414 -1.587,1.218 -1.732,1.000 -1.848,0.765 -1.932,0.518 -1.983,0.261 -2.000,0.000 -1.983,-0.261 -1.932,-0.518 -1.848,-0.765 -1.732,-1.000 -1.587,-1.218 -1.414,-1.414 -1.218,-1.587 -1.000,-1.732 -0.765,-1.848 -0.518,-1.932 -0.261,-1.983 -0.000,-2.000 0.261,-1.983 0.518,-1.932 0.765,-1.848 1.000,-1.732 1.218,-1.587 1.414,-1.414 1.587,-1.218 1.732,-1.000 1.848,-0.765 1.932,-0.518 1.983,-0.261 2.000,-0.000;3.000,0.000 2.974,0.392 2.898,0.776 2.772,1.148 2.598,1.500 2.380,1.826 2.121,2.121 1.826,2.380 1.500,2.598 1.148,2.772 0.776,2.898 0.392,2.974 0.000,3.000 -0.392,2.974 -0.776,2.898 -1.148,2.772 -1.500,2.598 -1.826,2.380 -2.121,2.121 -2.380,1.826 -2.598,1.500 -2.772,1.148 -2.898,0.776 -2.974,0.392 -3.000,0.000 -2.974,-0.392 -2.898,-0.776 -2.772,-1.148 -2.598,-1.500 -2.380,-1.826 -2.121,-2.121 -1.826,-2.380 -1.500,-2.598 -1.148,-2.772 -0.776,-2.898 -0.392,-2.974 -0.000,-3.000 0.392,-2.974 0.776,-2.898 1.148,-2.772 1.500,-2.598 1.826,-2.380 2.121,-2.121 2.380,-1.826 2.598,-1.500 2.772,-1.148 2.898,-0.776 2.974,-0.392 3.000,-0.000" vettori="1,-0.25,1,0.35;-1,0.25,-1,-0.35;2,-0.4,2,0.6,E;-2,0.4,-2,-0.6;0,3,-1.4,3;0,-3,1.4,-3" etichette="0.45,1.45,⊗;-0.75,1.45,⊗;0.45,-1.6,⊗;-0.75,-1.6,⊗;1.35,2.35,⊗;-1.65,2.35,⊗;1.35,-2.5,⊗;-1.65,-2.5,⊗;-0.25,-0.1,⊗;3.1,2.5,B ⊗ increasing" xmin=-4 xmax=4.6 ymin=-3.5 ymax=3.5 titolo="Induced electric field lines in a region where the magnetic field points into the page ($\otimes$) and is increasing. The lines are circles directed counterclockwise, and the field magnitude is $E = \dfrac{r}{2}\,\dfrac{dB}{dt}$"}

:::

:::attenzione{#campo-indotto-non-conservativo}
The induced electric field is *not* conservative, unlike the electrostatic field produced by stationary charges, whose circulation is zero. In the example with $r = 5.0\,\mathrm{cm}$ and $\dfrac{dB}{dt} = 0.20\,\mathrm{T/s}$, the circulation around the circle is
$$
\Gamma(\vec{E}) = \pi \cdot 0.050^2 \cdot 0.20\,\mathrm{V} \approx 1.6 \cdot 10^{-3}\,\mathrm{V} .
$$
The work done on an electron in one complete circuit is therefore $e\,\Gamma(\vec{E}) \approx 2.5 \cdot 10^{-22}\,\mathrm{J}$, and the same amount of work is done on each circuit, even though the electron returns to the same point. This field cannot be described by an electric potential alone. The induced electric field appears in Maxwell’s equations, discussed in the chapter on Maxwell’s equations and electromagnetic waves.
:::
