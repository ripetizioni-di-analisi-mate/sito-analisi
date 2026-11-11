---
titolo: "Spinta di Archimede e galleggiamento"
sommario: "Volume immerso, peso apparente, densità, carichi sostenibili e corpi vincolati."
---

:::percorso
La pressione nei liquidi aumenta con la profondità.
La differenza delle forze di pressione genera una risultante verso l'alto.
Si combinano questa spinta e il peso per studiare immersione, letture dei dinamometri e galleggiamento.
:::

## Il principio di Archimede

::::teorema{#archimede titolo="Peso del fluido spostato"}
Un corpo immerso in un fluido in equilibrio riceve una spinta verso l'alto pari al peso del fluido spostato:
$$
F_A=\rho_f gV_i.
$$
$\rho_f$ è la densità del fluido e $V_i$ il volume immerso che sposta effettivamente il fluido. Per 2 L immersi in acqua a 1000 kg/m³, usando g=10 N/kg, la spinta è 20 N.

:::dimostrazione
Si immagina di sostituire la parte immersa del corpo con lo stesso volume di fluido circostante. Quel fluido sarebbe in equilibrio: la risultante delle pressioni sulle sue superfici equilibra il suo peso. Le pressioni dipendono dalla posizione delle superfici e restano le stesse quando al posto del fluido c'è il corpo. La loro risultante è quindi il peso di quel volume di fluido, diretto verso l'alto.
:::
::::

## Volume immerso e problemi inversi

:::osservazione{#inverse titolo="Identificare il volume che sposta fluido"}
Per trovare il volume immerso si usa $V_i=F_A/(\rho_f g)$; per trovare la densità del fluido, $\rho_f=F_A/(gV_i)$.
Se un corpo è completamente immerso, impermeabile e non poroso, il volume immerso coincide con il volume esterno. Con immersione parziale coincide solo con la parte sotto la superficie. Il volume della cavità di un oggetto aperto e pieno dello stesso liquido non va automaticamente contato come fluido spostato.
:::

## Peso apparente

:::teorema{#apparente titolo="La tensione del dinamometro"}
Un corpo appeso fermo a un dinamometro e immerso nel liquido soddisfa $T+F_A=P$, se il dinamometro tira verso l'alto. La lettura è
$$
T=P-F_A.
$$
Per peso 30 N e spinta 10 N si leggono 20 N. Il peso gravitazionale non è diminuito; il liquido contribuisce a sostenerlo. Trascurando la spinta dell'aria, la differenza fra lettura in aria e lettura nel liquido è la spinta.
:::

## Galleggiamento libero

:::teorema{#galleggiamento titolo="Spinta uguale al peso"}
Un corpo che galleggia fermo senza appoggi o altri vincoli soddisfa $F_A=P$. Per un corpo omogeneo di densità minore di quella del liquido, l'equilibrio si raggiunge con immersione parziale.
Se la densità del corpo supera quella del liquido, a completa immersione il peso supera la spinta. Con densità uguali, nel modello ideale il corpo può restare completamente immerso senza una preferenza di quota. Tensione superficiale, bolle e comprimibilità sono esclusi nei problemi di questo modulo.
:::

## Frazione immersa

:::teorema{#frazione titolo="Rapporto tra densità"}
Per un corpo omogeneo che galleggia, uguagliando peso e spinta si ottiene
$$
\rho_c Vg=\rho_f V_i g
\quad\Longrightarrow\quad
\frac{V_i}{V}=\frac{\rho_c}{\rho_f}.
$$
Un corpo di densità 600 kg/m³ in acqua di densità 1000 kg/m³ ha il 60% del volume immerso e il 40% emerso. La frazione si riferisce al volume; coincide con una frazione dell'altezza soltanto per una forma con sezione orizzontale costante.
:::

## Carichi sui galleggianti

:::teorema{#carichi titolo="Massa totale e volume disponibile"}
Una massa aggiunta a una piattaforma galleggiante richiede un volume immerso aggiuntivo $\Delta V=\Delta m/\rho_f$. Questo vale finché è possibile il galleggiamento libero e il carico non entra a sua volta in acqua.
Per un galleggiante rigido e stagno, alla completa immersione il massimo peso sostenibile è $\rho_f gV_{\max}$. La capacità di carico espressa in massa è $m_{\mathrm{carico,max}}=\rho_fV_{\max}-m_{\mathrm{galleggiante}}$. Dalla capacità totale va sottratta la massa propria del galleggiante.
:::

## Corpi vincolati

:::osservazione{#vincoli titolo="La corda può tirare verso l'alto o verso il basso"}
Se un corpo tende ad affondare, una corda fissata sopra può sostenere la parte di peso non equilibrata dalla spinta. Se tende a salire, una corda fissata al fondo deve invece tirare verso il basso.
Nel secondo caso $P+T=F_A$, quindi $T=F_A-P$. Per spinta 15 N e peso 9 N occorre una tensione di 6 N verso il basso. Un risultato con segno incompatibile con il verso assunto segnala che quella disposizione della corda non può sostenere l'equilibrio.
:::

## Confronti fra situazioni

:::osservazione{#confronti titolo="Quali fattori cambiano"}
Su un corpo rigido completamente immerso in un liquido a densità costante, lontano dal fondo, la spinta non cambia con la profondità: $\rho_f$, g e $V_i$ restano gli stessi. Due corpi impermeabili con uguale volume immerso nello stesso fluido ricevono la stessa spinta, anche se hanno masse e forme diverse.
Una barca che galleggia in un liquido più denso, a massa invariata, riceve ancora una spinta uguale al proprio peso. Cambia il volume immerso richiesto, che diminuisce. La distinzione fra corpo completamente immerso e corpo libero di galleggiare determina quale grandezza resta fissata.
:::
