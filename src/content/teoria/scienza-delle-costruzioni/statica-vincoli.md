---
titolo: Vincoli ed equilibrio delle strutture piane
sommario: Si riconoscono i meccanismi, si calcolano le reazioni esterne e si separano i corpi collegati da cerniere interne.
---

:::percorso
Per ricavare le reazioni si studia la struttura come un insieme di corpi rigidi. Le reazioni entrano poi nel calcolo di sforzo normale, taglio e momento. La distinzione tra strutture isostatiche e iperstatiche indica quando le sole equazioni di equilibrio bastano.
:::

## Reazioni dei vincoli

:::definizione{#vincoli-piani titolo="Carrello, cerniera e incastro"}
Un **vincolo ideale** esercita una reazione nelle direzioni in cui impedisce il movimento. Nel piano il carrello liscio esercita una forza normale al piano di scorrimento. La cerniera esterna impedisce le due traslazioni e lascia libera la rotazione, quindi esercita due componenti di forza. L'incastro impedisce anche la rotazione, quindi esercita due componenti di forza e una coppia.

Con una cerniera in $A$ e un carrello su piano orizzontale in $B$, le incognite esterne sono $H_A$, $V_A$ e $V_B$.
:::

## Equilibrio del corpo libero

:::teorema{#equilibrio-piano titolo="Equazioni di equilibrio nel piano"}
Per il **diagramma di corpo libero** si isolano il corpo, i carichi applicati e le reazioni vincolari. Scegliendo l'asse $x$ verso destra, l'asse $y$ verso l'alto e i momenti antiorari positivi, le equazioni sono
$$
\begin{cases}
\sum F_x=0 \\[4pt]
\sum F_y=0 \\[4pt]
\sum M_O=0
\end{cases}
$$
dove $O$ è un polo qualsiasi. Se il polo coincide con la cerniera $A$, i momenti di $H_A$ e $V_A$ sono nulli. L'equazione può quindi isolare la reazione in $B$.
:::

## Risultanti dei carichi distribuiti

:::teorema{#risultante-carichi titolo="Risultante e punto di applicazione"}
Sia $q(x)$ l'intensità di un carico verticale verso il basso su un tratto da $a$ a $b$. La forza risultante $Q$ ha intensità pari all'area del diagramma di $q$ e si applica alla coordinata del suo baricentro:
$$
Q=\int_a^b q(x)\,\mathrm{d}x,
\qquad
x_Q=\frac{\int_a^b xq(x)\,\mathrm{d}x}{Q}.
$$
Se $q$ è uniforme, $Q=q(b-a)$ si applica a metà del tratto caricato. Se il diagramma è triangolare, $Q=\dfrac{q_{\max}(b-a)}{2}$ e il baricentro dista un terzo della base dall'estremo con intensità massima.
:::

## Isostaticità e labilità

:::definizione{#classificazione-vincoli titolo="Classificazione dello schema"}
La struttura è **isostatica** quando i vincoli impediscono ogni moto rigido infinitesimo e le reazioni sono determinate dall'equilibrio. C'è **iperstaticità** quando le equazioni di equilibrio lasciano indeterminate alcune reazioni. C'è **labilità** se è possibile un moto infinitesimo compatibile con i vincoli.

Per un solo corpo piano i gradi di libertà rigidi sono tre. Tre condizioni vincolari indipendenti li eliminano tutti. Tre carrelli con reazioni verticali lasciano invece libera la traslazione orizzontale. In questo caso il conteggio delle incognite coincide con quello delle equazioni, ma i vincoli sono dipendenti.
:::

## Cerniere interne

:::definizione{#cerniera-interna titolo="Forze scambiate alla cerniera"}
La **cerniera interna** impone ai due corpi collegati lo stesso spostamento nel punto di collegamento e lascia libera la loro rotazione relativa. Trasmette quindi una forza, con componenti orizzontale e verticale, e il momento flettente nella cerniera è nullo in assenza di coppie concentrate applicate in quel punto. Nei diagrammi di corpo libero dei due corpi, la forza di collegamento compare con versi opposti.
:::

:::esempio{titolo="Equilibrio della campata portata"}
Una campata $CB$, lunga $4\,\mathrm{m}$, è collegata in $C$ al corpo adiacente mediante cerniera e appoggiata in $B$ su un carrello orizzontale. Una forza verticale verso il basso di $20\,\mathrm{kN}$ agisce a $1\,\mathrm{m}$ da $C$. L'equilibrio dei momenti della sola campata $CB$ attorno a $C$ dà $4V_B=20\cdot1$, quindi $V_B=5\,\mathrm{kN}$. La cerniera esercita sulla campata una forza di $15\,\mathrm{kN}$ verso l'alto e sul corpo adiacente una forza di $15\,\mathrm{kN}$ verso il basso.
:::

## Controllo delle reazioni

:::osservazione{#controllo-reazioni titolo="Verifica dei segni e dei bracci"}
Un valore negativo indica un verso opposto a quello assunto nel disegno. Per verificare il conto si può riscrivere l'equazione dei momenti rispetto a un secondo polo. Nelle strutture composte si controllano sia l'equilibrio di ciascun corpo sia quello complessivo, nel quale le forze scambiate tra i corpi si elidono.
:::
