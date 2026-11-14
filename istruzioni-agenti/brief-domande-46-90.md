# Domande a tempo 46–90 di Meccanica razionale e Idraulica (nessuna ripetizione)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Scrivi **solo** file nuovi `46.md` … `90.md` nella cartella delle domande del tuo argomento:
- Meccanica razionale: `src/content/domande/meccanica-razionale/<argomento>/` **e** la traduzione inglese con lo stesso numero in `src/content-en/domande/meccanica-razionale/<argomento>/` (la materia ha la versione inglese completa).
- Idraulica: solo `src/content/domande/idraulica/<argomento>/` (l'inglese di Idraulica non esiste ancora: non scrivere in `src/content-en/`).

Non modificare i file 1–45, salvo quanto detto sotto sulle posizioni.

## Perché
Carmine vuole 90 domande per capitolo **senza che siano ripetitive**. Le domande 46–90 di Statica e Fisica 1 sono state fatte a famiglie di varianti numeriche («si cambia il valore di picco… quanto vale la variazione?»): **questo è esattamente ciò che non va fatto qui**. Ogni domanda nuova deve chiedere qualcosa che lo studente non ha già fatto nelle altre 89.

## Prima di scrivere
1. Leggi per intero `istruzioni-agenti/brief-domande.md`, `istruzioni-agenti/brief-domande-aggiuntive.md` e il brief delle domande della materia (`istruzioni-agenti/brief-domande-meccanica-razionale.md` oppure `istruzioni-agenti/brief-domande-idraulica.md`): formato, regole delle risposte, errori tipici da usare come risposte sbagliate, figure, controlli. Valgono tutti, con le differenze scritte qui.
2. Leggi `GUIDA-CONTENUTI.md`, il brief della materia (`istruzioni-agenti/brief-meccanica-razionale.md` oppure `istruzioni-agenti/brief-idraulica.md`: notazioni e convenzioni) e carica la skill **scrittura-umana-carmine** con lo strumento Skill.
3. Leggi la teoria dell'argomento (tutte le sezioni `##`), le schede svolte, le tracce con le soluzioni e **tutte le 45 domande esistenti**.

## Piano anti-ripetizione (obbligatorio, prima di scrivere le domande)
Lavora in `/tmp/lavoro-domande/<materia>-<argomento>-90/`. Scrivi `piano.md` con:
1. **Catalogo delle 45 esistenti**: per ognuna una riga «n · sezione della teoria · abilità richiesta · sistema/situazione fisica · che cosa si chiede».
2. **Piano delle 45 nuove**: per ognuna la stessa riga. Regole:
   - nessuna coppia (abilità, situazione) già presente nel catalogo né ripetuta nel piano;
   - **vietato** prendere una domanda esistente e cambiarne i numeri, invertirne la formula (dato ↔ incognita sullo stesso sistema), chiedere «la variazione», «il rapporto» o «di quanto cambia» fra due configurazioni dello stesso sistema già usato. Una domanda su un rapporto o una proporzionalità è ammessa solo se è l'unica di quel tipo nel capitolo e su un sistema nuovo;
   - vietati gli schemi a stampo: due domande nuove non possono avere lo stesso testo con parole o numeri diversi;
   - varia i sistemi (Meccanica razionale: asta, disco, anello, lamina quadrata o triangolare, guida circolare, molla, punto su guida, carrello con pendolo, sistema articolato, corpo che rotola su piano inclinato…; Idraulica: serbatoi, paratoie piane e curve, sifoni, venturimetri, tubi di Pitot, ugelli, curve e diramazioni di condotte, pompe e turbine, luci a battente e a stramazzo, canali rettangolari e trapezi, soglie, risalti…), le grandezze richieste e il tipo di risposta (valore con unità, espressione simbolica, verso, affermazione vera, confronto qualitativo, scelta della figura o della configurazione giusta);
   - coprire **tutte** le sezioni della teoria, privilegiando quelle con meno domande fra le 45 esistenti; circa due terzi di calcolo e un terzo di teoria applicata a un caso preciso (mai definizioni da recitare);
   - almeno 8 domande nuove su situazioni che nelle 45 esistenti e nelle tracce **non compaiono affatto** (un caso classico d'esame mancante, un caso limite, un'applicazione tecnica concreta);
   - difficoltà mista: circa 15 semplici (un passaggio), 20 medie, 10 più impegnative ma sempre risolvibili in due minuti con carta e penna.
Solo dopo il piano scrivi i file.

## Che cosa scrivere
- File `46.md` … `90.md`: ogni file ha il testo completo della domanda prima dell'elenco (non c'è una traccia corrispondente), autosufficiente, senza rimandi ad altre domande o alla pagina. Figure `::struttura` (Meccanica razionale) o `::schema` (Idraulica) dove aiutano, con solo i dati.
- Spiegazione nello stile del sito: deduzioni complete con connettivi, frazioni in colonna, virgola decimale `{,}`, nessun rimando alla posizione delle risposte.
- **Posizioni della risposta corretta su tutte le 90**: alla fine ogni posizione 1, 2, 3, 4 deve essere corretta fra 20 e 25 volte. Se serve, scegli la posizione delle nuove per riequilibrare; non toccare le 1–45.
- Meccanica razionale: per ogni file nuovo scrivi l'inglese secondo `istruzioni-agenti/brief-traduzione-domande.md` (stessa `corretta`, stesse risposte nello stesso ordine, `## Explanation`, etichette delle figure tradotte come dice `istruzioni-agenti/brief-traduzione.md`), con i termini della teoria inglese `src/content-en/teoria/meccanica-razionale/<argomento>.md`.

## Controllo (obbligatorio)
- Ricalcola con Python e sympy ogni risposta corretta e verifica che le tre sbagliate siano diverse (anche numericamente, almeno del 10% per i valori numerici) e non difendibili. Per le domande di teoria scrivi il ragionamento nel file di lavoro.
- Figure: `node strumenti/anteprima_figure.mjs /tmp/lavoro-domande/<materia>-<argomento>-90/figure.png <file nuovi con figura…>` dalla radice del repository, 0 problemi, e guarda il PNG.
- `python3 strumenti/yamlcheck.py <file nuovi…>` senza errori; `node strumenti/verifica-domande.mjs` non serve.
- Rileggi il piano e i 45 file nuovi uno accanto all'altro: se due domande si somigliano, riscrivine una.

## Rapporto (breve, in italiano)
File scritti (italiano e, per Meccanica razionale, inglese), divisione delle 46–90 fra le sezioni della teoria, quante di calcolo e quante di teoria, quante con figura, quali situazioni nuove hai introdotto (elenco breve), conteggio finale delle posizioni 1-2-3-4 sulle 90, conferma di sympy, figure e yamlcheck.
