# Chiavi di correzione degli esercizi da fare

Repository: `/home/claude/sito-analisi`. Non modificare i file dei contenuti: produci solo i file di lavoro indicati sotto.

## Che cosa serve

Negli esercizi da fare lo studente scrive i risultati e il sito gli dice subito se sono giusti. Quando la soluzione è un solo numero o una sola funzione di $x$ il sito lo capisce da solo. Per tutti gli altri esercizi serve una **chiave di correzione**: l'elenco delle caselle che lo studente compila, con il risultato giusto di ciascuna. Il tuo compito è scrivere la chiave di ogni esercizio degli argomenti assegnati che ancora non ha la verifica.

Per vedere gli esercizi da coprire, con traccia e soluzione:

```
node strumenti/chiavi-elenco.mjs <materia> <argomento>
```

Scrivi le chiavi nel file di lavoro `/home/claude/chiavi-lavoro/<materia>__<argomento>.json` (crea la cartella se manca):

```json
{
  "profili-e-risalto/3": { "campi": [
    { "e": "$h_c$", "t": "numero", "v": "0{,}528", "u": "m" },
    { "e": "$h_0$", "t": "numero", "v": "1{,}145", "u": "m" },
    { "e": "Pendenza dell'alveo", "t": "scelta", "opzioni": ["debole", "forte"], "v": "debole" },
    { "e": "Profilo a valle della paratoia", "t": "scelta", "opzioni": ["M1", "M2", "M3", "S1", "S2", "S3"], "v": "M3" },
    { "e": "Il risalto è", "t": "scelta", "opzioni": ["contro la paratoia", "allontanato"], "v": "allontanato" }
  ]}
}
```

La chiave dell'esercizio è `"<argomento>/<numero>"`, come la stampa `chiavi-elenco.mjs`.

## Le caselle

Ogni casella ha un'etichetta `e` (testo breve; le formule fra `$…$`, come nel sito) e un tipo `t`.

| Tipo | Campi | Che cosa scrive lo studente |
|---|---|---|
| `numero` | `v` (LaTeX), `u` unità facoltativa, `esatto: true` facoltativo | un numero: `3/2`, `sqrt(2)`, `0,528` |
| `funzione` | `v` (LaTeX), `var` (es. `["x"]`, `["t"]`, `["x","y"]`), `primitiva: true` se è una primitiva | un'espressione nelle variabili indicate |
| `equazione` | `v` con un solo `=` (es. `"y = 2x - 1"`), `var` | un'equazione; vale anche se moltiplicata per una costante |
| `valori` | `v` lista di LaTeX, `ordine: true` per punti, vettori, coppie ordinate; senza `ordine` per un insieme di soluzioni | `2; -3` oppure `(1; 2)` |
| `intervallo` | `v` in LaTeX: `(-\infty, 1) \cup [3, +\infty)`, `x \neq 2`, `\mathbb{R}`, `\emptyset`, `\{2\}`; `var` se la variabile non è $x$ | `x < 1 o x >= 3`, `(-inf; 1) U [3; +inf)` |
| `matrice` | `v` lista di righe, ogni riga lista di LaTeX | una casella per elemento |
| `scelta` | `opzioni` (testi, anche con `$…$`), `v` = il testo dell'opzione giusta | tocca una voce |

Regole per scegliere le caselle:

1. **Una casella per ogni richiesta della traccia**, nello stesso ordine. Se la traccia chiede tre cose, tre caselle. Al massimo 8 caselle: se la traccia chiede di più (studio di funzione completo), scegli i risultati principali (dominio, asintoti, punti di massimo e minimo, intervalli di crescenza…).
2. Ogni casella deve avere **una sola risposta giusta** che lo studente può scrivere senza ambiguità. Il valore viene dalla soluzione: copialo esattamente (stessa forma, stesso arrotondamento). Non ricalcolare a modo tuo; se ti accorgi di un errore nella soluzione, segnalalo (vedi in fondo) e scrivi la chiave con il valore corretto.
3. **Numeri arrotondati con unità** (fisica, ingegneria): `v` come nella soluzione e `u` con l'unità (`m`, `m/s^2`, `kN`, `kPa`, `m^3/s`): il sito accetta i valori che differiscono al massimo dell'1% o di mezza unità sull'ultima cifra. Nei valori esatti (frazioni, radici, $\pi$) scrivi il LaTeX esatto: lo studente può scrivere il valore esatto in qualunque forma equivalente. Senza unità e con poche cifre il sito vuole il valore esatto; se il risultato è un arrotondamento senza unità, aggiungi `"cifre": <numero di decimali>`.
4. **Classificazioni e conclusioni** («converge o diverge», «labile, isostatica o iperstatica», «massimo, minimo o sella», «vero o falso», «profilo M1…S3», «la serie converge assolutamente / semplicemente / non converge») diventano caselle `scelta`. Le opzioni sono le alternative che uno studente potrebbe davvero considerare, scritte in modo breve e parallelo; tra le opzioni ci deve essere anche quella che corrisponde all'errore più comune.
5. Più punti stazionari, più soluzioni, più autovalori: casella `valori` senza `ordine` (le soluzioni non hanno un ordine). Un punto $(x_0, y_0)$, un vettore, una terna: `valori` con `ordine: true`. Se servono più punti con la loro natura (es. «$(0,0)$ sella, $(1,1)$ minimo»), fai una casella `valori` con `ordine: true` per ogni punto e una `scelta` per la natura di ciascuno; l'etichetta deve far capire di quale punto si tratta senza dare la risposta (es. «Punto stazionario con $x > 0$»).
6. Funzioni di una variabile diversa da $x$ (soluzioni di equazioni differenziali in $t$, successioni in $n$): `funzione` con `var`. Costanti arbitrarie nelle soluzioni generali: chiedi invece la **soluzione del problema di Cauchy** se la traccia la chiede; se la traccia chiede solo l'integrale generale, usa una casella `scelta` sulla forma (es. opzioni con le tre forme possibili) oppure, se la soluzione lo permette, chiedi un dato univoco (le radici dell'equazione caratteristica come `valori`).
7. Rette, piani, circonferenze, coniche: `equazione` con le variabili giuste (`["x","y"]` o `["x","y","z"]`). Una retta nello spazio data con due equazioni: due caselle `equazione` non vanno bene (le coppie di piani sono infinite); usa un punto (`valori` ordinati) e la direzione come `scelta` o chiedi i parametri univoci che la traccia fissa.
8. Dimostrazioni e risposte a parole («spiegare perché», «dimostrare che»): la chiave controlla la **conclusione** verificabile (una `scelta`, un valore che compare nella dimostrazione). Se l'esercizio è una dimostrazione pura senza nessun risultato controllabile, non inventare caselle: mettilo nell'elenco `senza_chiave` (vedi sotto) con il motivo.
9. Le etichette **non devono contenere la risposta** e non devono suggerirla. Scrivile come nella traccia: «$h_c$», «$f'(x)$», «Dominio di $f$», «Punto di massimo», «Raggio di convergenza». Nelle etichette con le formule usa il LaTeX del sito (virgola decimale `{,}`, frazioni `\frac`).
10. Variabili nelle espressioni: solo lettere singole o nomi greci (`theta`, `omega`, `lambda`); niente pedici (`x_0`) dentro `v` delle caselle `funzione` ed `equazione`: se servono, sostituisci con il valore numerico o scegli un'altra casella.
11. Esercizi con `## Esercizio k` multipli dentro lo stesso file non esistono negli esercizi da fare: ogni file è un esercizio.

