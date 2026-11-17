---
titolo: "Pressione nei fluidi in quiete"
sommario: "Pressione, legge di Stevino, pressa idraulica, vasi comunicanti e manometri."
---

## Definizione di pressione

:::definizione{#pressione titolo="Forza normale per unità di area"}
Se una forza normale di modulo $F_\perp$ è distribuita uniformemente su una superficie di area $A$, la **pressione** è $p=\dfrac{F_\perp}{A}$. Una forza inclinata contribuisce alla pressione con la sola componente perpendicolare. Dividendo una stessa forza su un'area doppia si ottiene metà pressione. Per questo fissare il carico totale e fissare la pressione descrivono due prove diverse.

In un fluido fermo la pressione in un punto è **scalare**. La forza che il fluido esercita su un piccolo elemento di parete è perpendicolare alla parete. Il suo orientamento dipende quindi dalla superficie considerata. Per una parete piana sulla quale la pressione è uniforme, il modulo totale è $pA$. Se la pressione varia sulla parete, $F_\perp/A$ rappresenta la pressione media.
:::

:::esempio{titolo="Stessa forza, due superfici"}
Con $60\,\mathrm N$ distribuiti su $0{,}02\,\mathrm m^2$ si ottengono $3000\,\mathrm{Pa}$. Distribuendo lo stesso carico su $0{,}04\,\mathrm m^2$ si ottengono $1500\,\mathrm{Pa}$. La forza resta sessanta newton. Per ritrovarla da ciascuna pressione si moltiplica per la relativa area, quindi $3000\cdot0{,}02=1500\cdot0{,}04=60$ nelle unità SI.
:::

## Unità della pressione

:::osservazione{#unita titolo="Pascal e conversioni delle aree"}
Il pascal è un newton per metro quadrato. Vale $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$. Poiché un centimetro vale $10^{-2}\,\mathrm m$, un centimetro quadrato vale $10^{-4}\,\mathrm m^2$. L'esponente raddoppia perché l'area contiene due fattori di lunghezza. Ne segue $1\,\mathrm{N/cm^2}=10^4\,\mathrm{Pa}$.

Esempio. Su un pistone di $25\,\mathrm{cm^2}$ una depressione di modulo $8\,\mathrm{kPa}$ rispetto all'altro lato corrisponde a un contributo netto di forza di $8000\cdot25\cdot10^{-4}\,\mathrm N=20\,\mathrm N$. Il verso è dal lato a pressione maggiore verso quello a pressione minore.
:::

## Legge di Stevino

::::teorema{#stevino titolo="Pressione e profondità"}
In un liquido in quiete di densità costante $\rho$, con campo gravitazionale uniforme $g$, la pressione a profondità verticale $h$ sotto una superficie a pressione $p_0$ vale
$$
p=p_0+\rho gh.
$$
Per confrontare due punti nello stesso liquido con profondità $h_1$ e $h_2$, si ottiene $p_2-p_1=\rho g(h_2-h_1)$.

:::dimostrazione
Si consideri una colonna verticale immaginaria di liquido di area $A$ e altezza $h$. Alla base, il fluido sottostante esercita verso l'alto la forza $pA$. In alto la pressione esterna esercita verso il basso $p_0A$. Anche il peso della colonna agisce verso il basso e vale $\rho Ahg$. Le forze laterali non hanno componente verticale. La somma verticale nulla dà $pA-p_0A-\rho Ahg=0$. Si divide per $A>0$, che si cancella.
:::
::::

:::esempio{titolo="Pressioni a due quote"}
In acqua con $\rho=1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{N/kg}$, la pressione aumenta di $10\,\mathrm{kPa}$ per metro. Due punti a $2$ e $5\,\mathrm m$ dalla medesima superficie differiscono di $30\,\mathrm{kPa}$. Una distanza orizzontale fra i due punti non cambia la differenza perché la legge usa soltanto il dislivello verticale.
:::

::grafico{f="10*x" nomi="h (m),Δp (kPa)" punti="2,20,pieno,A;5,50,pieno,B" xmin=0 xmax=6 ymin=0 ymax=65 titolo="In acqua la pendenza è 10 kPa per metro. Da A a B il dislivello è 3 m e la pressione cresce di 30 kPa"}

## Pressione assoluta e relativa

:::definizione{#assoluta titolo="Scegliere il riferimento"}
La **pressione assoluta** è riferita al vuoto. La pressione **relativa** a un riferimento di pressione $p_{\mathrm{rif}}$ è $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{rif}}$. Per un recipiente aperto si usa spesso la pressione atmosferica come riferimento. Un recipiente chiuso può avere alla superficie del liquido una pressione diversa dall'atmosferica.

Con atmosfera a $100\,\mathrm{kPa}$, in acqua alla profondità di $1{,}5\,\mathrm m$ la pressione assoluta è $115\,\mathrm{kPa}$ e la relativa all'atmosfera è $15\,\mathrm{kPa}$. Se un gas a $90\,\mathrm{kPa}$ assoluti è separato dall'atmosfera da una membrana piana, la sua pressione relativa è $-10\,\mathrm{kPa}$. Il segno indica pressione più bassa del riferimento. Le forze sulle due facce della membrana hanno versi opposti, quindi la forza netta dipende dalla differenza di pressione.
:::

## Principio di Pascal

:::teorema{#pascal titolo="Trasmettere una variazione di pressione"}
In un fluido incomprimibile in quiete e confinato, una variazione imposta di pressione si trasmette a tutto il fluido. A geometria invariata, il contributo $\rho gh$ non cambia e a ogni punto si aggiunge la stessa variazione superficiale. In una pressa ideale con pistoni alla stessa quota, le forze aggiuntive soddisfano $F_1/A_1=F_2/A_2$ se valgono le stesse condizioni esterne e si trascurano le perdite.

Con $A_1=5\,\mathrm{cm^2}$, $A_2=25\,\mathrm{cm^2}$ e $F_1=16\,\mathrm N$, il pistone grande sviluppa $80\,\mathrm N$. Se quello piccolo avanza di $5\,\mathrm{cm}$ e il liquido è incomprimibile, il volume spostato è $25\,\mathrm{cm^3}$. Il pistone grande arretra di $1\,\mathrm{cm}$ per fare posto allo stesso volume. Il rapporto di aree aumenta la forza e riduce lo spostamento.
:::

## Vasi comunicanti

:::teorema{#vasi titolo="Uguaglianza delle pressioni allo stesso livello"}
Due punti alla stessa quota in un liquido fermo, omogeneo e collegato hanno la stessa pressione. Se due rami aperti alla stessa atmosfera contengono lo stesso liquido, le superfici libere sono quindi alla stessa quota. Un ramo più largo contiene più volume per unità di altezza e può avere lo stesso livello libero.

Per liquidi immiscibili si confrontano le pressioni alla stessa quota nel liquido comune. Se una colonna d'olio di densità $800\,\mathrm{kg/m^3}$ ha altezza $25\,\mathrm{cm}$ sopra l'interfaccia e dall'altro lato c'è acqua di densità $1000\,\mathrm{kg/m^3}$, l'acqua sale di $20\,\mathrm{cm}$ sopra quella quota. La pressione dell'aria è comune e il fattore $g$ si semplifica.
:::

## Strati sovrapposti

:::osservazione{#strati titolo="Somma dei contributi idrostatici"}
Ogni strato uniforme contribuisce con $\rho_i g h_i$. Partendo dalla superficie e scendendo, si sommano gli incrementi fino al punto cercato. In un recipiente con $0{,}5\,\mathrm m$ di olio di densità $800\,\mathrm{kg/m^3}$ sopra $1\,\mathrm m$ d'acqua, con $g=10\,\mathrm{N/kg}$, l'olio aggiunge $4\,\mathrm{kPa}$ e l'acqua $10\,\mathrm{kPa}$. Il fondo è quindi a $14\,\mathrm{kPa}$ sopra il riferimento della superficie.

All'interfaccia piana in quiete, trascurando la tensione superficiale, la pressione è continua. La sua pendenza rispetto alla profondità invece cambia: nello strato più denso cresce più rapidamente. Nel grafico il tratto più ripido corrisponde all'acqua.
:::

::grafico{linee="0,0 0.5,4 1.5,14" punti="0.5,4,pieno,I;1.5,14,pieno,F" nomi="h (m),Δp (kPa)" xmin=0 xmax=1.65 ymin=0 ymax=16 titolo="Il punto I è l'interfaccia fra olio e acqua. La pressione resta continua e la pendenza aumenta nell'acqua"}

## Manometri e barometri

:::osservazione{#manometri titolo="Colonne che misurano una pressione"}
In un manometro a tubo a U con liquido uniforme e gas di densità trascurabile, il dislivello fra le superfici dà il modulo $\rho g\Delta h$ della differenza di pressione. Il lato su cui la superficie è più bassa è a pressione maggiore, perché richiede più pressione esterna per sostenere la colonna comunicante. Con acqua, $g=10\,\mathrm{N/kg}$ e dislivello $12\,\mathrm{cm}$, il modulo è $1200\,\mathrm{Pa}$.

In un barometro ideale la pressione sopra la colonna è trascurabile rispetto a quella atmosferica. L'altezza $h$ soddisfa allora $p_{\mathrm{atm}}=\rho gh$. A parità di pressione, un liquido più denso richiede una colonna più corta. Un fluido meno denso aumenta il dislivello per la stessa differenza di pressione, con un diverso campo utile di misura.
:::
