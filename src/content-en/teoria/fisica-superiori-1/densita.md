---
titolo: "Density"
sommario: "Material density, displacement measurements, hollow objects, mixtures, and mass-volume graphs."
---

An iron cube and a wooden cube of the same size have different masses. This chapter calculates density, that is, how many grams of material there are in each cubic centimetre, and uses it to find masses and volumes that an instrument does not measure directly.

## Density of a material

:::definizione{#definizione titolo="Mass per unit volume"}
The **mass** of a body is the amount of matter it is made of. It is measured with a balance, in grams ($\mathrm{g}$) or kilograms ($\mathrm{kg}$), and is denoted by $m$. The **volume** is the space the body occupies and is denoted by $V$. A small cube with a side of one centimetre has a volume of one **cubic centimetre** ($1\,\mathrm{cm}^3$).

For a body of mass $m$ and volume $V>0$ (read "$V$ greater than zero"), the **mean density** is the ratio of the mass to the volume, that is, the mass divided by the volume:
$$
\rho=\frac{m}{V}.
$$
The Greek letter $\rho$ is pronounced *rho*. Density tells how much mass corresponds to one unit of volume. A block with mass $180\,\mathrm{g}$ and volume $60\,\mathrm{cm}^3$ has density $\dfrac{180}{60}=3\,\mathrm{g/cm^3}$, read *three grams per cubic centimetre*. The block is **homogeneous**, that is, made of the same material at every point. Each cubic centimetre of the block therefore contains three grams of material.

Two bodies made of the same homogeneous material, one small and one large, have the same density. For this reason density is used to identify a material.
:::

:::osservazione{#omogeneita titolo="How sample size matters"}
In a laboratory, the portion of material that is measured is called a **sample**. In a homogeneous material all portions, small or large, have the same density, provided that the temperature and the pressure are the same. The condition is needed because almost all materials expand when they are heated. The mass stays the same and the volume increases, so the density decreases. Pressure, that is, how strongly the material is compressed from outside, also changes the volume.

The $180\,\mathrm{g}$ block is cut in half. Each half has mass $90\,\mathrm{g}$ and volume $30\,\mathrm{cm}^3$, so its density is $\dfrac{90}{30}=3\,\mathrm{g/cm^3}$. The ratio is the same as for the whole block because the mass and the volume have both been multiplied by $\dfrac12$. In the graph, point $P$ represents half the block and point $Q$ the whole block.

If the sample contains different materials, for example a stone crossed by a vein of metal, $\dfrac{m}{V}$ is the mean density of the whole sample. Finding the density of one material alone requires the mass and the volume of that material only.
:::

::grafico{f="3*x" xmin=0 xmax=70 ymin=0 ymax=215 punti="30,90,pieno,P;60,180,pieno,Q" nomi="V (cm³),m (g)" legenda="m=3V" titolo="For P and Q, the mass value in grams is three times the volume value in cubic centimetres"}

## Inverse problems

:::teorema{#inverse titolo="Finding mass or volume"}
A **quantity** is a measurable property, such as mass or volume. The formula $\rho=\dfrac{m}{V}$ links three quantities. When two are known, the third is found.

An equation has two **sides**, the expressions to the left and to the right of the $=$ sign. The equation $\rho=\dfrac{m}{V}$ is defined for $V>0$, because division by zero does not exist. Multiplying both sides by $V$ gives $m=\rho V$. If $\rho>0$, dividing both sides of $m=\rho V$ by $\rho$ gives $V=\dfrac{m}{\rho}$.

For a sample with density $2.5\,\mathrm{g/cm^3}$ and volume $40\,\mathrm{cm}^3$, the mass is $2.5\cdot40=100\,\mathrm{g}$. Conversely, $100\,\mathrm{g}$ of that material occupies $\dfrac{100}{2.5}=40\,\mathrm{cm}^3$. The units are calculated together with the numbers:
$$
2.5\,\frac{\mathrm{g}}{\mathrm{cm^3}}\cdot40\,\mathrm{cm^3}=100\,\mathrm{g},
\qquad
\frac{100\,\mathrm{g}}{2.5\,\dfrac{\mathrm{g}}{\mathrm{cm^3}}}=40\,\mathrm{cm^3}.
$$
In the first calculation the cubic centimetres of the volume cancel with those in the denominator of the density. In the second the gram of the mass cancels with the gram contained in the density.

At constant density, if the volume doubles, the mass doubles too. Two quantities with this property are said to be **directly proportional**.
:::

:::esempio{titolo="A difference in volumes at constant density"}
A fragment of $3\,\mathrm{cm}^3$ breaks off a block of homogeneous material with density $4\,\mathrm{g/cm^3}$. The fragment is made of the same material, so it has the same density. The relation $m=\rho V$ applied to the fragment gives $4\cdot3=12\,\mathrm{g}$. The mass of the block therefore drops by $12\,\mathrm{g}$, while its volume drops by $3\,\mathrm{cm}^3$. The remaining material keeps its original density, because it is the same material.
:::

:::esempio{#variazione-volume titolo="Volume changes at fixed mass"}
A sample is sealed in a container that no matter enters or leaves, so it keeps its mass of $250\,\mathrm{g}$. Its volume increases from $100$ to $110\,\mathrm{cm^3}$. In the fraction $\dfrac{m}{V}$ only the **denominator** changes, that is, the number below the fraction line.

Let $\rho_i$ be the initial density and $\rho_f$ the final density. The small lowered letters are called **subscripts**.
$$
\rho_i=\frac{250}{100}\,\mathrm{g/cm^3}=2.50\,\mathrm{g/cm^3},
\qquad
\rho_f=\frac{250}{110}\,\mathrm{g/cm^3}\simeq2.27\,\mathrm{g/cm^3}.
$$
The symbol $\simeq$ is read "approximately equal to".

For the relative decrease, that is, the part of the initial value that has been lost, the final density is divided by the initial one:
$$
\frac{\rho_f}{\rho_i}=\frac{250}{110}\cdot\frac{100}{250}=\frac{100}{110}=\frac{10}{11}.
$$
The final density is $\dfrac{10}{11}$ of the initial one, so the decrease is $1-\dfrac{10}{11}=\dfrac{1}{11}$ of the initial value. As a percentage, $\dfrac{1}{11}\simeq0.091$, or about $9.1\%$. The volume increased by $10\,\mathrm{cm^3}$ out of $100\,\mathrm{cm^3}$, that is, by $10\%$.

The two percentages differ because, at fixed mass, density and volume are **inversely proportional**. Their product $\rho V=m$ indeed stays constant. The volume has been multiplied by $\dfrac{11}{10}$, so the density has been multiplied by $\dfrac{10}{11}$. The case of the fragment breaking off follows a different relationship, since there mass and volume decrease together and the density stays the same.
:::

## Units of density

::::teorema{#unita titolo="Kilograms per cubic metre and grams per cubic centimetre"}
The **International System**, abbreviated **SI**, is the set of units of measurement adopted worldwide. In the SI, mass is measured in kilograms ($\mathrm{kg}$) and volume in cubic metres ($\mathrm{m^3}$). A cubic metre is the volume of a cube with a side of one metre. The SI unit of density is therefore the kilogram per cubic metre, $\mathrm{kg/m^3}$.

A density of $1\,\mathrm{g/cm^3}$ equals $1000\,\mathrm{kg/m^3}$. For the reverse conversion, the SI value is divided by a thousand. Water has a density of about $1\,\mathrm{g/cm^3}$, so a cubic metre of water has a mass of about a thousand kilograms.

For liquids the **litre** ($\mathrm{L}$), which is the volume of a cube with a side of $10\,\mathrm{cm}$, that is, $1000\,\mathrm{cm^3}$, and the **millilitre** ($\mathrm{mL}$), one thousandth of a litre, are also used. Therefore $1\,\mathrm{mL}=1\,\mathrm{cm^3}$ and $1\,\mathrm{g/mL}=1\,\mathrm{g/cm^3}$. The density $1\,\mathrm{kg/L}$ is also the same, because $\dfrac{1000\,\mathrm{g}}{1000\,\mathrm{cm^3}}=1\,\mathrm{g/cm^3}$. The **milligram** ($\mathrm{mg}$) is one thousandth of a gram, so $0.6\,\mathrm{g/mL}$ equals $0.6\cdot1000=600\,\mathrm{mg/mL}$.

:::dimostrazione
The gram is written in kilograms and the cubic centimetre in cubic metres.

- A kilogram is $1000\,\mathrm{g}$, so $1\,\mathrm{g}$ is one thousandth of a kilogram, which is written $10^{-3}\,\mathrm{kg}$.
- A metre is $100\,\mathrm{cm}$, so a cube with a side of one metre contains $100\cdot100\cdot100=10^{6}$ small cubes with a side of one centimetre. Therefore $1\,\mathrm{cm^3}$ is one millionth of a cubic metre, which is written $10^{-6}\,\mathrm{m^3}$.

In the ratio of $1\,\mathrm{g}$ to $1\,\mathrm{cm}^3$, the numerator becomes $10^{-3}\,\mathrm{kg}$ and the denominator becomes $10^{-6}\,\mathrm{m}^3$. The ratio of the factors is $\dfrac{10^{-3}}{10^{-6}}=10^3$, because dividing one thousandth by one millionth is the same as calculating $\dfrac{1\,000\,000}{1000}=1000$. This same factor converts any numerical value expressed in grams per cubic centimetre.
:::
::::

:::esempio{titolo="Which factors cancel"}
A liquid with mass $600\,\mathrm{g}$ occupies $0.80\,\mathrm{L}$.

- **In $\mathrm{kg/L}$.** It is sufficient to convert the mass: $600\,\mathrm{g}=0.600\,\mathrm{kg}$. The ratio is $\dfrac{0.600\,\mathrm{kg}}{0.80\,\mathrm{L}}=0.75\,\mathrm{kg/L}$.
- **In $\mathrm{kg/m^3}$.** A litre is $1000\,\mathrm{cm^3}$ and each cubic centimetre is $10^{-6}\,\mathrm{m^3}$, so $1\,\mathrm{L}=10^{-3}\,\mathrm{m}^3$ and a cubic metre contains a thousand litres. A cubic metre of liquid therefore has a thousand times the mass of a litre, and the density is $0.75\cdot1000=750\,\mathrm{kg/m^3}$.
- **In $\mathrm{g/cm^3}$.** The volume is $0.80\,\mathrm{L}=800\,\mathrm{cm^3}$, so the density is $\dfrac{600\,\mathrm{g}}{800\,\mathrm{cm^3}}=0.75\,\mathrm{g/cm^3}$.

The value in $\mathrm{g/cm^3}$ equals the value in $\mathrm{kg/L}$, because going from $\mathrm{kg/L}$ to $\mathrm{g/cm^3}$ multiplies both the numerator and the denominator by a thousand. In the graph, point $P$ represents this liquid, with $0.75$ on the horizontal axis and $750$ on the vertical axis.
:::

::grafico{f="1000*x" xmin=0 xmax=3 ymin=0 ymax=3000 punti="0.75,750,pieno,P" nomi="ρ (g/cm³),ρ (kg/m³)" legenda="\rho_{\mathrm{kg/m^3}}=1000\rho_{\mathrm{g/cm^3}}" titolo="For the same density, the value in kg/m³ is a thousand times the value in g/cm³"}

## Measuring an irregular volume

:::osservazione{#spostamento titolo="Submersion and tare"}
A **graduated cylinder** is a tall, narrow container with a scale of marks that shows the volume of the liquid inside. It measures the volume of an irregularly shaped solid, such as a stone. The volume of the liquid is read before the solid is submerged, $V_i$ (initial reading), and afterwards, $V_f$ (final reading). The solid takes the place of part of the liquid, so the level rises. The volume of the solid is
$$
V=V_f-V_i.
$$
Both readings include the original liquid, which cancels in the difference. The formula holds if these conditions are satisfied:

- the solid is fully submerged;
- the solid is not **porous**, that is, it has no small holes that the liquid enters, and it does not absorb liquid;
- no air bubbles remain on the solid;
- no liquid leaves the cylinder.

If the level rises from $28$ to $40\,\mathrm{mL}$, the volume of the solid is $40-28=12\,\mathrm{mL}$, that is, $12\,\mathrm{cm}^3$, because $1\,\mathrm{mL}=1\,\mathrm{cm}^3$. For a mass of $36\,\mathrm{g}$, the density is $\dfrac{36}{12}=3\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=7 linee="0,6 0,0 2,0 2,6;5,6 5,0 7,0 7,6" poligoni="0,0 2,0 2,2.8 0,2.8;5,0 7,0 7,4 5,4;5.4,0.8 6.6,0.8 6.6,2.8 5.4,2.8" etichette="1,3.12,28 mL;6,4.35,40 mL" titolo="Before and after submersion: the solid displaces 12 mL of liquid"}

:::attenzione{#condizioni-immersione titolo="What the displaced volume includes"}
The difference $V_f-V_i$ measures everything that entered the liquid between the two readings.

- A partly submerged body displaces the volume of its part below the surface.
- An air bubble attached to the body displaces liquid along with the body and makes the volume appear larger. With a bubble of $1\,\mathrm{mL}$, a solid of $12\,\mathrm{cm^3}$ gives a difference of $13\,\mathrm{mL}$.
- A loss of liquid changes the final reading in the opposite direction, because it lowers the final level.
- If a support holding the body also enters the liquid, its contribution is included in the reference reading or subtracted separately.

The setup is therefore checked before the difference is applied, that is, how the body, the liquid and any support are arranged.
:::

:::esempio{#tara titolo="Finding liquid mass by subtraction"}
A dry, empty container placed on the scale gives a reading of $38\,\mathrm{g}$. After $18\,\mathrm{cm}^3$ of liquid has been poured in, the reading is $74\,\mathrm{g}$. This second reading is the sum of the mass of the container and the mass of the liquid.

The **tare** is the mass of the empty container, here $38\,\mathrm{g}$. Subtracting the tare gives the mass of the liquid alone, $74-38=36\,\mathrm{g}$. The mass and the volume now refer to the same amount of liquid, and the density is $\dfrac{36}{18}=2\,\mathrm{g/cm^3}$. Using the total mass would give $\dfrac{74}{18}\simeq4.1\,\mathrm{g/cm^3}$. This value is higher than the liquid's density because it includes the container's mass.
:::

:::esempio{#tara-del-sostegno titolo="Measuring with a submerged holder"}
An irregular object of mass $42\,\mathrm{g}$ has to be kept fully submerged without touching the bottom of the cylinder. For this reason it is fixed to a rigid support, also called a holder, which enters the liquid as well. The readings are as follows.

| Setup | Reading (mL) |
| --- | ---: |
| Liquid alone | 22 |
| Liquid and holder | 24 |
| Liquid, holder and object | 39 |

Between the second and the third reading only the object entered the liquid, so the second row is the reference used to isolate the object's volume. Subtracting $24\,\mathrm{mL}$ from $39\,\mathrm{mL}$ gives $15\,\mathrm{mL}$, that is, $15\,\mathrm{cm^3}$. Thus $\rho=\dfrac{42}{15}\,\mathrm{g/cm^3}=2.8\,\mathrm{g/cm^3}$.

The first row is used to check the result. Between the first and the third reading the total rise is $39-22=17\,\mathrm{mL}$. Of these, $24-22=2\,\mathrm{mL}$ come from the holder and the remaining $17-2=15\,\mathrm{mL}$ from the object, as already found.

If all $17\,\mathrm{mL}$ were used, the denominator would be greater than the object's volume. The result would be $\dfrac{42}{17}\simeq2.5\,\mathrm{g/cm^3}$, a density that is too low. The correction requires the holder to be submerged in the same way in the last two readings, so that it displaces the same amount of liquid.
:::

## Regular solids and sheets

:::osservazione{#geometria titolo="Find the volume before the mass"}
For a regularly shaped solid, the volume is obtained from the lengths of its sides, without submersion. A **rectangular box** (a cuboid) is a solid with six rectangular faces, like a box or a brick. Its volume is the product of the base area $A$ and the height $h$, that is, $V=Ah$. A **sheet** is a very thin rectangular box, and its height is called its **thickness**.

The units must be consistent, that is, based on the same unit of length. A sheet has area $120\,\mathrm{cm}^2$ and thickness $2\,\mathrm{mm}$. A centimetre is ten millimetres ($\mathrm{mm}$), so the thickness is $\dfrac{2}{10}\,\mathrm{cm}=0.2\,\mathrm{cm}$. The volume is $V=120\cdot0.2=24\,\mathrm{cm^3}$. If the density is $2.5\,\mathrm{g/cm^3}$, the mass is $m=\rho V=2.5\cdot24=60\,\mathrm{g}$. The volume is calculated first because it appears in the formula for the mass.
:::

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=7 ymin=-0.5 ymax=4.5 poligoni="0.5,1 5,1 6.3,2.3 1.8,2.3;0.5,1 0.5,0.65 5,0.65 5,1;5,1 5,0.65 6.3,1.95 6.3,2.3" etichette="3.4,1.72,A = 120 cm²;3.0,0.23,h = 2 mm" titolo="Base area and thickness determine the sheet's volume. Diagram not to scale"}

:::esempio{#lastra-forata titolo="Subtracting the volume of a cutout"}
A rectangular sheet has sides of $15\,\mathrm{cm}$ and $10\,\mathrm{cm}$ and a thickness of $4\,\mathrm{mm}$. A square hole of side $5\,\mathrm{cm}$ is cut through its whole thickness.

The area of the rectangle is $15\cdot10=150\,\mathrm{cm^2}$ and the area of the hole is $5\cdot5=25\,\mathrm{cm^2}$. The area of the remaining material is $150-25=125\,\mathrm{cm^2}$.

The thickness is $4\,\mathrm{mm}=0.4\,\mathrm{cm}$ and is uniform, that is, the same at every point of the sheet. The remaining area is therefore multiplied by the thickness, which gives $V=125\cdot0.4=50\,\mathrm{cm^3}$.

::grafico{assi=0 uguale=1 xmin=-2 xmax=18 ymin=-2 ymax=12 linee="0,0 15,0 15,10 0,10 0,0;5,2.5 10,2.5 10,7.5 5,7.5 5,2.5" segmenti="0,-0.8,15,-0.8;15.8,0,15.8,10" etichette="7.5,-1.35,15 cm;17,5,10 cm;7.5,5,5 cm" titolo="Top view of the sheet. Subtract the area of the inner square from the area of the rectangle."}

With $\rho=2.7\,\mathrm{g/cm^3}$, the remaining mass is $2.7\cdot50=135\,\mathrm{g}$.

A check treats the removed piece and the intact sheet separately. The intact sheet had volume $150\cdot0.4=60\,\mathrm{cm^3}$ and mass $2.7\cdot60=162\,\mathrm{g}$. The hole has volume $25\cdot0.4=10\,\mathrm{cm^3}$, so $2.7\cdot10=27\,\mathrm{g}$ was removed. The difference $162-27=135\,\mathrm{g}$ yields the measurable mass of the sheet with the hole.
:::

:::esempio{#due-misure-volume titolo="Comparing two measurements of the same volume"}
The volume of one rectangular block is measured in two ways.

**From the side lengths.** The sides measure $120$, $20$ and $5\,\mathrm{mm}$, so the geometrical volume is $120\cdot20\cdot5=12\,000\,\mathrm{mm^3}$. A cubic centimetre is a cube with a side of $10\,\mathrm{mm}$ and contains $10\cdot10\cdot10=1000\,\mathrm{mm^3}$. Therefore $12\,000\,\mathrm{mm^3}=12\,\mathrm{cm^3}$.

**By submersion.** A graduated cylinder shows $28.0\,\mathrm{mL}$ before and $39.5\,\mathrm{mL}$ after full submersion. The difference is $39.5-28.0=11.5\,\mathrm{mL}$, that is, $11.5\,\mathrm{cm^3}$. This is the central value of the measurement.

Deciding whether the two values agree requires the **uncertainty** of the readings. The absolute uncertainty of a reading is the greatest distance between the value read and the true value. Suppose each reading has an absolute uncertainty of $0.5\,\mathrm{mL}$. The initial reading then lies between $27.5$ and $28.5\,\mathrm{mL}$, and the final one between $39.0$ and $40.0\,\mathrm{mL}$.

The minimum volume is obtained by subtracting the largest initial reading from the smallest final reading. The maximum uses the opposite endpoints.
$$
V_{\min}=(39.0-28.5)\,\mathrm{cm^3}=10.5\,\mathrm{cm^3},
\qquad
V_{\max}=(40.0-27.5)\,\mathrm{cm^3}=12.5\,\mathrm{cm^3}.
$$
The set of values lying between two endpoints is called an **interval**. Two measurements are said to be **consistent** when their difference is explained by the uncertainties. The geometrical value of $12\,\mathrm{cm^3}$ lies in the interval, so the two measurements agree within the precision of the graduated cylinder.

If the solid has mass $32.4\,\mathrm{g}$, its density calculated using the geometrical volume is $\dfrac{32.4}{12}=2.7\,\mathrm{g/cm^3}$. The precision of the density depends on the precision of the mass and on that of the volume, so the result is reported together with the volume measurement that was used.
:::

## Hollow objects and mean density

:::definizione{#cavita titolo="External volume and material volume"}
A **hollow** object has an empty space inside it, the **cavity**, like a table-tennis ball. The material enclosing the cavity forms the **wall**. The **external volume** $V_e$ is the space occupied by the object as seen from outside. It includes the wall volume $V_m$ and the cavity volume $V_c$, so $V_e=V_m+V_c$ and $V_m=V_e-V_c$.

The cavity usually contains air, whose mass is very small compared with the wall's. A quantity is **negligible** when it is so small that it is set equal to zero in the calculations. If the mass of the air is negligible, the mass of the object is that of the wall, $m=\rho_m V_m$, where $\rho_m$ is the density of the material. The mean density based on external volume is instead $\dfrac{m}{V_e}$. It is smaller than $\rho_m$, because the external volume also includes the cavity.

For $V_e=50\,\mathrm{cm}^3$, $V_c=30\,\mathrm{cm}^3$ and $\rho_m=4\,\mathrm{g/cm^3}$, the wall has volume $V_m=50-30=20\,\mathrm{cm^3}$. The mass is $m=4\cdot20=80\,\mathrm{g}$ and the mean density is $\dfrac{80}{50}=1.6\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=6 poligoni="0,0 7,0 7,5 0,5" linee="1.5,1.1 5.5,1.1 5.5,3.9 1.5,3.9 1.5,1.1" etichette="3.5,2.5,cavity;0.7,4.5,wall" titolo="External volume includes both the cavity and the wall"}

:::esempio{titolo="From mass to the empty fraction"}
An $80\,\mathrm{g}$ shell is made of material with density $4\,\mathrm{g/cm^3}$ and has external volume $50\,\mathrm{cm}^3$.

- The wall occupies $V_m=\dfrac{m}{\rho_m}=\dfrac{80}{4}=20\,\mathrm{cm}^3$.
- The cavity is $V_c=50-20=30\,\mathrm{cm}^3$.
- The empty fraction is the ratio of the cavity volume to the external volume: $\dfrac{30}{50}=0.60$. The cavity therefore occupies $60\%$ of the external volume.

The calculation assumes that the mass inside the cavity is negligible. If the cavity contained a liquid, the scale would also measure the liquid's mass. That mass is considered separately and removed from the total before dividing by $\rho_m$.
:::

:::esempio{#cavita-riempita titolo="Finding the internal volume from the added mass"}
A rigid container has external volume $50\,\mathrm{cm^3}$ and empty mass $90\,\mathrm{g}$. The entire cavity is filled with a liquid of density $1.25\,\mathrm{g/cm^3}$ and the scale reads $130\,\mathrm{g}$. The mass of the air that the liquid has replaced is assumed to be negligible.

The shell, that is, the container wall, is the same in both weighings. The difference between the two readings, $130-90=40\,\mathrm{g}$, is therefore the mass of the liquid. The volume of the liquid is $\dfrac{m}{\rho}=\dfrac{40}{1.25}=32\,\mathrm{cm^3}$. The liquid fills the whole cavity, so this volume equals the volume of the cavity.

::grafico{f="90+1.25*x" xmin=0 xmax=32 ymin=85 ymax=135 punti="0,90,pieno;32,130,pieno" nomi="V (cm³),m (g)" titolo="Mass rises to 130 g as the container fills. The slope is the density of the liquid."}

The graph shows the scale reading as the liquid is poured in. Each cubic centimetre of liquid adds $1.25\,\mathrm{g}$. This increase in mass for each cubic centimetre is the **slope** of the line.

The material in the wall occupies $50-32=18\,\mathrm{cm^3}$. The density of the material is therefore $\dfrac{90}{18}=5\,\mathrm{g/cm^3}$. This ratio contains the mass and the volume of the wall alone. The ratio $\dfrac{130}{50}=2.6\,\mathrm{g/cm^3}$ is instead the mean density of the filled container, based on its external volume.
:::

## Comparing samples

:::teorema{#confronti titolo="Equal volume, equal mass, or the same material"}
- **Equal volume.** By $m=\rho V$, the greater mass corresponds to the greater density.
- **Equal mass.** By $V=\dfrac{m}{\rho}$, the greater density corresponds to the smaller volume. With $60\,\mathrm{g}$ each, a material of $2\,\mathrm{g/cm^3}$ occupies $30\,\mathrm{cm^3}$ and one of $3\,\mathrm{g/cm^3}$ occupies $20\,\mathrm{cm^3}$.
- **Different masses and volumes.** The two ratios are calculated and compared. A sample of $90\,\mathrm{g}$ and $30\,\mathrm{cm}^3$ has density $\dfrac{90}{30}=3\,\mathrm{g/cm^3}$. A second sample of $120\,\mathrm{g}$ and $60\,\mathrm{cm}^3$ has density $\dfrac{120}{60}=2\,\mathrm{g/cm^3}$. The second has more mass because it occupies twice the volume.
- **The same material.** Two samples of the same homogeneous material have the same density even if their masses and volumes are different.
:::

:::osservazione{#intervallo-densita titolo="Uncertainties can change the comparison"}
A sample has mass between $117$ and $119\,\mathrm{g}$ and volume between $39$ and $41\,\mathrm{cm^3}$. A fraction is smaller when the numerator is small and the denominator is large. With no further information, the lowest ratio therefore comes from the smallest mass and the largest volume. The highest comes from the other two extremes.

$$
\frac{117}{41}\,\mathrm{g/cm^3}\leq\rho\leq\frac{119}{39}\,\mathrm{g/cm^3}.
$$

The symbol $\leq$ is read "less than or equal to". Carrying out the divisions gives $\dfrac{117}{41}\simeq2.85$ and $\dfrac{119}{39}\simeq3.05$, so the interval runs from about $2.85$ to $3.05\,\mathrm{g/cm^3}$.

The central value, calculated with the central mass $118\,\mathrm{g}$ and the central volume $40\,\mathrm{cm^3}$, is $\dfrac{118}{40}=2.95\,\mathrm{g/cm^3}$ and is below $3$. A density of $3\,\mathrm{g/cm^3}$ nevertheless lies in the interval, so it is still consistent with the measurements. A volume of $39.5\,\mathrm{cm^3}$ and a mass of $118.5\,\mathrm{g}$, both allowed, give exactly that value, because $\dfrac{118.5}{39.5}=3$. To distinguish two materials with similar densities, mass or volume must be measured with a smaller uncertainty.

::grafico{f="117000/x;119000/x" xmin=39 xmax=41 ymin=2800 ymax=3090 punti="40,2950,pieno;39.5,3000,pieno" nomi="V (cm³),ρ (kg/m³)" legenda="m=117\,\mathrm{g};m=119\,\mathrm{g}" titolo="For each possible volume, the curves bound the densities consistent with the measured masses."}

In the graph the density is in $\mathrm{kg/m^3}$, the unit in which $2.95\,\mathrm{g/cm^3}$ becomes $2950\,\mathrm{kg/m^3}$. The two marked points are the central value and the case that gives $3000\,\mathrm{kg/m^3}$.
:::

## Mixtures

:::osservazione{#miscele titolo="Adding masses and the assumption about volumes"}
A **mixture** is obtained by combining two or more materials, which are called **components**. When nothing is lost, the mass of the mixture is the sum of the components' masses. The volumes are said to be **additive** if the final volume is the sum of the starting volumes. Additivity is an assumption and is not always satisfied. Water and alcohol, for example, once mixed occupy slightly less than the sum of their volumes.

Two components with densities $\rho_1$ and $\rho_2$ and volumes $V_1$ and $V_2$ have masses $\rho_1V_1$ and $\rho_2V_2$. With additive volumes, the density of the mixture is the total mass divided by the total volume. It is denoted by the subscript $\mathrm{mix}$:
$$
\rho_{\mathrm{mix}}=\frac{\rho_1V_1+\rho_2V_2}{V_1+V_2}.
$$
For $10\,\mathrm{cm^3}$ of a liquid of $1\,\mathrm{g/cm^3}$ and $30\,\mathrm{cm^3}$ of a liquid of $3\,\mathrm{g/cm^3}$ this gives $\dfrac{1\cdot10+3\cdot30}{10+30}=\dfrac{100}{40}=2.5\,\mathrm{g/cm^3}$.

Each density is multiplied by its component's volume, which acts as a *weight*. A mean calculated in this way is called a **weighted mean**. The **arithmetic mean** of two numbers is instead half their sum. Equal volumes give the arithmetic mean of the two densities. With different volumes, the final density is closer to that of the component with the greater volume. In the example the result $2.5$ is closer to $3$ than to $1$, while the arithmetic mean is $\dfrac{1+3}{2}=2$.
:::

:::esempio{#volume-finale titolo="When the final volume is measured"}
A volume of $40\,\mathrm{cm}^3$ of a liquid with density $1\,\mathrm{g/cm^3}$ is mixed with $30\,\mathrm{cm}^3$ of a second liquid with density $2\,\mathrm{g/cm^3}$. The masses are $1\cdot40=40\,\mathrm{g}$ and $2\cdot30=60\,\mathrm{g}$. If mass is conserved, the total is $40+60=100\,\mathrm{g}$.

After mixing, the measured volume is $65\,\mathrm{cm}^3$, less than the sum $40+30=70\,\mathrm{cm^3}$. In this case the volumes are not additive. The density is $\dfrac{100}{65}\,\mathrm{g/cm^3}$, that is, about $1.54\,\mathrm{g/cm^3}$. The measured final volume is used, since it is the volume that the mixture occupies. The value $40+30$ would give $\dfrac{100}{70}\simeq1.43\,\mathrm{g/cm^3}$ and would assume additivity, which is not satisfied here.
:::

:::esempio{#masse-uguali titolo="A mixture of equal masses"}
Two components of $120\,\mathrm{g}$ each have densities of $2$ and $6\,\mathrm{g/cm^3}$. Their initial volumes are found with $V=\dfrac{m}{\rho}$ and are $\dfrac{120}{2}=60\,\mathrm{cm^3}$ and $\dfrac{120}{6}=20\,\mathrm{cm^3}$. If the total volume is their sum, then $V=60+20=80\,\mathrm{cm^3}$. The total mass is $120+120=240\,\mathrm{g}$, so $\rho_{\mathrm{mix}}=\dfrac{240}{80}=3\,\mathrm{g/cm^3}$. The less dense component occupies $\dfrac{60}{80}=\dfrac34$ of the volume while contributing half of the mass.

The arithmetic mean of the densities, $\dfrac{2+6}{2}=4\,\mathrm{g/cm^3}$, would be obtained if the two volumes were equal. To check this, let $f$ be the **volume fraction** of the denser component, that is, its volume divided by the total volume. The less dense component occupies the remaining fraction, $1-f$. One cubic centimetre of mixture contains $f\,\mathrm{cm^3}$ of the denser component, with mass $6f$ grams, and $(1-f)\,\mathrm{cm^3}$ of the other, with mass $2(1-f)$ grams. Therefore
$$
\rho_{\mathrm{mix}}=2(1-f)+6f=2+4f
\qquad\text{in }\mathrm{g/cm^3}.
$$
Here $f=\dfrac{20}{80}=\dfrac14$ and the formula gives $2+4\cdot\dfrac14=3$. Reaching $4\,\mathrm{g/cm^3}$ requires $2+4f=4$, that is, $4f=2$ and $f=\dfrac12$.

::grafico{f="2+0.04*x" xmin=0 xmax=100 ymin=1.5 ymax=6.5 punti="25,3,pieno,A;50,4,pieno,B" nomi="Volume fraction (%),ρ (g/cm³)" titolo="A denotes equal masses. At B the denser component occupies half the volume."}

In the graph the horizontal axis shows the volume share of the denser component, that is, the fraction $f$ written as a percentage. The graph gives the density of a composition, or the composition that gives a specified density.
:::

## Mass-volume graph

:::osservazione{#grafico titolo="Density as slope"}
Several portions of the same homogeneous material are measured and each is plotted as a point on a graph. The volume goes on the horizontal axis, called the axis of **abscissas** (x-axis), and the mass on the vertical axis, called the axis of **ordinates** (y-axis). The law $m=\rho V$ describes a straight line through the **origin**, the point where the two axes meet, because zero volume corresponds to zero mass.

The **slope** of a line is how much it rises for each unit moved horizontally. Given two points of the line, the slope is $\dfrac{\Delta m}{\Delta V}$. The Greek letter $\Delta$ (delta) denotes the difference between two values of the same quantity. A material of $2\,\mathrm{g/cm^3}$ has mass $2\,\mathrm{g}$ for $1\,\mathrm{cm^3}$ and $8\,\mathrm{g}$ for $4\,\mathrm{cm^3}$, so
$$
\frac{\Delta m}{\Delta V}=\frac{8-2}{4-1}=\frac{6}{3}=2.
$$
The slope is equal to the density. With mass in grams and volume in cubic centimetres it has units of $\mathrm{g/cm^3}$.

A steeper line represents more mass for the same volume, that is, a greater density. In the figure, at a volume of $4\,\mathrm{cm^3}$, point $A$ has mass $8\,\mathrm{g}$ and point $B$ has mass $12\,\mathrm{g}$.

Reversing the axes reverses the ratio. With mass on the horizontal axis and volume on the vertical axis the slope is $\dfrac{\Delta V}{\Delta m}$, which equals $\dfrac{1}{\rho}$ and is measured in $\mathrm{cm^3/g}$.
:::

::grafico{f="2*x;3*x" xmin=0 xmax=5 ymin=0 ymax=16 nomi="V (cm³),m (g)" legenda="ρ = 2 g/cm³;ρ = 3 g/cm³" punti="4,8,pieno,A;4,12,pieno,B" titolo="At equal volumes the steeper line gives the greater mass"}

:::esempio{#intercetta titolo="Separating tare from slope"}
A container is weighed several times with different volumes of the same liquid inside. The scale gives the total mass, container plus liquid. Two measurements give the pairs $(10;70)$ and $(30;110)$, where the first number is the volume in cubic centimetres and the second the total mass in grams.

Between the two measurements only the amount of liquid changes. The slope is $\dfrac{110-70}{30-10}=\dfrac{40}{20}=2\,\mathrm{g/cm^3}$ and is the density of the liquid.

In the first measurement the $10\,\mathrm{cm^3}$ of liquid have mass $2\cdot10=20\,\mathrm{g}$, so the mass at zero volume is $70-2\cdot10=50\,\mathrm{g}$, the tare. On the graph it is the ordinate of the point where the line meets the vertical axis, which is called the **intercept**. The line has equation $m=50+2V$ and does not pass through the origin.

Dividing the total mass by the volume of a single measurement would include the tare. The first measurement would give $\dfrac{70}{10}=7\,\mathrm{g/cm^3}$, a value that overestimates the liquid's density.
:::

:::esempio{#grafici-con-tara titolo="Two containers with the same reading"}
Two different liquids are poured into containers $A$ and $B$. The measured lines are
$$
m_A=42+1.2V,
\qquad
m_B=18+2.4V,
$$
with volume in cubic centimetres and total mass in grams. In each formula the first number is the tare, that is, the mass at zero volume, and the number multiplying $V$ is the density of the liquid.

Empty, container $A$ has the greater mass, with a tare of $42\,\mathrm{g}$. The liquid in $B$ is denser because its mass increases by $2.4\,\mathrm{g}$ per cubic centimetre, twice as much as the other liquid.

To find the volume at which the scale gives the same reading, the two ordinates, that is, the two total masses, are set equal:
$$
\begin{aligned}
42+1.2V&=18+2.4V\\[6pt]
42-18&=2.4V-1.2V\\[6pt]
24&=1.2V\\[6pt]
V&=\frac{24}{1.2}=20.
\end{aligned}
$$
The required volume is $V=20\,\mathrm{cm^3}$. The common reading is $42+1.2\cdot20=66\,\mathrm{g}$.

The liquid has mass $1.2\cdot20=24\,\mathrm{g}$ in $A$ and $2.4\cdot20=48\,\mathrm{g}$ in $B$. The readings agree because the extra $24\,\mathrm{g}$ of liquid in $B$ equal the difference between the tares, $42-18=24\,\mathrm{g}$.

::grafico{f="42+1.2*x;18+2.4*x" xmin=0 xmax=35 ymin=0 ymax=110 punti="20,66,pieno,E" nomi="V (cm³),m (g)" legenda="\mathrm{A};\mathrm{B}" titolo="Intersection E indicates equal total mass, with different tare masses and densities."}

For volumes smaller than $20\,\mathrm{cm^3}$ the line of $A$ is higher, and for larger volumes the line of $B$ is higher.
:::

:::attenzione{#controllo-terza-misura titolo="Testing the slope with another reading"}
A container reads $52\,\mathrm{g}$ when empty and $72\,\mathrm{g}$ after $10\,\mathrm{cm^3}$ of a liquid has been added. These two readings give the tare, $52\,\mathrm{g}$, and the slope $\dfrac{72-52}{10}=2\,\mathrm{g/cm^3}$. The line $m=52+2V$ is the **model**, that is, the rule used to predict the other readings. If the same model holds up to $30\,\mathrm{cm^3}$, the predicted total mass is $52+2\cdot30=112\,\mathrm{g}$.

A third reading, taken with $30\,\mathrm{cm^3}$ of liquid, gives $116\,\mathrm{g}$ and is $116-112=4\,\mathrm{g}$ above the prediction. If the data are exact, the three points do not lie on a single straight line. The increase from the second to the third reading is indeed $116-72=44\,\mathrm{g}$ over $30-10=20\,\mathrm{cm^3}$, that is, $\dfrac{44}{20}=2.2\,\mathrm{g/cm^3}$, different from $2\,\mathrm{g/cm^3}$.

The comparison shows that the model or the measurements need checking. This discrepancy alone does not tell whether the liquid changed, the scale was affected, or the volume reading was inaccurate.
:::
