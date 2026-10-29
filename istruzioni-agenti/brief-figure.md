# Aggiungere illustrazioni dove aiutano davvero la comprensione

Repository: /home/claude/sito-analisi1 (sito di teoria ed esercizi di matematica universitaria, in italiano).
Non usare git, non lanciare la build. Modifica SOLO i file dei tuoi argomenti.

## Obiettivo
Rileggi la teoria e le schede di esercizi svolti dei tuoi argomenti e inserisci figure dove un disegno rende immediato ciò che il testo spiega: una figura per ogni concetto che lo studente "vede" (un'operazione tra insiemi, un'area, una retta tangente, un dominio nel piano, una conica, un vettore, un numero complesso nel piano di Gauss, il segno di una funzione, una famiglia di grafici). Non aggiungere figure decorative o ripetitive. Indicativamente: 4–10 figure per pagina di teoria, 0–2 per scheda svolta (quando l'esercizio riguarda un dominio, un'area, un grafico, una regione).
Non cambiare il testo esistente, salvo al massimo mezza frase che rimandi alla figura subito sotto se serve ("come mostra il grafico"). Le figure si inseriscono su una riga a sé, preceduta e seguita da una riga vuota, dentro il blocco a cui si riferiscono (prima della riga `:::` di chiusura) oppure subito dopo il calcolo nelle schede svolte (prima di `<div class="spiegazione">`).

## Strumenti disponibili (direttive a riga singola)

### Grafici nel piano cartesiano
`::grafico{f="x^2" xmin=-3 xmax=3 ymin=-1 ymax=9 titolo="…"}` — assi orientati con frecce, tacche intere. Attributi:
- `f="x^2;2*x-1"` una o più funzioni separate da `;` (la prima nel colore della materia, la seconda grigia tratteggiata, la terza rossa). Sintassi JavaScript/Math: `sin cos tan exp log sqrt abs atan cbrt`, `^` per le potenze, `pi`, moltiplicazione esplicita `2*x`.
- `curve="2*cos(t),sin(t),0,6.29"` curve parametriche x(t), y(t), tmin, tmax (circonferenze, ellissi, rami di iperbole, curve del piano); più curve separate da `;`.
- `area="x^2;0;0;2"` regione colorata tra y = sopra e y = sotto per a ≤ x ≤ b; più regioni separate da `|`.
- `punti="1,2;3,0,vuoto;2,4,pieno,P"` punti (pieno o vuoto) con etichetta facoltativa.
- `vettori="0,0,2,1,u;0,0,1,3,v"` frecce da (x0,y0) a (x1,y1) con etichetta.
- `segmenti="1,0,1,2"` segmenti tratteggiati (proiezioni, distanze, quote).
- `etichette="2,3.5,y = x²"` testi in posizione (x, y); usa caratteri Unicode (², √, π, ≤, ∞, ·), niente LaTeX.
- `asintoti="x=0;y=1"`, `uguale=1` (stessa scala sui due assi: obbligatoria per circonferenze, angoli, vettori, piano di Gauss), `nomi="Re,Im"` (nomi degli assi).
- Schemi fisici (novità): `assi=0` toglie gli assi cartesiani (piani inclinati, recipienti, corpi con le forze); `linee="0,0 4,0 4,3;…"` spezzate a tratto pieno (contorni, pavimenti, pareti, fili), punti "x,y" separati da spazi e spezzate separate da `;`; `poligoni="0,0 6,0 6,3.46;…"` regioni chiuse colorate (il piano inclinato, un liquido, un corpo); `riferimento="x0,y0,30,1.3,x′,y′"` piccolo sistema di assi orientati con origine (x0,y0), ruotato di 30° e lungo 1,3 unità, con i nomi (per scomporre le forze lungo un piano inclinato). Con `assi=0` usa sempre `uguale=1`, così gli angoli sono veri. Per gli schemi usa questi attributi al posto di curve parametriche costruite ad arte.
- `unicolore=1`: tutti i vettori nello stesso colore (linee di campo, campi uniformi); senza, i vettori alternano tre colori.
- `titolo="…"` didascalia, sempre presente: testo con formule fra dollari, rese come nel resto della pagina. Le frazioni vanno SEMPRE in colonna con `$\dfrac{a}{b}$` (mai `a/b` né decimali al posto di una frazione), così come radici ed esponenti (`$\sqrt{3}$`, `$x^2$`). Esempio: `titolo="Soluzioni di $\sin x = \dfrac{1}{2}$ in $[0, 2\pi]$"`. Nelle `etichette` dentro il disegno restano solo caratteri Unicode semplici, senza frazioni.

### Diagrammi di Venn
`::venn{zone="ab" titolo="Intersezione A ∩ B"}` — attributi:
- `tipo`: `due` (predefinito), `tre`, `incluso` (B ⊆ A), `disgiunti`.
- `zone`: zone colorate separate da virgole; ogni zona è l'insieme delle lettere a cui appartiene: `a` solo A, `ab` A e B, `abc` tutti e tre, `u` fuori da tutti. Unione `a,ab,b`; intersezione `ab`; differenza A \ B `a`; differenza simmetrica `a,b`; complementare di A `b,u`; A ∩ (B ∪ C) `ab,ac,abc`.
- `elementi="a:1,2;ab:3;b:4,5;u:6"` elementi scritti nelle zone; `nomi="A,B,C"`; `universo=1`; `titolo`.

## Controllo obbligatorio (ogni figura va vista)
1. Prima di inserire una figura, verifica i numeri: punti che stanno davvero sulla curva, intersezioni, aree con gli estremi giusti, riquadro xmin/xmax/ymin/ymax che contiene la parte significativa (vertici, intersezioni, asintoti), coerenza con il testo e con i risultati dell'esercizio.
2. Dopo l'inserimento, dalla radice del repository disegna tutte le figure dei tuoi file:
   `node strumenti/anteprima_figure.mjs /tmp/lavoro/figure-<tuo-nome>.png <file1> <file2> …`
   e apri il PNG con il tool Read. Correggi ogni figura illeggibile, sproporzionata, tagliata o sbagliata, poi ridisegna. Lo script segnala anche curve vuote ed errori di sintassi: devono essere 0.
3. Non toccare le formule, il frontmatter, i titoli `##` e le direttive esistenti; non rompere il bilanciamento dei blocchi `:::`/`::::`.

## Rapporto (breve, in italiano)
Per ogni file: quante figure aggiunte e quali (una riga ciascuna). Conferma che lo script dà 0 problemi e che hai guardato il PNG.
