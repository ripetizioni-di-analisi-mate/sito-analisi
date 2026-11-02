# Brief: verifica di un formulario

Controlla il file `src/content/formulari/<MATERIA>.md` del sito ripetizionidianalisi.com (repository `/home/claude/sito-analisi`). Non l'hai scritto tu: leggilo da lettore critico, come un docente che corregge le bozze di un formulario universitario che sarà pubblicato gratis e scaricato da molti studenti. Un errore in una formula o un'ipotesi mancante è il difetto più grave.

## Che cosa controllare, blocco per blocco

1. **Correttezza di ogni formula.** Ricalcola con `python3` e `sympy` (`pip install --break-system-packages sympy` se manca) tutto ciò che si può: limiti notevoli, derivate, primitive (derivando la primitiva), sviluppi di Taylor (con `series`), somme di serie, formule goniometriche ed esponenziali (verifica simbolica o numerica in più punti), jacobiani dei cambi di variabile, coefficienti di Fourier, formule di geometria analitica. Ciò che sympy non controlla, controllalo con un esempio numerico o con il ragionamento.
2. **Ipotesi complete.** Ogni formula ha le condizioni di validità scritte (dominio, segni dei parametri, $a > 0$, $a \neq 1$, continuità, convergenza, insieme su cui vale). Aggiungi quelle mancanti; correggi quelle sbagliate o troppo forti/deboli.
3. **Terminologia.** Lessico tecnico corretto (ipotesi soddisfatta, teorema che si applica, «punto critico» solo per $f'=0$, ecc.); coerenza con le notazioni delle teorie in `src/content/teoria/<MATERIA>/`.
4. **Regole di scrittura** (vedi `GUIDA-CONTENUTI.md`, sezioni «Lingua e matematica» e «Grassetto e corsivo»): frazioni in colonna, mai `a/b`; virgola decimale `{,}`; graffa solo per condizioni simultanee o funzioni per casi; nessuna frase «da IA», nessun «Ricorda», nessuna lineetta lunga, niente «la parentesi»; connettivi espliciti, i due punti non sostituiscono un connettivo. `fondamentale` va bene solo nei nomi propri dei teoremi.
5. **Struttura**: frontmatter valido (`python3 strumenti/yamlcheck.py <file>`), ancore uniche, ogni `:::formula` chiuso da `:::`, i link `[...](/materia/argomento/teoria)` puntano ad argomenti esistenti in `src/data/materie.ts`.

## Come correggere

- Correggi **direttamente nel file**, con interventi puntuali (una formula, una riga di condizioni). Niente riscritture estese, niente blocchi nuovi salvo una formula d'esame davvero mancante.
- Non toccare altri file, non lanciare la build del sito, non fare commit.

## Resoconto finale (in italiano)

Elenco numerato delle correzioni fatte: titolo del blocco, che cosa era sbagliato, come l'hai corretto. Poi, a parte, eventuali dubbi che non hai risolto. Se non hai trovato errori in una sezione, non scriverlo: elenca solo ciò che hai cambiato o i dubbi.
