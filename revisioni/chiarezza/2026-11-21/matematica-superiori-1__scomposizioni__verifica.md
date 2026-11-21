# Verifica · Matematica 1° anno · Scomposizione dei polinomi

File: `src/content/teoria/matematica-superiori-1/scomposizioni.md` e `src/content-en/teoria/matematica-superiori-1/scomposizioni.md`.

Controllo finale (`strumenti/controlla_capitolo.py`): **ESITO: a posto**, nessun ERRORE, nessun AVVISO.

## Conti
Rifatti con sympy 40 conti: tutte le scomposizioni degli esempi, le aree delle figure, le tabelle di coppie e di segni, MCD e mcm dei monomi, mcm dal prodotto, i controlli per sostituzione, il caso numerico della dimostrazione di `#trinomio-generale` ($d=2$, $a_1=1$, $m_1=3$, $e=1$). **Nessun errore**, né nell'originale né nel testo dell'autore.

## Completezza
Confronto blocco per blocco con l'originale: ogni regola, caso ed eccezione è ancora nel blocco con ancora in cui stava; numeri degli esempi invariati; righe delle figure identiche. Nulla da rimettere. Unica sfumatura persa senza conseguenze: «monomi non nulli» in `#comune` è diventato «addendi».

## «Completare il quadrato» (collocazione)
Lo chiede la domanda 18, che rimanda a `#completa`. Il blocco `#completa` è un esempio su $3x^3-3x$; tutte le altre domande che rimandano a `#completa` (36, 37, 40, 81-85) usano invece l'osservazione subito sotto ($x^4-16$, fattore $x^2+4\ge4$ privo di zeri reali). La collocazione dell'autore è quindi giusta per argomento, ma il paragrafo era in coda, dopo la frase conclusiva, come argomento a sé. Ora è legato al ragionamento: «Lo stesso controllo si applica a un trinomio con il termine di primo grado dopo averlo scritto come quadrato di un binomio più un numero. Questa operazione si chiama completare il quadrato…», con la conclusione «privo di zeri reali e di fattori lineari a coefficienti reali», e la frase sul punto in cui termina una scomposizione è tornata in fondo.

## Copertura degli esercizi
Aggiunta nella stessa osservazione la sostituzione $u=x^2$ (domanda 84): $x^4-5x^2+4\to u^2-5u+4=(u-1)(u-4)$, quindi $(x-1)(x+1)(x-2)(x+2)$. Il resto delle aggiunte dell'autore (monico, coprimi, doppio prodotto, zero semplice, $4x(-x-2)$, $x^2-12x+11$, $(x+11)(x-1)$) è corretto e collocato bene.

## Termini e voce
Controllati alla prima comparsa: monomio, coefficiente, polinomio, addendo, fattore, identità, MCD, valore assoluto, membri, binomio, prodotto notevole, basi, coniugati, trinomio, doppio prodotto, prodotti misti, grado, coefficiente principale, termine noto, monico, numeri reali, zero, parabola, coprimi, intervallo, regola dei segni, radice, mcm, fattori primi, sviluppare. Tutti definiti. Nessun «tu», nessun tono prescrittivo, niente «la parentesi». Ritocchi minori: «resta scritto fino al risultato» → «resta scritto nel risultato».

## Inglese
Traduzione completa e fedele; ogni modifica fatta in italiano è stata riportata nello stesso punto. Grafia americana come il file esistente.

## Lunghezza
| | Originale | Autore | Dopo la verifica |
|---|---:|---:|---:|
| Italiano | 2412 | 4714 (×1,95) | 4688 (×1,94) |
| Inglese | 2444 | 4872 (×1,99) | 4842 (×1,98) |

Tolte: verifiche doppie delle aree nelle figure ($24+18=42$, $20+12+10+6=48$, aree $24$ e $8$ dei due pezzi), i valori $P(-3)$, $P(0)$, $P(2)$ che ripetevano la tabella dei segni, la frase che ridiceva a parole il grafico di $(x-1)^2(x+2)$, un passo numerico doppio nella dimostrazione di `#trinomio-generale`, ripetizioni nell'avviso su $x^2-4x+9$. Aggiunte circa 70 parole (sostituzione $u=x^2$, raccordo del completamento del quadrato).

**Non sono sceso a ×1,8**: il testo in più rispetto all'originale è fatto quasi tutto di definizioni alla prima comparsa (una trentina di termini, il capitolo apre la materia), passaggi di calcolo e righe che servono a domande e schede. Per arrivare a ×1,8 (circa 350 parole in meno) bisognerebbe togliere definizioni o passaggi; mi sono fermato. L'inglese resta comunque sotto ×2,0.

## Dubbi rimasti
- La dimostrazione di `#trinomio-generale` resta impegnativa per un quattordicenne (usa senza dimostrarla la proprietà «un intero che divide un prodotto ed è coprimo con un fattore divide l'altro»).
- Grassetti oltre i 2-3 per blocco nei blocchi che aprono le sezioni, per i termini definiti.
