# Matematica 1° anno: contenuti e controllo

## Estensione

Il corso comprende 12 capitoli del primo anno delle superiori, con particolare attenzione al liceo scientifico. I temi del biennio la cui collocazione può variare tra prima e seconda sono segnalati nelle rispettive introduzioni. Non vengono anticipati sistemi di secondo grado, trigonometria, logaritmi o analisi matematica.

Per ciascun capitolo sono presenti:

- una teoria originale con percorso iniziale, definizioni, proprietà, esempi e almeno sei sezioni;
- otto schede svolte con tre esercizi ciascuna, raggruppati per abilità;
- quattordici esercizi da fare con soluzione finale;
- novanta domande a tempo autonome, ciascuna con quattro alternative e spiegazione del procedimento.

Totali: **12 teorie, 96 schede svolte, 288 esercizi svolti, 168 tracce e 1.080 domande a tempo**. Le prime tre schede svolte di ogni capitolo hanno il contrassegno gratuito previsto dal sito.

## Programma

1. Numeri, operazioni e frazioni.
2. Potenze, proporzioni e percentuali.
3. Insiemi, logica, relazioni e prime funzioni.
4. Monomi e polinomi.
5. Prodotti notevoli.
6. Scomposizione dei polinomi.
7. Frazioni algebriche.
8. Equazioni di primo grado.
9. Disequazioni di primo grado.
10. Geometria del piano e triangoli.
11. Parallele e quadrilateri.
12. Dati e statistica descrittiva.

Le teorie di insiemi e geometria comprendono diagrammi, figure e ragionamenti di congruenza. Le definizioni di rettangolo, rombo e quadrato sono inclusive; la convenzione sul trapezio è dichiarata.

## Costruzione delle domande

Ogni capitolo contiene diciotto famiglie didattiche con cinque varianti. I modelli alternano calcolo, formulazione inversa, verifica di condizioni, problemi concreti, interpretazione e riconoscimento di errori tipici. Nelle schede svolte vengono accostate tre richieste correlate, invece di ripetere soltanto lo stesso calcolo con numeri diversi.

Le risposte corrette occupano le quattro posizioni rispettivamente 23, 23, 22 e 22 volte per capitolo. Anche le alternative presenti negli esercizi da fare sono ruotate. I risultati numerici usano aritmetica esatta; i confronti fra espressioni razionali usano cancellazione algebrica con Sympy. Gli insiemi sono confrontati come insiemi, senza affidarsi alla sola differenza fra stringhe.

Le condizioni dei denominatori e del divisore sono esplicite. Gli intervalli distinguono estremi inclusi ed esclusi; nelle disequazioni la divisione per un coefficiente negativo inverte il verso. Nei problemi geometrici vengono specificati ordine dei punti, angoli compresi e corrispondenze dei vertici.

## Verifiche effettuate

- Revisione indipendente delle 216 famiglie e delle 12 teorie.
- Ricalcolo indipendente dei 1.080 quiz e delle varianti usate nelle schede e nelle tracce.
- Rimozione delle collisioni fra alternative che comparivano per particolari valori dei parametri.
- Assegnazione di varianti distinte alle ripetizioni della stessa famiglia nelle schede svolte.
- Verifica strutturale delle 1.080 domande: quattro alternative distinte, testo autonomo, spiegazione presente e posizioni bilanciate.
- Controllo KaTeX delle 7.220 formule inline nelle domande.
- Controllo YAML, conteggi, tre esercizi per scheda, soluzioni delle tracce e corrispondenza delle ancore alla teoria.
- Normalizzazione dei blocchi matematici delle teorie con delimitatori display su righe separate.

La verifica di rendering e la build del sito sono registrate nel controllo complessivo del rilascio.

## Riproducibilità

Il generatore è `strumenti/genera-matematica-prima.py`. Le teorie rimangono sorgenti Markdown manuali e non vengono sovrascritte dal generatore.

Comando di rigenerazione, con audit facoltativo fuori dal repository:

```sh
python strumenti/genera-matematica-prima.py --audit /tmp/audit-matematica-prima.json
```

L’audit comprende 1.536 record: domande, singoli esercizi svolti e tracce. Registra famiglia, variante, valori esatti, alternative effettive, indice della risposta corretta, procedimento e file di destinazione.
