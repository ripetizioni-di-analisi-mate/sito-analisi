# Fisica 3° anno · Moti nel piano · revisione di chiarezza

**Parole**: italiano 2549 → 4027 (×1,58); inglese 2526 → 4148 (×1,64). Controllo: `ESITO: a posto`, nessun avviso.

## Che cosa è cambiato
1. **Termini definiti alla prima comparsa**: punto materiale, coordinate, legge oraria, vettore e componenti, Δ, velocità media, pendenza, tangente, rapidità (= modulo), arcotangente, versore, prodotto scalare, SI, g e «uniforme», gittata, apice, angoli complementari, radiante, ω, periodo, frequenza e hertz, velocità tangenziale, rigido, centripeta, corda, α, incertezza.
2. **Passaggi di calcolo aggiunti**: eliminazione di t per i due carrelli; pendenza di t² con il rapporto su un intervallo δ (procedimento usato nella scheda 1, esercizio 3); tempo di caduta da h = ½gt²; equazione della traiettoria; tempo di salita e H = v₀y²/(2g) per sostituzione; t_f raccogliendo t; gittata con la formula di duplicazione; t² − t − 3 = 0 risolta; derivazione di v₀y = g(t₁+t₂)/2 per differenza; v_t = rω da Δs = rΔθ; triangolo isoscele delle velocità per a_c e per la corda.
3. **Motivi espliciti**: perché v_x resta costante (gravità solo lungo y), perché si prende la radice positiva, perché a metà gittata entrambi i corpi sono all'apice, perché la componente x del sensore è quella radiale.
4. Il paragrafo sul verso nell'esempio delle due foto ora dice che il verso di rotazione è sconosciuto (prima contraddiceva la frase «gira in senso antiorario»).
5. Frazioni in linea portate in colonna (x/v₀, 2v₀y/g, (1+√13)/2, π/2 a numeratore, r/2).
6. Inglese ritradotto per intero dal nuovo italiano, grafia britannica come il file esistente.

## Com'era / Com'è ora (teorema «Moti indipendenti lungo gli assi»)
**Com'era**: «Il moto verticale parte da fermo e determina il tempo di arrivo $t_f=\sqrt{\dfrac{2h}{g}}$. Il moto orizzontale procede senza accelerazione durante lo stesso tempo. La distanza di arrivo è $R=v_0t_f$…»

**Com'è ora**: «Il moto verticale parte da fermo e determina il tempo di arrivo $t_f$. Al suolo $y=0$, quindi $h=\tfrac12gt_f^2 \Rightarrow t_f^2=\frac{2h}{g} \Rightarrow t_f=\sqrt{\frac{2h}{g}}$, dove si prende la radice positiva perché il tempo di volo è positivo. Il moto orizzontale procede senza accelerazione durante lo stesso tempo. La distanza orizzontale fra il punto di lancio e quello di arrivo si chiama **gittata** e vale $R=v_0t_f=v_0\sqrt{\frac{2h}{g}}$.» (Prima la radice compariva senza origine e «gittata», usata in tutte le schede, non era mai definita.)

## Termini degli esercizi che mancavano in teoria (aggiunti)
- **rapidità** e **rapidità media** (domanda 15), **velocità media** (dafare 9, domanda 64), **accelerazione media** componente per componente (domanda 17) → `#componenti-moto`.
- **componente normale** dell'accelerazione (domanda 21) → `#componenti-moto`.
- **hertz**, **T = 1/f**, velocità angolare con segno (svolto 5, domande 54, 60, 62) → `#radianti`.
- **dischi a contatto senza slittare**: r₁ω₁ = r₂ω₂ (dafare 14, domanda 14) → `#radianti`, con un caso numerico diverso da quello dell'esercizio.
- **gittata**, **apice**, pendenza del grafico rapidità-tempo = a_t (domanda 88), a_t = rα (domande 83, 89).

## Errori nell'originale
Nessun errore numerico: tutti i numeri ricalcolati con Python (angolo −53,13°, proiezione −2,8, impatto a 2,30 s e 18,42 m, 6,19 m, 24√2/π ≈ 10,80, rapporti 0,900 e 0,999). Corretta solo l'incoerenza del verso nell'esempio delle due foto (punto 4).

## Errori negli esercizi e nelle domande (non corretti)
- Svolto 8, esercizio 2: «Perpendicolarità permette di sottrarre…» frase senza articolo e con «permette»; contenuto corretto.
- Svolto 5, esercizio 1: «Otteniamo» (prima persona) contro la forma impersonale del sito.
- Nessun errore di calcolo trovato negli svolti, nelle 14 tracce e nelle domande lette.

## Dubbi
- Il termine inglese «position equations» per «leggi orarie» non compare nelle schede inglesi del capitolo; è quello già usato nel file inglese originale.
- Nel file inglese restano sia «disc» sia «disk», come nell'originale e nelle schede.