## Controllo (obbligatorio)

Dopo aver scritto il file:

```
node strumenti/chiavi-controlla.mjs <materia> /home/claude/chiavi-lavoro/<materia>__<argomento>.json
```

Lo strumento compila ogni chiave, simula lo studente che scrive i risultati giusti (deve risultare giusto) e uno che sbaglia una casella (non deve risultare giusto), e avvisa se un valore numerico non compare scritto così nella soluzione. Correggi **tutti gli errori**. Per ogni **avviso** controlla a mano: se il valore è giusto ma scritto in un'altra forma (per esempio $\frac{1}{2}$ invece di $0{,}5$) va bene; se è un errore, correggi.

Verifica anche, per ogni esercizio, che il numero di caselle corrisponda alle richieste della traccia e che i valori siano quelli della soluzione. Per i conti ripresi dalla soluzione non serve rifarli; se un valore ti sembra sbagliato, ricalcolalo con sympy (`python3 -c "import sympy …"`).

## Che cosa restituire

Alla fine scrivi nel file `/home/claude/chiavi-lavoro/<materia>__<argomento>.note.md`:

- il numero di esercizi coperti;
- `senza_chiave`: gli esercizi che non hai potuto coprire, con il motivo (una riga ciascuno);
- `errori_soluzione`: gli errori che hai trovato nelle soluzioni del sito (esercizio, che cosa c'è scritto, che cosa dovrebbe esserci, conto che lo dimostra).

Nella risposta finale riporta solo questi tre punti, in breve.

## Aggiornamenti dello strumento

- Le caselle `valori` ora tolgono le parentesi esterne solo se racchiudono tutta la risposta: frazioni e radici in fondo all'elenco si leggono bene. Scrivi i valori come nella soluzione (anche `\frac{2}{3}`).
- Gli intervalli con estremi infiniti ($\mathbb{R}$, $(-\infty, 1)$) ora si confrontano correttamente: usa pure la casella `intervallo`.
- La casella `matrice` contiene solo numeri; per matrici di funzioni usa una casella `funzione` per elemento. Le caselle `funzione` non conoscono l'unità immaginaria $i$.
- Valori arrotondati con unità: il sito ora calcola da solo la tolleranza dall'ultima cifra scritta (anche in notazione scientifica: $4{,}6 \cdot 10^{-4}$ accetta gli arrotondamenti della quarta cifra significativa), con un minimo dell'1%. Non serve più `cifre`, salvo casi particolari. Lo zero è sempre esatto.
- Lo studente può scrivere anche `1.6e-4`. Gli intervalli con variabile maiuscola (`var: "E"`) e le disuguaglianze doppie (`0 <= E <= 4`) si leggono.
- Insiemi: $\mathbb{R}\setminus\{a\}$ non si legge; scrivilo come unione di intervalli o con `x \neq a`.
- Ora si leggono anche: `\mathbb{R}\setminus\{a, b\}` nelle chiavi (e «R\{a;b}», «R-{a}» scritti dallo studente); casella `valori` con un solo valore (array di un elemento); migliaia con lo spazio scritte dallo studente («32 000»).
- Limiti infiniti: usa una casella `scelta` (+∞, −∞, 0, non esiste) invece di `numero`.
- Ora si leggono anche i logaritmi con base (`\log_5 4` nelle chiavi, `log_5(4)` dallo studente), le potenze di funzioni (`\cos^2 x`, `cos^2(x)`) e il simbolo ℓ scritto dallo studente (vale come `l`).
