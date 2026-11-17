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
The Greek letter $\rho$ is pronounced *rho*. The ratio tells us how much mass corresponds to one unit of volume. A homogeneous block with mass $180\,\mathrm{g}$ and volume $60\,\mathrm{cm}^3$ has density $3\,\mathrm{g/cm^3}$. Each cubic centimetre of the block contains three grams of material.
:::

:::osservazione{#omogeneita titolo="How sample size matters"}
In a homogeneous material at fixed temperature and pressure, different portions of the same material have the same density. Cutting the $180\,\mathrm{g}$ block in half reduces the mass to $90\,\mathrm{g}$ and the volume to $30\,\mathrm{cm}^3$. The ratio remains $3\,\mathrm{g/cm^3}$ because both terms are multiplied by one half. If the sample contains different materials, $\dfrac{m}{V}$ describes the sample as a whole. Finding the density of any one material requires its own volume and mass.
:::

::grafico{f="3*x" xmin=0 xmax=70 ymin=0 ymax=215 punti="30,90,pieno,P;60,180,pieno,Q" nomi="V (cm³),m (g)" legenda="m=3V" titolo="For P and Q, the mass value in grams is three times the volume value in cubic centimetres"}

## Inverse problems

:::teorema{#inverse titolo="Finding mass or volume"}
The equation $\rho=\dfrac{m}{V}$ is defined for $V>0$. Multiplying both sides by $V$ gives $m=\rho V$. If $\rho>0$, dividing the mass by the density gives $V=\dfrac{m}{\rho}$. For a sample with density $2.5\,\mathrm{g/cm^3}$ and volume $40\,\mathrm{cm}^3$, the mass is $2.5\cdot40=100\,\mathrm{g}$. Conversely, $100\,\mathrm{g}$ of that material occupies $\dfrac{100}{2.5}=40\,\mathrm{cm}^3$. In the first relation the volume units cancel. In the second the gram cancels with the gram in the density in the denominator.
:::

:::esempio{titolo="A difference in volumes at constant density"}
A material with density $4\,\mathrm{g/cm^3}$ loses a fragment with volume $3\,\mathrm{cm}^3$. Its mass drops by $4\cdot3=12\,\mathrm{g}$. Apply the relation to the fragment because it consists of the same homogeneous material. The smaller volume accounts for the fall in mass. The remaining material retains its original density.
:::

:::esempio{#variazione-volume titolo="Volume changes at fixed mass"}
A closed sample keeps its mass of $250\,\mathrm{g}$. Its volume increases from $100$ to $110\,\mathrm{cm^3}$. Only the denominator of the mass-to-volume ratio changes. This gives
$$
\rho_i=\frac{250}{100}\,\mathrm{g/cm^3}=2.50\,\mathrm{g/cm^3},
\qquad
\rho_f=\frac{250}{110}\,\mathrm{g/cm^3}\simeq2.27\,\mathrm{g/cm^3}.
$$
To find the relative decrease, compare the two densities using the initial value as the reference. The ratio $\dfrac{\rho_f}{\rho_i}=\dfrac{100}{110}=\dfrac{10}{11}$ gives a decrease of $\dfrac{1}{11}$, or about $9.1\%$. The volume increased by $10\%$. The percentages differ because density is inversely proportional to volume at fixed mass. Removing a fragment follows a different relationship, since both mass and volume change together in that case.
:::

## Units of density

::::teorema{#unita titolo="Kilograms per cubic metre and grams per cubic centimetre"}
The SI unit of density is $\mathrm{kg/m^3}$. A density of $1\,\mathrm{g/cm^3}$ equals $1000\,\mathrm{kg/m^3}$. To convert in the reverse direction, divide the SI value by a thousand.

:::dimostrazione
In the ratio of $1\,\mathrm{g}$ to $1\,\mathrm{cm}^3$, the numerator becomes $10^{-3}\,\mathrm{kg}$ and the denominator becomes $10^{-6}\,\mathrm{m}^3$. The ratio of the factors is $\dfrac{10^{-3}}{10^{-6}}=10^3$. This same factor converts any numerical value expressed in grams per cubic centimetre.
:::
::::

:::esempio{titolo="Which factors cancel"}
A liquid with mass $600\,\mathrm{g}$ occupies $0.80\,\mathrm{L}$. To find the density in $\mathrm{kg/L}$ it is sufficient to convert the mass to $0.600\,\mathrm{kg}$. The ratio is $0.75\,\mathrm{kg/L}$. To obtain the SI value, use $1\,\mathrm{L}=10^{-3}\,\mathrm{m}^3$. The same mass per litre becomes $750\,\mathrm{kg/m^3}$. Since a litre contains a thousand cubic centimetres, the value in $\mathrm{g/cm^3}$ is also $0.75$.
:::

::grafico{f="1000*x" xmin=0 xmax=3 ymin=0 ymax=3000 punti="0.75,750,pieno,P" nomi="ρ (g/cm³),ρ (kg/m³)" legenda="\rho_{\mathrm{kg/m^3}}=1000\rho_{\mathrm{g/cm^3}}" titolo="For the same density, the value in kg/m³ is a thousand times the value in g/cm³"}

## Measuring an irregular volume

:::osservazione{#spostamento titolo="Submersion and tare"}
In a graduated cylinder, record the initial reading $V_i$ and the final reading $V_f$. If a nonporous solid is fully submerged without bubbles, liquid loss, or absorption, its volume is
$$
V=V_f-V_i.
$$
Both readings include the original liquid volume, which cancels in the difference. An increase from $28$ to $40\,\mathrm{mL}$ corresponds to $12\,\mathrm{cm}^3$ of solid, because $1\,\mathrm{mL}=1\,\mathrm{cm}^3$. For a mass of $36\,\mathrm{g}$, the density is $3\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=7 linee="0,6 0,0 2,0 2,6;5,6 5,0 7,0 7,6" poligoni="0,0 2,0 2,2.8 0,2.8;5,0 7,0 7,4 5,4;5.4,0.8 6.6,0.8 6.6,2.8 5.4,2.8" etichette="1,3.12,28 mL;6,4.35,40 mL" titolo="Before and after submersion: the solid displaces 12 mL of liquid"}

:::attenzione{#condizioni-immersione titolo="What the displaced volume includes"}
A partly submerged body displaces the volume of its part below the liquid surface. An attached bubble displaces liquid along with the body, making its volume appear larger. A loss of liquid changes the final reading in the opposite direction. Check the setup before applying the difference. If a support enters the liquid, include its contribution to the reference reading or subtract it separately.
:::

:::esempio{#tara titolo="Finding liquid mass by subtraction"}
A dry container gives a scale reading of $38\,\mathrm{g}$. With $18\,\mathrm{cm}^3$ of liquid inside, it reads $74\,\mathrm{g}$. Subtract the **tare**, the container's mass. This gives $74-38=36\,\mathrm{g}$. The ratio $\dfrac{36}{18}$ now compares the mass and volume of the same amount of liquid. Using the total mass would give a higher density.
:::

:::esempio{#tara-del-sostegno titolo="Measuring with a submerged holder"}
A rigid holder keeps an irregular object of mass $42\,\mathrm{g}$ fully submerged without touching the bottom of the cylinder. The readings are as follows.

| Setup | Reading (mL) |
| --- | ---: |
| Liquid alone | 22 |
| Liquid and holder | 24 |
| Liquid, holder and object | 39 |

The second row is the reference used to isolate the object's volume. Subtracting $24\,\mathrm{mL}$ from $39\,\mathrm{mL}$ gives $15\,\mathrm{cm^3}$. Thus $\rho=\dfrac{42}{15}\,\mathrm{g/cm^3}=2.8\,\mathrm{g/cm^3}$.

The first row can also be used to check the result. The total rise is $17\,\mathrm{mL}$, of which $2\,\mathrm{mL}$ comes from the holder. Using all $17\,\mathrm{mL}$ would give a denominator greater than the object's volume and would underestimate its density. This correction requires the holder to displace the same amount of liquid in the last two readings.
:::

## Regular solids and sheets

:::osservazione{#geometria titolo="Find the volume before the mass"}
For a regular solid, the volume can be obtained from its geometrical measurements. A rectangular box has volume $V=Ah$, the product of base area and height. Use consistent units. A sheet of area $120\,\mathrm{cm}^2$ and thickness $2\,\mathrm{mm}$ has thickness $0.2\,\mathrm{cm}$ and volume $24\,\mathrm{cm}^3$. If its density is $2.5\,\mathrm{g/cm^3}$, its mass is $60\,\mathrm{g}$. The regular shape makes a displacement measurement unnecessary.
:::

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=7 ymin=-0.5 ymax=4.5 poligoni="0.5,1 5,1 6.3,2.3 1.8,2.3;0.5,1 0.5,0.65 5,0.65 5,1;5,1 5,0.65 6.3,1.95 6.3,2.3" etichette="3.4,1.72,A = 120 cm²;3.0,0.23,h = 2 mm" titolo="Base area and thickness determine the sheet's volume. Diagram not to scale"}

:::esempio{#lastra-forata titolo="Subtracting the volume of a cutout"}
A rectangular sheet measuring $15\,\mathrm{cm}$ by $10\,\mathrm{cm}$ has a square hole of side $5\,\mathrm{cm}$ cut through its entire $4\,\mathrm{mm}$ thickness. The remaining area is $150-25=125\,\mathrm{cm^2}$. Since the thickness is uniform, multiply this area by $0.4\,\mathrm{cm}$ to obtain $V=50\,\mathrm{cm^3}$.

::grafico{assi=0 uguale=1 xmin=-2 xmax=18 ymin=-2 ymax=12 linee="0,0 15,0 15,10 0,10 0,0;5,2.5 10,2.5 10,7.5 5,7.5 5,2.5" segmenti="0,-0.8,15,-0.8;15.8,0,15.8,10" etichette="7.5,-1.35,15 cm;17,5,10 cm;7.5,5,5 cm" titolo="Top view of the sheet. Subtract the area of the inner square from the area of the rectangle."}

With $\rho=2.7\,\mathrm{g/cm^3}$, the remaining mass is $135\,\mathrm{g}$. To check it, consider the removed piece and the intact sheet separately. The hole has volume $25\cdot0.4=10\,\mathrm{cm^3}$, so $27\,\mathrm{g}$ was removed. The intact sheet had volume $60\,\mathrm{cm^3}$ and mass $162\,\mathrm{g}$. The difference $162-27$ yields the measurable mass of the sheet with the hole.
:::

:::esempio{#due-misure-volume titolo="Comparing two measurements of the same volume"}
A rectangular block has measured side lengths of $120$, $20$ and $5\,\mathrm{mm}$. Its geometrical volume is $12\,000\,\mathrm{mm^3}=12\,\mathrm{cm^3}$. A graduated cylinder shows $28.0\,\mathrm{mL}$ before and $39.5\,\mathrm{mL}$ after full submersion. The central value of the difference is $11.5\,\mathrm{cm^3}$.

Suppose each reading has an absolute uncertainty of $0.5\,\mathrm{mL}$. For the minimum, subtract the largest initial reading from the smallest final reading. The maximum uses the opposite endpoints.
$$
V_{\min}=(39.0-28.5)\,\mathrm{cm^3}=10.5\,\mathrm{cm^3},
\qquad
V_{\max}=(40.0-27.5)\,\mathrm{cm^3}=12.5\,\mathrm{cm^3}.
$$
The geometrical value of $12\,\mathrm{cm^3}$ lies in the interval. The two measurements agree within the precision of the graduated cylinder. If the solid has mass $32.4\,\mathrm{g}$, its density calculated using the geometrical volume is $2.7\,\mathrm{g/cm^3}$. State which volume measurement was used, because the precision of the ratio depends on it as well as on the mass.
:::

## Hollow objects and mean density

:::definizione{#cavita titolo="External volume and material volume"}
A hollow object has **external volume** $V_e$ including its wall volume $V_m$ and cavity volume $V_c$. Thus $V_m=V_e-V_c$. When the mass of the air is negligible, the body's mass is $m=\rho_m V_m$, where $\rho_m$ is the material density. Its mean density based on external volume is $\dfrac{m}{V_e}$. For $V_e=50\,\mathrm{cm}^3$, $V_c=30\,\mathrm{cm}^3$, and $\rho_m=4\,\mathrm{g/cm^3}$, the mass is $m=80\,\mathrm{g}$ and the mean density is $1.6\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=6 poligoni="0,0 7,0 7,5 0,5" linee="1.5,1.1 5.5,1.1 5.5,3.9 1.5,3.9 1.5,1.1" etichette="3.5,2.5,cavity;0.7,4.5,wall" titolo="External volume includes both the cavity and the wall"}

:::esempio{titolo="From mass to the empty fraction"}
An $80\,\mathrm{g}$ shell is made of material with density $4\,\mathrm{g/cm^3}$ and has external volume $50\,\mathrm{cm}^3$. Its wall occupies $\dfrac{80}{4}=20\,\mathrm{cm}^3$. The cavity is $50-20=30\,\mathrm{cm}^3$, or $60\%$ of the external volume. The calculation assumes that the mass in the cavity is negligible. A liquid inside would add mass and would have to be considered separately.
:::

:::esempio{#cavita-riempita titolo="Finding the internal volume from the added mass"}
A rigid container has external volume $50\,\mathrm{cm^3}$ and empty mass $90\,\mathrm{g}$. Filling the entire cavity with a liquid of density $1.25\,\mathrm{g/cm^3}$ gives a reading of $130\,\mathrm{g}$. Assume that the mass of the displaced air is negligible. Since the shell is the same in both weighings, the difference of $40\,\mathrm{g}$ is the mass of the liquid. Its volume is $\dfrac{40}{1.25}=32\,\mathrm{cm^3}$, which equals the volume of the cavity.

::grafico{f="90+1.25*x" xmin=0 xmax=32 ymin=85 ymax=135 punti="0,90,pieno;32,130,pieno" nomi="V (cm³),m (g)" titolo="Mass rises to 130 g as the container fills. The slope is the density of the liquid."}

The material in the wall occupies $50-32=18\,\mathrm{cm^3}$. Its density is therefore $\dfrac{90}{18}=5\,\mathrm{g/cm^3}$. This uses the mass and volume of the wall alone. The ratio $\dfrac{130}{50}=2.6\,\mathrm{g/cm^3}$ instead describes the filled object's density based on its external volume.
:::

## Comparing samples

:::teorema{#confronti titolo="Equal volume, equal mass, or the same material"}
With equal volumes, $m=\rho V$ says that the greater mass has the greater density. With equal masses, $V=\dfrac{m}{\rho}$ says that the greater density has the smaller volume. If both masses and volumes differ, compare the ratios. A $90\,\mathrm{g}$ sample of $30\,\mathrm{cm}^3$ has density $3\,\mathrm{g/cm^3}$. A second sample with $120\,\mathrm{g}$ and $60\,\mathrm{cm}^3$ has more mass but only $2\,\mathrm{g/cm^3}$ density. It has greater mass because it occupies twice the volume.
:::

:::osservazione{#intervallo-densita titolo="Uncertainties can change the comparison"}
A sample has mass between $117$ and $119\,\mathrm{g}$ and volume between $39$ and $41\,\mathrm{cm^3}$. With no further information, the lowest ratio comes from pairing the smallest mass with the largest volume. The highest ratio comes from pairing the other two extremes.

$$
\frac{117}{41}\,\mathrm{g/cm^3}\leq\rho\leq\frac{119}{39}\,\mathrm{g/cm^3}.
$$

The interval runs from about $2.85$ to $3.05\,\mathrm{g/cm^3}$. The central estimate $\dfrac{118}{40}=2.95$ is below $3$, but a density of $3\,\mathrm{g/cm^3}$ is still consistent with the measurements. A volume of $39.5\,\mathrm{cm^3}$ and a mass of $118.5\,\mathrm{g}$ give exactly that value. To distinguish two materials with similar densities, the mass or volume must be measured with lower uncertainty.

::grafico{f="117000/x;119000/x" xmin=39 xmax=41 ymin=2800 ymax=3090 punti="40,2950,pieno;39.5,3000,pieno" nomi="V (cm³),ρ (kg/m³)" legenda="m=117\,\mathrm{g};m=119\,\mathrm{g}" titolo="For each possible volume, the curves bound the densities consistent with the measured masses."}
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
Mix $40\,\mathrm{cm}^3$ of a liquid with density $1\,\mathrm{g/cm^3}$ and $30\,\mathrm{cm}^3$ of a second with density $2\,\mathrm{g/cm^3}$. If mass is conserved, their total is $40+60=100\,\mathrm{g}$. If the measured volume after mixing is $65\,\mathrm{cm}^3$, the density is $\dfrac{100}{65}\,\mathrm{g/cm^3}$. Use the measured final volume because $40+30$ would assume additivity, which is not satisfied here.
:::

:::esempio{#masse-uguali titolo="A mixture of equal masses"}
Two components of $120\,\mathrm{g}$ each have densities of $2$ and $6\,\mathrm{g/cm^3}$. Their initial volumes are $60$ and $20\,\mathrm{cm^3}$. If the total volume is their sum, then $V=80\,\mathrm{cm^3}$ and $\rho_{\mathrm{mix}}=\dfrac{240}{80}=3\,\mathrm{g/cm^3}$. The less dense component occupies three quarters of the volume while contributing half of the mass.

The arithmetic mean of the densities, $4\,\mathrm{g/cm^3}$, would apply if the two volumes were equal. Indeed, if $f$ is the volume fraction of the denser component, then
$$
\rho_{\mathrm{mix}}=2(1-f)+6f=2+4f
\qquad\text{in }\mathrm{g/cm^3}.
$$
Here $f=\dfrac{20}{80}=\dfrac14$. Reaching $4\,\mathrm{g/cm^3}$ would instead require $f=\dfrac12$. The graph gives the density for any composition and also gives the composition needed to reach a specified density.

::grafico{f="2+0.04*x" xmin=0 xmax=100 ymin=1.5 ymax=6.5 punti="25,3,pieno,A;50,4,pieno,B" nomi="Volume fraction (%),ρ (g/cm³)" titolo="A denotes equal masses. At B the denser component occupies half the volume."}
:::

## Mass-volume graph

:::osservazione{#grafico titolo="Density as slope"}
For several portions of the same homogeneous material, the law $m=\rho V$ describes a straight line through the origin. With volume on the horizontal axis and mass on the vertical axis, its slope is $\dfrac{\Delta m}{\Delta V}$. In grams and cubic centimetres it has units of $\mathrm{g/cm^3}$. A steeper line gives more mass added for the same volume. Reversing the axes reverses the ratio. In a plot with mass on the horizontal axis, the slope is $\dfrac{\Delta V}{\Delta m}$, or $\dfrac{1}{\rho}$.
:::

::grafico{f="2*x;3*x" xmin=0 xmax=5 ymin=0 ymax=16 nomi="V (cm³),m (g)" legenda="ρ = 2 g/cm³;ρ = 3 g/cm³" punti="4,8,pieno,A;4,12,pieno,B" titolo="At equal volumes the steeper line gives the greater mass"}

:::esempio{#intercetta titolo="Separating tare from slope"}
A container filled to different volumes gives pairs $(10;70)$ and $(30;110)$, with volume in cubic centimetres and total mass in grams. The slope is $\dfrac{110-70}{30-10}=2\,\mathrm{g/cm^3}$. The mass at zero volume is $70-2\cdot10=50\,\mathrm{g}$, the tare. Dividing total mass by volume for just one measurement would include the tare and overestimate the liquid's density.
:::

:::esempio{#grafici-con-tara titolo="Two containers with the same reading"}
Two liquids are poured into containers $A$ and $B$. The measured lines are $m_A=42+1.2V$ and $m_B=18+2.4V$, with volume in cubic centimetres and total mass in grams. Container $A$ has the greater empty mass, with a tare of $42\,\mathrm{g}$. The liquid in $B$ is denser because its mass increases by $2.4\,\mathrm{g}$ per cubic centimetre, twice as much as the other liquid.

To find the volume at which the scale gives the same reading, equate the vertical coordinates. This gives $24=1.2V$, so $V=20\,\mathrm{cm^3}$. The common reading is $66\,\mathrm{g}$. The liquid has mass $24\,\mathrm{g}$ in $A$ and $48\,\mathrm{g}$ in $B$. The readings agree because the greater liquid mass in $B$ balances the greater tare in $A$.

::grafico{f="42+1.2*x;18+2.4*x" xmin=0 xmax=35 ymin=0 ymax=110 punti="20,66,pieno,E" nomi="V (cm³),m (g)" legenda="\mathrm{A};\mathrm{B}" titolo="Intersection E indicates equal total mass, with different tare masses and densities."}
:::

:::attenzione{#controllo-terza-misura titolo="Testing the slope with another reading"}
A container reads $52\,\mathrm{g}$ when empty and $72\,\mathrm{g}$ after adding $10\,\mathrm{cm^3}$ of a liquid. These two readings give the tare and the slope $\dfrac{72-52}{10}=2\,\mathrm{g/cm^3}$. If the same model holds up to $30\,\mathrm{cm^3}$, the predicted total mass is $52+2\cdot30=112\,\mathrm{g}$.

A third reading of $116\,\mathrm{g}$ is $4\,\mathrm{g}$ above the prediction. If the data are exact, the three points do not lie on a single straight line. The increase from the second to the third reading is $44\,\mathrm{g}$ over $20\,\mathrm{cm^3}$, or $2.2\,\mathrm{g/cm^3}$. The discrepancy indicates that the model or the measurements need checking. This difference alone cannot tell us whether the liquid changed, the scale was affected, or the volume reading was inaccurate.
:::
