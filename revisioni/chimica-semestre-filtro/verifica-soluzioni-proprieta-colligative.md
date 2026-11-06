# Verifica dell'unità Soluzioni e proprietà colligative

Prodotti 39 contenuti italiani: 1 teoria (9 sezioni, 19 ancore), 10 schede svolte con 20 esercizi originali, 14 tracce con risposta finale e 14 domande a quattro alternative con spiegazione. Le prime tre schede svolte sono gratuite. Le posizioni corrette dei quiz sono distribuite 4/4/3/3.

Il programma include miscele e dispersioni, soluzioni gassose/liquide/solide, acqua e solvatazione, elettroliti, concentrazioni percentuali e molari, molalità e frazioni molari, diluizioni, equivalenti, attività/non idealità, Dalton e aria umida, Henry con convenzione esplicita della costante, Raoult, ebullioscopia/crioscopia, fattore di van't Hoff, diffusione/Fick, osmosi/pressione osmotica, osmolarità/osmolalità, tonicità, fisiologica/glucosata ed esempi di emolisi/edema. La trattazione distingue esplicitamente soluti permeanti, isoosmolarità e tonicità nel tempo.

Controlli eseguiti:
- `strumenti/yamlcheck.py` sui 39 file: zero errori.
- Analisi dei 39 file: numerazione completa, esattamente due esercizi per scheda, un blocco soluzione per traccia, quattro alternative distinte per quiz, corretta in 1–4, tutte le ancore referenziate esistenti.
- Compilazione diretta KaTeX con `throwOnError: true` e `strict: error` delle 471 formule: zero errori.
- Ricalcolo indipendente in Python di 41 risultati numerici di teoria, svolti e tracce tramite bilanci di massa/moli, percentuali, concentrazioni, Dalton/Henry, Raoult, crioscopia/ebullioscopia, van't Hoff e Fick: tutte le verifiche numeriche superate.
- Revisione qualitativa delle classificazioni e dei quiz: nessuna alternativa aggiuntiva corretta; le conclusioni sulla tonicità riportano membrana e permeabilità richieste.

Le classificazioni delle miscele sono presentate in tabelle per permettere il ritorno a capo sui telefoni. La build Astro e la verifica delle pagine integrate sono affidate al processo di integrazione; questo controllo riguarda i soli contenuti dell'unità. Non sono stati modificati catalogo, prezzi, configurazione, altre unità o produzione.
