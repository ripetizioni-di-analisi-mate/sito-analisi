# Matematica 2° anno · Statistica descrittiva — revisione di chiarezza

**Parole**: italiano 2424 → 4064 circa (×1,67); inglese 2323 → 4150 circa (×1,78). Controllo: `ESITO: a posto` (nessun errore, nessun avviso).

## Che cosa è cambiato
- **Termini definiti alla prima comparsa** che prima mancavano: statistica descrittiva, indice, unità, **modalità** (usata in tutto il capitolo e negli esercizi senza definizione), frequenza assoluta, frequenza percentuale, disgiunte / esauriscono, rango, classe, ampiezza, densità, diagramma a scatola, settore, base del grafico, media ponderata e pesi, addendo, valore assoluto, trasformazione lineare, media dei quadrati, punto medio.
- **Simboli spiegati**: lettura di $\sum$ (sigma maiuscola), $\bar x$ («x segnato»), $\sigma^2$ («sigma quadro»), indici $n_i$, $f_i$, notazione degli intervalli $[2,5)$ (tolta anche la frase con «la parentesi quadra»), $|a|$.
- **Passaggi di calcolo esplicitati** in tutti gli esempi (media ponderata, scarti, quartili con il conto dei ranghi, varianze di A e B, tabella della varianza, cambio di unità) e nelle dimostrazioni di #media, #secondo-momento (sviluppo del quadrato su tre righe) e #deviazione (anche il perché di $\bar y=a\bar x+b$).
- **Regole in elenco**: casi pari/dispari della mediana con un esempio ciascuno; procedura del rango superiore in tre punti; tipi di carattere; somme delle frequenze.
- **Motivi aggiunti**: perché la varianza usa i quadrati; perché la quota complessiva dei turni è diversa dalla media delle quote; perché il rapporto fra le altezze vale solo con l'asse da zero.
- Tolti la prima persona («Indicheremo») e il tono prescrittivo («Prima di scegliere un indice conviene controllare…», ora frase di fatto su quando gli indici sono esatti o approssimati).
- Inglese: traduzione integrale del testo finale, grafia britannica (centre, centimetres, summarises).

## Com'era / Com'è ora (esempio dei termometri, #grafici)
**Com'era**: «Due termometri in una prova di laboratorio registrano rispettivamente 21 e 24 gradi Celsius. In entrambi i grafici i valori differiscono di 3 gradi. Con una base a 20, i tratti visibili sono alti 1 e 4 gradi. Il secondo tratto è quattro volte il primo, perché in entrambi i casi vengono omessi i gradi da 0 a 20. Confrontare i due valori in Celsius richiede di dichiarare la scala e l'origine.»
(«base», «tratti visibili» mai definiti; «in entrambi i casi vengono omessi» è falso per il primo grafico, che parte da 0.)

**Com'è ora**: «La differenza fra le due misure è 24−21=3 gradi.
– Nel primo grafico l'asse verticale parte da 0. Le barre sono alte 21 e 24, e la seconda supera la prima di poco.
– Nel secondo grafico l'asse verticale parte da 20, cioè la base del grafico è 20. Le parti visibili delle barre sono alte 21−20=1 e 24−20=4, quindi la seconda appare quattro volte la prima.
In entrambi i grafici le misure differiscono di 3 gradi. Il rapporto visibile 4 nasce dal fatto che nel secondo disegno mancano i gradi da 0 a 20. Il rapporto fra le altezze visibili coincide con il rapporto fra le misure soltanto quando l'asse verticale parte da 0…»

## Errori trovati nell'originale
- Esempio dei termometri: «in entrambi i casi vengono omessi i gradi da 0 a 20» era impreciso (il primo grafico parte da 0). Riscritto come sopra.
- Tutti gli altri numeri ricalcolati con Python (frazioni esatte): corretti.

## Aggiunto in teoria per coprire esercizi e domande
- Notazioni $M_e$, $\operatorname{Med}$, $x_{(k)}$ (svolti 3-4, domande 3-4) e $R$ per il campo di variazione (svolti 7-8); campo di variazione definito già nell'esempio dei quartili, dove compare per la prima volta.
- Media con le frequenze relative $\bar x=\sum_i v_i f_i$ (svolto 2, domanda 47).
- Mediana e quartili sotto $y=ax+b$: con $a>0$ mediana $aM_e+b$ e distanza interquartile per $a$; con $a<0$ mediana $aM_e+b$ (domande 38, 52, 54). Messo in coda al blocco #deviazione.
- Uso inverso della formula della media dei quadrati (domande 26, 70).
- Classe con la barra più alta contro classe più numerosa, con i numeri dell'esempio delle durate (svolto 5).

## Segnalazioni su esercizi e domande (non toccati)
- Domande 86 e 87 sono quasi identiche (cambia solo la deviazione standard, 2 o 3): doppione.
- Domanda 5: «Il valore centrale del testo non è rilevante…» frase poco chiara per uno studente del 2° anno.

## Dubbi
- In inglese «modalità» è resa con «values or categories», come nel file esistente.
