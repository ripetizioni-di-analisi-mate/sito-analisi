# Matematica finanziaria

Corso autonomo per Università > Economia, con URL e accesso `matematica-finanziaria`.

Contiene dieci capitoli, 80 schede (due svolgimenti per scheda), 140 esercizi con soluzione finale e 900 quiz con spiegazione, 90 per capitolo. Le prime tre schede di ogni capitolo sono gratuite; il banco dei quiz espone dieci ID dimostrativi fissi complessivi. I materiali didattici sono in italiano; le etichette del catalogo sono disponibili anche in inglese, tedesco, spagnolo e francese.

## Controlli

- `node strumenti/finanziaria/verifica.mjs` controlla YAML, ancore, formule KaTeX e struttura dei 1.130 Markdown.
- Dopo la build, `npm run test:finanziaria` controlla l’accesso tramite il Worker reale: corso indipendente da Matematica generale, anteprime, soluzioni, quiz e configurazione del pagamento.

I Markdown in `src/content` sono la fonte del corso. In ogni capitolo i quiz da 1 a 14 riprendono le tracce. Le altre domande alternano calcoli brevi e applicazioni della teoria. I distrattori riproducono errori di impostazione, di segno, di scadenza o di conversione.

Il generatore `genera.py`, il registro `controlli.json` e il verificatore numerico `verifica.py` fanno riferimento ai dati della prima versione del corso, nel commit `e75424dc`. Eseguire il generatore sulla revisione del corso sovrascrive gli esercizi e i quiz con quelli della prima versione.

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
