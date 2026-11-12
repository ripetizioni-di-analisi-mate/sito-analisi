# Matematica finanziaria

Corso autonomo per Università > Economia, con URL e accesso `matematica-finanziaria`.

Contiene dieci capitoli, 80 schede (due svolgimenti per scheda), 140 esercizi con soluzione finale e 320 quiz con spiegazione. Le prime tre schede di ogni capitolo sono gratuite; il banco dei quiz espone dieci ID dimostrativi fissi complessivi. I materiali didattici sono in italiano; le etichette del catalogo sono disponibili anche in inglese, tedesco, spagnolo e francese.

## Controlli

- `python3 strumenti/finanziaria/genera.py` rigenera gli esercizi originali dai parametri riproducibili e il registro delle equazioni da verificare.
- `python3 strumenti/finanziaria/verifica.py` verifica 620 risultati mediante residui di equivalenza, ricorrenze dei prestiti, differenze finite delle derivate e controllo del surplus immunizzato.
- `node strumenti/finanziaria/verifica.mjs` controlla YAML, ancore, formule KaTeX e struttura dei 550 Markdown.
- Dopo la build, `npm run test:finanziaria` controlla l’accesso tramite il Worker reale: corso indipendente da Matematica generale, anteprime, soluzioni, quiz e configurazione del pagamento.

## Programma

1. Regimi finanziari e tassi equivalenti.
2. Equivalenza finanziaria e valutazione dei flussi.
3. Rendite costanti, differite e perpetue.
4. Rendite variabili, flussi continui e costituzione di capitale.
5. Ammortamento dei prestiti e debito residuo.
6. VAN, TIR e confronto degli investimenti.
7. Titoli obbligazionari, prezzi e rendimenti.
8. Struttura a termine, tassi forward e arbitraggio.
9. Duration, convexity e sensibilità dei prezzi.
10. Immunizzazione finanziaria e gestione del rischio di tasso.

Il perimetro è stato confrontato con i programmi ufficiali dell’Università di Bologna (Matematica finanziaria 2026/2027), dell’Università di Urbino (Matematica finanziaria 2026/2027) e dell’Università di Pisa. I contenuti e gli esercizi sono originali. I programmi universitari possono includere ulteriori moduli, per esempio derivati e opzioni, che questo corso non presenta come coperti.

Riferimenti per il confronto dei programmi:

- https://www.unibo.it/it/studiare/insegnamenti-competenze-trasversali-moocs/insegnamenti/insegnamento/2026/518616
- https://www.uniurb.it/insegnamenti-e-programmi/271620
- https://esami.unipi.it/programma.php?c=58474

## Stato prima della pubblicazione

Il prezzo proposto è 49 euro, come per Statistica e probabilità. Il checkout Stripe usa il prezzo di `src/data/prezzi.json` e associa l’acquisto allo slug del corso. L’acquisto di Matematica generale non concede automaticamente accesso a Matematica finanziaria.
