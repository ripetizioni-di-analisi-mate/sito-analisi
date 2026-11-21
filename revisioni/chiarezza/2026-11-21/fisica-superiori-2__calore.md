# Fisica 2° anno · Calore e calorimetria · revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-2 calore`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO.

**Parole**: italiano 2577 → 4369 (×1,70); inglese 2581 → 4580 (×1,77). Blocchi 22, esempi 7, figure 11, come prima. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle figure identici. Nessun blocco nuovo, nessun contenuto tolto, dati numerici degli esempi invariati. Una prima stesura era a ×1,76: ho tolto le frasi che ripetevano a parole i titoli delle figure.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**: equilibrio termico, sistema, bilancio, confine, ambiente, isolato, lavoro, fase, proporzionale e inversamente proporzionale, calore specifico (con l'unità letta a parole), modulo, campione, pendenza, capacità termica, omogeneo, potenza dispersa, trascurabile, temperatura di equilibrio, media pesata, energia netta, calorimetro, potenza nominale, rendimento, potenza utile, temperatura di regime, fluido, conducibilità termica, regime stazionario, gradiente, resistenza termica, in serie, interfaccia, in parallelo, resistenza equivalente.
2. **Simboli e sigle**: J, SI, °C e K (con il fatto che una variazione di 1 °C vale 1 K), kJ, W = J/s, $\Delta$, $\eta$, $\Sigma$, $\simeq$, i pedici $i$ e «cal», H₂O e Cu.
3. **Passaggi di calcolo completi**: formula inversa $\Delta T=\dfrac{Q}{mc}$ ricavata; conti intermedi scritti (2100/2100, 2100/200, 270·30, 500−80, 160/0,40, 120−80, 0,04·5·20 = 4, 4/0,10, 24−(−6), 24−26…); dimostrazione della media pesata riga per riga con proprietà distributiva e raccoglimento; formula di $T_f$ con $E_{\mathrm{est}}$ scritta per intero; 50 °C ricavato da $8(T-20)=240$; rendimento complessivo mostrato come media pesata con i numeri.
4. **«Capacità termica» usata prima della sua definizione** (esempi della sezione «Calore specifico») sostituita con «ogni kelvin richiede … J».
5. **Casi in elenco**, uno per riga: segni di $Q$, contributi del bilancio, i due modi di scaldare l'acqua, ipotesi dell'equilibrio e della parete, calorimetro alla stessa o a diversa temperatura, le tre temperature del campione con dispersioni, i tre modi di trasmissione con un esempio quotidiano ciascuno, le tre regole delle vie in parallelo.
6. **Voce impersonale** al posto di «vogliamo», «prendiamo», «consideriamo»; tolti «conviene usare» e «va pesato».
7. **Figure**: ogni figura ha accanto una frase su che cosa mostra, senza ripetere il titolo.

## Com'era / Com'è ora (blocco `#bilancio-aperto`)

**Com'era**

> Se al sistema arriva energia dall'esterno e gli altri contributi al bilancio sono trascurabili, la somma dei termini $C_j(T_f-T_{j,i})$ è l'energia netta $E_{\mathrm{est}}$ fornita dall'esterno. Il risultato si sposta rispetto alla media pesata per il termine $\dfrac{E_{\mathrm{est}}}{\sum_j C_j}$.

**Com'è ora**

> Se invece al sistema arriva energia dall'esterno e gli altri contributi al bilancio sono trascurabili, la somma dei calori delle parti è uguale all'energia **netta** $E_{\mathrm{est}}$ ricevuta dall'esterno, cioè l'energia entrata meno quella uscita. Con due parti si scrive
> $$C_1(T_f-T_{1,i})+C_2(T_f-T_{2,i})=E_{\mathrm{est}}.$$
> Ricavando $T_f$ con gli stessi passaggi del caso isolato si trova la media pesata più il termine $\dfrac{E_{\mathrm{est}}}{C_1+C_2}$:
> $$T_f=\frac{C_1T_{1,i}+C_2T_{2,i}}{C_1+C_2}+\frac{E_{\mathrm{est}}}{C_1+C_2}.$$
> Con più parti il denominatore è la somma di tutte le capacità, che si scrive $\sum_j C_j$; la lettera greca $\Sigma$ (*sigma* maiuscola) indica una somma.

Lo studente si perdeva perché l'indice $j$, il simbolo $\Sigma$ e la parola «netta» non erano spiegati e la formula di $T_f$ non era mai scritta.

## Errori nell'originale

Nessuno. Tutti i numeri ricalcolati con Python (2100/200 = 10,5; 270·30; 420/0,40; pendenze 400 e 40; media 30 °C e 35 °C con 4000 J; tabella −7,2/−6,4/−5,6 kJ; 450 W e 40 s; 5600 + 5600 J, 20 K, 0,747; 50 °C; 40 W; 20 W con salti 5 e 15 K; 0,45 K/W; interfaccia 20 °C e −2 °C) coincidono, anche con le figure.

## Aggiunte per coprire esercizi e domande

- **Variazione in °C = variazione in K** (schede 2, domande 17-18) in `#specifico`.
- **Cambiamento di stato a temperatura costante** (domande 62 e 67) in `#specifico`, con rimando al capitolo sui cambiamenti di stato.
- **Equilibrio termico** (domanda 60) e **SI** (domanda 59) in `#calore`.
- **Pendenza con gli assi scambiati = 1/C** (domanda 24, scheda 2) in `#capacita`.
- **Pesi = masse per la stessa sostanza** e **tre o più corpi** (scheda 5, domande 5, 28, 32) in `#equilibrio`.
- **Energia dispersa = fornita − assorbita**, con un caso numerico nuovo (5000 J, 400 J/K, 10 K) (traccia 9, domanda 9) in `#bilancio-aperto`.
- **Calorimetro** definito, caso numerico della capacità sommata (0,20 kg d'acqua + 160 J/K) e **massa d'acqua equivalente** (domanda 58) in `#riscaldamento`.
- **Potenza nominale, rendimento in percentuale, potenza utile** (schede 6, domande 6, 35-39) in `#potenza-utile`.
- **Gradiente in K/m** (domanda 46, scheda 7), **potenza per metro quadrato** (domanda 47) e **regime stazionario** in `#parete`.
- **Ponte termico** (domanda 85) in `#vie-termiche-parallele`.

## Note su schede e domande (non corrette)

- Domande 21, 27, 48, 56: opzioni scritte come decimali troncati (`0{,}33333333`, `0{,}66666667`, `0{,}11111111`) invece che come frazioni in colonna.
- Scheda 1 es. 1 e scheda 6 es. 1: il simbolo $\simeq$ davanti a risultati esatti (10080 J, 63 s). Scheda 4 es. 1 e traccia 4: risultato con sei cifre ($454{,}545$, $228{,}571$) per dati a due cifre.
- Formule degli svolti con l'ordine dei fattori invertito ($Q=\Delta T\,c\,m$, $P=\dfrac{A\Delta T k}{d}$) rispetto alla teoria: non è un errore.

## Dubbi rimasti

- Dati d'esercizio: $c$ dell'acqua 4200 e del rame 400 J/(kg K) come nell'originale (valori reali circa 4186 e 385); non li ho presentati come dati reali.
- L'inglese ha 4580 parole (×1,77), entro il limite di 1,8. Grafia britannica come nel file esistente (metre, neighbouring); termini come nelle schede inglesi (rated power, efficiency, steady state, thermal bridge, temperature gradient).
- Non ho eseguito la build del sito: lo script di controllo ha reso entrambi i file senza errori (307 formule, 35 figure/svg ciascuno).
