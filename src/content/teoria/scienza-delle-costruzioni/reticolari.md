---
titolo: Travature reticolari piane
sommario: Si calcolano gli sforzi assiali con il metodo dei nodi e delle sezioni e si riconoscono le aste scariche.
---

:::percorso
Le equazioni di equilibrio si possono applicare all'intera travatura, a un singolo nodo o a una parte isolata con una sezione. Quando sono note le forze nelle aste, si possono calcolare le tensioni e, assegnate le proprietà del materiale, le variazioni di lunghezza.
:::

## Modello della travatura

:::definizione{#aste-due-forze titolo="Aste soggette a due forze"}
Una **travatura reticolare ideale** è formata da aste rettilinee incernierate ai nodi, con carichi e reazioni applicati nei nodi. Ogni asta è soggetta a due forze alle estremità, che per l'equilibrio hanno direzione lungo l'asse, lo stesso modulo e verso opposto. Lo sforzo normale è quindi costante lungo l'asta e si assume positivo a trazione.
:::

## Vincoli e stabilità

:::osservazione{#stabilita-reticolare titolo="Numero di aste e disposizione dei nodi"}
Una reticolare piana isostatica, con $j$ nodi, $m$ aste e $r$ componenti di reazione, soddisfa $m+r=2j$. Il membro destro conta le due equazioni di equilibrio per ogni nodo. Per concludere che lo schema è isostatico occorre verificare anche l'indipendenza delle equazioni, che dipende dalla disposizione delle aste e dei vincoli. Un pannello quadrangolare privo di diagonale può deformarsi se il resto della struttura non ne impedisce il moto.
:::

## Equilibrio di un nodo

:::teorema{#metodo-dei-nodi titolo="Metodo dei nodi"}
Per un nodo isolato si assumono le forze incognite delle aste uscenti dal nodo. Per l'asta $AB$, al nodo $A$ la forza è $N_{AB}$ moltiplicata per il versore da $A$ verso $B$. Si impone
$$
\begin{cases}
\sum F_x=0 \\[4pt]
\sum F_y=0 .
\end{cases}
$$
Dopo il calcolo delle reazioni esterne si può iniziare da un nodo con due sforzi incogniti e direzioni indipendenti. Un risultato negativo indica che la forza punta verso il nodo, quindi l'asta è compressa.
:::

## Aste scariche

:::teorema{#aste-scariche titolo="Riconoscimento degli sforzi nulli"}
Se in un nodo senza carichi né reazioni convergono solo due aste con direzioni indipendenti, entrambe sono scariche. Se ne convergono tre e due sono allineate, l'equilibrio nella direzione perpendicolare alle due aste allineate impone che la terza sia scarica. La conclusione dipende dai carichi del problema. Per esempio, se nel secondo caso si applica al nodo una forza perpendicolare alle due aste allineate, la terza asta deve equilibrare quella componente.
:::

## Equilibrio di una sezione

:::teorema{#metodo-delle-sezioni titolo="Metodo delle sezioni di Ritter"}
Si tagliano le aste che collegano due parti della travatura e si isola una delle due parti. Su ciascuna asta tagliata compare la forza lungo il proprio asse. Se due rette d'azione delle forze incognite si incontrano in $O$, il loro momento rispetto a $O$ è nullo. L'equazione dei momenti attorno a $O$ determina direttamente lo sforzo della terza asta, purché la sua retta d'azione abbia braccio non nullo. Quando le due rette da eliminare sono parallele, si può usare l'equilibrio delle forze nella direzione a esse perpendicolare.
:::

## Sforzo e variazione di lunghezza

:::osservazione{#variazione-lunghezza titolo="Dallo sforzo normale alla deformazione"}
Per un'asta di lunghezza $L$, area $A$ e modulo elastico $E$ costanti, in elasticità lineare, lo sforzo normale $N$ produce la variazione di lunghezza $\Delta L=\dfrac{NL}{EA}$. L'asta si allunga se $N$ è positivo e si accorcia se $N$ è negativo. Per esempio, con $N=-15\,\mathrm{kN}$, $L=2\,\mathrm{m}$ ed $EA=30\,000\,\mathrm{kN}$ si ha $\Delta L=-1\,\mathrm{mm}$.
:::
