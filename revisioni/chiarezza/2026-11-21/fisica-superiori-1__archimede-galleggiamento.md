# Revisione di chiarezza · fisica-superiori-1 / archimede-galleggiamento

Controllo (`strumenti/controlla_capitolo.py`): **ESITO: a posto**, nessun ERRORE e nessun AVVISO. Resa corretta in italiano e in inglese (341 formule, 22 figure, 48 blocchi, 8 titoli `##` in entrambe le lingue).

## Parole

- Italiano: 2840 → 5436 (×1,91)
- Inglese: 2878 → 5633 (×1,96)

L'aumento supera l'intervallo atteso (1,2-1,7) e resta sotto la soglia di avviso (2,0). Dopo una prima stesura a ×1,95 ho tolto ripetizioni, una tabella aggiunta e alcuni calcoli doppi. Quello che resta in più sono le definizioni dei termini di base, che nel capitolo mancavano tutte, e i passaggi di calcolo prima saltati. Il conteggio dello script conta come parole anche i pezzi delle formule (`\,\mathrm N` ecc.), quindi i calcoli scritti per esteso pesano molto.

## Che cosa è cambiato

1. Nuovo blocco iniziale senza ancora «Grandezze e unità usate nel capitolo»: fluido, quiete, superficie libera (pelo libero), forza e newton (N), peso, $g$ con il valore 9,8 arrotondato a 10 N/kg, litro e conversioni, densità con la lettera ρ («ro»), pressione, Pa e kPa, aumento ρgh con la profondità.
2. `#archimede`: l'enunciato parte dal fatto (forza verso l'alto), poi spiega da dove nasce (pressione maggiore in basso), poi definisce risultante, modulo, fluido spostato, $V_i$, $\rho_f$, «uniforme», e arriva alla formula con un caso numerico (2 L in acqua, 20 N). La dimostrazione è divisa in quattro passi brevi con le stesse idee dell'originale.
3. Calcoli resi espliciti dove l'originale dava solo il risultato: i 3000 Pa del prisma ($\rho g h$), le forze $p_2A$ e $p_1A$, i 1500/4500/3500/6500 Pa, le due spinte degli involucri, la differenza 49,94 N, gli 8 N del galleggiante, i 7 kg e i 19 L della piattaforma, i 5 cm del galleggiante a due sezioni, la media pesata 0,88 kg/L.
4. Elenchi al posto di frasi con più casi: i quattro casi del volume immerso (`#inverse`), le tre forze sul corpo appeso (`#apparente`), i tre casi peso/spinta massima (`#galleggiamento`), i due versi della corda (`#vincoli`).
5. Termini definiti alla prima comparsa: prisma, traslare, rigido, impermeabile, cavo, stagno, guscio, sistema, dinamometro, tensione, peso apparente, perdita apparente, azione e reazione, risoluzione, sezione orizzontale, equilibrio stabile, frazione immersa, omogeneo, densità media, portata, riserva emersa, vincolo, pressione assoluta e relativa, tensione superficiale, media pesata, simbolo Δ, pedici $f$ e $c$.
6. Voce da laboratorio riscritta: «configurazione con volume emerso», «volume immerso ammissibile», «il contorno su cui si calcolano le forze», «incidono sulla risultante», «a livello libero fissato», «capacità limite nel modello». I «può/possono» sono scesi a 0,6 ogni 1000 parole.
7. Ogni figura ha una o due frasi che dicono che cosa rappresentano linee, frecce e punti A, B, C, D. Righe delle figure identiche e nello stesso blocco.
8. Inglese: traduzione integrale del nuovo testo, grafia britannica come nel file esistente (litre, metre, centimetre, towards), termini delle schede inglesi (buoyancy/buoyant force, spring scale, overflow vessel, payload).

Invariati: frontmatter, titoli `##`, ancore e titoli dei blocchi con ancora, righe delle figure, tutti i dati numerici degli esempi, tutte le regole e precisazioni dell'originale.

## Com'era / Com'è ora (blocco `#apparente`, densità dalle due pesate)

**Com'era**

> Se un solido pesa $90\,\mathrm N$ trascurando la spinta dell'aria e il dinamometro indica $60\,\mathrm N$ in acqua a immersione completa, la spinta è $30\,\mathrm N$. Il peso del solido e la perdita apparente sono rispettivamente $\rho_c Vg$ e $\rho_f Vg$. Dividendo si ottiene $\dfrac{\rho_c}{\rho_f}=\dfrac{P}{P-T}=3$. Lo stesso volume si semplifica perché l'immersione è completa.

