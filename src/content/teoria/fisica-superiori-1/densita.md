---
titolo: "Massa, volume e densità"
sommario: "Densità dei materiali, misure per immersione, corpi cavi e miscele."
---

:::percorso
Si parte dalle misure di massa e volume e dalle conversioni fra unità.
Qui si distingue la quantità di materiale dalla sua concentrazione in un certo volume.
La densità servirà per la pressione idrostatica e per spiegare il galleggiamento.
:::

## Densità di un materiale

:::definizione{#definizione titolo="Massa per unità di volume"}
Per un campione omogeneo la **densità** è
$$
\rho=\frac mV.
$$
Il simbolo $\rho$ si legge rho; m è la massa e V il volume. Un campione di 60 g che occupa 20 cm³ ha densità 3 g/cm³: ogni centimetro cubo contiene 3 g di materiale.
La densità dipende dalle condizioni del materiale, per esempio dalla temperatura. Nei problemi di questo capitolo tali condizioni sono mantenute fisse.
:::

## Problemi inversi

:::teorema{#inverse titolo="Ricavare massa o volume"}
Dalla definizione si ottengono $m=\rho V$ e $V=m/\rho$, con densità positiva. Un volume di 8 cm³ di materiale con densità 2 g/cm³ ha massa 16 g. Se lo stesso materiale ha massa 30 g, occupa 15 cm³.
Le formule descrivono la stessa relazione e si scelgono secondo l'incognita. Il risultato deve mantenere unità coerenti: densità in g/cm³ e volume in cm³ producono grammi.
:::

## Unità della densità

:::osservazione{#unita titolo="Chilogrammi al metro cubo e grammi al centimetro cubo"}
Nel SI la densità si esprime in $\mathrm{kg/m^3}$. Poiché $1\,\mathrm g=10^{-3}\,\mathrm{kg}$ e $1\,\mathrm{cm}^3=10^{-6}\,\mathrm m^3$, vale
$$
1\,\mathrm{g/cm^3}=1000\,\mathrm{kg/m^3}=1\,\mathrm{kg/L}.
$$
Quindi 0,8 g/cm³ corrisponde a 800 kg/m³. Si convertono sia numeratore sia denominatore; cambiare solo la massa darebbe un altro valore.
:::

## Misurare un volume irregolare

:::osservazione{#spostamento titolo="Immersione e tara"}
Un solido non poroso, completamente immerso e senza bolle aderenti, sposta un volume di liquido uguale al proprio. Se il cilindro graduato passa da 35 a 47 mL, il volume è 12 cm³.
Per trovare la massa del liquido in un recipiente si sottrae la **tara**, cioè la massa del recipiente vuoto. Da 70 g complessivi e 30 g di tara si ricavano 40 g di liquido. Il volume iniziale nel cilindro e la massa del contenitore vanno separati dai dati del campione.
:::

## Solidi regolari e lastre

:::osservazione{#geometria titolo="Il volume prima della massa"}
Per un parallelepipedo $V=abc$; per un cubo $V=l^3$; per una lastra di area A e spessore h, $V=Ah$. Un cubo di lato 2 cm ha volume 8 cm³, quindi con densità 3 g/cm³ ha massa 24 g.
Uno spessore in millimetri va convertito se l'area è in centimetri quadrati. Una lastra di 20 cm² spessa 1 mm ha volume $20\cdot0{,}1=2\,\mathrm{cm}^3$.
:::

## Corpi cavi e densità media

:::definizione{#cavita titolo="Volume esterno e volume del materiale"}
In un oggetto cavo, il volume del materiale è il volume esterno meno quello della cavità. Trascurando la massa dell'aria, la massa è la densità del materiale per il volume effettivamente occupato dal materiale.
La **densità media** dell'oggetto usa invece massa totale divisa per volume esterno. Una struttura con 18 g di materiale in un volume esterno di 12 cm³ ha densità media 1,5 g/cm³, anche se la parete è fatta di un materiale più denso. Questa distinzione sarà usata nei galleggianti.
:::

## Confrontare campioni

:::teorema{#confronti titolo="Stesso volume, stessa massa o stesso materiale"}
A volume uguale, la massa è direttamente proporzionale alla densità. A massa uguale, il volume è inversamente proporzionale alla densità.
Se un campione omogeneo viene diviso in due parti, massa e volume di ogni parte diminuiscono nello stesso rapporto: la densità resta uguale. Non si decide quale oggetto sia più denso osservando soltanto quale pesa di più; occorrono anche i volumi.
:::

## Miscele

:::osservazione{#miscele titolo="Somma delle masse e ipotesi sui volumi"}
Quando non si perde materiale, la massa totale è $m_1+m_2$. Se il problema assume anche volumi additivi, allora
$$
\rho_{\mathrm{miscela}}=\frac{\rho_1V_1+\rho_2V_2}{V_1+V_2}.
$$
La media aritmetica delle densità vale solo per volumi uguali. Per 20 cm³ a densità 1 g/cm³ e 10 cm³ a densità 2 g/cm³, la massa totale è 40 g e il volume assunto è 30 cm³. La densità è quindi $\dfrac43\,\mathrm{g/cm^3}$. Nelle miscele reali i volumi possono non essere additivi: l'ipotesi va indicata.
:::

## Grafico massa-volume

:::osservazione{#grafico titolo="La densità come pendenza"}
Per uno stesso materiale omogeneo a condizioni fisse, $m=\rho V$. Il grafico massa-volume è una retta passante per l'origine e la pendenza è la densità.
Con due campioni si può usare $\rho=\Delta m/\Delta V$. Le unità della pendenza sono massa divisa per volume. Una retta più ripida indica maggiore densità solo se gli assi dei grafici usano le stesse scale.

::grafico{f="2*x;3*x" xmin=0 xmax=5 ymin=0 ymax=16 nomi="V,m" legenda="\rho=2\,\mathrm{g/cm^3};\rho=3\,\mathrm{g/cm^3}" titolo="Con volume in centimetri cubi e massa in grammi, le pendenze sono le densità in g/cm³"}
:::
