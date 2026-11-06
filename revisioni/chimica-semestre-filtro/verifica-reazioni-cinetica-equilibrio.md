# Verifica: reazioni, cinetica ed equilibrio

Contenuti prodotti: 1 capitolo di teoria in 9 sezioni con 14 ancore, 10 schede svolte contenenti 20 esercizi, 14 esercizi da risolvere e 14 domande a tempo. Le prime 3 schede svolte sono gratuite.

Copertura: conservazione di atomi e cariche, bilanciamento, avanzamento e limitante, velocità normalizzata, ordini sperimentali e molecolarità, meccanismi a più stadi, leggi integrate di primo e ordine zero, Arrhenius, urti e stato di transizione, catalisi ed enzimi, equilibrio dinamico e stato stazionario, azione di massa e attività, Q/K e Gibbs, Le Chatelier e temperatura, combinazione di equilibri, Kps/precipitazione/ione comune e cenni chimici agli urati e all'ossalato di calcio.

Controlli eseguiti:
- `strumenti/yamlcheck.py` sui 39 file: zero errori.
- Verifica dei 10 × 2 esercizi nelle schede, dei flag gratuiti, delle ancore frontmatter e dei rimandi dei quiz: superata.
- Tutti i quiz hanno 4 alternative distinte e indice corretto valido; distribuzione delle posizioni 1/2/3/4 = 3/4/3/4.
- Ricalcolo indipendente con Python di 23 risultati numerici, compresi Arrhenius, Gibbs, stechiometria e solubilità: superato, tolleranze `rel_tol=1e-10`, `abs_tol=1e-12` per i valori non arrotondati.
- Rendering KaTeX di tutte le 481 formule estratte dai file, con `throwOnError: true`: nessun errore.
- Bilanciamenti di materia e carica e risultati concettuali ricontrollati durante la stesura.

Le costanti termodinamiche sono adimensionali e riferite ad attività; gli esercizi con concentrazioni esplicitano soluzione ideale e stato standard. Le approssimazioni di ione comune sono controllate a posteriori. Le note su precipitazione nei liquidi biologici descrivono equilibri chimici e non indicazioni cliniche.

La build Astro, l'integrazione del catalogo e la verifica visiva rimangono al processo proprietario del sito.
