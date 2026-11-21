# Revisione di chiarezza · Fisica 2° anno · Moti nel piano e moto circolare

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-2 moti-nel-piano`): ESITO a posto, nessun ERRORE e nessun AVVISO.

**Parole**: italiano 2501 → 4098 (×1,64); inglese 2417 → 4176 (×1,73). Entro i limiti (1,7 e 1,8).

Invariati: frontmatter, 6 titoli `##`, 6 ancore con i loro titoli, le 11 righe delle figure (ciascuna nel suo blocco), i 21 blocchi e i loro titoli, tutti i dati numerici degli esempi. Nessun blocco aggiunto o tolto.

## Che cosa è cambiato

1. **Termini e simboli definiti alla prima comparsa**: assi perpendicolari, coordinate, ascissa/ordinata, vettore (modulo, direzione, verso), $\Delta$ e pedici $f$, $i$, componente, cateti, ipotenusa, teorema di Pitagora, distanza percorsa, traiettoria, quadrante, rapidità, velocità media, rapidità media, legge oraria, SI (Sistema Internazionale), pendenza, incontro, $u_0$, quota, $g$ (9,81 m/s²), moto circolare uniforme, hertz e $\mathrm{s^{-1}}$, reciproco, senso antiorario, proiezione, $\pi$, radiante, $\omega$, tangente, solidali, $\Delta\theta$/$\theta$, accelerazione, radiale, centripeta, accelerazione media.
2. **Passaggi di calcolo scritti**: risoluzione di $h-\frac12gt^2=0$ un passo per riga; eliminazione del tempo con la sostituzione intermedia; $fT=1$ ricavata dalle due formule; $\omega=2\pi/T=2\pi f$ e $v=\omega r$ con il motivo; sottrazione delle coordinate $(4-(-2);-2-1)$; quota iniziale $15+5$; tempo di volo $\sqrt4$; $\omega=v/r$ nel confronto dei raggi.
3. **Derivazione di $a_c=v^2/r$ riscritta a passi brevi**: perché le velocità formano lo stesso angolo $\Delta\theta$ dei raggi, triangolo isoscele delle velocità, terzo lato ≈ arco $v|\Delta\theta|$, divisione per $\Delta t$, passaggio a $v^2/r$ e a $\omega^2 r$. Detto anche perché a parità di $v$ e a parità di $\omega$ la dipendenza da $r$ è opposta.
4. **Richiami del biennio** dove servono agli esercizi: moto rettilineo uniforme e uniformemente accelerato nel lancio, area sotto il grafico velocità-tempo come spostamento, velocità media come media dei valori estremi nel moto uniformemente accelerato.
5. **Frasi oscure riscritte**: «fasi omologhe» → «stessa posizione con lo stesso verso di moto»; «i punti si trovano in posizioni diverse quando passano al livello dell'altro» → conclusione esplicita che nessun istante soddisfa entrambe le condizioni; «Il modulo da solo lascia aperta l'orientazione»; «prolungherebbe il modello oltre il contatto col pavimento».
6. **Figure descritte nel testo**: per ognuna il testo dice che cosa sono i punti e le curve (A, B, C, D sulla proiezione; L e I nel lancio; curva $16/r$ e retta $4r$ con il punto comune).
7. **Attenzione**: aggiunto il controesempio numerico (2 m, 4 m/s → 8 m/s²), senza nuove negazioni.

## Com'era / Com'è ora (blocco «Due traiettorie si incrociano»)

**Com'era**

> Qui l'uguaglianza delle ascisse darebbe $t=2\,\mathrm s$, mentre quella delle ordinate dà $t=1{,}5\,\mathrm s$. I valori sono diversi, quindi i punti si trovano in posizioni diverse quando passano al livello dell'altro. Con la legge $B(t)=(3-t;3)$ entrambe le uguaglianze varrebbero invece a $t=1{,}5\,\mathrm s$.

**Com'è ora**

> Qui le ascisse sono uguali quando $t=4-t$, cioè $2t=4$ e $t=2\,\mathrm s$. Le ordinate sono uguali quando $2t=3$, cioè $t=1{,}5\,\mathrm s$. I due istanti sono diversi, quindi nessun istante soddisfa entrambe le condizioni e i punti non si incontrano. Con la legge $B(t)=(3-t;3)$ le ascisse sarebbero uguali quando $t=3-t$, cioè a $t=1{,}5\,\mathrm s$, lo stesso istante delle ordinate. In quel caso i due punti si incontrerebbero in $P$.

Lo studente non vedeva da dove venissero $2\,\mathrm s$ e $1{,}5\,\mathrm s$, e la conclusione («al livello dell'altro») non diceva che i punti non si incontrano. È il procedimento usato nella scheda 2 (esercizio 3) e nella domanda 26.

## Errori trovati nell'originale

Nessun errore numerico: tutti i conti (teoria, schede 1-8, esercizi 1-14, domande lette) sono stati rifatti e coincidono. Correzioni di logica nel testo: «Perciò sostituendo $v_x=+4$…» (il «perciò» non seguiva da nulla) e la frase sull'incontro citata sopra.

## Aggiunte per coprire gli esercizi

- **rapidità** (usata in quasi tutte le schede e domande, mai definita in teoria): definita nell'esempio della bicicletta.
- **quadrante**, **cateti/Pitagora**, **distanza percorsa** (schede 1-2, domande 1, 2, 17, 50).
- **radiante** come arco lungo quanto il raggio e conversione angolo → giri (esercizio 13, domande 13, 36, 37, 39, 73).
- **reciproco** e $T=1/f$ (schede 5-6, domande 6, 30, 68).
- **incontro** come sistema delle due condizioni allo stesso istante (scheda 2, domanda 26).
- **accelerazione media** come variazione del vettore velocità sul tempo (domande 74, 87, 88).
- **area sotto il grafico velocità-tempo** e velocità media nel moto uniformemente accelerato (scheda 4, domande 25, 28).

## Dubbi rimasti

- Le coppie di coordinate usano sia la virgola, $(x,y)$, $(8,2)$, sia il punto e virgola, $(6;-3)$, come nell'originale e negli esercizi; ho spiegato il punto e virgola alla sua prima comparsa e lasciato le virgole dove erano.
- Nell'osservazione sull'accelerazione media la durata del mezzo giro non è data (come nell'originale), quindi il valore dell'accelerazione media non è calcolato.
- Domanda 55 usa «assi cartesiani ortonormali», termine non presente in teoria; non l'ho introdotto per non allungare (la teoria parla di assi perpendicolari con la stessa unità di misura implicita).
- Inglese: grafia britannica come il file esistente (metres, centre, anticlockwise). La frase sul punto e virgola dice che è la convenzione italiana, perché nell'inglese la virgola non è il separatore decimale.
