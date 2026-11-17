---
titolo: "Density"
sommario: "Material density, displacement measurements, hollow objects, mixtures, and mass-volume graphs."
---

Mass and volume describe different properties of a sample. Their ratio makes it possible to compare samples of different sizes and to obtain measurements that an instrument does not give directly.

## Density of a material

:::definizione{#definizione titolo="Mass per unit volume"}
For a sample of mass $m$ and volume $V>0$, its **mean density** is the ratio
$$
\rho=\frac{m}{V}.
$$
The Greek letter $\rho$ is pronounced *rho*. The ratio tells us how much mass corresponds to one unit of volume. A homogeneous block with mass $180\,\mathrm g$ and volume $60\,\mathrm{cm}^3$ has density $3\,\mathrm{g/cm^3}$. Each cubic centimetre of the block contains three grams of material.
:::

:::osservazione{#omogeneita titolo="How sample size matters"}
In a homogeneous material at fixed temperature and pressure, different portions of the same material have the same density. Cutting the $180\,\mathrm g$ block in half reduces the mass to $90\,\mathrm g$ and the volume to $30\,\mathrm{cm}^3$. The ratio remains $3\,\mathrm{g/cm^3}$ because both terms are multiplied by one half. If the sample contains different materials, $m/V$ describes the sample as a whole. Finding the density of any one material requires its own volume and mass.
:::

::grafico{f="3*x" xmin=0 xmax=70 ymin=0 ymax=215 punti="30,90,pieno,P;60,180,pieno,Q" nomi="V (cm³),m (g)" titolo="For both portion P and sample Q, the numerical mass value is three times the volume value"}

## Inverse problems

:::teorema{#inverse titolo="Finding mass or volume"}
Multiplying $\rho=m/V$ by $V$, for $V>0$, gives $m=\rho V$. If $\rho>0$, dividing the mass by the density gives $V=m/\rho$. For a sample with density $2.5\,\mathrm{g/cm^3}$ and volume $40\,\mathrm{cm}^3$, the mass is $2.5\cdot40=100\,\mathrm g$. Conversely, $100\,\mathrm g$ of that material occupies $\dfrac{100}{2.5}=40\,\mathrm{cm}^3$. In the first relation the volume units cancel. In the second the gram cancels with the gram in the density in the denominator.
:::

:::esempio{titolo="A difference in volumes at constant density"}
A material with density $4\,\mathrm{g/cm^3}$ loses a fragment with volume $3\,\mathrm{cm}^3$. Its mass drops by $4\cdot3=12\,\mathrm g$. Apply the relation to the fragment because it consists of the same homogeneous material. The smaller volume accounts for the fall in mass. The remaining material retains its original density.
:::

## Units of density

::::teorema{#unita titolo="Kilograms per cubic metre and grams per cubic centimetre"}
The SI unit of density is $\mathrm{kg/m^3}$. A density of $1\,\mathrm{g/cm^3}$ equals $1000\,\mathrm{kg/m^3}$. To convert in the reverse direction, divide the SI value by a thousand.

:::dimostrazione
In the ratio of $1\,\mathrm g$ to $1\,\mathrm{cm}^3$, the numerator becomes $10^{-3}\,\mathrm{kg}$ and the denominator becomes $10^{-6}\,\mathrm m^3$. The ratio of the factors is $10^{-3}/10^{-6}=10^3$. This same factor converts any numerical value expressed in grams per cubic centimetre.
:::
::::

:::esempio{titolo="Which factors cancel"}
A liquid with mass $600\,\mathrm g$ occupies $0.80\,\mathrm L$. To find the density in $\mathrm{kg/L}$ it is sufficient to convert the mass to $0.600\,\mathrm{kg}$. The ratio is $0.75\,\mathrm{kg/L}$. To obtain the SI value, use $1\,\mathrm L=10^{-3}\,\mathrm m^3$. The same mass per litre becomes $750\,\mathrm{kg/m^3}$. Since a litre contains a thousand cubic centimetres, the value in $\mathrm{g/cm^3}$ is also $0.75$.
:::

::grafico{f="1000*x" xmin=0 xmax=3 ymin=0 ymax=3000 punti="0.75,750,pieno,P" nomi="ρ (g/cm³),ρ (kg/m³)" titolo="For the same density, the value in kg/m³ is a thousand times the value in g/cm³"}

## Measuring an irregular volume

:::osservazione{#spostamento titolo="Submersion and tare"}
In a graduated cylinder, record the initial reading $V_i$ and the final reading $V_f$. If a nonporous solid is fully submerged without bubbles, liquid loss, or absorption, its volume is
$$
V=V_f-V_i.
$$
Both readings include the original liquid volume, which cancels in the difference. An increase from $28$ to $40\,\mathrm{mL}$ corresponds to $12\,\mathrm{cm}^3$ of solid, because $1\,\mathrm{mL}=1\,\mathrm{cm}^3$. For a mass of $36\,\mathrm g$, the density is $3\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=7 linee="0,6 0,0 2,0 2,6;5,6 5,0 7,0 7,6" poligoni="0,0 2,0 2,2.8 0,2.8;5,0 7,0 7,4 5,4;5.65,0.65 6.45,0.65 6.45,2.4 5.65,2.4" etichette="1,3.12,28 mL;6,4.35,40 mL" titolo="Before and after submersion: the solid displaces 12 mL of liquid"}

:::attenzione{#condizioni-immersione titolo="What the displaced volume includes"}
A partly submerged body displaces the volume of its part below the liquid surface. An attached bubble displaces liquid along with the body, making its volume appear larger. A loss of liquid changes the final reading in the opposite direction. Check the setup before applying the difference. If a support enters the liquid, include its contribution to the reference reading or subtract it separately.
:::

:::esempio{#tara titolo="Finding liquid mass by subtraction"}
A dry container gives a scale reading of $38\,\mathrm g$. With $18\,\mathrm{cm}^3$ of liquid inside, it reads $74\,\mathrm g$. Subtract the **tare**, the container's mass. This gives $74-38=36\,\mathrm g$. The ratio $\dfrac{36}{18}$ now compares the mass and volume of the same amount of liquid. Using the total mass would give a higher density.
:::

## Regular solids and sheets

:::osservazione{#geometria titolo="Find the volume before the mass"}
For a regular solid, the volume can be obtained from its geometrical measurements. A rectangular box has volume $V=Ah$, the product of base area and height. Use consistent units. A sheet of area $120\,\mathrm{cm}^2$ and thickness $2\,\mathrm{mm}$ has thickness $0.2\,\mathrm{cm}$ and volume $24\,\mathrm{cm}^3$. If its density is $2.5\,\mathrm{g/cm^3}$, its mass is $60\,\mathrm g$. The regular shape makes a displacement measurement unnecessary.
:::

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=7 ymin=-0.5 ymax=4.5 poligoni="0.5,1 5,1 6.3,2.3 1.8,2.3;0.5,1 0.5,0.65 5,0.65 5,1;5,1 5,0.65 6.3,1.95 6.3,2.3" etichette="3.4,1.72,A = 120 cm²;3.0,0.23,h = 2 mm" titolo="Base area and thickness determine the sheet's volume. Diagram not to scale"}

## Hollow objects and mean density

:::definizione{#cavita titolo="External volume and material volume"}
A hollow object has **external volume** $V_e$ including its wall volume $V_m$ and cavity volume $V_c$. Thus $V_m=V_e-V_c$. When the mass of the air is negligible, the body's mass is $m=\rho_m V_m$, where $\rho_m$ is the material density. Its mean density based on external volume is $m/V_e$. For $V_e=50\,\mathrm{cm}^3$, $V_c=30\,\mathrm{cm}^3$, and $\rho_m=4\,\mathrm{g/cm^3}$, the mass is $m=80\,\mathrm g$ and the mean density is $1.6\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=6 poligoni="0,0 7,0 7,5 0,5" linee="1.5,1.1 5.5,1.1 5.5,3.9 1.5,3.9 1.5,1.1" etichette="3.5,2.5,cavity;0.7,4.5,wall" titolo="External volume includes both the cavity and the wall"}

:::esempio{titolo="From mass to the empty fraction"}
An $80\,\mathrm g$ shell is made of material with density $4\,\mathrm{g/cm^3}$ and has external volume $50\,\mathrm{cm}^3$. Its wall occupies $\dfrac{80}{4}=20\,\mathrm{cm}^3$. The cavity is $50-20=30\,\mathrm{cm}^3$, or $60\%$ of the external volume. The calculation assumes that the mass in the cavity is negligible. A liquid inside would add mass and would have to be considered separately.
:::

## Comparing samples

:::teorema{#confronti titolo="Equal volume, equal mass, or the same material"}
With equal volumes, $m=\rho V$ says that the greater mass has the greater density. With equal masses, $V=m/\rho$ says that the greater density has the smaller volume. If both masses and volumes differ, compare the ratios. A $90\,\mathrm g$ sample of $30\,\mathrm{cm}^3$ has density $3\,\mathrm{g/cm^3}$. A second sample with $120\,\mathrm g$ and $60\,\mathrm{cm}^3$ has more mass but only $2\,\mathrm{g/cm^3}$ density. It has greater mass because it occupies twice the volume.
:::

## Mixtures

:::osservazione{#miscele titolo="Adding masses and the assumption about volumes"}
When nothing is lost, the mixture mass is the sum of the individual masses. If the volumes are **additive**, the final volume is the sum of the starting volumes. For two components,
$$
\rho_{\mathrm{mix}}=\frac{\rho_1V_1+\rho_2V_2}{V_1+V_2}.
$$
Each density is weighted by its component's volume. Equal volumes give the arithmetic mean of the two densities. If the volumes differ, the final density lies closer to that of the greater-volume component.
:::

:::esempio{#volume-finale titolo="When the final volume is measured"}
Mix $40\,\mathrm{cm}^3$ of a liquid with density $1\,\mathrm{g/cm^3}$ and $30\,\mathrm{cm}^3$ of a second with density $2\,\mathrm{g/cm^3}$. If mass is conserved, their total is $40+60=100\,\mathrm g$. If the measured volume after mixing is $65\,\mathrm{cm}^3$, the density is $\dfrac{100}{65}\,\mathrm{g/cm^3}$. Use the measured final volume because $40+30$ would assume additivity, which is not satisfied here.
:::

## Mass-volume graph

:::osservazione{#grafico titolo="Density as slope"}
For several portions of the same homogeneous material, the law $m=\rho V$ describes a straight line through the origin. With volume on the horizontal axis and mass on the vertical axis, its slope is $\Delta m/\Delta V$. In grams and cubic centimetres it has units of $\mathrm{g/cm^3}$. A steeper line gives more mass added for the same volume. Reversing the axes reverses the ratio. In a plot with mass on the horizontal axis, the slope is $\Delta V/\Delta m$, or $1/\rho$.
:::

::grafico{f="2*x;3*x" xmin=0 xmax=5 ymin=0 ymax=16 nomi="V (cm³),m (g)" legenda="ρ = 2 g/cm³;ρ = 3 g/cm³" punti="4,8,pieno,A;4,12,pieno,B" titolo="At equal volumes the steeper line gives the greater mass"}

:::esempio{#intercetta titolo="Separating tare from slope"}
A container filled to different volumes gives pairs $(10;70)$ and $(30;110)$, with volume in cubic centimetres and total mass in grams. The slope is $\dfrac{110-70}{30-10}=2\,\mathrm{g/cm^3}$. The mass at zero volume is $70-2\cdot10=50\,\mathrm g$, the tare. Dividing total mass by volume for just one measurement would include the tare and overestimate the liquid's density.
:::
