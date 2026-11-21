# Segnalazioni su schede, esercizi e domande · Fisica 1° anno

Fonti: i 20 rapporti di `revisioni/chiarezza/2026-11-21/fisica-superiori-1__*` (autore e verifica, letti tutti). Le segnalazioni sui file fuori dalla teoria erano poche: quasi tutti i termini mancanti sono stati sistemati dentro la teoria. Ho aggiunto un controllo automatico su tutti i file della materia (ancore dei rimandi, frazioni in linea, «la parentesi», pedici in inglese, decimali lunghi).

## Correzioni (14 file italiani, 13 inglesi)

### Grandezze e unità
- `dafare/…/grandezze-e-unita/6.md` (IT, EN), «Grammi e chilogrammi»: `teoria: ["si"]` rimandava a un blocco dove i prefissi non ci sono ancora. Ora `teoria: ["prefissi"]`: il blocco contiene proprio $1\,\mathrm{kg}=1000\,\mathrm g$ e $700\,\mathrm g=0{,}7\,\mathrm{kg}$. Soluzione e chiave invariate.
- `domande/…/grandezze-e-unita/6.md` (IT, EN), stessa traccia: link `teoria#si` → `teoria#prefissi`.

### Proporzionalità e grafici
- `domande/…/proporzionalita-e-grafici/18.md` (IT, EN). Il rapporto citava la «domanda 10», ma la domanda è la 18. Chiede la correzione «previsto meno osservato», con il segno opposto al residuo definito in teoria («misurato meno previsto»). La spiegazione chiudeva con «Il residuo userebbe l'ordine opposto». Ora il legame con la teoria è scritto per esteso. Risposta e opzioni invariate.

### Equilibrio del punto
- `svolti/…/equilibrio-punto/5.md` (IT, EN), esercizio 2: $\lvert18\,\mathrm N-T\rvert\leq7\,\mathrm N$ non è spiegato in teoria, che dà i due estremi. Ora l'estremo superiore è calcolato come in teoria, $T_{\max}=(18+7)\,\mathrm N=25\,\mathrm N$, con l'intervallo $11\,\mathrm N\leq T\leq25\,\mathrm N$. Ho tolto anche la frase figurata «rendere la corda più tesa aiuta».
- `svolti/…/equilibrio-punto/6.md` (IT, EN): nella traccia $3/5$ → $\dfrac{3}{5}$.
- `domande/…/equilibrio-punto/7.md` e `13.md` (IT, EN): $3/5$ e $4/5$ → frazioni in colonna.

### Forze
- `domande/…/forze/40.md` (IT): «annulla la parentesi» → «annulla la differenza $L-11\,\mathrm{cm}$, e quindi la forza». L'inglese diceva già «makes the difference zero».
- `domande/…/forze/20.md` (IT, EN): $3/12$ e $6/12$ → frazioni in colonna.
- `domande/…/forze/26.md` (IT, EN): $(m_1/2)g_2$ → $\dfrac{m_1}{2}g_2$.

### Archimede e galleggiamento
- `domande/…/archimede-galleggiamento/27.md`, `63.md`, `81.md` (IT, EN): $30/15$, $18/2$, $32/4$, $9/8$, $4/12=1/3$ → frazioni in colonna.

### Misure e incertezze
- `svolti/…/misure-e-incertezze/7.md` (IT, EN): $7/200$ e $14/200$ → frazioni in colonna.

Ho ricalcolato con Python ogni valore che compare nei testi modificati (18 − 7 = 11, 18 + 7 = 25, 80 − 8·10 = 0, 11 − 10 = 1). Nessuna soluzione di `:::soluzione` è cambiata, quindi la chiave `src/data/chiavi/fisica-superiori-1.json` non è stata toccata.

