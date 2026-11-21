# Revisione di chiarezza · Fisica 3° anno · Misure, incertezze e vettori

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-3 misure-vettori`): ESITO a posto, nessun ERRORE e nessun AVVISO.

**Parole** (conteggio dello script): italiano 2505 → 4255 (×1,70); inglese 2484 → 4364 (×1,76). Entro i limiti (1,7 e 1,8).

Invariati: frontmatter, 6 titoli `##`, 6 ancore con i loro titoli, le 11 righe delle figure (ciascuna nel suo blocco), i 18 blocchi e i loro titoli, tutti i dati numerici degli esempi. Nessun blocco aggiunto o tolto. Inglese tradotto per intero dal nuovo italiano, grafia britannica come il file esistente (metre, centre, anticlockwise, half-range).

## Che cosa è cambiato

1. **Termini e simboli definiti alla prima comparsa**: grandezza, unità di misura, SI, grandezza composta, fattore di conversione, reciproco, omogeneo, direttamente proporzionale, coefficiente di proporzionalità, ρ, pendenza, tara, intercetta, media pesata e aritmetica, coefficiente ed esponente, dimensioni e grandezze fondamentali, [ ], pedice 0, addendo, spostamento e distanza percorsa, ±, Δ, risoluzione, taratura, dispersione, x̄, semidispersione, punto medio, simmetrica, ε, adimensionale, incertezza percentuale, cifre significative, compatibili, intervallo chiuso [ ; ], scarto/offset, errore sistematico e additivo, errori correlati, δ, secondo e primo ordine, ≃, ≫, valore nominale, distanza orientata, scalare, vettore (modulo, direzione, verso), proiezione orientata, θ, antiorario, seno/coseno/tangente nel triangolo rettangolo, quadranti, α, vettore libero, x′, φ, newton, vincolo, versore, ortonormale, concordi/discordi, destrorso, regola della mano destra, momento di una forza, lavoro e joule.
2. **Passaggi di calcolo scritti**: cm² e cm³ con il fattore al quadrato e al cubo; km/h → m/s con la frazione 1000/3600; conversione del volume prima della densità; 1 g/cm³ = 1000 kg/m³; masse della miscela; prodotto in notazione scientifica con 10^p·10^q; [v], [a], [v₀t], [at²]; aree dei due triangoli; media 30,6/3; distanze della media dagli estremi; espressioni della somma e della differenza nel caso peggiore; ρ_min e ρ_max; d_min e d_max; modulo di (−3, 4); componenti negli assi ruotati; R = (3−1, 1+3); prodotto vettoriale nei due ordini.
3. **Motivo dei «quindi»** reso esplicito: perché la tara si annulla nella pendenza, perché il coefficiente ½ non viene dalle dimensioni, perché nella differenza gli errori presi sono opposti, perché il termine δxδy si trascura, perché nel quoziente il caso peggiore unisce numeratore massimo e denominatore minimo.
4. **Voce da laboratorio riscritta**: «Una misura confronta una proprietà riproducibile con un'unità», «La sua scelta dipende…» con elenco dei tre elementi, «L'accordo indica una regione possibile comune», «Per confrontare misure su scale diverse conviene…» (tono prescrittivo tolto).
5. **Figure descritte nel testo**: retta con la tara (pendenza 2,7, intercetta 100 g, punto a 640 g), letture in mm con media e punto medio, intervalli che si toccano in 24,3 cm, rettangolo delle coppie massa-volume, vettori perpendicolari (−3, 4) e (4, 3).
6. **Elenchi** al posto di frasi con più oggetti: risoluzione/taratura/dispersione; modulo/direzione/verso.

## Com'era / Com'è ora (blocco «Densità e lettura di un grafico massa-volume»)

**Com'era**

> Un grafico con $V$ sull'asse orizzontale e $m$ su quello verticale mostra la massa di campioni di dimensioni diverse. La pendenza è $\rho$. Se la bilancia registra anche la massa di un recipiente, l'intercetta è la tara e il rapporto $m/V$ di un singolo punto include il recipiente. La pendenza fra due punti rimane quella del materiale, perché sottraendo le due masse si annulla la stessa tara.

