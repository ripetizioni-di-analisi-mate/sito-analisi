# Calcolo differenziale in più variabili: primo giro

Riletti la teoria, le 7 schede svolte e le 14 tracce; derivate, gradienti, piani tangenti, hessiane e polinomi di Taylor ricalcolati (sympy per la traccia 4 e per lo sviluppo della traccia 14), figure ridisegnate.

## Modifiche fatte

- `teoria/analisi-2/calcolo-differenziale.md`, riferimenti alla struttura della pagina sostituiti con il nome del risultato (italiano e inglese). Editoriale, 3 punti:
  - avviso su $\dfrac{xy}{x^2 + y^2}$: "Per il teorema precedente" → "Poiché la differenziabilità implica la continuità";
  - esempio del piano tangente a $x^2 + y^2$: tolto "enunciato nella sezione seguente" dopo "teorema del differenziale totale";
  - riga sotto il titolo *Il teorema del differenziale totale*: "il teorema seguente" → "il teorema del differenziale totale".
- Teoria, figura di *Direzione di massima crescita* (italiano e inglese): l'etichetta $\nabla f$, messa d'ufficio a metà del vettore, cadeva sulla curva tratteggiata $xy = 4$; ora è un'etichetta libera accanto alla punta del vettore. Figure.
- `svolti/.../2.md`, esercizio 2 (italiano e inglese): "l'ipotesi *necessaria* non è soddisfatta" → "la condizione *necessaria* non è soddisfatta" (l'esistenza delle derivate parziali è una condizione necessaria della differenziabilità, non un'ipotesi). Lingua.
- `dafare/.../4.md` (italiano e inglese): la soluzione diceva "il limite della definizione, pari a $\dfrac{-xy^2}{(x^2+y^2)^{3/2}}$, lungo la retta $y = x$ vale $-\dfrac{1}{2\sqrt{2}}$", confondendo il rapporto con il suo limite e senza mostrare che il limite non è $0$. Ora: il rapporto vale costantemente $-\dfrac{1}{2\sqrt{2}}$ lungo $y = x$ con $x > 0$ e $0$ lungo l'asse $x$, quindi il limite non esiste. Valore ricontrollato con sympy. Matematica.

## Modifiche da fare

- Schede svolte: sono 7 invece di 10. Tipologie d'esame assenti: (a) differenziabilità con parametro, per esempio "per quali $\alpha$ la funzione $|x|^{\alpha}\, y$ è differenziabile nell'origine"; (b) derivate direzionali calcolate con la definizione in un punto in cui $f$ non è differenziabile, con il confronto fra il risultato e la formula del gradiente (la teoria ne parla nell'avviso su $\dfrac{x^2 y}{x^4 + y^2}$, ma nessun esercizio lo mostra); (c) derivate di funzioni composte del tipo $g(t) = f(t, t^2)$ con $f$ assegnata solo tramite il gradiente in più punti.
- Teoria, osservazione dopo il *Teorema del differenziale totale*: si afferma che "nessuna delle frecce si inverte, come mostrano i controesempi di questo capitolo", ma una funzione continua e non differenziabile compare solo nelle schede svolte (scheda 2). Proposta: aggiungere nell'osservazione l'esempio $\sqrt{x^2 + y^2}$, continuo e non differenziabile nell'origine.
- Notazione della norma: il capitolo scrive $|\mathbf{w}|$ e $|\nabla f|$, mentre *Funzioni di più variabili* introduce $\lVert \cdot \rVert$ e il capitolo sulle curve usa $\lVert \gamma'(t) \rVert$. Lo studente si chiede se siano due cose diverse. Proposta: uniformare a $\lVert \cdot \rVert$ in tutta la materia (teoria, schede e tracce).
- "Matrice hessiana" (minuscolo, qui) e "matrice Hessiana" (maiuscolo, in *Massimi e minimi*): da uniformare in tutta la materia.
- Teoria, *Formula di Taylor al secondo ordine*: manca la scrittura matriciale $\dfrac{1}{2}\,(h, k)\, H_f\, (h, k)^{T}$, che è quella usata implicitamente nel capitolo sui massimi e minimi quando si parla di "segno della forma quadratica". Proposta: una riga con la forma matriciale e il rimando.
