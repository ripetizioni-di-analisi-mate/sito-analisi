# Revisione di chiarezza · Matematica 1° anno · Dati e statistica descrittiva

Parole: italiano 2364 → 3969 (×1,68); inglese 2331 → 4055 (×1,74, traduzione integrale). Controllo `strumenti/controlla_capitolo.py`: **a posto**, nessun ERRORE né AVVISO.

## Che cosa è cambiato
1. Definiti alla prima comparsa termini e simboli prima dati per noti: unità statistica, carattere qualitativo/quantitativo (nominale, ordinale, discreto, continuo, con il motivo per ciascun caso), disgiunte ed esaustive, il simbolo $\sum$ (sigma), percentuale, frequenza cumulata, $\alpha$ (alfa), settore, la scrittura $[a,b)$, ampiezza, addendo, $\bar x$ («x segnato»), media pesata e peso, identità, dispersione.
2. Calcoli spezzati in passaggi su righe separate: cumulata colonna per colonna, angoli del diagramma circolare per $A$, $B$, $C$, media dei due gruppi, densità dell'istogramma, estremi della quota con le risposte mancanti.
3. Situazioni con più oggetti simili messe in elenco (tre caratteri dell'indagine, due turni, posizioni dei dati nella mediana, tre usi del riepilogo).
4. Dimostrazione della media pesata riscritta in passi brevi, uno per riga.
5. Ogni figura ha ora una frase che dice che cosa mostra (assi, pallini pieni e vuoti della cumulata, settori, linea tratteggiata della media).
6. Tolto il tono prescrittivo («Si deve specificare», «occorre usare», «è opportuno affiancare», «deve lasciare scegliere») sostituendolo con fatti.
7. Nel blocco `:::attenzione` sui codici aggiunto il controesempio numerico ($\frac53$ contro $\frac73$).

## Com'era / Com'è ora (cumulata e lettura della tabella)
**Com'era**: «La cumulata cresce aggiungendo ogni volta il conteggio della colonna successiva. Al valore $2$ si aggiungono $8$ osservazioni alla cumulata precedente, che era $8$. Se si avesse soltanto la riga cumulata, si ritroverebbe la frequenza di $2$ con la differenza $16-8=8$.» (Nessuna definizione di cumulata prima; i due «8» si confondono; la notazione $N(x)$ usata nel grafico e negli esercizi non era spiegata.)

**Com'è ora**: definizione nel blocco delle frequenze («La frequenza cumulata di un valore è il numero di osservazioni minori o uguali a quel valore…»), poi nell'esempio i quattro passaggi $3$; $3+5=8$; $8+8=16$; $16+4=20$, uno per riga, e «La cumulata fino al valore $x$ si indica con $N(x)$, quindi $N(1)=8$ e $N(2)=16$… la frequenza di $2$ si ritroverebbe con la differenza $N(2)-N(1)=16-8=8$.»

## Errori nell'originale corretti
- Frazioni in linea ($12/3$, $18/6$, $108/36$, $18/12$, $f_i/h_i$) portate in colonna. Nessun errore di calcolo: tutti i numeri sono stati ricalcolati con Python e sono giusti.

## Termini degli esercizi aggiunti alla teoria
- **Unità statistica** (scheda «Tipi di dati»), in `#dati`.
- **Scarto dalla media** e somma degli scarti nulla (scheda «Media e frequenze»), nell'esempio della media come equilibrio e nell'osservazione successiva.
- Notazioni $\operatorname{Med}$, $x_{(k)}$ e $N(x)$ (schede su mediane e frequenze), in `#mediana-moda` e nell'esempio della tabella.
- $R$ per il campo di variazione (scheda «Moda e dispersione»), in `#dispersione`.
- **Tasso di risposta** (scheda «Leggere criticamente un riepilogo»), nell'esempio delle risposte mancanti.

## Dubbi
- Nessuno sui contenuti. La lunghezza italiana è vicina al tetto (×1,68).
