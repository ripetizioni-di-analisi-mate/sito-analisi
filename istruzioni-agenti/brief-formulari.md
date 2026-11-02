# Brief: formulario gratuito di una materia

Scrivi il formulario della materia `<MATERIA>` del sito ripetizionidianalisi.com. Repository: `/home/claude/sito-analisi` (radice). Il formulario è gratuito, si legge in una pagina del sito (indicizzata da Google) e si scarica in PDF. Serve allo studente che ripassa o svolge esercizi e vuole trovare in fretta una formula con le sue condizioni di validità.

## Prima di scrivere

1. Carica la skill `scrittura-umana-carmine` con lo strumento Skill e seguila.
2. Leggi `GUIDA-CONTENUTI.md` (sezione «Lingua e matematica» e «Grassetto e corsivo»).
3. Leggi tutte le teorie della materia in `src/content/teoria/<MATERIA>/*.md`: il formulario usa **le stesse notazioni** e **gli stessi nomi** dei teoremi e dei metodi che compaiono lì. L'elenco e l'ordine degli argomenti sono in `src/data/materie.ts` (voce `<MATERIA>`).

## File da produrre

Un solo file: `src/content/formulari/<MATERIA>.md`.

```
---
titolo: "Formulario di <nome della materia>"
sommario: "<una frase: che cosa contiene, nominando le famiglie di formule principali>"
descrizione: "<descrizione per Google, al massimo 155 caratteri, con le parole che uno studente cerca: formulario, PDF, i nomi delle formule principali>"
---
```

## Struttura

- Le sezioni `##` seguono **l'ordine degli argomenti della materia** (uno o più `##` per argomento, da 8 a 16 sezioni in tutto). Titoli brevi e cercabili («Limiti notevoli», «Sviluppi di McLaurin», «Integrali immediati»).
- Sotto ogni `##` una sola riga che rimanda al capitolo in cui le formule sono spiegate e dimostrate, con il link relativo alla teoria: «Le dimostrazioni e gli esempi sono nel capitolo [Limiti e continuità](/analisi-1/limiti/teoria).» Varia la frase tra le sezioni senza giri di parole.
- Poi i blocchi `:::formula`, uno per formula o per piccolo gruppo di formule dello stesso tipo:

```
:::formula{#limite-notevole-seno titolo="Limite notevole del seno"}
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$
Vale con $x$ misurato in radianti. Più in generale, se $f(x) \to 0$ per $x \to x_0$ e $f(x) \neq 0$ vicino a $x_0$, allora $\displaystyle\lim_{x \to x_0} \frac{\sin f(x)}{f(x)} = 1$.
:::
```

- Dentro il blocco: la formula (o le formule, in display, eventualmente in `\begin{aligned}`) e **sotto** una o due righe con le **ipotesi o condizioni di validità esplicite** (dominio, $a > 0$, $a \neq 1$, convergenza per $|x| < 1$, funzione continua su $[a, b]$, ecc.). Dove serve, una riga su quando si usa («si usa per le forme $\frac{0}{0}$ con funzioni goniometriche»). Niente dimostrazioni, niente esempi lunghi: il formulario rimanda alla teoria.
- Un `titolo` per blocco, breve e preciso: è l'etichetta della scheda. Le ancore `#…` sono in kebab-case, uniche nel file.
- Più formule della stessa famiglia stanno nello stesso blocco quando si consultano insieme (per esempio gli sviluppi di McLaurin di $e^x$, $\sin x$, $\cos x$ in un blocco; quelli di $\log(1+x)$ e $(1+x)^\alpha$ in un altro). Un blocco non supera le 6-8 righe di formule: il sito si legge da telefono.
- Le tabelle Markdown vanno usate solo per elenchi di valori (valori notevoli di seno e coseno, derivate fondamentali): due o tre colonne al massimo, formule brevi nelle celle.

## Contenuto: completo per l'esame

Il formulario copre **tutte le formule che servono agli esercizi della materia** come sono svolti sul sito. Per verificarlo, scorri anche le schede svolte (`src/content/svolti/<MATERIA>/`) e prendi nota delle formule che vi si usano. Da 70 a 140 blocchi in tutto.

## Regole di scrittura (obbligatorie)

- Frazioni **sempre** in colonna: `\frac` in display, `\dfrac` nel testo, anche negli esponenti (`e^{\frac{x}{2}}`). Mai `a/b` né `1/2` in linea.
- Virgola decimale `{,}` (scrivi `0{,}5`).
- Graffa (`\begin{cases}`) **solo** per condizioni da soddisfare insieme o per funzioni definite per casi. Mai per elencare formule.
- Condizioni scritte in italiano matematico corretto, con verbi tecnici («la formula vale per…», «l'ipotesi è soddisfatta se…»). Ogni deduzione con un connettivo esplicito; i due punti non sostituiscono un connettivo.
- Nominare le espressioni, mai «la parentesi».
- Vietati: frasi di riempimento, «Ricorda», «Attenzione!» fuori dai blocchi, «fondamentale», «cruciale», lineette lunghe, domande retoriche, tono prescrittivo, etichette di difficoltà, statistiche.
- Grassetto raro (al massimo uno per blocco, sul termine che si definisce o sulla condizione decisiva); corsivo per *solo se*, *ogni*, *almeno*.
- Le negazioni sono rare. Se una trappola frequente merita un avviso (per esempio $\log(a+b) \neq \log a + \log b$), usa un blocco `:::attenzione` con un controesempio numerico, al massimo uno ogni due o tre sezioni.

## Correttezza

Ogni formula deve essere giusta e con le ipotesi complete. Ricontrolla con `python3` e `sympy` (già installati o `pip install --break-system-packages sympy`) le formule verificabili: limiti notevoli, derivate, primitive, sviluppi in serie, somme di serie, coefficienti, formule goniometriche, cambiamenti di variabile con il loro jacobiano. Le formule che non si possono controllare con sympy le controlli con un esempio numerico.

## Controllo finale

- `python3 strumenti/yamlcheck.py src/content/formulari/<MATERIA>.md`
- Rileggi ogni riga di testo: un docente la scriverebbe così in un formulario universitario?
- Consegna nella risposta finale: numero di sezioni e di blocchi, l'elenco dei titoli `##`, e le formule che hai deciso di **non** includere con il motivo (se ce ne sono).
