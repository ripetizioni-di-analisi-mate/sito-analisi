# Serie di Fourier: primo giro

Riletti la teoria, le 6 schede svolte e le 12 tracce; tutti i coefficienti (onda quadra, dente di sega, $|x|$, $x^2$, $|\sin x|$, $x^3 - \pi^2 x$, periodi $2$ e $4$) e le somme con Parseval ricalcolati con sympy (nessun errore numerico trovato).

## Modifiche fatte

- `svolti/analisi-2/serie-di-fourier/1.md` (e versione inglese), esercizio 3, traccia e spiegazione: la funzione era detta "definita su $[0, \pi)$" ma i casi la definivano solo per $0 < x < \pi$; ora "definita su $(0, \pi)$", coerente con i casi (il valore in $0$ è fissato dalla disparità e non incide sui coefficienti). Matematica.
- `teoria/analisi-2/serie-di-fourier.md`, titoli degli esempi: "Somma della serie di Σ 1/n²" e "di Σ 1/n⁴" → "Somma della serie Σ 1/n²", "Σ 1/n⁴". Lingua.
- Teoria, figure del dente di sega e dell'onda quadra (italiano e inglese): la legenda automatica riportava per esteso le somme parziali $s_{10}$ e $s_{15}$, su due righe al telefono, mentre la funzione stessa non compariva; ora la legenda è $y = f(x)$, $y = s_3(x)$, $y = s_{10}(x)$ (risp. $s_{15}$), coerente con la didascalia. Figure.
- Teoria, figura dell'esempio *Una funzione di periodo 2*, e `svolti/.../6.md`, esercizio 2, figura (italiano e inglese): la legenda automatica scriveva $\dfrac{4}{\pi\pi}$ al posto di $\dfrac{4}{\pi^2}$; ora la legenda è $y = f(x)$, $y = s_1(x)$, e la formula corretta resta nella didascalia. Figure.

## Modifiche da fare

- Manca una scheda (o un esercizio) su funzioni assegnate su un intervallo non simmetrico, per esempio $f(x) = x$ su $[0, 2\pi)$, tipologia frequente all'esame: lo studente deve usare la proprietà dell'integrale su un periodo (blocco *Funzione periodica*) per integrare su $[0, 2\pi]$ e riconoscere che il prolungamento non è né pari né dispari. Proposta: aggiungerlo alla scheda 3 come esercizio 4.
- Manca la tipologia "sviluppare in serie di soli coseni (o di soli seni) una funzione assegnata su $[0, \pi]$", cioè scegliere il prolungamento pari o dispari, per esempio $\sin x$ su $[0, \pi]$ in soli coseni. La scheda 1, esercizio 3, la sfiora ma con la disparità già imposta dal testo. Proposta: un esercizio in cui la scelta del prolungamento è parte della richiesta, con il confronto fra i due sviluppi.
- Scheda 4 e tracce 7-8: nessun esercizio chiede di disegnare la somma della serie su $\mathbb{R}$ (grafico della funzione con i valori medi nei salti), richiesta molto comune all'esame. Proposta: aggiungere questa domanda alla scheda 4, esercizio 1, che ha già la figura.
- Traccia 9: chiede la stessa somma $\sum \frac{(-1)^k}{2k+1} = \frac{\pi}{4}$ già ottenuta nella scheda 4, esercizio 2, e la stessa onda quadra della scheda 1, esercizio 1. Proposta: valutare l'onda quadra in $x = \dfrac{\pi}{4}$ o usare la funzione della scheda 1, esercizio 3, in $x = \dfrac{\pi}{4}$, per ottenere una serie nuova.
- Teoria, *Convergenza uniforme per funzioni continue e regolari a tratti*: l'attenzione successiva dice che con un salto la convergenza uniforme su $\mathbb{R}$ è impossibile, ma non dice che cosa succede su un intervallo chiuso che non contiene salti (convergenza uniforme sui compatti privi di discontinuità). Lo studente che trova all'esame "stabilire se la convergenza è uniforme su $\left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$" non ha un enunciato a cui appoggiarsi. Proposta: un'osservazione con l'enunciato e un rimando ai testi per la dimostrazione.
- Forma complessa della serie di Fourier ($c_n e^{inx}$): assente. Se il corso la prevede (in molti corsi di Analisi 2 per ingegneria compare), proposta: una sezione breve con il legame $c_n = \dfrac{a_n - i b_n}{2}$ e un esempio.
