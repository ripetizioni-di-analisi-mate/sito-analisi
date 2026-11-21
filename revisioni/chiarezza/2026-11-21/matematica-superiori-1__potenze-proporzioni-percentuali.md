# Rapporto · matematica-superiori-1 / potenze-proporzioni-percentuali

Esito del controllo (`strumenti/controlla_capitolo.py`): **a posto**, nessun ERRORE e nessun AVVISO.

## Parole

- Italiano: 2394 → 4601 (×1,92).
- Inglese: 2387 → 4750 (×1,99).

L'aumento supera la fascia attesa (1,2-1,7) e resta sotto la soglia dell'avviso (2,0). Dopo la prima stesura (×2,02) sono state tolte le ripetizioni e gli esempi doppi. Ciò che resta in più sono definizioni dei termini, passaggi di calcolo scritti per esteso e le righe di copertura degli esercizi elencate sotto. Se si vuole scendere ancora, i primi candidati sono proprio quelle righe di copertura.

## Che cosa è cambiato

1. Ogni blocco parte da un caso con i numeri e poi dà la regola con le lettere: $2\cdot2\cdot2\cdot2=2^4$ prima di $a^n$; la tabella $2^1, 2^0, 2^{-1}, 2^{-2}$ prima di $a^0=1$ e $a^{-n}$; i quaderni da 3 euro prima di $y=kx$; il rettangolo di area 12 prima di $xy=k$; il prezzo di 200 euro prima di $Q(1+p/100)$.
2. Termini definiti alla prima comparsa: fattore, prodotto, potenza, base, esponente, intero positivo, pari e dispari, opposto, quoziente, semplificare, raccogliere, reciproco, valore assoluto, coefficiente, normalizzare, rapporto, proporzione, medi ed estremi, membro, incognita, dominio, grandezza, unità di misura, costante, prezzo unitario, origine, tariffa, quota fissa, costo medio, ora-macchina, percentuale, frequenza relativa, percentuale complementare, media aritmetica, quota, punti percentuali, variazione relativa, fattore di variazione, sconto, scala.
3. Simboli e unità detti a parole alla prima comparsa: $\ne$, $1\le c<10$, $a:b$ («a sta a b»), $\%$, $\lambda$ («lambda»), m, cm, km, h, km/h, m², cm², €.
4. Le quattro proprietà delle potenze sono in elenco, ciascuna con il suo esempio numerico e poi la formula; la dimostrazione conta i fattori caso per caso.
5. Calcoli scritti per esteso, un passaggio per riga: $(-2)^1,\dots,(-2)^4$; $2^4+2^5$ con il raccoglimento; $12\cdot10^6\to1{,}2\cdot10^7$; $8\cdot10^4=0{,}8\cdot10^5$ prima della somma; la proporzione $2:3=8:x$; la ripartizione di 60 euro; $50000\,\mathrm{cm}\to500\,\mathrm m\to0{,}5\,\mathrm{km}$; l'area in scala 1:200.
6. Tolte le frasi astratte o da manuale («Questa lettura permette di anticipare…», «L'intervallo imposto a $c$ rende unica la scrittura», «La scelta di $Q$ come denominatore determina entrambe le percentuali», «le trasformazioni sono reversibili», «il modello positivo»), sostituite con il fatto e il suo motivo.
7. Ogni figura ha accanto una frase che dice che cosa mostra. Frontmatter, titoli `##`, ancore, titoli dei blocchi con ancora e righe delle figure sono identici all'originale; i numeri degli esempi sono invariati.

## Com'era / Com'è ora (blocco `#esponenti-non-positivi`)

**Com'era**

> Per mantenere la regola del quoziente anche con esponenti interi, per $a\ne0$ si pone $a^0=1$ e $a^{-n}=\dfrac{1}{a^n}$ per $n$ intero positivo. Da una potenza alla successiva con esponente minore di una unità si divide per la base. Questa lettura permette di anticipare il valore e il segno prima del calcolo.

**Com'è ora**

> Le potenze di $2$ con esponente $3$, $2$ e $1$ valgono $8$, $4$ e $2$. Ogni volta che l'esponente diminuisce di uno, il valore si divide per la base $2$. Continuando a dividere per $2$ si assegna un valore anche agli esponenti $0$, $-1$ e $-2$.
>
> $$2^1=2,\qquad 2^0=1,\qquad 2^{-1}=\frac12,\qquad 2^{-2}=\frac14.$$
>
> Con le lettere, per una base $a\ne0$ e per $n$ intero positivo si pone
>
> $$a^0=1,\qquad a^{-n}=\frac{1}{a^n}.$$
>
> Il **reciproco** di un numero diverso da zero è $1$ diviso per quel numero. La potenza $a^{-n}$ è quindi il reciproco di $a^n$. Per esempio $3^{-2}=\dfrac{1}{3^2}=\dfrac19$.

Che cosa migliora: la regola arriva dopo quattro valori che lo studente calcola da solo; «reciproco» è definito prima di essere usato nell'esempio successivo; il motivo della definizione (dividere ogni volta per la base) è detto con i numeri e non con «mantenere la regola del quoziente».

## Errori trovati nell'originale

Nessuno. Tutti i numeri sono stati ricalcolati con Python (frazioni esatte).

## Aggiunte per coprire schede, esercizi e domande

- Medi ed estremi e la frase «il prodotto dei medi è uguale al prodotto degli estremi» (usata nelle spiegazioni delle domande), in `#rapporti`.
- Proporzione senza soluzioni $0:5=3:x$ e rapporto composto $A:B=2:3$, $B:C=3:7$ (domande), in `#rapporti`.
- Un rapporto resta uguale moltiplicando o dividendo i due termini per lo stesso numero (domanda sul rapporto $3:5$), in `#rapporti`.
- $\left(\dfrac ab\right)^{-n}=\left(\dfrac ba\right)^n$ e quoziente con esponente del numeratore minore, $\dfrac{3^2}{3^5}$ (domande, scheda 1), in `#esponenti-non-positivi`.
- Scrittura $2^{3^2}$ a confronto con $(2^3)^2$ (domanda), in `#potenze`.
- «Normalizzare» e il caso con esponente negativo $38\cdot10^{-7}$ (domande), nell'esempio sulla notazione scientifica.
- Prezzo unitario, costo medio, frequenza relativa, percentuale complementare, dominio (schede 3, 4, 5, 8 e domande).

## Dubbi rimasti

- Grafia inglese: il file di teoria esistente è in grafia americana (*meter*, *centimeter*, *normalize*, *traveled*) e l'ho mantenuta; le schede e le domande inglesi del capitolo sono miste, con prevalenza britannica (*metres*, *centimetres*). L'allineamento andrebbe deciso per l'intera materia.
- Il sommario cita gli «ordini di grandezza», ma il corpo del capitolo (anche nell'originale) non usa il termine. Non l'ho introdotto perché la definizione cambia da libro a libro; il blocco `#notazione` parla di «due potenze di dieci consecutive».
- Schede e domande usano anche «prezzo marginale», «produttività» e «flusso uniforme», che non ho aggiunto alla teoria perché compaiono una sola volta e sono spiegati nel contesto.
- Lunghezza: vedi sopra (×1,92 in italiano, ×1,99 in inglese).
