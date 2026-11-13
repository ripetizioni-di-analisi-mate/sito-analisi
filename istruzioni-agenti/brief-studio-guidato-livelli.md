# Classificazione delle domande a tempo per lo «Studio guidato»

Repository: /home/claude/sito-analisi (solo lettura: NON modificare nessun file del repository).
Domande: src/content/domande/<materia>/<argomento>/<n>.md (frontmatter `corretta`, testo, quattro risposte, `## Spiegazione`).

Lo Studio guidato è un test adattivo: se lo studente risponde bene la domanda successiva è di livello più alto, se sbaglia è più bassa; se sbaglia anche il livello base, il test scende alle basi (Precorso). Per funzionare ogni domanda ha bisogno di:

1. **livello** (1, 2 o 3), giudicato leggendo testo, risposte e spiegazione:
   - 1 = base: applicazione diretta di una definizione, di una formula o di una regola, uno o due passaggi immediati (es. limite per sostituzione o con una scomposizione evidente; derivata di una funzione elementare; disequazione di primo grado; proprietà diretta delle potenze).
   - 2 = medio: procedimento tipico dell'argomento in più passaggi, una tecnica standard (limiti notevoli, regola della catena, integrazione per sostituzione semplice, disequazione fratta con studio del segno, equazione logaritmica con condizioni di esistenza).
   - 3 = avanzato: più tecniche combinate, parametri o casi da distinguere, Taylor e confronto asintotico, ipotesi di teoremi da verificare, risposte sbagliate costruite su errori sottili.
   Giudica la difficoltà per uno studente che sta preparando l'esame, non per un docente. Non forzare tre fasce uguali, ma in ogni argomento devono esserci almeno 15 domande per ciascun livello: se un livello resta sotto 15, rivedi i casi di confine.
2. **abilita**: l'abilità specifica verificata, scelta da un elenco di 4-8 abilità che definisci PRIMA per ogni argomento (nomi brevi in italiano, 2-6 parole, comprensibili da uno studente, es. «Disequazioni fratte», «Forme indeterminate 0/0», «Limiti notevoli», «Regola della catena»). Ogni abilità deve avere almeno 6 domande; usa esattamente gli stessi nomi in tutto l'argomento.

Output: per ogni argomento un file JSON in /home/claude/sg-classi/<materia>__<argomento>.json con questa forma esatta:
{"materia":"analisi-1","argomento":"limiti","abilita":["Forme indeterminate 0/0", "..."],"domande":{"limiti/1":{"livello":1,"abilita":"Forme indeterminate 0/0"}, "...": {}}}
Le chiavi di "domande" sono "<argomento>/<n>" per TUTTI i file .md dell'argomento (90 per argomento). Controlla alla fine con un piccolo script che ogni file abbia una voce, che i livelli siano 1-3 e che ogni abilità usata sia nell'elenco. Rispondi solo con un riepilogo breve (conteggi per livello e per abilità di ogni argomento).
