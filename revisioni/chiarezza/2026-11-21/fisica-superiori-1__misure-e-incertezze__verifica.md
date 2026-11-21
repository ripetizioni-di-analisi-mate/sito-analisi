# Verifica · Fisica 1° anno · Misure, strumenti e incertezze

**Controllo finale** (`python3 strumenti/controlla_capitolo.py fisica-superiori-1 misure-e-incertezze`): nessun ERRORE. Resta l'avviso sulle «6 forme americane», che sono le 6 occorrenze di *force meter* (nome del dinamometro già usato nel file inglese esistente e nelle schede): falso allarme.

## Conti rifatti

Rifatti con Python e sympy tutti i conti del capitolo, 27 gruppi: divisione della scala (0,5 N, metà divisione 0,25 N), righello con offset (4,6 cm), medie e semidispersioni (10,0 e 0,2 cm; 10, 11 e 3 cm; [7;13]), conversione 0,05 cm = 0,5 mm, serie 3-4-5-10 mm (centro 6,5, raggio 3,5, media 5,5, distanze 4,5 e 2,5), medie delle serie A e B (8 e 12 g, aumento 4 g, mediana 5 g), intervalli A e B, margini 1 e 3 mm, incertezza relativa 0,02 e passaggio inverso, 10% e 1%, esempi di somma e differenza (17,0 ± 0,3 e 7,0 ± 0,3 cm), termine trascurato 0,0006, quadrato (81, 121, 20%, 80-120, 100+20+1), densità (4,36 e 5,78 g/cm³, scarti 0,64 e 0,78, stima 14% e 0,70, intervallo 4,30-5,70), vincolo (identità $25-(a-5)^2=a(10-a)$ verificata con sympy, 24 e 36 cm²), arrotondamenti (12,3; 12,4; 12,5; 0,23 → 0,3), copertura (3,37, 0,20, 0,23, 0,17, [3,1;3,7]), bilancia (media 105,0 g, semidispersione 0,1 g, scarto 5,0 g), taratura (sistema risolto con sympy: $a=1{,}02$, $b=1$ g, $m=100$ g, scarti 2 e 4 g, 152 g). **Nessun conto sbagliato.** Coordinate delle figure coerenti con il testo (punti A e B, mezzeria, raggi 0,2 e 0,3 cm, retta dello scarto).

## Contenuti dell'originale

Confronto blocco per blocco: tutte le regole, i casi e le precisazioni dell'originale sono presenti nel blocco con ancora in cui stavano; dati numerici degli esempi invariati; 10 righe `::grafico` identiche e al loro posto. Nulla da rimettere. Il punto segnalato dall'autore («La scelta del centro dipende dalla domanda») è reso dall'apertura di `#intervallo-osservato` («…a seconda della domanda»): accettato.

## Correzioni fatte (italiano e inglese insieme)

- **Copertura degli esercizi**: la domanda 49 usa «errore assoluto», mai nominato in teoria. In `#intervalli`: «incertezza assoluta, detta anche errore assoluto».
- **Precisione di contenuto**: in `#errori` lo scarto sistematico «si ripete uguale a ogni lettura» contraddiceva l'esempio della taratura, dove lo scarto cambia con la massa. Ora: «…a ogni lettura dello stesso oggetto».
- **Alleggerimento** (frasi che ripetevano un calcolo, una tabella o un titolo, oppure di raccordo): tolte la verifica doppia «Con la misura (50 ± 1) mm l'intervallo è [49;51]…», «Un millimetro è un decimo della prima lunghezza…», «I due scarti sono diversi, quindi l'intervallo esatto è asimmetrico…» (lo dice il titolo dell'esempio), «Per valutare un'incertezza la si confronta con il valore misurato» (ripeteva la frase precedente), «Si confrontano gli estremi della misura con quelli della specifica», l'elenco dei valori della figura delle serie A e B già scritti nella tabella (ora «La figura riporta le due serie»), «L'intervallo va da 11,8 a 12,2 cm» (già nella riga di calcolo sopra); nella scelta del dinamometro la frase che ripeteva i dati della tabella è stata accorciata.

Termini e simboli: letto il capitolo dall'inizio annotando la prima comparsa di ogni termine e sigla (grandezza, lettura, scala, tacca, indice, quadrante, portata, divisione, risoluzione, incertezza, protocollo, offset, intervallo, raggio, pedice, $\bar x$, $\pm$, $\Delta x$, $\geq$, $\varepsilon$, $\%$, adimensionale, $\simeq$, $\lvert n\rvert$, $\rho$, nominale, prudenziale, vincolo, arrotondare, parità, copertura, scarto, campione, taratura, sensibilità, parallasse; unità cm, mm, N, s, g, cm², cm³): tutti definiti alla prima comparsa. Voce: nessun «può/possono», «permette», «tu», lineette lunghe, tono prescrittivo; frazioni in colonna.

## Inglese

Traduzione completa e fedele del testo italiano finale: stessi 25 blocchi, stesse ancore e titoli, stesse formule con il punto decimale, grafia britannica (*centre*, *metre*, *analogue*). Le correzioni sopra sono state riportate identiche. L'unica differenza voluta è la glossa «parola inglese che significa scostamento» per *offset*, che in inglese non serve.

## Lunghezza

| | originale | autore | dopo la verifica |
| --- | ---: | ---: | ---: |
| Italiano | 2612 | 5110 (1,96) | 5042 (1,93) |
| Inglese | 2596 | 5182 (2,00) | 5105 (1,97) |

Mi sono fermato sotto 2,0 ma sopra 1,8. Il testo in più rispetto all'originale è fatto quasi solo di definizioni alla prima comparsa (una quarantina di termini, simboli e unità che l'originale usava senza spiegare), di passaggi di calcolo scritti uno per riga (l'originale dava i risultati) e delle righe che servono a schede e domande (parallasse, passo, quadrante, max e min, sensibilità e offset, precisione). Per scendere a 1,8 bisognerebbe togliere circa 340 parole fra queste, cosa che la nota del coordinatore esclude. Se Carmine vuole un testo più corto, il punto più sacrificabile è la dimostrazione della propagazione divisa in cinque passi (circa 250 parole), che però è contenuto dell'originale riscritto per esteso.

## Dubbi rimasti

- La frase «Fra due misure si dice più precisa quella con l'incertezza relativa minore» (aggiunta dall'autore per la scheda 7, «Taratura, precisione e compatibilità») è corretta nell'uso delle superiori; la lascio.
- In `#criterio-lettura` «Se il costruttore dichiara un'incertezza di 0,03 s, l'incertezza della lettura è 0,03 s» presuppone che il protocollo usi il dato del costruttore (terza regola dell'elenco subito sopra); coerente con la domanda sul cronometro.
- Non ho guardato la resa grafica delle figure (righe invariate).
