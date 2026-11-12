# Verificare un argomento di "University Physics I · Mechanics"

Repository: `/home/claude/sito-analisi`. Sei il **secondo lettore** di un argomento già scritto da un altro autore. Il tuo compito è trovare e correggere gli errori, non riscrivere.

Non usare git, non lanciare la build, non toccare file fuori dalle tre cartelle del tuo argomento. Altri verificatori lavorano in parallelo sugli altri argomenti.

I file del tuo argomento (slug fornito nel messaggio):
- `src/content-us/teoria/physics-1-mechanics/<slug>.md`
- `src/content-us/svolti/physics-1-mechanics/<slug>/1.md … 7.md`
- `src/content-us/dafare/physics-1-mechanics/<slug>/1.md … 13.md`

## Prima di cominciare
Leggi `istruzioni-agenti/brief-usa-physics-1.md` (la norma con cui sono stati scritti), `GUIDA-CONTENUTI.md` e il capitolo modello `src/content-us/teoria/physics-1-mechanics/units-measurement-and-vectors.md`.

## 1. Fisica e conti (la parte più importante)
Risolvi **da zero**, senza fidarti di quanto è scritto, ogni esempio numerico della teoria, ogni esercizio delle 7 schede e ogni soluzione delle 13 tracce. Lavora in una cartella tua nello scratchpad, mai nel repository, con `python3` e sympy (`pip install --break-system-packages sympy` se manca): prima la formula simbolica, poi il valore numerico.

Controlla in particolare:
- il risultato numerico e il suo arrotondamento (2-3 cifre significative coerenti con i dati);
- **le unità di misura**, su ogni risultato e in ogni passaggio intermedio dove compaiono;
- l'omogeneità dimensionale delle formule finali;
- segni e versi (componenti lungo gli assi scelti, verso delle reazioni, delle forze d'attrito e dei momenti);
- $g = 9.81\,\mathrm{m/s^2}$ salvo dichiarazione diversa nel testo dell'esercizio;
- che le **ipotesi fisiche** siano dichiarate dove servono (massless inextensible string, frictionless pulley, negligible air resistance, rigid body, ideal fluid, small oscillations);
- che gli enunciati dei teoremi abbiano ipotesi complete e che le dimostrazioni siano corrette e chiuse;
- che i dati siano fisicamente sensati (masse, velocità, lunghezze, pressioni realistiche);
- che nessun esercizio sia il doppione di un altro, nella stessa scheda o fra schede e tracce.

Correggi ciò che è sbagliato. Se un esercizio è irrecuperabile, riscrivilo con dati nuovi mantenendo la tipologia della scheda.

## 2. Lingua e stile
Rileggi ogni file contro le regole del brief:
- inglese da manuale universitario, deduzioni complete con connettivi espliciti (since, hence, therefore, it follows that); i due punti non reggono un passaggio logico;
- niente frasi "da IA" (Imagine, In summary, Remember, crucial, "it's not X but Y"), niente domande retoriche, niente lineette lunghe, niente "we" e "you";
- **punto decimale**, mai la virgola; **frazioni sempre in colonna** con `\dfrac`, anche negli esponenti; l'unica barra ammessa sta dentro i simboli di unità;
- unità in `\mathrm` con spazio sottile `\,`;
- niente "the parenthesis": l'espressione si nomina;
- dopo ogni definizione e ogni teorema ci deve essere a che cosa serve, con un esempio o il rimando al capitolo dove si userà;
- nelle schede: il calcolo sopra e `<div class="spiegazione">` sotto, a tutta pagina; i passaggi devono essere espliciti, leggibili senza rifare i conti;
- niente prosa fuori dai blocchi, salvo al massimo una riga di ponte sotto un titolo `##`;
- niente etichette di difficoltà ("a hard problem", "tricky").

## 3. Struttura e formato
- `::::teorema` con quattro due punti quando contiene `:::dimostrazione`; blocchi bilanciati; dollari pari.
- Ogni ancora citata nei campi `teoria:` di schede e tracce esiste davvero nel file di teoria; segnala anche le ancore della teoria che nessuno cita.
- `gratis: true` solo sulle schede 1, 2 e 3.
- `parole:` da 3 a 6 voci in inglese per ogni scheda e traccia.
- `python3 strumenti/yamlcheck.py <file…>` deve dare 0 errori.
- I confini dell'argomento: ciò che appartiene a un altro capitolo del programma dev'essere solo richiamato in una riga, non rifatto.

## 4. Figure
`node strumenti/anteprima_figure.mjs <png> <file…>` dalla radice del repository, poi **guarda il PNG**. Controlla che: gli assi cartesiani siano orientati con frecce e lettere; i numeri degli assi siano coerenti con il testo; le etichette non si sovrappongano né escano dal riquadro; le didascalie siano in inglese con le frazioni in colonna; ogni figura citata nel testo esista. Correggi e ridisegna finché il PNG è leggibile.

## Consegna
Un rapporto breve in italiano con: l'elenco degli errori trovati e come li hai corretti (numero per numero per i conti sbagliati); che cosa hai verificato e con quale strumento; l'esito dei controlli su ancore, frontmatter e figure. Se non hai trovato errori in una delle quattro aree, dillo esplicitamente.
