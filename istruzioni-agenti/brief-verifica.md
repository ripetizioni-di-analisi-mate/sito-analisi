# Verifica matematica di argomenti di "Algebra lineare e geometria analitica"

Repository: /home/claude/sito-analisi1. Non usare git, non lanciare la build. Modifica solo i file dei tuoi argomenti.

Per ciascun argomento assegnato (materia `algebra-lineare`):
- teoria: `src/content/teoria/algebra-lineare/<slug>.md`
- esercizi svolti: `src/content/svolti/algebra-lineare/<slug>/*.md`
- esercizi da fare: `src/content/dafare/algebra-lineare/<slug>/*.md` (risultato nel blocco `:::soluzione`)

Questi file sono stati scritti da un altro autore e saranno venduti a studenti universitari: un risultato sbagliato è l'errore più grave possibile. Il tuo compito è controllarli in modo indipendente, senza fidarti dei conti scritti.

## Cosa fare
1. Per OGNI esercizio svolto e OGNI traccia da fare: ricalcola il risultato da zero con Python + sympy (`pip install --break-system-packages sympy` se manca; esegui gli script da /tmp/lavoro/verifica, non dal repository). Controlla anche i passaggi intermedi scritti negli svolti (matrici ridotte, determinanti, polinomi caratteristici, basi, coordinate, distanze, forme canoniche, discussioni con parametro: tutti i casi, inclusi i valori eccezionali).
2. Nella teoria: verifica che ogni enunciato abbia ipotesi corrette e complete, che le dimostrazioni siano corrette e che gli esempi numerici tornino.
3. Controlla il formato: ogni ancora citata nei campi `teoria:` di svolti e tracce esiste come `#id` nel file di teoria; i blocchi `:::`/`::::` sono bilanciati; le schede 1-3 hanno `gratis: true`, le altre `gratis: false`.
4. Correggi direttamente ogni errore trovato con modifiche minime (il numero sbagliato, il passaggio sbagliato e la sua spiegazione, l'ipotesi mancante), mantenendo lo stile del file (italiano da manuale, deduzioni con connettivo esplicito, frazioni in colonna). Se un esercizio è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo.

## Rapporto (breve, in italiano)
Per ogni argomento: numero di esercizi e tracce verificati con sympy, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), eventuali dubbi non risolti.
