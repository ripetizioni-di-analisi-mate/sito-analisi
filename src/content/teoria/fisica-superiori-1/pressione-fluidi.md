---
titolo: "Pressione ed equilibrio dei fluidi"
sommario: "Pressione assoluta e relativa, Stevino, Pascal, vasi comunicanti e manometri."
---

:::percorso
Si combinano forze, superfici e densità.
La pressione descrive come una forza si distribuisce e come un liquido fermo trasmette le azioni.
I fluidi sono affrontati in prima in diversi percorsi e in seconda in altri; questo modulo prepara la spinta di Archimede.
:::

## Definizione di pressione

:::definizione{#pressione titolo="Forza normale per unità di area"}
Una forza perpendicolare distribuita uniformemente su area A produce pressione
$$
p=\frac{F_\perp}{A}.
$$
Per 100 N su 0,02 m² si ottengono 5000 Pa. Le formule inverse sono $F_\perp=pA$ e $A=F_\perp/p$ per pressione positiva.
In un fluido fermo la pressione in un punto non ha un verso privilegiato: la forza che produce su una parete è normale alla parete. Su superfici dove la pressione varia, usare un unico p richiede una pressione uniforme oppure un valore medio appropriato.
:::

## Unità della pressione

:::osservazione{#unita titolo="Pascal e conversioni delle aree"}
Il pascal è $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$. Si usano anche $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$ e $1\,\mathrm{bar}=100000\,\mathrm{Pa}$.
Se la forza è in newton e l'area in centimetri quadrati, prima si converte l'area: $1\,\mathrm{cm}^2=10^{-4}\,\mathrm m^2$. Pertanto $1\,\mathrm{N/cm^2}=10000\,\mathrm{Pa}$. Il fattore è al denominatore, quindi una superficie espressa con un numero minore produce un valore numerico di pressione maggiore.
:::

## Legge di Stevino

::::teorema{#stevino titolo="Pressione e profondità"}
In un liquido fermo a densità costante, a profondità h sotto una superficie con pressione $p_0$,
$$
p=p_0+\rho gh.
$$
La profondità è una distanza verticale. Per acqua con $\rho=1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{N/kg}$, scendere di un metro aumenta la pressione di 10000 Pa.

:::dimostrazione
Si considera una colonna verticale di liquido di area A e altezza h. Il liquido circostante esercita la forza $pA$ verso l'alto sulla base e $p_0A$ verso il basso sulla sommità. Il peso della colonna è $\rho Ahg$. L'equilibrio verticale richiede $pA-p_0A-\rho Ahg=0$; dividendo per A si ottiene la legge.
:::
::::

## Pressione assoluta e relativa

:::definizione{#assoluta titolo="Scegliere il riferimento"}
La **pressione assoluta** si riferisce al vuoto. La **pressione relativa** esprime la differenza rispetto a un riferimento, spesso l'atmosfera.
In un recipiente aperto, $p_{\mathrm{ass}}=p_{\mathrm{atm}}+\rho gh$ e $p_{\mathrm{rel}}=\rho gh$. Con atmosfera a 100000 Pa e incremento idrostatico di 20000 Pa, la pressione assoluta è 120000 Pa.
Una parete separa due pressioni: se entrambe sono uniformi sulla stessa area, la forza netta ha modulo $|p_1-p_2|A$. Una pressione comune ai due lati si cancella nella risultante.
:::

## Principio di Pascal

:::teorema{#pascal titolo="Trasmettere una variazione di pressione"}
Una variazione di pressione applicata a un fluido incomprimibile confinato viene trasmessa a tutto il fluido. In una pressa ideale con pistoni alla stessa quota, le forze aggiuntive soddisfano
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Un'area dieci volte maggiore produce una forza aggiuntiva dieci volte maggiore. Se i pistoni sono circolari, il rapporto delle aree è il quadrato del rapporto dei raggi. Le quote uguali e gli attriti trascurati sono ipotesi del modello usato.
:::

## Vasi comunicanti

:::teorema{#vasi titolo="Uguaglianza delle pressioni allo stesso livello"}
Nello stesso liquido fermo e comunicante, punti alla stessa quota hanno la stessa pressione. Con la stessa pressione sulle superfici libere, un unico liquido raggiunge lo stesso livello nei vari rami.
Per liquidi immiscibili diversi, le altezze possono essere diverse. Con superfici alla stessa pressione, l'uguaglianza rispetto a un livello comune dà $\rho_1gh_1=\rho_2gh_2$. Il liquido più denso richiede una colonna più bassa. Le altezze si misurano rispetto allo stesso livello, non rispetto a basi scelte separatamente.
:::

## Strati sovrapposti

:::osservazione{#strati titolo="Somma dei contributi idrostatici"}
Attraversando più strati di liquidi fermi verso il basso, ogni strato aggiunge $\rho_i gh_i$. La pressione è continua attraverso l'interfaccia, nel modello che trascura gli effetti di tensione superficiale.
Per 0,2 m d'olio a 800 kg/m³ sopra 0,3 m d'acqua a 1000 kg/m³, con g=10 N/kg, l'aumento complessivo è $1600+3000=4600\,\mathrm{Pa}$. Non si usa una sola densità per l'altezza totale, salvo definire opportunamente una media.
:::

## Manometri e barometri

:::osservazione{#manometri titolo="Colonne che misurano una pressione"}
Un manometro a U usa un dislivello verticale $\Delta h$ per misurare una differenza di pressione: $|\Delta p|=\rho g|\Delta h|$ nel caso semplice con lo stesso liquido.
Un barometro ideale con vuoto sopra la colonna soddisfa $p_{\mathrm{est}}=\rho gh$. Se sopra la colonna la pressione non fosse nulla, occorrerebbe sommarla al contributo idrostatico. La lunghezza inclinata del tubo non sostituisce l'altezza verticale della colonna.
:::
