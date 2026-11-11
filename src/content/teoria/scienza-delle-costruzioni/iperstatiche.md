---
titolo: "Strutture iperstatiche e lavori virtuali"
sommario: "Come usare compatibilità, metodo delle forze e lavori virtuali per determinare le incognite iperstatiche."
---

:::percorso
L’equilibrio determina le reazioni di una struttura isostatica. In una struttura iperstatica servono anche condizioni sugli spostamenti. Si parte dagli spostamenti elastici studiati nella linea elastica e si calcolano le reazioni necessarie a rispettare i vincoli.
:::

## Scelta delle incognite ridondanti

:::definizione{#schema-primario titolo="Schema isostatico principale"}
Nel **metodo delle forze** si rimuovono tanti vincoli indipendenti quanto è il grado di iperstaticità, in modo da ottenere una struttura isostatica stabile. Ciascun vincolo rimosso viene sostituito dalla reazione incognita che esercitava. Per esempio, una mensola appoggiata in punta diventa una mensola libera, caricata in punta anche dalla reazione incognita dell’appoggio.
:::

## Compatibilità degli spostamenti

:::teorema{#metodo-forze titolo="Equazioni di compatibilità nel metodo delle forze"}
Si misurano tutti gli spostamenti e le reazioni con versi coerenti. Per una sola incognita $X$, siano $\delta_0$ lo spostamento prodotto dai carichi sul sistema principale, $f_{11}$ lo spostamento prodotto da un carico unitario concorde con $X$ e $\Delta$ lo spostamento imposto dal vincolo. Si impone
$$
\delta_0+f_{11}X=\Delta.
$$
Per più incognite si scrive una condizione per ogni vincolo rimosso, sommando i contributi di tutte le reazioni ridondanti.
:::

## Spostamenti con i lavori virtuali

:::teorema{#lavori-virtuali titolo="Metodo della forza unitaria"}
Per calcolare una traslazione si applica una forza unitaria nel punto e nel verso della traslazione cercata. Per calcolare una rotazione si usa una coppia unitaria. Se si considerano deformazioni di flessione e assiali, con $M,N$ ottenuti dai carichi effettivi e $m,n$ dal carico unitario, allora
$$
\delta=\sum_{\text{aste}}\int\left(\frac{Mm}{EI}+\frac{Nn}{EA}\right)dx.
$$
Quando il modello prevede altri contributi deformativi, si aggiungono gli integrali corrispondenti. Nel calcolo di $f_{11}$ per una trave solo inflessa si usa l’integrale di $m^2/(EI)$, dove entrambi i fattori si riferiscono allo stesso carico unitario.
:::

## Metodo energetico

:::teorema{#castigliano titolo="Teorema di Castigliano"}
Per una struttura elastica lineare, con vincoli fissi e senza deformazioni imposte, sia $U$ l’energia elastica espressa in funzione delle forze applicate. La derivata $\dfrac{\partial U}{\partial F}$ dà lo spostamento nella direzione della forza $F$. Se il modello considera solo flessione,
$$
U=\sum_{\text{aste}}\int\frac{M^2}{2EI}\,dx.
$$
Per una rotazione si deriva rispetto a una coppia. Quando nella direzione cercata manca il carico, si introduce una forza o coppia fittizia e la si pone uguale a zero dopo avere derivato.
:::

## Cedimenti dei vincoli

:::osservazione{#cedimenti titolo="Compatibilità con cedimento assegnato"}
Se un appoggio cede di $s$ verso il basso e lo spostamento positivo è verso l’alto, nell’equazione di compatibilità si usa $\Delta=-s$. Anche senza carichi esterni, una struttura iperstatica può sviluppare reazioni se il cedimento è incompatibile con un moto rigido.
:::

## Dilatazione termica impedita

:::esempio{#temperatura titolo="Asta vincolata alle due estremità"}
Per un’asta uniforme di lunghezza $L$ e coefficiente di dilatazione termica $\alpha$, il riscaldamento $\Delta T$ produce una variazione libera di lunghezza $\alpha \Delta T L$. Se i vincoli impediscono lo spostamento assiale e si assume $N$ positivo a trazione, vale
$$
\frac{NL}{EA}+\alpha \Delta T L=0,
\qquad
N=-EA\alpha\Delta T.
$$
Per $\Delta T>0$ lo sforzo normale è di compressione. Il risultato riguarda lo stato di equilibrio rettilineo prima di un’eventuale instabilità.
:::
