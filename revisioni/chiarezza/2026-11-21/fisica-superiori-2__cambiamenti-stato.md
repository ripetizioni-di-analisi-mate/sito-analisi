# Fisica 2° anno · Cambiamenti di stato · revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-2 cambiamenti-stato`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO.

**Parole**: italiano 2597 → 4240 (×1,63); inglese 2568 → 4406 (×1,72). Entrambi entro i limiti (1,7 e 1,8). Blocchi 24, esempi 12, attenzione 1, figure 11, come prima. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle figure identici. Nessun blocco nuovo, nessun contenuto tolto, dati numerici degli esempi invariati.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**: particelle, sistema, fase, campione, sostanza pura, equilibrio, temperatura di transizione, pressione atmosferica normale (con pascal e kPa), frazione liquida, energia utile, vapore, ghiaccio secco, brina, calore, ambiente, modulo, potenza e watt, potenza utile, refrigeratore, calore latente (anche perché si chiama «latente»), pedice, direttamente proporzionale, calorimetro, errore costante, calore specifico, kelvin e grado, $\Delta T$, capacità termica, pendenza, calore sensibile, ascissa e ordinata, potenza elettrica, energia dispersa, rendimento, recipiente isolato, capacità trascurabile, superficie libera, termostato, impurezze, pressione parziale, vapore saturo.
2. **Sigle e simboli**: kJ, J, W, Pa, kPa, K, $L_f$, $L_v$, $m_{\mathrm{tr}}$, $c_g$, $c_a$, $Q_{\mathrm{disp}}$, $Q_{\mathrm{fus}}$, $T_i$, $T_f$, $\simeq$, $|Q|$ con lettura e significato.
3. **Conti completi**: 16,7/334 = 0,050 kg e le due frazioni; 33 400/334 = 100 s e 33 400/167 = 200 s; 20 040/334 000; i tre tratti del riscaldamento e del raffreddamento uno per riga con le somme; 46 800/400 = 117 s; 275·167 = 45 925 J; la soglia 33 400/2100 ≈ 15,9 °C ricavata.
4. **Frasi «darebbe un valore sbagliato» quantificate**: lettura finale del calorimetro → 295 kJ/kg; potenza elettrica → circa 121 s; divisione per la sola acqua iniziale → circa 14,1 °C.
5. **Pendenza $\dfrac{1}{mc}$ ricavata** da $Q=mc\,\Delta T$ (prima era solo enunciata) e motivo per cui il tratto del ghiaccio è più ripido di quello dell'acqua.
6. **Voce impersonale** al posto di «Supponiamo», «siamo nel tratto orizzontale»; tolti «Il grafico permette di», «Il modello termico si sceglie», «Il confronto determina».
7. **Casi e passaggi in elenco**, uno per riga (stati della materia, nomi dei passaggi, tratti dei bilanci, le due soglie del ghiaccio in acqua).
8. **Figure**: aggiunte le frasi che dicono che cosa riportano gli assi e che cosa indicano rette e tratteggi (percentuale fusa, totale con segno, retta disponibile/soglia, linee della pressione esterna).

## Com'era / Com'è ora (blocco `#curva`)

**Com'era**

> Nel grafico della temperatura in funzione dell’energia ricevuta, un tratto in una sola fase ha pendenza $\dfrac{1}{mc}$ quando si trattano $m$ e $c$ come costanti.

**Com'è ora**

> Il **calore specifico** $c$ di una sostanza è l’energia necessaria per alzare di un grado la temperatura di un chilogrammo di quella sostanza. Si misura in $\mathrm{J/(kg\,K)}$ […] Una variazione di $1\,\mathrm K$ è uguale a una variazione di $1\,{}^\circ\mathrm C$. Per scaldare una massa $m$ di $\Delta T$ gradi […] serve $Q=mc\,\Delta T$. Il prodotto $C=mc$ si chiama **capacità termica** […]
>
> Nel grafico della temperatura in funzione dell’energia ricevuta, la **pendenza** di un tratto rettilineo è l’aumento di temperatura diviso per l’energia che lo produce. In un tratto con una sola fase, trattando $m$ e $c$ come costanti, si divide $Q=mc\,\Delta T$ per $mc$ e si ottiene $\Delta T=\dfrac{Q}{mc}$. La pendenza vale quindi $\dfrac{1}{mc}$.

Lo studente si perdeva perché $c$, la formula $Q=mc\Delta T$ e la pendenza non erano mai spiegati nel capitolo, e il risultato $\dfrac{1}{mc}$ compariva senza passaggio.

## Errori nell'originale

Nessuno. Tutti i numeri ricalcolati con Python (frazioni fuse, durate 100/200/117/167/217 s, 45 925 J, 12,5 kJ, 2000 J e 100 J/K, 33 600/66 800, 0,101 kg, incrocio a 39,76 °C, 11,746 °C, soglia 15,905 °C, punto 44 → 23,41 °C del grafico, 0,0088 kg, 47,3 kJ). Pressione di vapore saturo dell'acqua (47, 70, 101 kPa a 80, 90, 100 °C) e calori specifici reali corretti.

## Aggiunte per coprire esercizi e domande

- **Calore specifico, $Q=mc\Delta T$, capacità termica $C=mc$ in J/K** (schede 2, 5, 7, 8; domande 28, 33, 45, 61, 62, 78, 87): nel blocco `#curva`, con il caso 0,20 kg di ghiaccio → 420 J/K.
- **Calore sensibile** (domanda 80): nel blocco `#curva`.
- **Rendimento** (scheda 6, domande 37, 74, tracce 11 e 14): nel blocco `#dispersioni`, 200/275 ≈ 73%.
- **Potenza e watt, $Q=Pt$** (schede 3, 6, domande 30, 36-40, 72, 88): nel blocco `#ciclo` e nel blocco `#curva`.
- **Calore latente di sublimazione e deposizione** (domanda 22): una riga nel blocco `#latente`.
- **Ebollizione a pressione più alta (pentola a pressione) e in montagna** (domande 83, 84): nel blocco `#pressione`.
- **Modulo** (schede 4 e 8, domande 24, 25, 35): nel blocco dei segni.

## Dubbi e segnalazioni (non corretti)

- Domanda 45: usa $c_a=4180\,\mathrm{J/(kg\,K)}$, mentre teoria, schede e tutte le altre domande usano 4200. Il conto è giusto con i dati dati, ma il valore è incoerente con il resto del capitolo.
- Domanda 62: la spiegazione scrive $\Delta Q=mc\Delta T$; nel capitolo la formula è $Q=mc\,\Delta T$ (il calore non è una variazione).
- Scheda 5, esercizio 1: nella formula il terzo termine è scritto $T_a c_a m$ e il primo $\Delta T_g c_g m$; notazione diversa da quella della teoria (`#fasi`), conto giusto.
- Il blocco `#ciclo` e `#dispersioni` contengono la definizione di potenza e rendimento; restano negli esempi in cui l'originale li usava, perché le regole non permettono di spostare contenuti fra blocchi.
- Inglese: grafia britannica come nel file esistente (vaporisation, vapour). La definizione dell'aeriforme usa «gas» (il titolo inglese è «Solid, liquid and gas»). Non ho eseguito la build né guardato le figure rese; lo script di controllo ha reso entrambi i file senza errori (275 formule e 26 figure/svg ciascuno).