## Segnalazioni non confermate (nessun errore nei file)
- Domande con «mg/mL» (Densità), «errore assoluto» (Misure, domanda 49), «parallasse» (domanda 76), «densità relativa» (Archimede, domanda 58), «parabola», «in parallelo», Hz, portata, Δ: i termini ora sono definiti in teoria, quindi non serve toccare le domande.
- «Zavorra» e «baricentro» (Archimede) compaiono solo in una traccia e in una risposta sbagliata: lasciati come ha deciso il verificatore.
- Vettori: le domande accennano all'angolo supplementare e al cardine di una barra, ma le loro spiegazioni bastano da sole.
- Il controllo automatico delle ancore ha dato 0 rimandi rotti in `teoria:` e nei link `[Teoria]` (IT ed EN, svolti, dafare e domande). Gli unici pedici «non italiani» sono $_{\mathrm{app}}$ e $_{\mathrm{tot}}$, abbreviazioni italiane. I decimali lunghi (0,000065 ecc.) sono risultati esatti di conversioni. I «≃» stanno davanti ad approssimazioni vere (incertezze al primo ordine, 1/24 ≃ 4,17 %).

## Lasciate al titolare
- Forze: alcune domande usano argomenti che la teoria non tratta. Sono le molle in serie (domanda 84), la pendenza con gli assi scambiati (m/N), l'attrito statico su un pianale che accelera e il blocco premuto contro una parete o un soffitto. Si può scegliere fra aggiungere contenuto alla teoria e riscrivere quelle domande.
- Proporzionalità e grafici: le lettere A e B dei recipienti sono diverse fra la figura dopo `#due-punti` e l'esempio `#confronti-modelli`. Uniformarle vuol dire cambiare la legenda di una figura della teoria.
- La traccia della domanda 18 resta all'imperativo («Indica la variazione con segno»), come molte tracce della materia. Non era segnalata e non l'ho toccata.

## Com'era / Com'è ora

1. `svolti/fisica-superiori-1/equilibrio-punto/5.md`, esercizio 2
   - Com'era: «L'intero intervallo si ottiene da $\lvert18\,\mathrm N-T\rvert\leq7\,\mathrm N$ e termina a $25\,\mathrm N$. Al limite superiore l'attrito agisce verso la discesa. Quindi rendere la corda più tesa aiuta soltanto finché il nuovo tiro resta nel campo ammesso.»
   - Com'è ora: «Al limite superiore l'attrito è diretto verso la discesa e la tensione equilibra la componente del peso più sette newton, quindi $T_{\max}=(18+7)\,\mathrm N=25\,\mathrm N$. La quiete è perciò possibile per $11\,\mathrm N\leq T\leq25\,\mathrm N$. Con una tensione maggiore di $25\,\mathrm N$ l'attrito statico non basta più e il blocco sale lungo la rampa.»

2. `domande/fisica-superiori-1/proporzionalita-e-grafici/18.md`
   - Com'era: «La correzione richiesta è previsto meno osservato, ossia $10-11=-1\,\mathrm N$. Il residuo userebbe l'ordine opposto.»
   - Com'è ora: «La correzione richiesta è previsto meno osservato, ossia $10-11=-1\,\mathrm N$. Il residuo, definito come valore misurato meno valore previsto, vale invece $11-10=1\,\mathrm N$, quindi la correzione richiesta è l'opposto del residuo.»

3. `domande/fisica-superiori-1/forze/40.md`
   - Com'era: «Una lunghezza di $11\,\mathrm{cm}$ annulla la parentesi qualunque sia il valore della rigidezza.»
   - Com'è ora: «Una lunghezza di $11\,\mathrm{cm}$ annulla la differenza $L-11\,\mathrm{cm}$, e quindi la forza, qualunque sia il valore della rigidezza.»

## Controlli eseguiti
- `python3 strumenti/yamlcheck.py` sui 27 file toccati: errori 0.
- `node strumenti/_rendi-tmp.mjs` sui 27 file (anche le domande): tutti «ok», senza errori KaTeX.
- Nessuna formula `$$` di chiusura seguita da `?` nelle domande toccate.
- Non ho eseguito la build del sito. Non ho lanciato `chiavi-controlla.mjs`, perché nessuna soluzione è cambiata.