**Com'è ora**

> Nel grafico il volume $V$ sta sull'asse orizzontale e la massa $m$ su quello verticale, e ogni punto è un campione del materiale. La **pendenza** della retta è l'aumento di $m$ diviso per il corrispondente aumento di $V$, quindi è proprio $\rho$, che nella figura vale $2{,}7\,\mathrm{g/cm^3}$. Se la bilancia pesa il materiale dentro un recipiente, registra anche la massa del recipiente, detta **tara**, e la retta non parte più dall'origine. L'**intercetta**, cioè il valore di $m$ per $V=0$, è la tara, che nella figura vale $100\,\mathrm g$. In un singolo punto il rapporto $\dfrac mV$ comprende anche il recipiente, come a $200\,\mathrm{cm^3}$, dove $\dfrac{640}{200}=3{,}2\,\mathrm{g/cm^3}$. La pendenza fra due punti rimane invece quella del materiale, perché sottraendo le due masse si annulla la stessa tara, e $\dfrac{640-100}{200-0}=2{,}7\,\mathrm{g/cm^3}$.

Lo studente non sapeva che cosa fossero pendenza, tara e intercetta, né vedeva con i numeri perché il rapporto di un solo punto è sbagliato e la pendenza no. È il procedimento della scheda 2 (esercizio 1), dell'esercizio 10 e della domanda 10.

## Errori trovati nell'originale

Nessun errore nella teoria: tutti i numeri (teoria, schede 1-8, esercizi 1-14, domande 1-90) sono stati ricalcolati e coincidono. Da segnalare, senza correggerli perché fuori dal mio file:
- Scheda svolta 8, esercizio 3, ultima riga: «hanno **la** stesso valore assoluto» (refuso, «lo stesso»).
- Domande 20, 21, 22 e 24 rimandano a `teoria#unita`, ma controllo dimensionale e unità della pendenza stanno nel blocco `#dimensioni`.

## Aggiunte per coprire gli esercizi

- **Rotazione oraria degli assi** (φ negativo, φ = −90°: $A_{x'}=-A_y$, $A_{y'}=A_x$, esempio (5, −12) → (12, 5)): esercizio 13 e domanda 13; prima la teoria trattava solo la rotazione antioraria.
- **Posizione finale = posizione iniziale + spostamento** dall'area con segno: domanda 16.
- **Divisione in notazione scientifica** (si sottraggono gli esponenti): domanda 23.
- **1 g/cm³ = 1000 kg/m³**: esercizio 2, domanda 31.
- **Media pesata** nella miscela: schede 2 (es. 3) e 4 (es. 3), domande 45, 27.
- **Risultante minima e massima** (differenza e somma dei moduli, vettori concordi/discordi): scheda 7 (es. 3), domande 74, 75, 80.
- **$R^2=A^2+B^2+2AB\cos\theta$** dal prodotto scalare: scheda 7, domande 62, 73, 74.
- **Lavoro come prodotto scalare e joule**: scheda 8, esercizio 14, domande 81, 89.
- **Prodotto vettoriale nullo per vettori paralleli**: domanda 87.
- **Scarto comune che si annulla nella differenza**: esercizio 11, domanda 11.
- **Cifre significative** con l'esempio 0,16: esercizio 3.

## Dubbi rimasti

- Le coppie di componenti usano la virgola come separatore, $(3,1)$, come nell'originale e negli esercizi; nell'italiano la virgola è anche il separatore decimale, ma non compaiono coppie con decimali nella teoria, quindi le ho lasciate.
- Domanda 86 parla di «determinante» e domanda 83 del prodotto vettoriale con un versore: non introdotti per non allungare (la formula $A_xB_y-A_yB_x$ e il modulo $AB|\sin\theta|$ bastano a risolverle).
- Vincolo di lunghezza rispettato al limite (×1,70): per starci ho tolto alcuni esempi aggiuntivi che avevo scritto (area di un quadrato al primo ordine, risultante fra 3 e 11 m).