Lo studente non sapeva che cosa fossero dinamometro, $T$, $\rho_c$ e «perdita apparente», né che cosa si dividesse per che cosa.

**Com'è ora**

> Se un solido pesa $90\,\mathrm N$ trascurando la spinta dell'aria e il dinamometro indica $60\,\mathrm N$ in acqua a immersione completa, la spinta è $F_A=P-T=90\,\mathrm N-60\,\mathrm N=30\,\mathrm N$. La differenza $P-T$ si chiama anche perdita apparente di peso.
>
> Dalle due letture si ricava la densità del solido. Si indica con $\rho_c$ la densità del corpo, dove la lettera $c$ sta per «corpo», e con $V$ il suo volume. La massa del solido è $\rho_cV$. Il peso del solido e la perdita apparente sono rispettivamente $\rho_c Vg$ e $\rho_f Vg$. Dividendo il primo per la seconda si ottiene
> $$\frac{P}{P-T}=\frac{\rho_c Vg}{\rho_f Vg}=\frac{\rho_c}{\rho_f},\qquad\frac{\rho_c}{\rho_f}=\frac{90}{30}=3.$$
> Il solido ha densità tripla di quella dell'acqua, cioè $3000\,\mathrm{kg/m^3}$. Lo stesso volume $V$ compare nel peso e nella spinta e si semplifica perché l'immersione è completa, e quindi $V_i=V$.

(Prima di questo passo il blocco ora definisce dinamometro e tensione ed elenca le tre forze da cui segue $T+F_A=P$.)

## Errori nell'originale

Nessuno. Tutti i numeri sono stati ricalcolati (3000 Pa e 60 N; 1500/4500/3500/6500 Pa; 0,009 m³; 50 N e 20 N; rapporto 3; 4,5 L e −5 N; 49,94 N e 0,06 N; 8 N; 12 L e 8 L; 15 cm, tre quarti e due terzi; 56 kg e 46 kg; 4 L, 7 kg, 19 L, 5 L; 9 N; +10 N; 44 N) e coincidono.

## Aggiunte per coprire schede, esercizi e domande

- `#inverse`: formule inverse scritte in chiaro, $V_i=\dfrac{F_A}{\rho_f g}$ e $\rho_f=\dfrac{F_A}{gV_i}$, con verifica sugli stessi dati (72 N, 0,009 m³, 800 kg/m³). Gli esercizi «Densità del fluido da spinte» le usano e la teoria non le scriveva.
- «pelo libero» (usato nelle domande) come sinonimo di superficie libera.
- `#frazione`: frazione immersa come percentuale (0,9 = 90% immerso, 10% emerso), «omogeneo», densità media di un corpo cavo con un caso numerico (2 kg, 5 L, 0,4 kg/L).
- `#confronti`: a parità di volume immerso e di fluido la forma non conta (esercizio «Forme diverse e volumi uguali»), con il caso 8 L → 80 N.
- `#galleggiamento`: volume immerso della barca in acqua dolce (0,5 m³) e in acqua di mare (densità reale circa 1025 kg/m³, 0,49 m³).
- `#vincoli`: le due equazioni $T=P-F_A$ e $T=F_A-P$ scritte per i due versi della corda.

## Dati reali usati nelle aggiunte

$g\approx9{,}8\,\mathrm{N/kg}$; acqua 1000 kg/m³; aria 1,2 kg/m³ (già nell'originale; un litro d'aria pesa circa 0,012 N); acqua di mare circa 1025 kg/m³.

## Dubbi rimasti

- Lunghezza a ×1,91 (IT) e ×1,96 (EN), sopra l'intervallo atteso. Per scendere ancora si dovrebbero togliere definizioni o passaggi di calcolo.
- L'intestazione della tabella dei tre blocchi, «Esito nel modello ideale», è rimasta com'era.
- Nel file inglese i pedici delle formule restano in italiano come nell'originale ($T_\mathrm{aria}$, $T_\mathrm{acqua}$, $\rho_c$): ho aggiunto una riga che li spiega.
- L'olio a 800 kg/m³ è un dato d'esercizio dell'originale e delle schede (un olio alimentare reale è intorno a 910-920 kg/m³): lasciato com'è.
