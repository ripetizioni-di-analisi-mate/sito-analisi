# Fisica 1° anno · Pressione nei fluidi in quiete — revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 pressione-fluidi`): nessun ERRORE. Un solo AVVISO, sulla lunghezza dell'inglese (2,07 volte).

**Parole** (conteggio dello script, formule comprese): italiano 2678 → 5275 (×1,97); inglese 2667 → 5522 (×2,07). Blocchi, ancore, titoli `##`, titoli dei blocchi, tabella e le 11 righe `::grafico` sono identici all'originale; nessun blocco nuovo.

## Che cosa è cambiato

1. **Ogni termine e ogni simbolo è definito alla prima comparsa**: forza, modulo, normale, $F_\perp$, newton (N), pascal (Pa), chilopascal (kPa), SI (Sistema Internazionale), chilogrammo (kg), carico, componente, fluido, scalare, uniforme, pressione media e $\bar p$, dm², cm², pistone, depressione, sensore, lettura, tarare, $\Delta$, origine, pendenza, intercetta, densità e $\rho$, campo gravitazionale $g$, profondità, $p_0$, quota, dislivello, gradiente, sensore assoluto, vuoto, pressione atmosferica, membrana, incomprimibile, confinato, pressa idraulica, corsa, lavoro e joule (J), vasi comunicanti, rami, omogeneo, superficie libera, immiscibili, interfaccia, sezione, $\approx$, pedice $i$, tensione superficiale, continua, manometro, tubo a U, $\Delta h$, barometro, vaschetta, campo di misura, gas residuo, vapore.
2. **La definizione di pressione parte da un caso concreto** (palmo e dito sulla sabbia) e dice subito che cos'è; l'unità pascal è introdotta nella definizione, prima dell'esempio che la usa.
3. **Tutti i conti hanno i passaggi intermedi**: ogni risultato che prima era solo affermato («si ottengono 3000 Pa», «la prima zona contribuisce con 60 N», «il pistone grande sviluppa 80 N», «l'acqua sale di 20 cm», «x = 0,90») ora ha la riga di calcolo con le unità.
4. **Legge di Stevino**: prima le quattro grandezze spiegate una per riga, poi la formula, poi un valore numerico. La dimostrazione elenca le forze una per riga, ricava volume, massa e peso della colonna e nomina la condizione usata (colonna ferma, somma delle forze verticali nulla).
5. **Tolta la voce da laboratorio**: «fissare il carico totale e fissare la pressione descrivono due prove diverse», «un algoritmo calibrato per il vuoto», «a geometria invariata», «coppie compatibili», «campo utile di misura», «controlla la compatibilità della lettura» sono riscritte con parole comuni e, dove serviva, con un numero (per esempio le due coppie ρ = 800, p₀ = 100 e ρ = 1000, p₀ = 99 che danno la stessa lettura).
6. **I «quindi» hanno la loro premessa**: perché due punti alla stessa quota hanno la stessa pressione, perché le superfici libere sono allo stesso livello, perché nel manometro il lato più basso è a pressione maggiore, perché i due lavori della pressa sono uguali (forza × corsa = Δp × volume), perché B sale il doppio di A (bilancio dei volumi).
7. **Manometri e barometri**: detto che cosa sono e come sono fatti prima della formula; esempi numerici per «liquido più denso, colonna più corta» (acqua 10 m, mercurio 0,74 m) e per «fluido meno denso, dislivello maggiore» (12 cm con acqua, 15 cm con olio).
8. Forma impersonale ovunque («scegliamo» → «si sceglie»), nessun «può/possono», nessuna frase prescrittiva.

## Com'era / Com'è ora (legge di Stevino)

**Com'era**

> In un liquido in quiete di densità costante $\rho$, con campo gravitazionale uniforme $g$, la pressione a profondità verticale $h$ sotto una superficie a pressione $p_0$ vale $p=p_0+\rho gh$. […]
> *Dimostrazione.* Si consideri una colonna verticale immaginaria di liquido di area $A$ e altezza $h$. Alla base, il fluido sottostante esercita verso l'alto la forza $pA$. In alto la pressione esterna esercita verso il basso $p_0A$. Anche il peso della colonna agisce verso il basso e vale $\rho Ahg$. Le forze laterali non hanno componente verticale. La somma verticale nulla dà $pA-p_0A-\rho Ahg=0$. Si divide per $A>0$, che si cancella.

Lo studente incontra insieme $\rho$, $g$, $h$, $p_0$, «campo gravitazionale uniforme», «in quiete» senza che nessuno sia stato spiegato; nella dimostrazione il peso $\rho Ahg$ compare senza dire da dove viene e non è detto perché la somma delle forze è nulla.

**Com'è ora**

> Chi si immerge in piscina sente la pressione sulle orecchie crescere man mano che scende. La legge di Stevino dice di quanto. Le grandezze che vi compaiono sono quattro.
> - La **densità** di un liquido è la massa contenuta in ogni unità di volume. Si indica con la lettera greca $\rho$, che si legge «ro», e si misura in chilogrammi per metro cubo. Un metro cubo d'acqua ha massa 1000 kg, quindi la densità dell'acqua è 1000 kg/m³.
> - Il **campo gravitazionale** $g$ è il peso, in newton, di ogni chilogrammo di massa. Vicino alla superficie della Terra vale circa 9,8 N/kg e negli esempi di questo capitolo è arrotondato a 10 N/kg. […]
> - La **profondità** $h$ è la distanza, misurata in verticale, fra il punto e la superficie del liquido che gli sta sopra.
> - $p_0$, che si legge «p zero», è la pressione che agisce sulla superficie del liquido, per esempio quella dell'aria.
>
> […] $p=p_0+\rho gh$. Il termine $\rho gh$ è l'aumento di pressione dovuto al liquido che sta sopra il punto. In acqua, a 2 m di profondità, vale $1000\cdot10\cdot2\,\mathrm{Pa}=20\,000\,\mathrm{Pa}$.
>
> *Dimostrazione.* L'idea è isolare una colonna di liquido e scrivere che, essendo ferma, le forze verticali su di essa si compensano. […]
> - Il peso della colonna agisce verso il basso. Il volume della colonna è $Ah$, la sua massa è la densità per il volume, cioè $\rho Ah$, e il peso è la massa per $g$, cioè $\rho Ahg$.
> - Le forze laterali sono orizzontali, perché sono perpendicolari alle pareti verticali della colonna. Non hanno quindi componente verticale.
>
> La colonna è ferma, quindi la somma delle forze verticali è nulla. Contando positive le forze verso l'alto si ha $pA-p_0A-\rho Ahg=0$, cioè $pA=p_0A+\rho Ahg$. Si dividono i due membri per $A>0$, che si cancella, e si ottiene $p=p_0+\rho gh$.

## Errori trovati nell'originale

Nessun errore numerico: tutti i valori sono stati ricalcolati (pressioni, forze, medie pesate, gradiente e densità, spinta sulla piastra, pressa e lavori, colonne d'olio e d'acqua, spessori, manometro, barometro) e coincidono. I dati degli esempi sono invariati.

## Aggiunte per coprire gli esercizi

- **Pistoni circolari** (esercizio da fare 5: raggi 8 e 16 cm): nel blocco `#pascal` l'area $\pi r^2$ e il rapporto fra le aree come quadrato del rapporto fra i raggi, con gli stessi raggi.
- **«Gradiente»**: usato in 19 punti fra schede e domande e già nella teoria, ma mai definito; ora è definito nell'esempio «Pressioni a due quote» come aumento di pressione per metro, $\rho g$.
- **«Incremento idrostatico»**, **$p_{\mathrm{atm}}$**, **«dislivello»**, **«interfaccia»**: definiti alla prima comparsa.
- Conversione cm² → m² e N/cm² → Pa (esercizio da fare 9) con il conto esteso.

## Dubbi rimasti

- **Lunghezza**: 1,97 volte in italiano, sopra la fascia attesa 1,2-1,7 (l'avviso scatta a 2,0). Il capitolo aveva molti termini mai definiti e molti risultati senza conto; le righe di calcolo pesano nel conteggio. Sono già state tolte le descrizioni dei grafici che ripetevano la didascalia e alcuni esempi doppi. L'inglese, traduzione integrale, risulta 2,07 e dà l'unico avviso.
- Il liquido del barometro con pressione residua ha densità 12 500 kg/m³: è un dato d'esercizio dell'originale, lasciato com'è (non è chiamato mercurio). Per il mercurio vero ho usato 13 600 kg/m³ nel blocco dei manometri.
- Nel file inglese la figura degli strati etichetta il fondo con «B», in quello italiano con «F»: differenza già presente nell'originale, righe delle figure non toccate.
- «Depressione» in inglese è resa con «underpressure» (l'originale inglese evitava il termine).
- Le due righe `::grafico` fuori dai blocchi (dopo «Pressioni a due quote» e dopo `#strati`) sono rimaste dove stavano.
