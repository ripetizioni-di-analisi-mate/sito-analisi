# Integrali doppi e tripli: primo giro

Riletti la teoria, le 8 schede svolte e le 14 tracce; tutti i risultati ricalcolati con sympy (nessun errore numerico trovato).

## Modifiche fatte

- `dafare/analisi-2/integrali-doppi-e-tripli/10.md` (e versione inglese), traccia e soluzione: c'era $\iint (x^3 + 3)$ sul cerchio unitario, identico all'esempio già risolto nel blocco teorico *Funzioni dispari su domini simmetrici* (risultato $3\pi$ scritto nella teoria); ora è $\iint (x^3 + 5y + 2)$ sul cerchio $x^2 + y^2 \leq 4$, che usa entrambe le simmetrie, con risultato $8\pi$ (verificato con sympy). Didattica.
- `teoria/analisi-2/integrali-doppi-e-tripli.md`, blocco *Integrale triplo*: tolto "come si vede nel paragrafo sulle applicazioni", riferimento alla struttura della pagina vietato dalla guida. Editoriale.
- `svolti/analisi-2/integrali-doppi-e-tripli/8.md` (e versione inglese), esercizio 2, figura: i due paraboloidi non erano identificati (nessuna etichetta né legenda, una curva continua e una tratteggiata); aggiunta la legenda $z = x^2$, $z = 2 - x^2$. Figure.

## Modifiche da fare

- Teoria, blocco *Linearità, additività, monotonia* e schede 2-3: lo studente legge che "molte regioni che non sono normali si spezzano nell'unione di domini normali", ma nessun esercizio svolto lo fa. Proposta: aggiungere alla scheda 2 (o in una nuova scheda) un esercizio su un dominio da spezzare in due parti, per esempio la regione dell'esercizio 3 della scheda 2 descritta rispetto all'asse $x$, oppure un dominio a forma di L.
- Scheda 3 (scambio dell'ordine): tutti e tre gli esercizi hanno un triangolo o una regione che resta normale in un solo pezzo dopo lo scambio. All'esame compare spesso lo scambio in cui il nuovo ordine richiede di spezzare il dominio (per esempio $\int_0^2 \int_{x/2}^{\sqrt{x}} \ldots$ o estremi con una spezzata). Proposta: un quarto esercizio di questo tipo.
- Scheda 7 (cilindriche e sferiche): manca il solido "a cono gelato" (palla tagliata da un cono, $\varphi \in \left[0, \dfrac{\pi}{4}\right]$), che è la tipologia d'esame più frequente in coordinate sferiche ed è l'unica in cui l'estremo in $\varphi$ non è $\pi$ o $\dfrac{\pi}{2}$. Proposta: aggiungerlo come esercizio 5 o in sostituzione dell'esercizio 3.
- Scheda 8 (volumi, masse e baricentri): tutti i baricentri sono di lamine piane. Proposta: aggiungere il baricentro di un solido omogeneo (semipalla o cono), che usa l'integrale triplo e la terza coordinata $\bar{z}$ citata nella teoria ma mai calcolata.
- Teoria, figura del teorema *Funzioni dispari su domini simmetrici*: l'etichetta $D^-$ compare nella figura ma $D^-$ è definito solo nella dimostrazione, che è chiusa per default. Proposta: definire $D^-$ nell'enunciato (una mezza frase accanto a $D^+$) oppure togliere l'etichetta dalla figura.
- Teoria, sezione *Cambiamento di variabili*: l'osservazione sul Jacobiano reciproco non ha un'ancora, quindi la scheda 5 (esercizio 2), che la usa, non può citarla nel campo `teoria`. Proposta: aggiungere un'ancora (per esempio `#jacobiano-inverso`) e citarla nella scheda 5 e nella traccia 8.
